import Link from "next/link";

import TableContent from "@/components/etc/table-content";
import { Separator } from "@/components/ui/separator";
import ArticleView from "@/components/views/article-view";
import { Ad1, Ad2 } from "@/components/ads/ads";
import AuthorView from "@/components/views/author-view";

import { HeaderText } from "@/components/etc/header";
import ArticleListView from "@/components/views/article-list-view";

const BlogPostPage = ({
  blog,
  author,
  data,
}: {
  blog: any;
  author: any;
  data: any;
}) => {
  const { blocks } = JSON.parse(blog.blog as string);

  const blogHeadings = blocks.filter((b: any) => b.type === "header");

  return (
    <div className="bg-white mx-auto min-w-[340px] w-full xs:w-[90%] max-w-[1024px] h-full">
      <div className="w-full px-4 pb-2 flex flex-wrap items-center justify-start">
        <Link
          href={"/"}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Home
        </Link>
        <span className="text-sm mx-1">{`>`}</span>
        <Link
          href={`/${blog.category}`}
          className="text-sm text-gray-700 underline capitalize"
        >
          {blog.category?.replace("-", " ")}
        </Link>
      </div>
      <Ad1 />
      <div className="w-full border-t border-gray-300/30">
        <div className="padding">
          <h1 className="text-xl leading-[1.2em] sm:text-3xl md:text-4xl md:leading-[1.5em] font-bold text-left text-gray-700 py-1 px-2">
            {blog.title}
          </h1>
        </div>
        <Separator />
        <TableContent headings={blogHeadings as any} />
        <Ad2 />
        <ArticleView
          blogData={blog.blog as string}
          faqData={blog.faq as string}
        />
        <AuthorView
          img={author?.image as string}
          name={author?.name || "Hardik Sadhu"}
          date={blog.updatedAt.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        />
        <div className="w-full flex-col gap-y-2 px-4 mt-4">
          <HeaderText label="You May Also Like" />
          <div className="w-full flex flex-col items-start gap-y-4 my-2">
            {data &&
              data.map((item: any, index: number) => (
                <ArticleListView key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
