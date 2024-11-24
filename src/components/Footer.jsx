import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return(
    <footer className="w-full px-4 py-8 bg-black flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <p className="text-white text-sm font-bold text-center md:text-left md:text-base lg:text-xl">
          All rights reserved. © 2024 | ChatBot
        </p>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <FaXTwitter className="text-white" size="1.5rem" />
        <FaLinkedin className="text-white" size="1.5rem" />
        <FaInstagramSquare className="text-white" size="1.5rem" />
      </div>
    </footer>
        
    )


};


export default Footer;