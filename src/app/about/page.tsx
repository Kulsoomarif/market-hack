import Image from 'next/image'
import TopFooter from "@/components/TopFooter";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      
      <div className="bg-white text-gray-900">
        {/* Main Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-2xl sm:text-3xl mb-4 text-blue-600">Our Company</h3>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
              ABOUT US
            </h1>
            <h4 className="text-lg text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale.
            </h4>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all">
              Get Quote Now
            </button>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <Image
              src="/about/girl.png"
              alt="Shopping girl"
              width={668}
              height={571}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "15K", label: "Clients" },
              { value: "150K", label: "Sales" },
              { value: "15", label: "Years of Experience" },
              { value: "100+", label: "Partners" },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-blue-600">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/IwzkfMmNMpM"
                title="Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Meet Our Team</h2>
            <h4 className="text-center text-gray-600 mb-8">
              Problems trying to resolve the conflict between
              <br />
              the two major realms of Classical physics: Newtonian mechanics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { name: "Alice", role: "Designer", image: "/about/t1.jpg" },
                { name: "Bob", role: "Developer", image: "/about/t2.jpg" },
                { name: "Charlie", role: "Manager", image: "/about/t3.jpg" },
              ].map((member) => (
                <div key={member.name} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">Big Companies Are Here</h2>
            <h4 className="text-center text-gray-600 mb-8">
              Problems trying to resolve the conflict between
              <br />
              the two major realms of Classical physics: Newtonian mechanics
            </h4>
            <div className="flex justify-center gap-6 flex-wrap">
              {["aws", "stripe", "lyft", "slack"].map((logo) => (
                <div key={logo} className="p-4 bg-gray-50 rounded-lg hover:bg-white transition-all">
                  <Image
                    src={`/${logo}.png`}
                    alt={logo}
                    width={100}
                    height={50}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Now Let’s Grow Yours</h3>
              <p className="text-gray-200 mb-4">Contact us to know how we can help!</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-all">
                Get Started
              </button>
            </div>
            <div className="flex justify-center md:justify-start">
              <Image
                src="/about/women.jpg"
                alt="women"
                width={500}
                height={500}
                className="w-full h-auto max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </footer>
      </div>
      <TopFooter />
      <Footer />
    </div>
  );
};

export default About;