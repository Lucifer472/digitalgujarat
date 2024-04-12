import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TableContent = ({
  headings,
}: {
  headings: {
    id: string;
    data: {
      text: string;
      level: number;
    };
    type: string;
  }[];
}) => {
  function extractContentFromAnchor(text: any) {
    if (!text.match(/<[^>]*>/g)) return text;
    return text.replace(/<[^>]*>/g, "");
  }

  return (
    <div className="w-full max-w-[650px] mx-auto">
      <Accordion
        type="single"
        collapsible
        className="px-4 border border-slate-300 m-2 rounded-md"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="px-0 py-2 font-semibold">
            Content
          </AccordionTrigger>
          <AccordionContent className="flex flex-col w-full gap-y-2">
            {headings.map((h, index) => (
              <Link
                key={h.id}
                href={`#${h.id}`}
                className="flex gap-1 text-blue-600 hover:text-sky-700"
              >
                <span>{index + 1}.</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: extractContentFromAnchor(h.data.text),
                  }}
                />
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TableContent;
