import React from "react";
import { About } from "../components/about/About";
import { Hobies } from "../components/hobbies/hobies";
import { Presentation } from "../components/presentation/Presentation";
import { Skills } from "../components/skills/Skills";

export const HomePage = () => {
  return (
    <>
      <Presentation />
      <About />
      <Skills />
      <Hobies />
    </>
  );
};