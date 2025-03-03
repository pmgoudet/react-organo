import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import SelectContainerDiv from "../Select";
import styled from "styled-components";

const FormContainer = styled.form`
  margin-top: 40px;
  font-family: Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
`;

function Formulario() {
  return (
    <FormContainer action="">
      <CampoTexto label="Nome" id="nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" id="cargo" placeholder="Digite seu cargo" />
      <CampoTexto
        label="Imagem"
        id="img"
        placeholder="Informe o endereço da imagem"
      />
      <SelectContainerDiv />
      <Botao endereco="#" texto="Criar card" />
    </FormContainer>
  );
}

export default Formulario;
