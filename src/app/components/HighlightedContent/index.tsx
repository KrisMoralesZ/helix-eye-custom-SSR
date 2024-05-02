import React from "react";
import { LandingCard } from "../LandingCard";
import { StyledHighlitedContent } from "./styles";

export const HighlightedContent = () => {
  return (
    <StyledHighlitedContent>
      <h2>All the universe to discover</h2>
      <p className="message">
        With a single search access all history and public files collected by
        NASA
      </p>
      <div className="cards-wrapper">
        <LandingCard data="1k" message="imágenes" />
        <LandingCard data="300" message="videos" />
        <LandingCard data="60" message="años de historia" />
      </div>
    </StyledHighlitedContent>
  );
};
