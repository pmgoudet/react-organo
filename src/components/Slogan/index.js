import styled from "styled-components";

const SloganContainer = styled.div`
  margin-left: 10%;
  font-size: 36px;
  color: #212121;
  font-weight: 400;
`;

function Slogan() {
  return (
    <SloganContainer>
      <h1>Pessoas e times</h1>
      <p>organizados em um só lugar!</p>
    </SloganContainer>
  );
}

export default Slogan;
