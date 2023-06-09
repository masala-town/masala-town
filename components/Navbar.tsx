import { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";

import logo from "../public/assets/Masala-Town-Logo_1.webp";

const navigation = [
  { name: "About Us", href: "/#about" },
  { name: "Our Specialities", href: "#special" },
  { name: "Catering", href: "#catering" },
  { name: "Buffet", href: "#buffet" },
  { name: "Contact Us", href: "#contact" },
];
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const doMagic = () => {
      setIsOpen(false);
    };

    Router.events.on("routeChangeStart", doMagic); // add listener

    return () => {
      Router.events.off("routeChangeStart", doMagic); // remove listener
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 bg-black  
      `}
      // ${scrolled ? "bg-black " : "bg-transparent"}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 " aria-label="Top">
        <div className="w-full  sm:-mb-0 flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="mr-auto md:mx-0 ">
              <Link href="/">
                <div className="cursor-pointer">
                  <span className="sr-only">Himalayan Kitchen</span>
                  <div className="hover:scale-110 duration-300 transition-transform">
                    {" "}
                    <Image
                      priority
                      height={100}
                      width={150}
                      // className="brightness-0 invert"
                      // className="lg:w-52 w-40 h-20"
                      alt="Masala Town Logo"
                      src={logo}
                    />
                  </div>
                </div>
              </Link>
            </div>
            {/* MD+ */}
            <div className="hidden gap-8 text-center items-center relative lg:flex ">
              {navigation.map((navItem) => (
                <Link key={navItem.name} href={navItem.href}>
                  <span
                    className={`text-white hover:text-primeBeige text-lg cursor-pointer font-bold duration-300 transition-colors hover:text-primeYellow`}
                  >
                    {navItem.name}
                  </span>
                </Link>
              ))}
              <Link href={"https://masala-town.square.site/"} target={"_blank"}>
                <button className="relative block mx-auto group  cursor-pointer w-fit">
                  <span
                    className={`absolute inset-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 bg-primeBeige  translate-y-0 translate-x-0 rounded-md`}
                  ></span>

                  <span
                    className={`relative inline-block px-3 py-1.5 text-lg  font-bold tracking-widest text-white border border-current group-active:text-opacity-75 rounded-md bg-black`}
                  >
                    Order Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* PHONES -> TILL MD */}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex  lg:hidden absolute top-10 md:top-8 right-4 ml-auto text-white"
          aria-label="Menu Mobile Button"
        >
          <svg
            className="w-8 h-8 !fill-white"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed transition-all top-0 left-0 w-full bg-black h-screen z-[100]  text-lg`}
        >
          <div className="flex justify-between">
            {/* <Image
              priority
              // height={120}
              // width={160}
              className="lg:w-72 w-40 h-20 pl-4"
              alt="Himalayan Kitchen Logo"
              src={logo}
            /> */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute top-4 right-4 text-white text-5xl"
              aria-label="Menu Mobile Button"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center gap-4 h-full pb-10 text-white">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg block font-bold `}
              >
                <span onClick={() => setIsOpen(false)}>{link.name}</span>
              </Link>
            ))}
            <Link href={"https://masala-town.square.site/"}>
              <button className="relative block mx-auto group  cursor-pointer w-fit">
                <span
                  className={`absolute inset-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 bg-primeBeige  translate-y-0 translate-x-0 rounded-md`}
                ></span>

                <span
                  className={`relative inline-block px-3 py-1.5 text-lg  font-bold tracking-widest text-white border border-current group-active:text-opacity-75 rounded-md bg-black`}
                >
                  Order Now
                </span>
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
