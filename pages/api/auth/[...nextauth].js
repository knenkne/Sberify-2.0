import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    pages: {
        signIn: '/auth/index'
    },
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ]
});
