"use client";

import Image from "next/image";
import { Colours } from "../Colours";

const Hero = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center h-[60vh] md:h-screen"
      style={{ backgroundColor: Colours.background }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src="/vanImage2.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.82 }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${Colours.background} 0%, rgba(18,18,14,0.7) 35%, rgba(18,18,14,0.2) 65%, transparent 100%)`,
          }}
        />

        <div className="absolute left-0 right-0 px-6 md:px-16" style={{ bottom: "20%" }}>
          <span
            className="block mb-2"
            style={{
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E8DDD0",
            }}
          >
           MA student, urban sociology
          </span>

          <h1
            className="text-2xl md:text-5xl font-semibold mb-3"
            style={{ color: "#F7F3ED" }}
          >
            Karissa Ketter
          </h1>

          <div
            style={{
              width: "32px",
              height: "1px",
              background: `${Colours.colour1}88`,
              marginBottom: "0.8rem",
            }}
          />

          <p
            style={{
              fontSize: "13px",
              fontWeight: 300,
              letterSpacing: "0.06em",
              color: "#E8DDD0",
            }}
          >
            University of British Columbia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;