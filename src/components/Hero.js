import React from "react";
import styled from "styled-components";

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

const Hero = ({ title, children }) => (
  <div>
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
  </div>
);

export default Hero;
