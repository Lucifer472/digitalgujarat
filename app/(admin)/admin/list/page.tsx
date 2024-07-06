import BlogList from "@/components/auth/edit-blog-list";
import LiveSearch from "@/components/auth/live-search";
import AdminNavbar from "@/components/navigation/admin-navbar";
import FormWrapper from "@/components/wrappers/form-wrapper";

import { getEditBlogs } from "@/lib/blog";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const res = await getEditBlogs(searchParams.search);

  return (
    <section className="w-full min-h-screen">
      <AdminNavbar />
      <div className="global-container flex items-start justify-center w-full min-h-screen py-6">
        <FormWrapper
          title="List of All Available Blogs"
          label="This is for finding and editing blogs!"
        >
          <>
            <LiveSearch />
            <div className="my-2 px-2">
              <BlogList data={res} />
            </div>
          </>
        </FormWrapper>
      </div>
    </section>
  );
};

export default ListPage;
