import { prisma } from "@/lib/prisma";

export const getAccountById = async (userId: string) => {
  try {
    const account = await prisma.account.findFirst({
      where: {
        userId,
      },
    });
    return account;
  } catch (err) {
    console.log("Error fetching account by id", err);
    return null;
  }
};
