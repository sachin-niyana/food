import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import OurChef from "@/components/OurChef";
import OurFeauters from "@/components/OurFeauters";
import LimitedOffers from "@/components/LimitedOffers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <OurFeauters />
      <LimitedOffers />
      <OurChef />
      <FooterSection />
    </div>
  );
}
