import ClientSays from "@/components/ClientSays";
import LittleInformantion from "@/components/LittleInformantion";
import Header from "@/components/Header";
import Demo from "@/components/Demo";
import Navbar from "@/components/Navbar";
import OurChef from "@/components/OurChef";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LittleInformantion />
      <ClientSays />
      <Header />
      <OurChef />
      <Demo />
    </div>
  );
}
