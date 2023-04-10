import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards, getFavorites } from "../redux/actions";
import styled from "styled-components";
import { useEffect } from "react";
import Card from "./Card";


const Container = styled.div`
display: flex;
background-image: url('/img-fav.png');
background-size: cover;
background-position: center;
margin-top:3%;
flex-wrap: wrap;
flex-direction: row;
`;

const Submenu = styled.div`
height: 30px;

position: relative;
margin-bottom: 30px;
`;
const Button = styled.button`
position: absolute;
top: 20%;
right: 55%;
height: 50px;
background-color: rgb(8, 8, 8);
border-radius: 10px;
border: none;
  outline: none;
@media screen and (max-width: 1024px) {
    left: 30%;
} 
@media screen and (max-width: 280px) {
    left: 1px;
} 
`;
const Button1 = styled.button`
position: absolute;
top: 20%;
right: 45%;
height: 50px;
background-color: rgb(8, 8, 8);
border-radius: 10px;
border: none;
  outline: none; 
@media screen and (max-width: 1024px) {
    left: 60%;
} 
@media screen and (max-width: 280px) {
    left: 160px;
} 
`;
const Select = styled.select`
background-color: rgb(8, 8, 8);
border: none;
outline: none;
color: white;
`;

function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(orderCards(e.target.value))
    }
    const handleChan = (e) => {
        dispatch(filterCards(e.target.value))
    }

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

    return (
        <div>
            <Submenu>
                <Button> <Select name="ordenamiento" id="" onChange={handleChange}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </Select></Button>
                <Button1><Select name="filtrado" id="" onChange={handleChan}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </Select></Button1>
            </Submenu>
            <Container>

                {myFavorites?.map(({ id, name, species, gender, image }) => {
                    return (
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image} 
                        />  
                    );
                })}
            </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: [...state.myFavorites]
    }
}

export default connect(mapStateToProps, null)(Favorites);