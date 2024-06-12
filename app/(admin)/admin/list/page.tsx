import { getEditBlogs } from "@/lib/blog";

import LiveSearch from "@/components/auth/live-search";
import EditBlogList from "@/components/auth/edit-blog-list";
import AdminNavbar from "@/components/navigation/admin-navbar";

const listPage = async ({
  searchParams,
}: {
  searchParams: { [search: string]: null };
}) => {
  const handlePrams = async (q: string | null) => {
    if (q !== undefined) {
      const res = await getEditBlogs({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          OR: [
            {
              title: {
                contains: q,
              },
            },
            {
              url: {
                contains: q,
              },
            },
          ],
        },
        select: {
          url: true,
          id: true,
          title: true,
        },
      });
      return res;
    }
    const res = await getEditBlogs({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        url: true,
        id: true,
        title: true,
      },
    });
    return res;
  };
  const res = await handlePrams(searchParams.search);
  return (
    <section className="bg-white w-full h-full">
      <div className="max-w-4xl mx-auto w-full h-full bg-white">
        <AdminNavbar />
        <div className="my-4 max-w-[1280px] mx-auto border border-black rounded-md p-4">
          <div className="w-full border-b-2 border-black mb-4">
            <span className="text-xl font-medium">Edit Blogs</span>
          </div>
          <LiveSearch />
          <div className="my-2 px-2">
            <EditBlogList data={res} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default listPage;
