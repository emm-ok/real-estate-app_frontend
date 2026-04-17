import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);

async function verifyToken(token: string){
    try{
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch{
        return null;
    }
}

export async function middleware(req: NextRequest){
    const token = req.cookies.get("jwt")?.value;

    const { pathname, search } = req.nextUrl;

    if(!token){
        const url = new URL("/sign-in", req.url);
        url.searchParams.set("redirect", pathname + search);
        return NextResponse.redirect(url);
    }

    const payload = await verifyToken(token);

    if(!payload){
        const url = new URL("/sign-in", req.url);
        url.searchParams.set("redirect", pathname + search);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/deactivated/:path*"
    ]
}
