"use server";
import { auth } from "@/auth";
import db from "@/lib/db";

export const DeleteBlogById = async (id: number) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    console.log(session);
    return { error: "Please Login Again!" };
  }

  try {
    await db.blog.delete({
      where: {
        id,
      },
    });

    return { success: "Blog Deleted!" };
  } catch (error) {
    return { error: error };
  }
};
