import styled from "styled-components";
import Time from "../Time";

const TituloH2 = styled.h2`
  color: #6278f7;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
`;

const LinhaH2 = styled.hr`
  width: 50px;
  margin: auto;
  border-top: 3px solid #6278f7;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

function CardsSection() {
  return (
    <div>
      <TituloH2>Minha Organização:</TituloH2>
      <LinhaH2 />
      <Time nome='Programação' />
      <Time nome='FrontEnd' />
      <Time nome='Data Science' />
      <Time nome='Devops' />
      <Time nome='UX e Design' />
      <Time nome='Mobile' />
      <Time nome='Inovação e Gestão' />
    </div>
  );
}

export default CardsSection;
