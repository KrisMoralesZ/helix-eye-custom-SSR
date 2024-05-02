import React from "react";
import styled from "styled-components";
import { GalaxiesLayout } from "../components/GalaxiesLayout";
import { LoadingSpinner } from "../components/LoadingSpinner";

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`;

export const Galaxies = (props) => {
  return (
    <GalaxiesPageWrapper>
      <h1>Galaxies</h1>
      {props.galaxies.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <GalaxiesLayout galaxies={props.galaxies} />
      )}
    </GalaxiesPageWrapper>
  );
};

Galaxies.defaultProps = {
  galaxies: [],
};
