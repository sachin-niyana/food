import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FOOD",
  description: "WELCOME TO FOOD PAGE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-light-white scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
