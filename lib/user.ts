import db from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const data = await db.user.findUnique({
      where: {
        email,
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const data = await db.user.findUnique({
      where: {
        id,
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const getUserByName = async (name: string) => {
  try {
    const data = await db.user.findFirst({
      where: {
        name,
      },
      include: {
        profile: true,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export const getAllUser = async () => {
  return await db.user.findMany({
    take: 10,
    include: {
      profile: true,
    },
  });
};
