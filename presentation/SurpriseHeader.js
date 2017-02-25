import React from "react";
import { Heading } from "spectacle";
import styled from "styled-components";

import { withState, compose, lifecycle } from "recompose";

const AnimatedSpan = styled.span`
  opacity: ${({ show }) => show ? 1 : 0};
  transition: opacity 0.8s;
`;

const enhance = compose(
  withState("showSpan", "setShowSpan", false),
  lifecycle({
    componentDidMount() {
      setTimeout(() => this.props.setShowSpan(true), 2000);
    }
  })
);

const SurpriseHeader = enhance(({ showSpan }) =>
  <div>
    <Heading >webpack {<AnimatedSpan show={showSpan}>(2)</AnimatedSpan>} 101</Heading>
  </div>
);

export default SurpriseHeader;
