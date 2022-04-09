import React, { FC } from "react";
import styled, { css } from "styled-components";
import st from "../../styles";

type View = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  view: View;
  onClick: any;
}

const Button: FC<ButtonProps> = ({ children, onClick, view }) => {
  return (
    <Wrapper onClick={onClick} view={view}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ view: View }>`
  padding: ${st.indentations.ind_400} ${st.indentations.ind_800};
  border-radius: ${st.borderRadiuses.br_1};
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: ${st.colors.nt_9};
  }

  ${(props) =>
    props.view === "primary"
      ? css`
          background-color: ${st.colors.nt_2};
          color: ${st.colors.nt_9};
          &:hover {
            background-color: ${st.colors.nt_2};
          }
        `
      : props.view === "secondary"
      ? css`
          outline: 1px solid ${st.colors.nt_2};
          color: ${st.colors.nt_2};
        `
      : css`
          color: ${st.colors.nt_2};
        `}
`;

export default Button;
