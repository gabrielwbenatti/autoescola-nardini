import React from "react";
import styled, { css } from "styled-components";

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Gantari:wght@300;600;700&display=swap");
  font-family: "Gantari", sans-serif;
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
  ${(props) => css`
    background: url(${props.image}, rgba(0, 0, 0, 0.4));
    background-size: cover;
    background-position: center;
  `}
`;

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
  </Root>
);

export default Hero;
