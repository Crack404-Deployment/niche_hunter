import { NextRequest, NextResponse } from 'next/server';

// We removed the 'context' parameter entirely, which fixes the Vercel build issues
async function proxyRequest(req: NextRequest) {
  const backendBaseUrl = process.env.BACKEND_API_URL;
  
  if (!backendBaseUrl) {
    return NextResponse.json({ error: 'Server misconfiguration: Backend URL missing' }, { status: 500 });
  }

  // 1. Get the exact path requested (This safely preserves the trailing slash for Django!)
  // Example: "/api/users/auth/google/" becomes "/users/auth/google/"
  const pathPart = req.nextUrl.pathname.replace(/^\/api/, '');
  
  const searchParams = req.nextUrl.searchParams.toString();
  const queryString = searchParams ? `?${searchParams}` : '';
  
  // Clean the backend URL just in case it has an accidental trailing slash in .env
  const baseUrlCleaned = backendBaseUrl.replace(/\/$/, '');
  
  // The final URL sent to Django
  const targetUrl = `${baseUrlCleaned}${pathPart}${queryString}`;

  // 2. Clone headers from the frontend request (passes JWT tokens forward)
  const headers = new Headers(req.headers);
  headers.delete('host'); // Remove host to prevent SSL/routing errors on Railway
  headers.delete('referer');

  try {
    // 3. Extract the body if it's a POST/PUT/PATCH request
    let body;
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      body = await req.text();
    }

    // 4. Forward the request to the Django backend
    const backendResponse = await fetch(targetUrl, {
      method: req.method,
      headers,
      body,
      redirect: 'manual', // Do not automatically follow redirects
    });

    const responseText = await backendResponse.text();

    // 5. Send the exact Django response back to the Next.js frontend
    return new NextResponse(responseText, {
      status: backendResponse.status,
      headers: {
        'Content-Type': backendResponse.headers.get('Content-Type') || 'application/json',
      },
    });
  } catch (error) {
    console.error('Proxy Error:', error);
    return NextResponse.json({ error: 'Failed to connect to the backend server.' }, { status: 502 });
  }
}

// Export the handler for all standard HTTP methods
export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;