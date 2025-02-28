import styled from "styled-components";
import Formulario from "../Formulario";

const FormSectionContainer = styled.section`
  background-color: #f6f6f6;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  width: 800px;
  margin: 100px auto;
  padding: 50px 80px;
  border-radius: 10px;
`;

const TituloH3 = styled.h3`
  font-size: 24px;
`;

function FormSection() {
  return (
    <FormSectionContainer>
      <TituloH3>Preencha os dados para criar o card do colaborador.</TituloH3>
      <Formulario />
    </FormSectionContainer>
  );
}

export default FormSection;
