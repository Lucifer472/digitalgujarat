import { getBlogFromUrl } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  const { params } = context;

  const data = await getBlogFromUrl(params.slug);

  return NextResponse.json({ data });
}
