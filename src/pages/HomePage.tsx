import React, { FC } from "react";
import styled from "styled-components";
import CarsGrid from "../components/cars/CarsGrid";
import SearchCars from "../components/cars/SearchCars";

const HomePage: FC = () => {
  return (
    <Wrapper className="container page-min-height">
      <SearchCars />
      <CarsGrid />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
