import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";
import { getUserByName } from "@/lib/user";
import { redirect } from "next/navigation";
import { HeaderText } from "@/components/etc/header";
import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { getRecentBlogs } from "@/lib/blog";
import ArticleListView from "@/components/views/article-list-view";

const MainAuthorPage = async ({ params }: { params: { author: string } }) => {
  const author = await getUserByName(decodeURIComponent(params.author));

  if (author === null) {
    return redirect("/author");
  }

  const data = await getRecentBlogs(author.id);

  return (
    <div className="flex flex-col w-full max-w-7xl bg-slate-100 mx-auto px-4">
      <div className="w-full h-full py-2 flex flex-col items-start">
        <div className="w-full px-4 pb-2 flex flex-wrap items-center justify-start">
          <Link
            href={"/"}
            className="text-sm text-gray-500 hover:text-gray-800 underline"
          >
            Home
          </Link>
          <span className="text-sm mx-1">{`>`}</span>
          <Link
            href={`/author`}
            className="text-sm text-gray-500 hover:text-gray-800 underline capitalize"
          >
            Author
          </Link>
          <span className="text-sm mx-1">{`>`}</span>
          <Link
            href={`/author/${author.name}`}
            className="text-sm text-gray-800 underline capitalize"
          >
            {decodeURIComponent(author.name as string)}
          </Link>
          <Ad1 />
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-y-8">
          <div className="flex flex-col w-full gap-y-2 items-center justify-center">
            <div className="rounded-full border border-slate-300 bg-white p-1">
              <Image
                src={author.image || "/fallback.jpg"}
                alt="Profile Pic"
                width={100}
                height={100}
                className="object-contain rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold capitalize">{author.name}</h2>
            <div className="flex items-center justify-center gap-x-2">
              <Link href={author.profile?.linkedin || "/"} target="_blank">
                <IoLogoLinkedin className="text-3xl text-blue-500" />
              </Link>
              <Link href={author.profile?.instagram || "/"} target="_blank">
                <FaInstagramSquare className="text-3xl text-pink-500" />
              </Link>
              <Link href={author.profile?.twitter || "/"} target="_blank">
                <FaSquareXTwitter className="text-3xl" />
              </Link>
              <Link href={author.profile?.facebook || "/"} target="_blank">
                <FaSquareFacebook className="text-3xl text-blue-500" />
              </Link>
            </div>
          </div>
          <br />
          <p className="text-justify text-sm text-gray-800 px-6 font-light pb-16">
            {author.profile?.bio}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <HeaderText label="Articles By User" />
        <Ad2 />
        <div className="w-full flex flex-col items-start gap-y-4 my-2">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <ArticleListView key={index} item={item} />
            ))}
          <Ad3 />
        </div>
      </div>
    </div>
  );
};

export default MainAuthorPage;
