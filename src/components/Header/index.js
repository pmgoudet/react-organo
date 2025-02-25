import styled from "styled-components";
import bg from "../../img/header-bg.jpg";
import Logo from "../Logo";
import Slogan from "../Slogan";

const HeaderContainer = styled.header`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-color: #6278f7;
  height: 556px;
  width: auto;
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
