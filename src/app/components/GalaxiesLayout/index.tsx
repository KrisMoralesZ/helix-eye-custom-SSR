import React from "react";
import { GalaxyCard } from "../GalaxyCard";
import { StyledGalaxiesLayout } from "./styles";
import { GalaxiesProps } from "./types";

export const GalaxiesLayout = ({ galaxies }: GalaxiesProps) => {
  console.log("%%%%%%", galaxies[0].data);
  return (
    <StyledGalaxiesLayout>
      {galaxies?.map((galaxy) => (
        <GalaxyCard key={galaxy.data[0].nasa_id} galaxy={galaxy} />
      ))}
    </StyledGalaxiesLayout>
  );
};
