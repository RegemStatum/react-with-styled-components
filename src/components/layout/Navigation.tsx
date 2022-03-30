import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import st from "../../styles";

const Navigation: FC = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  gap: ${st.indentations.ind_800};
  font-weight: 500;
`;

export default Navigation;
