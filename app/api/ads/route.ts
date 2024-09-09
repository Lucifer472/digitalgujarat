import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const newUrl = decodeURIComponent(searchParams.get("url") as string);

  const data = await fetch(newUrl, {
    method: "GET",
    headers: {
      "content-type": "text/html",
    },
  });

  const html = await data.text();

  return new NextResponse(html);
};
