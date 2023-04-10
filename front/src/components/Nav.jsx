import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Div = styled.div`
height: 80px;
background-image: url('/img-nav.jpg');
background-size: contain;
@media screen and (max-width: 820px) {
  height: 80px;
  background-color: rgb(23, 22, 22);
  background-image: none;
  width: 100%;
}
@media screen and (max-width: 760px) {
  height: 160px;
  background-color: rgb(23, 22, 22);
  background-image: none;
  width: 100%;
}
`;

const Container = styled.div`

display: flex;
height: 100%;
margin-left: 10%;
background-color: rgb(23, 22, 22);
flex-wrap: wrap;
flex-direction: row;
@media screen and (max-width: 1024px) {
  margin-left: 0%;
}
@media screen and (max-width: 760px) {
  height: 50%;
  width: 100%;
}
`;

const Button = styled.button`
margin-left: 8%;
background-color: rgb(23, 22, 22);;
font-size: medium;
height: 100%;
border: none;
  outline: none;
@media screen and (max-width: 1024px) {
  margin-left: 5%;
}
@media screen and (max-width: 820px) {
  margin-left: 3%;
}
@media screen and (max-width: 760px) {
  margin-left: 5%;
}
@media screen and (max-width: 280px) {
  margin-left: 1%;
}
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
const Button1 = styled.button`
margin-left: 3%;
background-color: rgb(23, 22, 22);;
font-size: medium;
height: 100%;
border: none;
  outline: none;
@media screen and (max-width: 1024px) {
  margin-left: 5%;
}
@media screen and (max-width: 820px) {
  margin-left: 2%;
}
`;
const Span = styled.span`
display: block;
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
`;


export default function Nav({ onsearch }) {
    return (
        <Div>
            <Container>
            <Button1> <h3><SearchBar onsearch={onsearch} /></h3></Button1>
            <Button><StyledLink to='/home' ><h3>HOME</h3></StyledLink></Button>
            <Button><StyledLink to='/favorite'><h3>FAVORITES</h3></StyledLink></Button>
            <Button><StyledLink to='/about'><h3>ABOUT</h3></StyledLink></Button>
            <Button><h3><StyledLink to="/"><i class="material-icons">login</i><Span>Logout</Span></StyledLink></h3></Button>
            </Container>
        </Div>
    );
}
