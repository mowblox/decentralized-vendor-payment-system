import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ||''
    })
  ],

  pages:{
    signIn: '/authentication'
  }
}

const handler = NextAuth(options);

export {handler as GET , handler as POST};