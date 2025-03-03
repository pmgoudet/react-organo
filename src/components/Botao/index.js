import styled from "styled-components";

const BtnContainer = styled.a`
  display: inline-block;
  padding: 20px;
  background-color: #6278f7;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    background-color: rgb(60, 78, 184);
  }
`;

function Botao({ endereco, texto }) {
  return <BtnContainer href={endereco}>{texto}</BtnContainer>;
}

export default Botao;
