"use client";
import { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Editor from "@/components/etc/editor";
import { Button } from "@/components/ui/button";
import { FaqEditor } from "@/components/etc/faq-editor";

import { BlogSchema } from "@/schema";
import { createBlog } from "@/action/create-blog";
import toast from "react-hot-toast";
import { Category, indexValues } from "@/constant";
import { LiveBlogSearch } from "./live-blog-search";

const BlogForm = () => {
  const [data, setData] = useState<any>(null);
  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      blog: "",
      category: "",
      desc: "",
      faq: "",
      keywords: "",
      title: "",
      isIndex: "one",
      connect: null,
      isPending: "true",
      pageText: "",
    },
  });

  useEffect(() => {
    form.setValue("blog", JSON.stringify(data));
  }, [data, form]);

  const onSubmit = (v: z.infer<typeof BlogSchema>) => {
    createBlog(v).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }

      if (res.success) {
        toast.success(res.success);
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full min-w-[320px] xx:min-w-[400px] xs:min-w-[500px] sm:min-w-[600px] lg:min-w-[750px]"
      >
        <div className="space-y-4 w-full">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start justify-start gap-y-1">
                <Label className="text-lg">Title</Label>
                <FormControl className="w-full">
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="Your Title Here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            name="keywords"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start justify-start gap-y-1">
                <Label className="text-lg">Keywords</Label>
                <FormControl className="w-full">
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="keyword1, keyword2, keyword3..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="desc"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start justify-start gap-y-1">
                <Label className="text-lg">Description</Label>
                <FormControl className="w-full">
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="Blog Description..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start justify-start gap-y-1">
                <Label className="text-lg">Category</Label>
                <FormControl className="w-full">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category of the Blog..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Category.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isPending"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Pending or Not (Pending Blog Not Available without URL)
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value.toString()}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">is Pending</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        is Not Pending
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isIndex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Index Page</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {indexValues.map((l) => (
                        <SelectItem key={l} value={l} className="capitalize">
                          {l}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Please Select Index for Page (default: One)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="connect"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Connect to Blog</FormLabel>
                <FormControl>
                  <LiveBlogSearch
                    initialValue={null}
                    setField={field.onChange}
                  />
                </FormControl>
                <FormDescription>Connect to Next Page</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pageText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Page Text</FormLabel>
                <FormControl>
                  {/* @ts-ignore */}
                  <Input placeholder="Main Title" {...field} />
                </FormControl>
                <FormDescription>This is the Main Title</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full space-y-1">
            <h2 className="text-lg">Blog:</h2>
            <Editor setData={setData} />
          </div>
          <FaqEditor setValue={form.setValue} />
        </div>
        <Button size={"lg"} type="submit">
          Add Blog
        </Button>
      </form>
    </Form>
  );
};

export default BlogForm;
