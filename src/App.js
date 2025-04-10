import Header from "./components/Header";
import Formulario from "./components/Formulario";
import TimesSection from "./components/TimesSection";
import styled from "styled-components";
import { useState, useEffect } from "react";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

function App() {

  const times = [
    {
      nome: 'Programação',
      corCard: '#57C278',
      corFundo: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corCard: '#82CFFA',
      corFundo: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corCard: '#A6D157',
      corFundo: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corCard: '#E06B69',
      corFundo: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corCard: '#DB6EBF',
      corFundo: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corCard: '#FFBA05',
      corFundo: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corCard: '#FF8A29',
      corFundo: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([
    {
      nome: 'Pedro Goudet',
      cargo: 'devMaluco',
      time: 'Programação'
    }
  ])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  // useEffect(() => {
  //   console.log(colaboradores); // aqui, colaboradores terá o valor atualizado

  // }, [colaboradores]);

  return (
    <AppContainer>
      <Header />
      <Formulario times={times} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <TimesSection colaboradores={colaboradores} times={times} />
    </AppContainer>
  );
}


export default App;
