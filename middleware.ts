import { NextRequest , NextResponse } from 'next/server';


export function  middleware(req: any, event: any) {

  console.log('running the middleware');
  let token = req.cookies.get('token');
  console.log(token);

  if(!token && !req.url.includes('/auth')) return redirectToLogin(req);

  if(token && req.url.includes('/auth')) return NextResponse.redirect(new URL('/', req.url));
  
}

const redirectToLogin = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/auth/login', request.url))
}

// Not used yet.
const validate = (token: string) => {
  console.log('token');
  console.log(token);
  
  return true
}

export const config = {
  matcher: ['/', '/students/:path*', '/teachers/:path*', '/auth/:path*'],
}