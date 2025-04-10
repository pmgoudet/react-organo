import styled from "styled-components";

const ListaSuspensaContainer = styled.div`
  select {
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    border: none;
    margin-bottom: 10px;
    margin-top: 10px;
    box-sizing: border-box;
  }
`;


const ListaSuspensa = (props) => {

  return (
    <ListaSuspensaContainer>
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}
      >
        {props.itens.map((item) => <option key={item.nome}>{item.nome}
        </option>)}
      </select>
    </ListaSuspensaContainer>
  );
}


export default ListaSuspensa;
