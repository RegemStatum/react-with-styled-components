import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";

const Footer: FC = () => {
  return (
    <Wrapper>
      Footer<Logo>123</Logo>
    </Wrapper>
  );
};

const Logo = styled.div`
  ${st.shadows.boxShadow1};
`;

const Wrapper = styled.div`
  color: ${st.colors.sp_red_1};
  background-color: ${st.colors.nt_2};
  padding-left: ${st.indentations.ind_300};
  ${st.fontSizes.fs_500};
`;

export default Footer;
