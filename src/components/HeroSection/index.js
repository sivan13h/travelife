import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          autoplay
        />,
      `,
          }}
          src={Video}
          type="video/mp4"
          volume="0"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Traveling Made Easy</HeroH1>
        <HeroP>
          Let us organize everything for you, all you left to do is to realx and
          enjoy :)
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            primary
            dark
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Conact us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
