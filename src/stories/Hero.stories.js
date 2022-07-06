import React from "react";

import Hero from "../components/Hero";
import BgHeroImage from "./assets/bg.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgHeroImage}>
    <p>A escola é lider em aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgHeroImage}>
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
