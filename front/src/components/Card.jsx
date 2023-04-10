import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getFavorites } from "../redux/actions";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';


const DivCard = styled.div`
height: 340px;
position: relative;
background-color: white;
aling-items: center;
width: 300px;
border-radius: 10px;
border-top: 1px dotted white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
border: 1px dotted white;
box-shadow: 0px 0px 10px #ccc;
margin-left: 5%;
margin-top: 5%;
margin-bottom: 5%;
@media screen and (max-width: 420px) {
   margin-left: 12%;
   
}
@media screen and (max-width: 280px) {
   margin-left: 1px;
   margin-right: 1px;
}
`;

const Button = styled.button`
z-index: 1;
position: absolute;
right: 5px;
top: 5px;
width: 8%;
height: 25px;
border-radius: 5px;
background-color: red;
color: white;
`
const Button1 = styled.button`
z-index: 2;
position: absolute;
left: 5px;
top: 5px;
background-color: rgba(255, 255, 255, 0);
border: none;
`

const Name = styled.h1`
z-index: 3;
position: absolute;
bottom: 40px;
left: 11px;
background-color:rgba(38, 39, 40, 0.68);
padding: 5px;
color: white;
font-size: 130%;
`;
const SpeYgen = styled.div`
position: absolute;
display: flex;
height: 50px;
bottom: 0px;
`;
const H2 = styled.h2`
font-size: 110%;
margin-left: 15px;

`;
const Img = styled.img`
border-bottom: 1px dotted white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
position: absolute;
left: 0px;
top: 0px;
@media screen and (max-width: 280px) {
   width: 277px;
 }
`
function Card({ name, species, gender, image, onClose, id, myFavorites }) {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);

   const add = (character) => {
      axios.post("http://localhost:3001/rickandmorty/fav", character)
         .then(res => console.log("ok"));
   }

   const deleteFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(getFavorites());
      alert("eliminado con exito");
   }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(id);
      } else {
         setIsFav(true);
         add({ name, species, gender, image, id });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <DivCard>

         {
            isFav ? (
               <Button1 onClick={handleFavorite}>❤️</Button1>
            ) : (
               <Button1 onClick={handleFavorite}>🤍</Button1>
            )
         }

         {onClose && <Button onClick={() => onClose(id)}>X</Button>}
         <NavLink to={`/detail/${id}`}>
            <Name>name: {name}</Name>
         </NavLink>
         <SpeYgen>
            <H2>species: {species}</H2>
            <H2>gender: {gender}</H2>
         </SpeYgen>
         <Img src={image} alt="" />

      </DivCard>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, null)(Card);