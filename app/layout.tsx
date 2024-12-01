import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import './drag-animation.css';
const manrope = Manrope({
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Anton Bodniev | Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${manrope.className}  antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html >
  );
}
