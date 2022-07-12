import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { breakAt, BreakpointsSizes } from "./Breakpoints";

const colorYellow = "#ffc107";

// const Title = styled.h1`
//   position: relative;
//   font-weight: 700;
//   letter-spacing: 2;
//   /* margin-bottom: 25px; */
//   padding-bottom: 25px;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
//   font-size: 2.5rem;

//   /* font-size: 3.75rem; */

//   &::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: -3px;
//     background-color: ${colorYellow};
//     height: 5px;
//     width: 70px;
//   }
// `;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;

    &::before {
      content: "\\2713\\0020";
      color: ${colorYellow};
    }
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

const Hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

// Hero.defaultProps = {
//   title: "Meu titulo",
// };

export default Hero;
