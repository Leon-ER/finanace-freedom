import { NextResponse } from "next/server";

export function middleware(request) {
    console.log("Running")
    
    // const user =  "logged";

    // if(!user){
    //     return NextResponse.redirect(
    //         new URL('/', req.url)
    //     )
    // }
    return NextResponse.next();
}

// export const config = {
//     matcher: ['/dashboard', '/goals', '/reports', '/transactions', '/settings']
// }