"use client";
import * as z from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import { FaqEditor } from "@/components/etc/faq-editor";
import Editor from "@/components/etc/editor";

import { Category } from "@/constant";
import { BlogSchema } from "@/schema";
import { updateBlog } from "@/action/update-blog";

// Main BLog section

const BlogEditForm = ({
  values,
  blogData,
  id,
}: {
  values: any;
  id: number;
  blogData: any;
}) => {
  const [data, setData] = useState<any>({});

  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      category: values.category,
      desc: values.description,
      title: values.title,
      faq: JSON.parse(values.faq as string),
      blog: blogData,
      keywords: values.keywords,
    },
  });

  useEffect(() => {
    form.setValue("blog", JSON.stringify(data));
  }, [data, form]);

  function onSubmit(values: z.infer<typeof BlogSchema>) {
    updateBlog(values, id)
      .then((data) => {
        if (data.success) {
          toast.success("Blog Successfully updated!");
          form.reset();
        }

        if (data.error) {
          toast.error(data.error);
        }
      })
      .catch((e) => {
        toast.error(e);
      });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full pt-4 py-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title of the Blogs" {...field} />
              </FormControl>
              <FormDescription>This is the Title of the blog</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Keywords</FormLabel>
              <FormControl>
                <Input placeholder="Keywords of the Blogs" {...field} />
              </FormControl>
              <FormDescription>
                This are the keywords of the blogs
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description of the Blogs" {...field} />
              </FormControl>
              <FormDescription>
                This are the Description of the blogs
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Category.map((l) => (
                      <SelectItem
                        key={l.value}
                        value={l.value}
                        className="capitalize"
                      >
                        {l.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Please Select Category of the Scholarship
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <div className="w-full space-y-1">
          <h2 className="text-lg">Blog:</h2>
          <Editor setData={setData} initialData={blogData} />
        </div>
        <div className="flex flex-col w-full">
          <span className="pb-4 text-xl font-medium">Add Faqs</span>
          <div className="w-full border border-slate-200 rounded-md px-10 py-8">
            <FaqEditor
              setValue={form.setValue}
              data={JSON.parse(values.faq as string)}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BlogEditForm;
