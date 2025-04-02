import styled from "styled-components";

const InputContainer = styled.input`
  width: 100%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border: none;
  margin-bottom: 10px;
  margin-top: 10px;
  box-sizing: border-box;

  input::placeholder {
    color: #afafaf;
    font-size: 14px;
  }
`;

const LabelContainer = styled.div`
  label {
    display: block;
  }
`;


function CampoTexto(props) {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div>
      <LabelContainer>{props.label}</LabelContainer>
      <InputContainer value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio} />
    </div>
  );
}

export default CampoTexto;
