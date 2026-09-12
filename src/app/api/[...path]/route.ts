import { NextRequest, NextResponse } from 'next/server';

// Update the type signature to expect a Promise for params
async function proxyRequest(
  req: NextRequest, 
  context: { params: Promise<{ path: string[] }> }
) {
  // 1. Construct the secure backend URL using the hidden env variable
  const backendBaseUrl = process.env.BACKEND_API_URL;
  
  if (!backendBaseUrl) {
    return NextResponse.json({ error: 'Server misconfiguration: Backend URL missing' }, { status: 500 });
  }

  // 2. Await the params object (Required for Next.js 15+)
  const resolvedParams = await context.params;
  
  // Join the path array (e.g., ['research', 'history'] becomes 'research/history')
  const path = resolvedParams.path.join('/');
  const searchParams = req.nextUrl.searchParams.toString();
  const queryString = searchParams ? `?${searchParams}` : '';
  
  const targetUrl = `${backendBaseUrl}/${path}${queryString}`;

  // 3. Clone headers from the frontend request (this passes your JWT tokens forward)
  const headers = new Headers(req.headers);
  headers.delete('host'); // Remove host to prevent SSL/routing errors on Railway
  headers.delete('referer');

  try {
    // 4. Extract the body if it's a POST/PUT/PATCH request
    let body;
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      body = await req.text();
    }

    // 5. Forward the request to the Django backend
    const backendResponse = await fetch(targetUrl, {
      method: req.method,
      headers,
      body,
      redirect: 'manual',
    });

    const responseText = await backendResponse.text();

    // 6. Send the exact Django response back to the Next.js frontend
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