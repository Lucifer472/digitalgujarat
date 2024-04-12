import { getAllUser } from "@/lib/user";
import Image from "next/image";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

export const revalidate = 0;

const AuthorPage = async () => {
  const data = await getAllUser();

  return (
    <div className="flex items-center justify-center w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-start justify-start gap-y-4 p-4">
        {data.map((author) => (
          <Link
            href={"/author/" + author.name}
            className="w-full h-full py-2 flex flex-col items-start bg-slate-100 rounded-md hover:shadow"
            key={author.id}
          >
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
                <h2 className="text-2xl font-semibold capitalize">
                  {author.name}
                </h2>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;
