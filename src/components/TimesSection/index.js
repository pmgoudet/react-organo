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

function TimesSection({ colaboradores, times }) {

  return (
    <div>
      <TituloH2>Minha Organização:</TituloH2>
      <LinhaH2 />
      {times.map((time, index) => (
        <Time colaboradores={colaboradores} key={index} nomeTime={time.nome} corFundo={time.corFundo} corCard={time.corCard} />
      ))}
    </div>
  );
}

export default TimesSection;