import styled from "styled-components";
import bg from "../../img/header-bg.jpg";
import Logo from "../Logo";
import Slogan from "../Slogan";

const HeaderContainer = styled.header`
  background-image: url(${bg});
  background-size: cover;
  height: 556px;
  width: 100%;
  background-color: aquamarine;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Slogan />
    </HeaderContainer>
  );
}

export default Header;
