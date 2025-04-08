import styled from "styled-components";
import Card from "../Card";

const TimeContainer = styled.div`
  background-color: ${(props) => props.cor || "#E8FFFF"};
  padding:20px 15%;
  text-align: center;
`

const TituloH3 = styled.h3`
  font-size: 24px;
  text-align: center;
  margin: 20px
`;

function Time(props) {
  return (
    <TimeContainer>
      <TituloH3>{props.nome}</TituloH3>
      <Card />
    </TimeContainer>
  )
}

export default Time;