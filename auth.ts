import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const {handlers, signIn,signOut, auth} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    pages:{
        signIn:"/login",
    },
    callbacks:{
        session({session,token}){
            session.user.id=token.sub!;
            return session;
        }
    },
    trustHost:true
});