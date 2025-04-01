"use server";

import { getUserByEmail } from "@/app/data/user";
import { loginSchema } from "@/schema";
import { signIn } from "@/auth";

import * as z from "zod";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async(values:z.infer<typeof loginSchema>) =>{
    const validatedFields = loginSchema.safeParse(values);
    if(!validatedFields.success) {
        return {error:"Invalid fields!"}
    }
    const {email,password} = validatedFields.data;

    const existingUser = await getUserByEmail(email);


    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email does not exist!" };
      }
    
    try{
        await signIn("credentials",{
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        });
        return {success:"Login successfull!"}
    }catch(error){
        if (error instanceof AuthError) {
            switch (error.type) {
              case "CredentialsSignin":
                return { error: "Invalid credentials!" };
              default:
                return { error: "Something went wrong!" };
            }
          }
          throw error;
    }
}

