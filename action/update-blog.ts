"use server";

import * as z from "zod";
import { auth } from "@/auth";

import { updateBlogById } from "@/lib/blog";
import { BlogSchema } from "@/schema";

export const updateBlog = async (v: z.infer<typeof BlogSchema>, id: number) => {
  const validateData = BlogSchema.safeParse(v);

  if (!validateData.success) {
    return { error: "Something went wrong!" };
  }

  const { data } = validateData;

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    console.log(session);
    return { error: "Please Login Again!" };
  }

  let img = " ";
  const block = JSON.parse(data.blog);
  for (const e of block.blocks) {
    if (e.type === "image") {
      img = e.data.file.url;
      break;
    }
  }

  const blog = await updateBlogById(data, img, id);
  if (blog.success) {
    return { success: "Blog Updated Successfully" };
  }
  return { error: "Something went wrong" };
};
