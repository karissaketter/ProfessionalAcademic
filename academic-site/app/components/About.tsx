"use client";

import Image from "next/image";
import { Colours } from "../Colours";

const altStyle = { fontFamily: "var(--font-noto-sans), sans-serif" };

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-24 py-24 flex justify-center"
      style={{ backgroundColor: Colours.background }}
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">

        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: Colours.colour2 }}>
            About Me
          </h2>
          <div className="w-full h-px" style={{ backgroundColor: Colours.colour1 }} />
        </div>

        <div className="block md:hidden">
          <div className="float-right ml-4 mb-4 w-[160px] h-[200px] rounded-md overflow-hidden relative flex-shrink-0">
            <Image
              src="/headShot.jpg"
              alt="Headshot"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="text-sm leading-relaxed"
            style={{
              borderLeft: `4px solid ${Colours.colour4}`,
              paddingLeft: '1rem',
              color: Colours.colour2,
            }}
          >
            <p className="mb-4">
              Karissa is a master's student in the department of sociology at the University of British Columbia. Her research interests include global digital surveillance
              technologies and housing infrastructure. She is currently researching historical planning and lending policy in Vancouver, Canada and London, England.
            </p>
            <p>
              In September 2026, Karissa will join the Department of Sociology at the University of Toronto to begin her PhD program.
            </p>
            <br />
            <p>
              Karissa acknowledges she is a settler living on the unceded territories and traditional lands of the Coast Salish peoples.
              Born in Metro Vancouver, she resides in Vancouver, Langley, and on the Sunshine Coast. Specifically, on the ancestral terrority of the{" "}
              <span style={altStyle}>q̓ic̓əy̓</span>{" "}
                 (Katzie), <span style={altStyle}>q̓ʷɑ:n̓ƛ̓ən̓</span>{" "}
                (Kwantlen), <span style={altStyle}>Máthkwi</span>{" "}
                (Matsqui), <span style={altStyle}>se'mya'me</span>{" "}
                (Semiahmoo), <span style={altStyle}>xʷməθkʷəy̓əm</span>{" "}
                (Musqueam), <span style={altStyle}>Sḵwx̱wú7mesh</span>{" "}
                (Squamish), <span style={altStyle}>səlilwətaɬ</span>{" "}
                (Tsleil-Waututh), and <span style={altStyle}>shíshálh</span>{" "}
                (Sechelt)
              
              First Nations.
            </p>
          </div>
          <div className="clear-both" />
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-16 items-start">
          <div className="relative w-full h-[520px] lg:h-[640px] rounded-md overflow-hidden">
            <Image
              src="/headShot.jpg"
              alt="Headshot"
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          <div
            className="col-span-2 flex flex-col gap-7 leading-relaxed p-8"
            style={{ borderLeft: `4px solid ${Colours.colour4}` }}
          >
            <p className="text-sm leading-relaxed" style={{ color: Colours.colour2 }}>
              Karissa is a master's student in the department of sociology at the University of British Columbia. Her research interests include global digital surveillance
              technologies and housing infrastructure. She is currently researching historical planning and lending policy in Vancouver, Canada and London, England.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: Colours.colour2 }}>
              In September 2026, Karissa will join the Department of Sociology at the University of Toronto to begin her PhD program.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: Colours.colour2 }}>
              Karissa acknowledges she is a settler living on the unceded territories and traditional lands of the Coast Salish peoples.
              Born in Metro Vancouver, she resides in Vancouver, Langley, and on the Sunshine Coast. Specifically, on the ancestral terrority of the{" "}
              <span style={altStyle}>q̓ic̓əy̓</span>{" "}
                 (Katzie), <span style={altStyle}>q̓ʷɑ:n̓ƛ̓ən̓</span>{" "}
                (Kwantlen), <span style={altStyle}>Máthkwi</span>{" "}
                (Matsqui), <span style={altStyle}>se'mya'me</span>{" "}
                (Semiahmoo), <span style={altStyle}>xʷməθkʷəy̓əm</span>{" "}
                (Musqueam), <span style={altStyle}>Sḵwx̱wú7mesh</span>{" "}
                (Squamish), <span style={altStyle}>səlilwətaɬ</span>{" "}
                (Tsleil-Waututh), and <span style={altStyle}>shíshálh</span>{" "}
                (Sechelt)
              
              First Nations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;