import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import Form from "./components/form";

function App() {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;
