"use server"

import { getUserByEmail } from "@/app/data/user";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schema"
import bcrypt from "bcryptjs";
import * as z from "zod";
export const register  = async (values:z.infer<typeof registerSchema>)=>{
        const validatedFields = registerSchema.safeParse(values);
        if(!validatedFields.success){
        return {error:"Invalid fields!"}
        }

        const {username,email,password} = validatedFields.data;

        const existingUser = await getUserByEmail(email);

        if(existingUser){
            return {error:"Email already in use!"}
        }

        const hashPassword = await bcrypt.hash(password,10);

        await prisma.user.create({
            data:{
                name:username,
                email,
                password:hashPassword
            }
        })
        return {success:"User created successfully!"}
}

