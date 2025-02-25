import logo from "../../img/logo_branco.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  margin: 0 10%;
  padding: 100px 0;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
