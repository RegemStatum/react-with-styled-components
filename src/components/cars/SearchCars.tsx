import React, { FC, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppProvider";
import st from "../../styles";

const SearchCars: FC = () => {
  const { searchCarsByName } = useAppContext();
  const [searchCarQuery, setSearchCarQuery] = useState("");

  const handleSearchChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.value;
    setSearchCarQuery(name);
    searchCarsByName(name);
  };

  return (
    <Wrapper>
      <input
        type="text"
        value={searchCarQuery}
        onChange={handleSearchChange}
        placeholder="Search some cars"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: ${st.indentations.ind_1200} 0;
  border-radius: ${st.borderRadiuses.br_2};
  box-shadow: ${st.shadows.sh_3};
  overflow: hidden;

  input {
    width: 100%;
    padding: ${st.indentations.ind_600} ${st.indentations.ind_400};
    font-size: ${st.fontSizes.fs_600};
    color: ${st.colors.nt_2};

    &:focus {
      outline: none;
    }
  }
`;

export default SearchCars;
