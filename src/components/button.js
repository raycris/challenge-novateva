import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Container>
      <Label>{props.title}</Label>
    </Container>
  );
};

export default Button;

const Container = styled.button`
  width: 158px;
  height: 34px;
  margin: 22px 150px 12px 0;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
  background-color: #3da2ea;
`;
const Label = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 18px;
`;
