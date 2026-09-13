import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Village Nights | Hosted events and private parties",
  description: "Public events, private bookings, hens parties, corporate experiences, hosts, galleries, and workshops.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#fffaf2] text-[#141414]">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
