import LimitedOffers from "@/components/LimitedOffers";
import Demo from "@/components/Demo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LimitedOffers/>
      <Demo />
    </div>
  );
}
