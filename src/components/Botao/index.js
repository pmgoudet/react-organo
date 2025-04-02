import styled from "styled-components";

const BtnContainer = styled.button`
  display: inline-block;
  padding: 20px;
  background-color: #6278f7;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #95FFD4;
  }
`;

function Botao(props) {
  return <BtnContainer>{props.children}</BtnContainer>;
}
//! O props children permite que o botão renderize tudo o que estiver dentro dele do jeito que tiver, tipo pra poder usar emoji e mais coisa, sei la oq (ver index.js da pasta Fomulario)

export default Botao;
