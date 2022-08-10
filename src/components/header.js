import React from "react";
import styled from "styled-components";
import Button from "./button";

const Header = () => {
  return (
    <Container>
      <ContentContainer>
        <HeaderLabel>Nueva Tabla</HeaderLabel>
        <Button title="GUARDAR" />
      </ContentContainer>
      <HearderLine />
    </Container>
  );
};

export default Header;

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderLabel = styled.p`
  margin: 20px 94px;
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
`;

const HearderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4c5d68;
`;
