import { Pagination } from "@/components/etc/pagination";
import { HeaderText } from "@/components/etc/header";
import NoArticleFound from "@/components/views/no-article";
import ArticleListView from "@/components/views/article-list-view";

import { Ad2, Ad3 } from "@/components/ads/ads";

const CategoryPage = ({
  title,
  data,
  page,
  isNext,
}: {
  title: string;
  data: any;
  page: number;
  isNext: boolean;
}) => {
  return (
    <div className="min-w-[340px] w-[90%] max-w-[1024px] mx-auto flex flex-col items-start justify-start">
      <HeaderText label={title} />
      <Ad2 />
      <div className="w-full flex flex-col items-start gap-y-4 my-2">
        {data.length > 0 ? (
          data.map((item: any, index: number) => (
            <ArticleListView key={index} item={item} number={index} />
          ))
        ) : (
          <NoArticleFound />
        )}
        {data.length > 0 && (
          <Pagination isBack={page > 1} isNext={!isNext} page={page} />
        )}
        <Ad3 />
      </div>
    </div>
  );
};

export default CategoryPage;
