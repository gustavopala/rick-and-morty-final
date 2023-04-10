import Card from './Card';
import styled from "styled-components";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { getFavorites } from "../redux/actions";
import emptyImage from "../imagenes/img-cards2.jpg";
import {guiaTexto1,guiaTexto2,guiaTexto3} from "../textos/textos"

const DivCard = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
height: 100%;
width: 100%;

`;
const Container = styled.div`
background-size: cover;
background-position: center;
height: 100%;
width: 1074px;
`;
const NoCards = styled.div`
position: relative;
height: 100%;
width: 100%;
`

const Img = styled.img`
position: absolute;
height: 495px;
rigth: 1px;

`
const Guia = styled.div`
position: absolute;
height: 495px;
left: 1px;
width: 500px;
`
const Li = styled.li`
color: #FFFFFF;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
padding: 20px;
margin-left: 50px;
width: 350px;
`
const H2 = styled.h2`
color: white;
margin-left: 30px;
width: 100px;
`


export default function Cards({ characters, onClose }) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getFavorites());
   }, []);

   return (
      <Container>
         {characters.length === 0 ? (
            <NoCards>
               <Guia>
                  <H2>GUIA</H2>
                     <hr />
                  <ul>
                     <Li>{guiaTexto1}</Li>
                     <Li>{guiaTexto2}</Li>
                    
                     <Li>{guiaTexto3}</Li>
                  </ul>
               </Guia>
               <Img src={emptyImage} alt="No characters available" />
            </NoCards>
         ) : (
            <DivCard>
               {characters.map(({ id, name, species, gender, image }) => (
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     onClose={onClose}
                  />
               ))}
            </DivCard>
         )}
      </Container>
   )
}
