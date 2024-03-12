import ClientSays from "@/components/ClientSays";
import LittleInformantion from "@/components/LittleInformantion";
import Navbar from "@/components/Navbar";
import OurChef from "@/components/OurChef";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LittleInformantion/>
      <ClientSays/>
    </div>
  );
}
