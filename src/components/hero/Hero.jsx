import React from "react";

import intro from "../../assets/images/illustration-intro.svg";

//Styled components
import { HeroSection, HeroImage } from "./hero-styles";

import { PrimaryButton, Heading, Paragraph } from "../styles/shared-styles";

const Hero = () => {
  return (
    <HeroSection>
      <div className="container px-6 mx-auto flex j-between a-center flex-column flex-row-reverse-md">
        <div className="flex flex-column j-center a-center">
          <HeroImage src={intro} alt="intro__img" />
        </div>
        <div className="flex j-center a-center j-start-md flex-column">
          <Heading>Bring everyone together to build better products.</Heading>
          <Paragraph>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view
          </Paragraph>
          <div className="flex mt-2 j-start a-start">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
