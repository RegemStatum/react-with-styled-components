import React, { FC } from "react";
import styled from "styled-components";
import { Car } from "../../context/AppProviderTypes";
import st from "../../styles";

type CarItemProps = Car;

const CarItem: FC<CarItemProps> = ({ name, speed, passengers }) => {
  return (
    <Wrapper>
      <header>
        <p>{name}</p>
        <p>
          <span>{speed}</span> km/h
        </p>
      </header>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum minima
          fugiat eligendi odit sit aliquam voluptas adipisci quidem illo
          deserunt?
        </p>
      </div>
      <div>
        {passengers.map((pas, index) => (
          <p key={index}>
            {pas}
            {`${index !== passengers.length - 1 ? " |" : ""}`}
          </p>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: ${st.indentations.ind_400};
  border-radius: ${st.borderRadiuses.br_2};
  box-shadow: ${st.shadows.sh_2};
  line-height: 1.25;

  header {
    display: flex;
    align-items: flex-end;
    padding: ${st.indentations.ind_1000} ${st.indentations.ind_800};
    background-color: ${st.colors.nt_9};
    font-family: "Roboto", sans-serif;

    p {
      color: ${st.colors.nt_2};
    }

    p:last-child {
      margin-left: auto;
      margin-right: ${st.indentations.ind_400};

      span {
        display: inline-block;
        font-size: ${st.fontSizes.fs_800};
        font-weight: 500;
        line-height: 1;
        color: ${st.colors.sp_ble_3};
      }
    }
  }

  & > div {
    display: flex;
    gap: ${st.indentations.ind_400};
    padding: ${st.indentations.ind_800};
    color: ${st.colors.nt_4};
  }

  & > div:first-of-type {
    padding-top: ${st.indentations.ind_1000};
    padding-bottom: ${st.indentations.ind_1000};
    line-height: 1.625;
  }

  & > div:last-of-type {
    padding-top: 0;
    color: ${st.colors.nt_2};
  }
`;

export default CarItem;
