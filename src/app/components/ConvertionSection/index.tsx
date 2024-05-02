import React from "react";
import { Link } from "react-router-dom";
import { StyledConversionSection } from "./ConversationSection.sc";

const SPACESHIP_IMAGE = "https://i.imgur.com/dBwEHOn.png";

export const ConversionSection = () => {
  return (
    <StyledConversionSection>
      <img className="picture" src={SPACESHIP_IMAGE} alt="Space ship" />
      <h2 className="title">¡Explore the universe!</h2>
      <Link className="link" to="/galaxias">
        Start now
      </Link>
    </StyledConversionSection>
  );
};
