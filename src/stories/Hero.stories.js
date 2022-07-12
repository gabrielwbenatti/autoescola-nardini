import React from "react";

import Hero from "../components/Hero";
import BgHeroImage from "./assets/bg.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHeroImage}>
    <h1>Ganhe sua liberdade para ir e vir</h1>
    <p>A escola é lider em aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgHeroImage}>
    <h1>
      Ganhe sua <strong>liberdade</strong>
      <br />
      para ir e vir
    </h1>
    <ul>
      <li>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore fugit
        saepe.
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid
        sunt voluptatum ab necessitatibus?
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        quas architecto.
      </li>
    </ul>
  </Hero>
);
