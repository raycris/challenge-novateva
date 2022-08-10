import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <Container>
      <InfoContainer>
        <Label>Nombre</Label>
        <InputName placeholder="Person" />
      </InfoContainer>
      <InfoContainer>
        <Label>Descripcion</Label>
        <InputName
          placeholder="Tabla usada para x y z"
          style={{ height: 70, width: 828 }}
        />
      </InfoContainer>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  width: 100%;
  margin: 104px 94px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.p`
  color: #757575;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const InputName = styled.input`
  width: 394px;
  border: 1px solid #dfdfdf;
  height: 42px;
  padding-top: 8px;
  padding-left: 18px;
  border-radius: 8px;
`;
