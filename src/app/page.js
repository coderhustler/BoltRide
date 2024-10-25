import Image from "next/image";
import Banner from "./components/user/HomePage/Banner";
import CardVideoSection from "./components/user/HomePage/CarVideoSection";
import Footer from "./components/user/HomePage/Footer";
import HomeNavbar from "./components/user/HomePage/HomeNavbar";

export default function Home() {
  return (
      <main className="">
      
        <HomeNavbar/>
        <Banner/>
        <CardVideoSection/>
        <Footer/>

      </main>
      
      
  );
}
