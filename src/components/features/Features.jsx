import React from "react";
import { PageSection, Heading, Paragraph } from "../styles/shared-styles";
import { Points, SubHeading } from "./features-styles";

const Features = () => {
  const features = [
    {
      point: "01",
      name: "Track company-wide progress",
      subheading:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      point: "02",
      name: "Advanced built-in reports",
      subheading:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
    {
      point: "03",
      name: "Everything you need in one place",
      subheading:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
  ];

  return (
    <PageSection>
      <div className="container mx-auto px-6 flex j-between flex-column flex-row-md">
        <div className="flex flex-column mb-2">
          <Heading>What's different about Manage?</Heading>
          <Paragraph>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </Paragraph>
        </div>

        <div>
          {features.map((feature, index) => (
            <div key={index} className="flex flex-column mb-2">
              <div className="flex j-center a-center gap-1 bg-red p-1">
                <Points>{feature.point}</Points>
                <SubHeading>{feature.name}</SubHeading>
              </div>
              <Paragraph className="mt-1">{feature.subheading}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Features;
