import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from './Card';

const DivCard = styled.div`
height: 340px;
position: relative;
background-color: white;
aling-items: center;
width: 26.6%;
margin-left: 3%;
border-radius: 10px;
border-top: 1px dotted white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
border: 1px dotted white;
box-shadow: 0px 0px 10px #ccc;
`;


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
`

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "http://localhost:3001/rickandmorty/detail/";
    /* const KEY = "7f3295b85d1e.89c5c9bd63bcfb16a7e1"; */

    axios(`${URL_BASE}${detailId}`).then((response) =>  /* ?key=${KEY} */
      setCharacter(response.data)
    );
  }, []);

  return (
    <div>
      {character.name ? (

        <DivCard>

          <Name>{character.name}</Name>
          <SpeYgen>

            <H2>{character.status}</H2>
            <H2>{character.species}</H2>
            <H2>{character.gender}</H2>
            <H2>{character.origin?.name}</H2>
          </SpeYgen>
          <Img src={character.image} alt="img" />
        </DivCard>

      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

