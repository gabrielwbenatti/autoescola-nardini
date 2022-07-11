import React from "react";
import styled, { css } from "styled-components";

import { breakAt, BreakpointsSizes } from "./Breakpoints";

const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2;
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  li::before {
    content: "\\2713\\0020";
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

const Root = styled.div`
  color: #fff;
  padding: 80px 0px;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointsSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointsSizes.lg)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </Root>
);

export default Hero;
