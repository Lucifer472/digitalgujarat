import { Ad1 } from "@/components/ads/ads";

import ExtraButton from "@/components/etc/button-extra";
import ArticleViewDemo from "@/components/views/article-view-demo";

import { getBlogFromUrl } from "@/lib/blog";

const link = "/how-to-change-name-in-aadhar";

const bPage = async () => {
  const data = await getBlogFromUrl(
    "-aadhar-card-download-register-update-2024"
  );
  return (
    <section className="w-full mx-auto max-w-[420px]  flex flex-col rounded-2xl p-2 border-2 border-gray-700 demo">
      <div className="border-y-2 border-gray-700">
        <Ad1 />
      </div>
      <h2> क्या आप मजेदार वीडियो देखना चाहते है ? </h2>
      <ExtraButton href={link} className="bg-green-700 border-yellow-500">
        Yes ✅
      </ExtraButton>
      <ExtraButton
        href={link}
        className="bg-red-700 mt-4 mb-6 border-yellow-500"
      >
        No ❌
      </ExtraButton>
      <ArticleViewDemo
        title={data?.title as string}
        blogData={data?.blog?.toString() as string}
      />
    </section>
  );
};

export default bPage;
