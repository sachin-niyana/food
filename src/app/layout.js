import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://food-phi-six.vercel.app/",
  title: "Food",
  description: "Welcome To Food Page ...",
  openGraph: {
    title: "Food",
    description: "Welcome To Food Page ...",
    images: ["/assets/images/meta/meta-img.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className="bg-light-white scroll-smooth">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
