import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import styled from "styled-components";

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

const FormContainer = styled.form`
  margin-top: 40px;
  font-family: Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
`;

const times = [
  'Programação',
  'Front-End',
  'Data Science',
  'Devops',
  'UX e Design',
  'Mobile',
  'Inovação e Gestão'
];

function Formulario(props) {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })

  }

  return (
    <FormSectionContainer>
      <TituloH3>Preencha os dados para criar o card do colaborador.</TituloH3>
      <FormContainer action="" onSubmit={aoSalvar}>
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          obrigatorio={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          obrigatorio={true}
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          label='Times'
          itens={times}
          obrigatorio={true}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </FormContainer>
    </FormSectionContainer>
  );
}

export default Formulario;
