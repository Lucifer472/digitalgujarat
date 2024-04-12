import Image from "next/image";
import Link from "next/link";

const AuthorView = ({
  img,
  name,
  date,
}: {
  img: string;
  name: string;
  date: string;
}) => {
  return (
    <div className="px-4 flex items-center justify-between border-y border-slate-200 py-2">
      <div className="flex items-center justify-start gap-x-2">
        <Image
          src={img || "/fallback.jpg"}
          alt="Author Image"
          width={40}
          height={40}
          className="object-contain rounded-full"
        />
        <div className="flex flex-col items-start justify-start gap-y-0">
          <span className="text-gray-500 font-thin text-xs">Author</span>
          <Link
            href={"/author/" + encodeURIComponent(name)}
            className="text-sky-400 hover:text-sky-500 text-sm"
          >
            {name}
          </Link>
        </div>
      </div>
      <div className="flex items-start justify-start flex-col">
        <span className="text-xs font-thin text-gray-500">Date</span>
        <time className="text-black font-semibold text-sm">{date}</time>
      </div>
    </div>
  );
};

export default AuthorView;
