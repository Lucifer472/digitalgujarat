import dynamic from "next/dynamic";
import Navbar from "@/components/navigation/Navbar";

// Main HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ScrollToTop = dynamic(() => import("@/components/etc/ScrollToTop"), {
    ssr: false,
  });

  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
    </>
  );
}
