import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food",
  description: "WELCOME TO FOOD PAGE",
  imageUrl: "assets/images/meta/meta-img.webp",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
        {/* Add more meta tags as needed */}
      </Head>
      <html lang="en" className="bg-light-white scroll-smooth">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
