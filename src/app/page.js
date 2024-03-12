import Header from "@/components/Header";
import Demo from "@/components/Demo";
import Navbar from "@/components/Navbar";
import OurChef from "@/components/OurChef";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <OurChef />
      <Demo />
    </div>
  );
}
