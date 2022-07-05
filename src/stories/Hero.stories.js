import React from "react";

import Hero from "../components/Hero";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <p>A escola é lider em aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <ul>
      <li>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore fugit
        saepe, dolorem quaerat expedita minima neque nulla sint perferendis
        facilis delectus ad maiores ipsa officia? Ut ipsum dicta consequatur
        magnam.
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid
        sunt voluptatum ab necessitatibus ipsa officia consectetur doloribus,
        rerum numquam earum provident eius nesciunt molestias quidem natus odio
        aliquam excepturi?
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        quas architecto sed nihil! Distinctio, a deserunt dolor atque neque,
        eaque laborum, laboriosam dolore nulla dolorem ad voluptates facere ex
        tempore.
      </li>
    </ul>
  </Hero>
);
