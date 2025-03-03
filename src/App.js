import Header from "./components/Header";
import FormContainer from "./components/FormSection";
import CardsSection from "./components/CardsSection";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <FormContainer />
      <CardsSection />
    </AppContainer>
  );
}

export default App;
