import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
      <div className="text-xl">Bappa Flour mill</div>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <img
          className={open ? "hidden" : "block"}
          src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
          width="40"
        />
        <img
          className={open ? "block" : "hidden"}
          src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
          width="40"
        />
      </button>

      <div className={`${open ? "block" : "hidden"} md:flex w-full md:w-auto text-right mt-5 md:mt-0`}>
        {["Home", "Services", "About us", "Gallery", "Visit Us"].map((item, i) => (
          <a
            key={i}
            href={`#${item.replace(" ", "")}`}
            className="block md:inline-block hover:text-blue-500 px-3 py-3"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="hidden md:flex">
        <a href="tel:+123">
          <div className="flex items-center bg-[#c8a876] text-white font-medium p-2 rounded-md">
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 mr-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284..."></path>
            </svg>
            Call now
          </div>
        </a>
      </div>
    </nav>
  );
}
