import React from 'react'

const Hero = () => {
  return (
    <div className="flex max-h[852px] max-w[1440px] flex-col gap-16">

      <section
        className="relative px-10 py-16 flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: "url('/landing/hero.jpg')" }}
      >
        <div className="text-left gap-[30px]">
          <h5 className="text-4xl font-bold text-white">SUMMER 2020</h5>
          <h2 className="text-5xl text-white font-bold mt-4">NEW COLLECTION</h2>
          <h4 className="mt-2 text-white">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">
            SHOP NOW
          </button>
        </div>
      </section>
    </div>
  )
}

export default Hero
