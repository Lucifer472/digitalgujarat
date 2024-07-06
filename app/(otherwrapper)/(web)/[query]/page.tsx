import { redirect } from "next/navigation";
import { Article, FAQPage, WithContext } from "schema-dts";

import { getBlogFromUrl, getBlogsByCat, getSkipBlog } from "@/lib/blog";
import Script from "next/script";
import { getUserById } from "@/lib/user";
import { Category } from "@/constant";
import CategoryPage from "@/components/views/category-page-view";
import BlogPostPage from "@/components/views/blog-page-view";
import AbPage from "@/components/views/ab-page";
import CPage from "@/components/views/c-page";

const MainQueryPage = async ({
  params,
  searchParams,
}: {
  params: { query: string };
  searchParams: any;
}) => {
  const query = params.query;
  const page = parseInt(searchParams.page || "1");

  const catIndex = Category.findIndex((c) => c.value === query);

  if (catIndex > -1) {
    const data = await getBlogsByCat(Category[catIndex].value, page);
    if (!data) return;

    const isNext = data.length === 11;
    if (isNext) data.pop();

    return (
      <CategoryPage
        data={data}
        isNext={isNext}
        page={page}
        title={Category[catIndex].label}
      />
    );
  }

  const blog = await getBlogFromUrl(query);

  if (!blog) return redirect("/");

  if (
    blog.isPending &&
    blog.isIndex !== "three" &&
    blog.connect &&
    blog.pageText
  ) {
    return <AbPage data={blog} link={blog.connect} title={blog.pageText} />;
  }

  if (blog.isPending && blog.isIndex === "three") {
    return <CPage data={blog} />;
  }

  const data = await getSkipBlog(blog.id);
  const { blocks } = JSON.parse(blog.blog as string);

  const author = await getUserById(blog.authrId);

  // const blogHeadings = blocks.filter((b: any) => b.type === "header");
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
    <>
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
      <BlogPostPage author={author} blog={blog} data={data} />
    </>
  );
};

export default MainQueryPage;
