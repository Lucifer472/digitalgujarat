import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { url: string } }
) => {
  const newUrl = decodeURIComponent(params.url);

  const data = await fetch(newUrl, {
    method: "GET",
    headers: {
      "content-type": "text/html",
    },
  });

  const html = await data.text();

  return new NextResponse(html);
};
