import React from "react";
import {
  HeadingWhite,
  GetStartedSection,
  SecondaryButton,
} from "../styles/shared-styles";

const GetStarted = () => {
  return (
    <GetStartedSection>
      <div className="container mx-auto flex j-between a-center flex-column flex-row-md mt-2">
        <HeadingWhite>Simplify how your team works today.</HeadingWhite>
        <SecondaryButton>Get Started</SecondaryButton>
      </div>
    </GetStartedSection>
  );
};

export default GetStarted;
