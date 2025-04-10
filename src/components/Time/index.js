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
  return (
    <TimeContainer $cor={corFundo}>
      <TituloH3>{nomeTime}</TituloH3>
      <CardsContainer >
        {colaboradores.map((colaborador, index) => (
          <Card key={index} nome={colaborador.nome} cargo={colaborador.cargo} />
        ))}
      </CardsContainer>
    </TimeContainer>
  )
}

export default Time;

