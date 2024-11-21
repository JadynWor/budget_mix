import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "./db";
import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db), //prisma 
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy: 'jwt', //using json web token
        maxAge: 5 * 60,  // session expires after 5 minutes 
    },
    pages:{
        signIn: '/sign-in',
        //signout: here
    },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Username", type: "email", placeholder: "Email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if (!credentials?.email || !credentials?.password) {
              throw new Error("Missing credentials");
            }
          
            const existingUser = await db.user.findUnique({
              where: { email: credentials.email },
            });
          
            if (!existingUser) {
              throw new Error("No user found with this email");
            }
          
            if (!existingUser.password) {
              throw new Error("User signed up with Google. Please use Google to sign in.");
            }
          
            const passwordMatch = await compare(credentials.password, existingUser.password);
          
            if (!passwordMatch) {
              throw new Error("Incorrect password");
            }
          
            return {
              id: `${existingUser.id}`,
              username: existingUser.username,
              email: existingUser.email,
            };
          }
        
        })
    ],
    callbacks:{
      async jwt({token, user}){
        //console.log(token,user);
        if(user){
          return{
            ...token,
            username: user.username
          }
        }
        return token
      },
      async session({session, token}){
        return{
          ...session,
          user: {
            ...session.user,
            username: token.username
          }
        }
      },
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }