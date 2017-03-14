import React from "react";
import { Heading } from "spectacle";
import styled from "styled-components";

import { withState, compose, lifecycle } from "recompose";

const AnimatedSpan = styled.span`
  display: inline-block;
  color: goldenrod;
  opacity: ${({ show }) => show ? 1 : 0};
  width: ${({ show }) => show ? "9rem" : 0};
  transition: opacity 0.3s, width 0.7s;
`;

const enhance = compose(
  withState("showSpan", "setShowSpan", false),
  lifecycle({
    componentDidMount() {
      setTimeout(() => this.props.setShowSpan(true), 1500);
    }
  })
);

const SurpriseHeader = enhance(({ showSpan }) =>
  <Heading>webpack <AnimatedSpan show={showSpan}>(2)</AnimatedSpan> 101</Heading>
);

export default SurpriseHeader;
