import React, { FC } from "react";
import styled, { css } from "styled-components";
import st from "../../styles";

type View = "success" | "info" | "error";

interface BadgeProps {
  view: View;
}

const Badge: FC<BadgeProps> = ({ children, view }) => {
  return <Wrapper view={view}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ view: View }>`
  width: max-content;
  padding: ${st.indentations.ind_100} ${st.indentations.ind_300};
  border-radius: ${st.borderRadiuses.br_1};

  ${(props) =>
    props.view === "success"
      ? css`
          background-color: ${st.colors.sp_tel_2};
          color: ${st.colors.sp_tel_9};
        `
      : props.view === "info"
      ? css`
          background-color: ${st.colors.sp_ble_2};
          color: ${st.colors.sp_ble_9};
        `
      : css`
          background-color: ${st.colors.sp_red_2};
          color: ${st.colors.sp_red_9};
        `}
`;

export default Badge;
