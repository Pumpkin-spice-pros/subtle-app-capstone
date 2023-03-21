import NextAuth, { NextAuthOptions } from "next-auth"
import { SupabaseAdapter } from "@next-auth/supabase-adapter" 
import jwt from 'jsonwebtoken'
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
      }),
      providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
             const res = await fetch("/api/auth/callback/credentials.", {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()
            if (res.ok && user) {
              return user
            }
            return null
          }
        })
      
    ],
    theme: {
      colorScheme: "light",
    },
    callbacks: {
        async session({ session, user }) {
          const signingSecret = process.env.SUPABASE_JWT_SECRET
          if (signingSecret) {
            const payload = {
              aud: "authenticated",
              exp: Math.floor(new Date(session.expires).getTime() / 1000),
              sub: user.id,
              email: user.email,
              role: "authenticated",
            }
            session.supabaseAccessToken = jwt.sign(payload, signingSecret)
          }
          return session
        },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request', 
    newUser: '/auth/new-user'  
  }
}
  
  export default NextAuth(authOptions)
