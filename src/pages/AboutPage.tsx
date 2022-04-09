import React, { FC } from "react";
import styled from "styled-components";
import NewslettersForm from "../components/forms/NewslettersForm";

const AboutPage: FC = () => {
  return (
    <Wrapper className="container page-min-height">
      <NewslettersForm />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AboutPage;
