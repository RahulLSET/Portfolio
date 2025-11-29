'use client'
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { IoLogoWhatsapp } from "react-icons/io";
import ContactForm from './components/ContactForm.jsx'
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

// const LazyAbout = dynamic(() => import('./components/About'), {
//   ssr: false,
//   loading: () => <p className="text-center">Loading...</p>,
// });

export default function Page() {
  const [showPointer, setShowPointer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPointer(true);
    }, 2000); // show after 2 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Qualification />
      <ContactForm />
      <Contact />
      {/* <a
        href="https://wa.me/919088124610"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4  shadow-lg shadow-green-500  animate__animated animate__wobble animate__slow animate__infinite right-4 bg-green-700 hover:bg-green-800 text-white p-4 rounded-full shadow-lg"
      >
        <IoLogoWhatsapp className="text-4xl" />
      </a> */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919088124610"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4  shadow-lg shadow-green-500  animate__animated animate__wobble animate__slow animate__infinite right-4 bg-green-700 hover:bg-green-800 text-white p-4 rounded-full shadow-lg"
        >
          <IoLogoWhatsapp className="text-4xl" />
        </a>

        {/* Pointer popup */}
        {showPointer && (<>


          <button onClick={()=>setShowPointer(false)}
            className="bg-red-600 absolute -top-43 right-92 z-10  bg-white animate__animated animate__zoomIn  hover:bg-red-700 text-black p-2 rounded-full shadow-lg"
          >
            <IoClose className="text-3xl font-bold" />
          </button>
          <div className="absolute -top-38 right-10 w-[350px]  bg-white   text-4xl  animate__animated animate__zoomIn font-semibold  text-green-700  px-3 py-5 rounded-tl-2xl  rounded-tr-2xl  rounded-bl-2xl shadow-md ">
            Chat with me 📲
          </div>
        </>
        )}
      </div>
    </div>
  );
}
