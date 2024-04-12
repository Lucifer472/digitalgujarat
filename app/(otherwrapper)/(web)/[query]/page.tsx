import Link from "next/link";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { Article, FAQPage, WithContext } from "schema-dts";

import TableContent from "@/components/etc/table-content";
import { Separator } from "@/components/ui/separator";
import ArticleView from "@/components/views/article-view";
import { Ad1, Ad2 } from "@/components/ads/ads";
import AuthorView from "@/components/views/author-view";

import { getBlogFromUrl, getSkipBlog } from "@/lib/blog";
import Script from "next/script";
import { getUserById } from "@/lib/user";
import { HeaderText } from "@/components/etc/header";
import ArticleListView from "@/components/views/article-list-view";

export const generateMetadata = async ({
  params,
}: {
  params: { query: string };
}): Promise<Metadata> => {
  const query = params.query;

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

const BlogPostPage = async ({ params }: { params: { query: string } }) => {
  const query = params.query;

  const blog = await getBlogFromUrl(query);

  if (!blog) return redirect("/");
  const data = await getSkipBlog(blog.id);
  const { blocks } = JSON.parse(blog.blog as string);

  const author = await getUserById(blog.authrId);

  const blogHeadings = blocks.filter((b: any) => b.type === "header");
  const imgMeta: string[] = blocks.map((b: any) => {
    if (b.type === "image") {
      return b.data.file.url;
    }
  });

  const articleSchema: Article = {
    "@type": "NewsArticle",
    "@id": `${blog.id}`,
    headline: blog.title,
    image: imgMeta,
    description: blog.description,
    dateCreated: `${blog.createdAt}`,
    dateModified: `${blog.updatedAt}`,
    datePublished: `${blog.createdAt}`,
    author: [
      {
        "@type": "Person",
        name: author?.name || "Hardik Sadhu",
      },
    ],
  };

  const faqEntry = blog.faq
    ? JSON.parse(blog.faq as string).map((f: any) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      }))
    : [];

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntry,
  };

  return (
    <div className="bg-white mx-auto min-w-[340px] w-full xs:w-[90%] max-w-[1024px] h-full">
      <Script
        id="Article Schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>{" "}
      <Script
        id="Faq Schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>
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
        <AuthorView
          img={author?.image as string}
          name={author?.name || "Hardik Sadhu"}
          date={blog.updatedAt.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        />
        <Ad2 />
        <ArticleView
          blogData={blog.blog as string}
          faqData={blog.faq as string}
        />
        <div className="w-full flex-col gap-y-2 px-4">
          <HeaderText label="You May Also Like" />
          <div className="w-full flex flex-col items-start gap-y-4 my-2">
            {data &&
              data.map((item, index) => (
                <ArticleListView key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
