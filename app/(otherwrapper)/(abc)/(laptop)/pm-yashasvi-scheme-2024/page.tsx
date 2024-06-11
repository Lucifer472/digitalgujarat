import { Ad1 } from "@/components/ads/ads";

import ExtraButton from "@/components/etc/button-extra";
import ArticleViewDemo from "@/components/views/article-view-demo";

import { getBlogFromUrl } from "@/lib/blog";

const link = "/pan-card-loan-apply-online-2024";

const aPage = async () => {
  const data = await getBlogFromUrl(
    "pm-yashasvi-scheme-2024-scholarship-online-registration-yetntaacin"
  );

  return (
    <section className="w-full mx-auto max-w-[420px]  flex flex-col rounded-2xl p-2 border-2 border-gray-700 demo">
      <div className="border-y-2 border-gray-700">
        <Ad1 />
      </div>
      <h2>क्या आपकी उम्र 13 साल से ज्यादा है ?</h2>
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

export default aPage;
