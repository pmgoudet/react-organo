import styled from "styled-components";


const CardContainer = styled.div`
  position: relative;
  width: 242px;
  height: 252px;
  border-radius: 10px;
  font-family: 'Calibri', "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  text-align: center;
  padding: 20px;
`

const ImgContainer = styled.img`
  width: 120px;
  border-radius: 120px;
  margin: 20px;
  z-index: 2;
  position: relative;
`

const CardColor = styled.div`
  width: 282px;
  height: 92px;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.cor || "#82CFFA"};
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
`

const CardTitle = styled.h4`
color: #6278f7;
font-size: 25px;
`

const CardCargo = styled.h5`
font-size: 20px;
font-weight: 300;
`

function Card(props) {
  return (
    <CardContainer>
      <CardColor {...props.cor} />
      <ImgContainer src="https://thispersondoesnotexist.com/" alt="Foto do colega" />
      <CardTitle>{props.nome}</CardTitle>
      <CardCargo>{props.cargo}</CardCargo>
    </CardContainer>
  )
}


export default Card;
