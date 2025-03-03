import styled from "styled-components";

const SelectContainer = styled.div`
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

function SelectContainerDiv() {
  return (
    <SelectContainer>
      <label htmlFor="time">Time</label>
      <select name="time" id="time">
        <option value="Programação">Programação</option>
        <option value="Front-End">Front-End</option>
        <option value="Data Science">Data Science</option>
        <option value="Devops">Devops</option>
        <option value="UX e Design">UX e Design</option>
        <option value="Mobile">Mobile</option>
        <option value="Inovação e Gestão">Inovação e Gestão</option>
      </select>
    </SelectContainer>
  );
}

export default SelectContainerDiv;
