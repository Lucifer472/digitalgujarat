"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

interface ReadMoreArticleProps {
  children: React.ReactNode;
  data: any;
}

export const ReadMoreArticle = ({ children, data }: ReadMoreArticleProps) => {
  const [more, setMore] = useState(false);
  const blog = JSON.parse(data);

  const b = blog.blocks[0];

  const Elm = () => {
    switch (b.type) {
      case "paragraph":
        return <p dangerouslySetInnerHTML={{ __html: b.data.text }} />;
      case "image":
        return (
          <Image
            width={750}
            height={750}
            src={b.data.file.url}
            alt={b.id}
            style={{ objectFit: "contain" }}
          />
        );
      case "header":
        switch (b.data.level) {
          case 1:
            return (
              <h1 id={b.id} dangerouslySetInnerHTML={{ __html: b.data.text }} />
            );
          case 2:
            return (
              <h2 id={b.id} dangerouslySetInnerHTML={{ __html: b.data.text }} />
            );
          case 3:
            return (
              <h3 id={b.id} dangerouslySetInnerHTML={{ __html: b.data.text }} />
            );
          case 4:
            return (
              <h4 id={b.id} dangerouslySetInnerHTML={{ __html: b.data.text }} />
            );
          case 5:
            return (
              <h6 id={b.id} dangerouslySetInnerHTML={{ __html: b.data.text }} />
            );
          default:
            return (
              <h6 id={b.id} dangerouslySetInnerHTML={{ __html: b.data.text }} />
            );
        }
      case "list":
        if (b.data.style === "unordered") {
          return (
            <ul>
              {b.data.items.map((list: any, listIndex: any) => (
                <li
                  key={listIndex}
                  dangerouslySetInnerHTML={{ __html: list }}
                />
              ))}
            </ul>
          );
        } else {
          return (
            <ol>
              {b.data.items.map((list: any, listIndex: any) => (
                <li
                  key={listIndex}
                  dangerouslySetInnerHTML={{ __html: list }}
                />
              ))}
            </ol>
          );
        }
      case "quote":
        return <blockquote dangerouslySetInnerHTML={{ __html: b.data.text }} />;
      case "table":
        let l = true;
        return (
          <div className="max-w-full sm:max-w-[750px] overflow-x-scroll sm:overflow-hidden mx-auto">
            <table>
              <tbody>
                {b.data.content.map((table: any, tableIndex: any) => {
                  return (
                    <tr key={tableIndex}>
                      {l
                        ? table.map((t: any, colIndex: any) => {
                            l = false;
                            return (
                              <th
                                key={colIndex}
                                dangerouslySetInnerHTML={{ __html: t }}
                              />
                            );
                          })
                        : table.map((t: any, colIndex: any) => (
                            <td
                              key={colIndex}
                              dangerouslySetInnerHTML={{ __html: t }}
                            />
                          ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div className="px-6 lg:px-0">
      <article className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl sm:mx-auto h-full flex flex-col items-start justify-start gap-y-1  prose blog-styles">
        {!more ? (
          <div className="flex flex-col gap-0 items-start">
            <Elm />
            <Button
              variant={"link"}
              onClick={() => {
                setMore(true);
              }}
              className="p-0 m-0 h-fit text-base"
            >
              Read More...
            </Button>
          </div>
        ) : (
          <>{children}</>
        )}
      </article>
    </div>
  );
};
