import Editors from "@/components/Editors";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Classic from "@/components/Classic";
import Universe from "@/components/Universe";
import TopHeader from "@/components/TopHeader";
import  Header from "@/components/Header";
import TopFooter from "@/components/TopFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <TopHeader />
      <Header />
      <Hero />
      <Editors />
      <Products />
      <Classic />
      <Universe />
      <TopFooter />
        <Footer />
    </div>
  );
}
