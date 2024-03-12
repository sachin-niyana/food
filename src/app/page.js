import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Demo from "@/components/Demo";
import Navbar from "@/components/Navbar";
import OurChef from "@/components/OurChef";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <Header /> */}
      <Demo />
      <OurChef />
      <FooterSection />
    </div>
  );
}
