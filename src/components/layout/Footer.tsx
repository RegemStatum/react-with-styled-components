import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";
import { HeaderWrapper } from "./Header";
import Navigation from "./Navigation";

const Footer: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <Navigation />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(HeaderWrapper)`
  background-color: ${st.colors.nt_1};

  nav a {
    color: ${st.colors.nt_10};
  }
`;

export default Footer;
