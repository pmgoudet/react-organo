import styled from "styled-components";
import Card from "../Card";

const TimeContainer = styled.div`
  background-color: ${(props) => props.$cor || "#E8FFFF"};
  padding:20px 15%;
  text-align: center;
`

const TituloH3 = styled.h3`
  font-size: 24px;
  text-align: center;
  margin: 20px
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`

function Time({ nomeTime, corFundo, corCard, colaboradores }) {

  const colaboradoresFiltrados = colaboradores.filter(colaborador => colaborador.time === nomeTime);

  if (colaboradoresFiltrados.length === 0) {
    return null;
  }

  return (
    <TimeContainer $cor={corFundo} >
      <TituloH3>{nomeTime}</TituloH3>
      <CardsContainer>
        {colaboradoresFiltrados.map((colaborador, index) => (
          <Card
            key={index}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            corCard={corCard}
          />
        ))}
      </CardsContainer>

    </TimeContainer>
  )
}

export default Time;

