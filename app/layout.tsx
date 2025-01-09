import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import './drag-animation.css';
import Analytics from "@/components/shared/Analytics";

const manrope = Manrope({
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Anton Bodniev | Front End Developer",
  description: "This is a modern and stylish site that reflects who I am and what I do. It’s all about showcasing my work, sharing my story, and connecting with like-minded people. Simple, clean, and easy to navigate — it’s designed to leave a lasting impression.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <Analytics />
      </head>
      <body
        className={`${manrope.className}  antialiased scroll-smooth`}
      >
        {children}
      </body>

    </html >
  );
}
