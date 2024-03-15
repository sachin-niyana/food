"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "@/components/BackToTop";
import ClientSays from "@/components/ClientSays";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LimitedOffers from "@/components/LimitedOffer";
import LittleInformantion from "@/components/LittleInformantion";
import Navbar from "@/components/Navbar";
import OurChef from "@/components/OurChef";
import OurFeauters from "@/components/OurFeauters";
import TopCollections from "@/components/TopCollections";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    }); // Initialize AOS
  }, []);
  return (
    <div>
      <BackToTop />
      <Navbar />
      <Header />
      <OurFeauters />
      <LimitedOffers />
      <TopCollections />
      <LittleInformantion />
      <ClientSays />
      <OurChef />
      <Footer />
    </div>
  );
}
