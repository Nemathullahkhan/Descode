import { NextAuthConfig } from "next-auth";
import { loginSchema } from "./schema";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "./app/data/user";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validatedFields = loginSchema.safeParse(credentials);

          if (!validatedFields.success) {
            console.error("Validation Failed", validatedFields.error);
            return null;
          }

          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user) {
            console.error("No user found with this email");
            return null;
          }
          if (!user.password) {
            console.error("User has no password set (possibly OAuth user)");
            return null;
          }

          // verify password
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            console.error("Password does not match");
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
