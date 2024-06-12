import { redirect } from "next/navigation";

import ClientWrapper from "@/components/wrappers/client-wrapper";
import AdminNavbar from "@/components/navigation/admin-navbar";
import BlogEditForm from "@/components/auth/blog-edit-form";

import { getBlogFromUrl } from "@/lib/blog";

const page = async ({ params }: { params: { url: string } }) => {
  const data = await getBlogFromUrl(params.url);

  if (data === null) return redirect("/admin");

  return (
    <section className="bg-white w-full h-full">
      <div className="max-w-4xl mx-auto w-full h-full bg-white">
        <AdminNavbar />
        <div className="my-4 max-w-[720px] mx-auto border border-black rounded-md p-4">
          <div className="w-full border-b-2 border-black mb-4">
            <span className="text-xl font-medium">Edit Blogs</span>
          </div>
          <div>
            <ClientWrapper>
              <BlogEditForm values={data} id={data.id} blogData={data.blog} />
            </ClientWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
