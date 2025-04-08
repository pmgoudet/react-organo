import Header from "./components/Header";
import Formulario from "./components/Formulario";
import CardsSection from "./components/CardsSection";
import styled from "styled-components";
import { useState, useEffect } from "react";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  useEffect(() => {
    console.log(colaboradores);  // aqui, colaboradores terá o valor atualizado
  }, [colaboradores]);

  return (
    <AppContainer>
      <Header />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <CardsSection />
    </AppContainer>
  );
}

export default App;
