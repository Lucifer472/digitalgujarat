import BlogForm from "@/components/auth/blog-form";
import AdminNavbar from "@/components/navigation/admin-navbar";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import FormWrapper from "@/components/wrappers/form-wrapper";

const UserPage = () => {
  return (
    <section className="w-full min-h-screen">
      <AdminNavbar />
      <div className="global-container flex items-center justify-center w-full min-h-screen py-6">
        <FormWrapper
          title="Add New Blog"
          label="This is form is for adding New Blog!"
        >
          <ClientWrapper>
            <BlogForm />
          </ClientWrapper>
        </FormWrapper>
      </div>
    </section>
  );
};

export default UserPage;
