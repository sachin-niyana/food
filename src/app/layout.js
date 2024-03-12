import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food",
  description: "WELCOME TO FOOD PAGE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-light-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
