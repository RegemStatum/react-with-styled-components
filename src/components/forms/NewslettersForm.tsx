import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import st from "../../styles";
import InputWr from "../../styles/mixins/Input";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const NewslettersForm: FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const email = emailInputRef.current!.value;
    if (email.length <= 3 || !email.includes("@")) {
      emailInputRef.current!.value = "";
      setIsLoading(false);
      setErrorMsg("Invalid Input!");
      return;
    }

    for (let i = 0; i <= 10000; i++) {
      console.log("hello");
    }

    // send email to the server
    // catch errors

    emailInputRef.current!.value = "";
    setIsLoading(false);
    setIsSuccess(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
      setErrorMsg("");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess, errorMsg]);

  return (
    <Wrapper>
      <form>
        <InputWr type="email" ref={emailInputRef} />
        <Button view="secondary" onClick={handleSubscribe}>
          Subscribe
        </Button>
        {isLoading && <Badge view="info">Loading</Badge>}
        {isSuccess && <Badge view="success">Success</Badge>}
        {errorMsg && <Badge view="error">{errorMsg}</Badge>}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form > div {
    margin-top: ${st.indentations.ind_400};
  }
`;

export default NewslettersForm;
