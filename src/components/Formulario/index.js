import styled from "styled-components";

const FormContainer = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;

  input,
  select {
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: none;
    margin-bottom: 10px;

    input ::placeholder {
      color: #afafaf;
      font-size: 14px;
    }
  }
`;

function Formulario() {
  return (
    <FormContainer action="">
      <label for="nome">Nome</label>
      <input type="text" id="nome" placeholder="Digite seu nome" />
      <label for="cargo">Cargo</label>
      <input type="text" id="cargo" placeholder="Digite seu cargo" />
      <label for="img">Imagem</label>
      <input type="text" id="img" placeholder="Informe o endereço da imagem" />
      <label for="time">Time</label>
      <select name="time" id="time">
        <option value=""></option>
        <option value="dog">Programação</option>
        <option value="cat">Front-End</option>
        <option value="hamster">Data Science</option>
        <option value="parrot">Devops</option>
        <option value="spider">UX e Design</option>
        <option value="goldfish">Mobile</option>
        <option value="goldfish">Inovação e Gestão</option>
      </select>
    </FormContainer>
  );
}

export default Formulario;
