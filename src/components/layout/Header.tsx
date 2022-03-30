import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";
import Navigation from "./Navigation";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <div className="container">
        <Navigation />
      </div>
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.header`
  padding: ${st.indentations.ind_800} 0;
  background-color: ${st.colors.nt_8};

  nav a {
    color: ${st.colors.nt_1};
  }
`;

export default Header;
