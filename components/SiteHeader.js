import React from "react";
import Link from "next/link";

function SiteHeader() {
  return (
    <nav className="bg-blue-500 text-blue-100 px-8 py-3">
      <div className="max-w-7xl flex justify-between">
        {/* left side: logo */}
        <Link href="/">
          <a className="bg-green-300 p-2 font-bold uppercase  text-black rounded-lg transform -skew-y-2 skew-x-2">
            John is Learning
          </a>
        </Link>

        {/* right side: nav menu */}
        <div className="hidden md:flex items-center">
          <a
            className="font-semibold text-white px-3 py-2 hover:text-gray-200"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="font-semibold text-white px-3 py-2 hover:text-gray-200"
            href="#"
          >
            Docs
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SiteHeader;
