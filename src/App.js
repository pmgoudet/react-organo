import logo from "../src/img/logo_branco.png";
import "./App.css";
import styled from "styled-components";

const headerContainer = styled.header`
  background-image: url(img/header-bg.jpg);
  background-size: cover;
  height: 556px;
  width: 100%;
`;

function App() {
  return (
    <div className="App">
      <headerContainer>
        <img src={logo} alt="logo" />
        <h1>Pessoas e times</h1>
        <p>organizados em um só lugar!</p>
      </headerContainer>
    </div>
  );
}

export default App;
