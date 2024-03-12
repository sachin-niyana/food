import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import OurChef from "@/components/OurChef";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <OurChef />
      <FooterSection />
    </div>
  );
}
