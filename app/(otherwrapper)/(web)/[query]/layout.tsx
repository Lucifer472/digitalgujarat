import { Category } from "@/constant";
import { getBlogFromUrl } from "@/lib/blog";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { query: string };
}): Promise<Metadata> => {
  const query = params.query;

  const catIndex = Category.findIndex((c) => c.value === query);

  if (catIndex > -1) {
    return {
      title: Category[catIndex].label,
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  const blog = await getBlogFromUrl(query);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    openGraph: {
      images: [
        {
          url: blog.img,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MainLayout;
