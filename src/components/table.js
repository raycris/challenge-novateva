import React from "react";
import styled from "styled-components";

const attributes = ["NOMBRE", "TIPO", "DESCRIPCION", "CONSTRAINTS", "DELETE"];

const Table = (props) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <LabelContainer>
        {attributes.map((item) => (
          <Label key={item}>{item}</Label>
        ))}
      </LabelContainer>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  margin: 0 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Label = styled.p`
  line-height: 14px;
  font-size: 12;
  font-weight: 400;
  color: #7c7c7c;
`;

const Title = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;
const TitleContainer = styled.div`
  margin: 18px 100px;
`;
