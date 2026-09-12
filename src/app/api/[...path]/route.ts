import { NextRequest, NextResponse } from 'next/server';

async function proxyRequest(req: NextRequest) {
  const backendBaseUrl = process.env.BACKEND_API_URL;
  
  if (!backendBaseUrl) {
    return NextResponse.json({ error: 'Server misconfiguration: Backend URL missing' }, { status: 500 });
  }

  let pathPart = req.nextUrl.pathname.replace(/^\/api/, '');

  if (!pathPart.endsWith('/')) {
    pathPart += '/';
  }
  
  const searchParams = req.nextUrl.searchParams.toString();
  const queryString = searchParams ? `?${searchParams}` : '';
  
  const baseUrlCleaned = backendBaseUrl.replace(/\/$/, '');
  
  const targetUrl = `${baseUrlCleaned}${pathPart}${queryString}`;

  const headers = new Headers(req.headers);
  headers.delete('host'); 
  headers.delete('referer');

  try {
    let body;
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      body = await req.text();
    }

    const backendResponse = await fetch(targetUrl, {
      method: req.method,
      headers,
      body,
      redirect: 'manual',
    });

    const responseText = await backendResponse.text();

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

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;