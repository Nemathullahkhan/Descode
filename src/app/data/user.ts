"use server"

import { prisma } from "@/lib/prisma"

export const getUserByEmail = async (email:string)=>{
    try{
        const user = await prisma.user.findUnique(
            {where:{
                email
            },
        });
        return user;
    } catch(err){
        console.error("Error fetching user by email",err);
        return null;
    }
}