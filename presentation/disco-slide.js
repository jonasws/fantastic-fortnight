import { Heading } from "spectacle";
import styled, { keyframes } from "styled-components";


const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  80% {
    transform: rotate(380deg);
  }

  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

export const DiscoHeading = styled(Heading)`
  animation: ${rotate} 0.6s ease-out 1 forwards;
`;
