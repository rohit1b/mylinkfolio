import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headline from "./Headline";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black w-full text-white flex flex-col lg:flex-row justify-around items-center border-t-2 b-t-[#fff] p-5 pb-20 lg:pb-8 lg:p-8 space-y-4 lg:space-y-8 lg:space-y-0">

      <div className="w-full lg:w-1/4 flex items-center flex-col">
        <Headline heading={"Resume Lab"} text={"Your ATS Friendly Resume"} />
      </div>
      <div className="w-full lg:w-1/5 mt-4 flex flex-row items-center justify-around">
        <Link href="https://www.instagram.com/_rohitthakur10/" className="w-8">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </Link>
        <Link href="https://https://github.com/rohit1b/" className="w-8">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/rohit-singh-423050260/" className="w-8">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </Link>
      </div>
      <div className="itim w-full lg:w-1/5 text-center lg:text-left">
        <h2 className="text-2xl mb-2">Contact Us</h2>
        <p className="text-sm">deepaklg02@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
