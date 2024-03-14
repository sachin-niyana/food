import ClientSays from "@/components/ClientSays";
import LittleInformantion from "@/components/LittleInformantion";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import OurChef from "@/components/OurChef";
import Footer from "@/components/Footer";
import OurFeauters from "@/components/OurFeauters";
import LimitedOffers from "@/components/LimitedOffer";
import TopCollections from "@/components/TopCollections";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <OurFeauters />
      <LimitedOffers />
      <TopCollections/>
      <LittleInformantion />
      <ClientSays />
      <OurChef />
      <Footer />
    </div>
  );
}
