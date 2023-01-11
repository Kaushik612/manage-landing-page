import styled from "styled-components";

import pattern from "../../assets/images/bg-tablet-pattern.svg";

export const HeroSection = styled.section`
background-image: url(${pattern});
background-position: top;
`
export const HeroImage = styled.img`
/* min-width: fit-content; */

@media only screen and (max-width: 768px){
    width: 400px;
height: 400px;
}
`




