import React, { FC } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppProvider";
import st from "../../styles";
import CarItem from "./CarItem";

interface CarsGridProps {}

const CarsGrid: FC<CarsGridProps> = () => {
  const { carsToShow } = useAppContext();

  return (
    <Wrapper>
      {carsToShow.map((car, index) => {
        return <CarItem key={index} {...car} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: ${st.indentations.ind_1000};
  grid-template-columns: 1fr;
  margin: ${st.indentations.ind_1200} 0;

  @media (min-width: ${st.breakpoints.sm}) {
    gap: ${st.indentations.ind_800};
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${st.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default CarsGrid;
