import { NextResponse } from 'next/server';

export async function middleware() {
    // if (request.cookies.token) {
    //     return NextResponse.next();
    // }

    // // When support for configuring gSSP to use Edge Functions lands,
    // // We could add that logic to _middleware
    // const { token_type, access_token } = await refreshAccessToken();

    return NextResponse.next();
    // .cookie('token', `${token_type} ${access_token}`);
}
