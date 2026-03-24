"use client";

import { Colours } from "../Colours";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="w-full px-6 md:px-12 py-8"
      style={{ backgroundColor: Colours.colour4 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "#F7F3ED" }}>
            Contact
          </h2>
          <div className="w-full h-px" style={{ backgroundColor: "#F7F3ED44" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <p style={{ color: "#F7F3ED" }}>Email: test@example.com</p>
          <p style={{ color: "#F7F3ED" }}>Phone: 432423342324</p>
          <p style={{ color: "#F7F3ED" }}>Vancouver, Canada</p>
        </div>

        <div className="flex justify-start md:justify-end">
          <p className="max-w-md text-xs leading-relaxed" style={{ color: "#E8DDD0" }}>
            © {new Date().getFullYear()} Karissa Ketter. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;