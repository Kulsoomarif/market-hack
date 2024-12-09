import React from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import TeamMem from "@/components/TeamMem";
import TopFooter from "@/components/TopFooter";
import Footer from "@/components/Footer";

const team: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <Header2 />

      
      <main className="px-4 md:px-12 lg:px-24">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/team/img1.jpg"
              alt="Fashion Model"
              className="object-cover rounded-lg"
              width={500}
              height={300}
            />
          </div>

     
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/team/img2.jpg"
              alt="Product 1"
              className="object-cover rounded-lg"
              width={400}
              height={300}
            />
            <Image
              src="/team/img3.jpg"
              alt="Product 2"
              className="object-cover rounded-lg"
              width={400}
              height={300}
            />
            <Image
              src="/team/img4.jpg"
              alt="Product 3"
              className="object-cover rounded-lg"
              width={400}
              height={300}
            />
            <Image
              src="/team/img5.jpg"
              alt="Product 4"
              className="object-cover rounded-lg"
              width={400}
              height={300}
            />
          </div>
        </section>

        
        <TeamMem />
      </main>

      
      <TopFooter />
      <Footer />
    </div>
  );
};

export default team;
