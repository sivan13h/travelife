import React from "react";
import Transportation from "../../images/transportation.svg";
import FourWD from "../../images/4wd.svg";
import Camping from "../../images/camping.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Transportation} />
            <ServicesH2>Transportation</ServicesH2>
            <ServicesP>
              Flight / Taxi / Bus, We will plan the best transportation options for you
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={FourWD} />
            <ServicesH2>4WD</ServicesH2>
            <ServicesP>
              4WD trips, We will arrange you a great vehicle, and also a driver if you wish for it.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Camping} />
            <ServicesH2>Camping</ServicesH2>
            <ServicesP>
              If you would like to camp, we will arrange all the equipment necessary.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
