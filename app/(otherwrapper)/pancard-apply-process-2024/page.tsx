import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import Footer from "@/components/navigation/footer";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indian PAN Card – See How to Get Your PAN Card",
  description:
    "Learn how to apply for Indian PAN Card online easily and quickly, with information on required documents and process steps.",
  keywords:
    "Apply for Pan Card Online India,Pan Card Correction India,Lost Pan Card India,Change of Name Pan Card India,Pan Card Status Check India,Urgent Pan Card India,Pan Card for Foreigners India,Pan Card for NRI India,Duplicate Pan Card India,Pan Card Address Change India,Income Tax Filing IndiaFile Income Tax Online India,Income Tax Return India,Income Tax Calculator India,Chartered Accountant for Income Tax India,Income Tax Consultant India,Capital Gains Tax India,TDS on Salary India,Income Tax Slab India,ITR Forms India",
};

const PanCardApply = () => {
  return (
    <main>
      <div className="w-full flex flex-col gap-y-1">
        <div className="w-full h-20 flex items-center justify-center bg-[#0072aa]">
          <h2 className="text-white text-lg font-medium max-w-7xl mx-auto px-2">
            PAN Card Application Online
          </h2>
        </div>
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1 px-2">
          <p className="font-semibold">
            Get Your PAN Card Online: A Quick & Easy Guide
          </p>
        </div>
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1">
          <p className="w-full text-justify px-2">
            Learn how to get your Indian PAN Card in as little as 10 minutes! A
            PAN card is essential for tax life in India, acting as a unique
            identifier for every individual. In this article, we&apos;ll guide
            you through the simple and convenient process of applying for your
            PAN card online, without leaving your home. With our tips and
            detailed step-by-step guide, you&apos;ll have your card in no time,
            and you&apos;ll be ready to meet your tax obligations without
            complications! We&apos;ll also cover eligibility requirements to
            ensure a smooth application process.
          </p>
        </div>
        <Link
          href={"/pan-card-application-online-2024-complete-info"}
          className="max-w-7xl mx-auto w-full flex items-center justify-center my-1 px-2"
        >
          <Image
            src={"/pan-card.png"}
            alt="pan card"
            width={500}
            height={500}
          />
        </Link>
        <Ad2 />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 flex-col my-4 px-2 gap-2">
          <Link
            href={"/pan-card-application-online-2024-complete-info"}
            className="w-full rounded-md bg-[#0072aa] text-3xl hover:bg-[#005eaa] text-white text-center col-span-2 py-4 md:py-6"
          >
            ज्यादा जानें
          </Link>
          <Link
            href={"/download-epan-card-get-epan-complete-information"}
            className="w-full rounded-md bg-[#0072aa] text-xl hover:bg-[#005eaa] text-white text-center col-span-1 py-4 md:py-6"
          >
            Download
          </Link>

          <Link
            href={"/pan-card-application-online-2024-complete-info"}
            className="w-full rounded-md bg-[#0072aa] text-xl hover:bg-[#005eaa] text-white text-center col-span-1 py-4 md:py-6"
          >
            Name Change
          </Link>
          <Link
            href={"/how-to-change-photo-and-signature-in-pan-card-2024"}
            className="w-full rounded-md bg-[#0072aa] text-xl hover:bg-[#005eaa] text-white text-center col-span-1 py-4 md:py-6"
          >
            Photo
          </Link>
          <Link
            href={"/pan-card-application-online-2024-complete-info"}
            className="w-full rounded-md bg-[#0072aa] text-xl hover:bg-[#005eaa] text-white text-center col-span-1 py-4 md:py-6"
          >
            Date of Birth
          </Link>
        </div>
        <Ad3 />
      </div>
      <Footer />
    </main>
  );
};

export default PanCardApply;
