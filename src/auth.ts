import NextAuth from "next-auth";
import { prisma } from "./lib/prisma";

import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { getUserById } from "./app/data/user";
import { getAccountById } from "./app/data/account";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks:{
    async signIn({ user, account }) {
      if(account?.provider !== "credentials") return true;

      if(!user?.id) return false;

      return true
    },
    async session ({session,token}){
          try{
            if(!session?.user) return session;
        
            return {
              ...session,
              user:{
                ...session.user,
                id:token.sub,
                name:token.name || session?.user?.name,
                email: token.email || "null",
              }
            }
          }catch(err){
            console.error("Session callback error",err);
            return session;
          }
    },
    async jwt({token}){
      if(!token?.sub) return token; // I think if there is no sub, it means the user is not logged in
      const existingUser = await getUserById(token.sub);

      if(!existingUser) return token;

      const existingAccount = await getAccountById(existingUser.id);
      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      console.log(token);
      return token;
    }
  },
  adapter:PrismaAdapter(prisma),
  session: {strategy:"jwt"},
  ...authConfig
});
