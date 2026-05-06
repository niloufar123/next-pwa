import { NextResponse } from "next/server";

import {auth} from "@/auth";




export default auth((req)=>{
    console.log("req",req.auth);
    
    const isLoggedIn=req.auth;
    const isOnLoginPage=req.nextUrl.pathname.startsWith("/login");
    const isProtected=req.nextUrl.pathname.startsWith("/dashboard");

    console.log("isLogged",isLoggedIn);

    if(isProtected&&! isLoggedIn){
        return NextResponse.redirect(new URL("/login",req.url));
    }   

    if(isOnLoginPage&& isLoggedIn){
        // return NextResponse.redirect(new URL("/dashboard",req.url));
    }
    return NextResponse.next();

})

export const config={
    matcher:["/dashboard/:path*","/login"],         
};
