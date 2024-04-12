import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalgujarat.in"),
  title: {
    default: "Digital Gujarat",
    template: "%s | Government Jobs",
  },
  description:
    "Unlock Your Career Potential: Dive into the Latest Government Job Updates! Discover Your Path to Success with our Exclusive Government Job Updates Blog. Stay Ahead of the Curve with Timely Notifications, Expert Insights, and Insider Tips. Your Gateway to Thriving in the Public Sector Starts Here",
  twitter: {
    card: "summary_large_image",
    images: ["/open-graph-image.png"],
  },
  openGraph: {
    images: ["/open-graph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
