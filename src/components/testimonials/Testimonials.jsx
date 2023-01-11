import React from "react";
import {
  Heading,
  PageSection,
  Paragraph,
  PrimaryButton,
} from "../styles/shared-styles";

import avatar1 from "../../assets/images/avatar-ali.png";
import avatar2 from "../../assets/images/avatar-anisha.png";
import avatar3 from "../../assets/images/avatar-richard.png";
import avatar4 from "../../assets/images/avatar-shanai.png";
import { SubHeading } from "../features/features-styles";

// Import Swiper React components
import SwiperCore, { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

SwiperCore.use([EffectCube, Pagination]);

const Testimonials = () => {
  const slides = [
    {
      img: avatar1,
      name: "Ali Bravo",
      review:
        "'We have been able to cancel so many other subscriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused.'",
    },
    {
      img: avatar2,
      name: "Anisha Li",
      review:
        "'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated'",
    },
    {
      img: avatar3,
      name: "Richard Watts",
      review:
        "'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!'",
    },
    {
      img: avatar4,
      name: "Shanai Gough",
      review:
        "'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.'",
    },
  ];
  return (
    <PageSection>
      <div className="flex flex-column mb-2 j-center a-center p-23">
        <Heading>What they've said?</Heading>
        <div>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide.img} alt="Avatar" className="mt-2" />
                <SubHeading className="text-center mt-2">
                  {slide.name}
                </SubHeading>
                <Paragraph className="mt-2">{slide.review}</Paragraph>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <PrimaryButton className="mt-2">Get Started</PrimaryButton>
      </div>
    </PageSection>
  );
};

export default Testimonials;
