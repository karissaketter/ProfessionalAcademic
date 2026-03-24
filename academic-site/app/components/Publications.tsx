"use client";

import Link from "next/link";
import { Colours } from "../Colours";

const publications = [
  {
    title: "Loprem Ipsum is simply dummy",
    description: "Loprem Ipsum is dummy",
    href: "#",
  },
  {
    title: "Loprem Ipsum is dummy",
    description: "Loprem is simply dummy",
    href: "#",
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="w-full px-6 md:px-24 py-24 flex justify-center"
      style={{ backgroundColor: Colours.background }}
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">

        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: Colours.colour2 }}>
            Publications
          </h2>
          <div className="w-full h-px" style={{ backgroundColor: Colours.colour1 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {publications.map((pub) => (
            <Link key={pub.title} href={pub.href} className="group">
              <div
                className="h-full p-8 rounded-sm transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-md"
                style={{
                  backgroundColor: Colours.colour4,  // darkened card bg for contrast
                  borderLeft: `4px solid ${Colours.colour2}`,
                }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#F7F3ED" }}>
                  {pub.title}
                </h3>
                <p style={{ color: "#E8DDD0" }}>{pub.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publications;