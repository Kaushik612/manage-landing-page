import React, { useState } from "react";
import { Points } from "../features/features-styles";
import { InputText } from "../styles/shared-styles";
import { FooterLink, FooterSection } from "./footer-styles";

import logo from "../../assets/images/logo-footer.svg";

//React Icons
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import toast from "react-hot-toast";
import validator from "validator";

const Footer = () => {
  const leftLinks = ["Home", "Pricing", "Products", "About Us"];
  const rightLinks = ["Careers", "Community", "Privacy Policy"];
  const [email, setEmail] = useState("");

  const onGoBtnClicked = () => {
    console.log(email);
    if (validator.isEmail(email)) {
      toast.success("Thank you for subscribing to our newsletter!");
    } else {
      toast.error("Please provide a valid email address");
    }
  };

  return (
    <FooterSection>
      <div className="container mx-auto flex flex-column-reverse flex-row-md j-between a-center">
        {/* Social Links */}
        <div className="flex flex-column flex-row-sm j-center a-center mt-2 gap-1">
          <img src={logo} alt="manage logo" />
          <div className="flex j-center a-center mt-2 gap-1 mb-2">
            <FaFacebookSquare size={30} color="white" cursor={"pointer"} />
            <FaTwitter size={30} color="white" cursor={"pointer"} />
            <FaYoutube size={30} color="white" cursor={"pointer"} />
            <FaPinterest size={30} color="white" cursor={"pointer"} />
            <FaInstagram size={30} color="white" cursor={"pointer"} />
          </div>
        </div>

        <div className="grid mt-2 p-23-sm">
          <ul className="text-white">
            {leftLinks.map((link, index) => (
              <FooterLink key={index}>{link}</FooterLink>
            ))}
          </ul>
          <ul className="text-white">
            {rightLinks.map((link, index) => (
              <FooterLink key={index}>{link}</FooterLink>
            ))}
          </ul>
        </div>

        <div className="flex flex-column j-center a-center gap-1 mt-2-sm">
          <div className="flex gap-1">
            <InputText
              type="text"
              placeholder="Updates in your inbox..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputText>
            <Points onClick={onGoBtnClicked}>Go</Points>
          </div>
        </div>
      </div>
      <div className="flex j-center a-center gap-1">
        <span className="text-white mt-2 mb-2">
          Copyright &copy; 2022. All Rights Reserved
        </span>
      </div>
    </FooterSection>
  );
};

export default Footer;
