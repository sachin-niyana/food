import LimitedOffers from "@/components/LimitedOffers";
import Demo from "@/components/Demo";
import Navbar from "@/components/Navbar";
import OurFeauters from "@/components/OurFeauters";

export default function Home() {
  return (
    <div>
      <Navbar />
      <OurFeauters/>
      <LimitedOffers/>
      <Demo />
    </div>
  );
}
