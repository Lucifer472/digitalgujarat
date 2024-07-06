import db from "@/lib/db";
import * as z from "zod";

import { BlogSchema } from "@/schema";

export const addBlog = async (
  value: z.infer<typeof BlogSchema>,
  userId: string,
  url: string,
  img: string
) => {
  try {
    const data = await db.blog.create({
      data: {
        title: value.title,
        url: url,
        img: img,
        keywords: value.keywords,
        description: value.desc,
        blog: value.blog,
        faq: value.faq,
        category: value.category,
        authrId: userId,
        isIndex: value.isIndex,
        isPending: value.isPending === "true" ? true : false,
        connect: value.connect,
        pageText: value.pageText === "" ? null : value.pageText,
      },
    });

    if (!data) return { error: "Something went wrong" };

    return { success: data };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const updateBlogById = async (
  value: z.infer<typeof BlogSchema>,
  userId: string,
  url: string,
  img: string,
  id: number
) => {
  try {
    await db.blog.update({
      where: {
        id,
      },
      data: {
        title: value.title,
        img: img,
        keywords: value.keywords,
        description: value.desc,
        blog: value.blog,
        faq: value.faq,
        authrId: userId,
        url: url,
        category: value.category,
        isIndex: value.isIndex,
        isPending: value.isPending === "true" ? true : false,
        connect: value.connect,
        pageText: value.pageText === "" ? null : value.pageText,
      },
    });

    return { success: "Blog Updated!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const getBlogFromUrl = async (url: string) => {
  try {
    const data = await db.blog.findUnique({
      where: {
        url,
      },
    });

    if (!data) return null;
    return data;
  } catch (error) {
    return null;
  }
};

export const getBlogs = async (page: number) => {
  try {
    const data = await db.blog.findMany({
      skip: (page - 1) * 10,
      take: 11,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Author: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!data) return null;
    return data;
  } catch (error) {
    return null;
  }
};

export const getBlogsByCat = async (cat: string, page: number) => {
  try {
    const data = await db.blog.findMany({
      skip: (page - 1) * 10,
      take: 11,
      where: {
        category: cat,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Author: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!data) return null;
    return data;
  } catch (error) {
    return null;
  }
};

export const getAllBlogs = async () => {
  try {
    const data = await db.blog.findMany({
      take: 1000,
      select: {
        url: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!data) return null;
    return data;
  } catch (error) {
    return null;
  }
};

export const getRecentBlogs = async (authrId: string) => {
  try {
    const data = await db.blog.findMany({
      where: {
        authrId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const getSkipBlog = async (id: number) => {
  try {
    const data = await db.blog.findMany({
      where: {
        NOT: [
          {
            id,
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const getEditBlogs = async (options: any) => {
  const data = await db.blog.findMany(options);
  return data;
};
