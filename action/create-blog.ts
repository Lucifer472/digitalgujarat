"use server";

import * as z from "zod";
import { auth } from "@/auth";

import { addBlog } from "@/lib/blog";
import { BlogSchema } from "@/schema";

export const createBlog = async (v: z.infer<typeof BlogSchema>) => {
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

  let img = "https://images.drivingexamexpert.com/blogs/6683d1444482e.png";
  const block = JSON.parse(data.blog);
  for (const e of block.blocks) {
    if (e.type === "image") {
      img = e.data.file.url;
      break;
    }
  }

  const blog = await addBlog(
    data,
    session.user.id,
    data.title
      .toLowerCase()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, "-"),
    img
  );
  if (blog.success) {
    return { success: "Blog Created Successfully" };
  }
  return { error: "Something went wrong" };
};
