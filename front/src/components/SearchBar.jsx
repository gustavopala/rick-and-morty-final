import { useState } from "react";
import styled from "styled-components";


const Input = styled.input`
   width: 300px;
   height: 30px;
   @media screen and (max-width: 280px) {
      width: 190px;
    }
   
`
const Button = styled.button`
   margin-top: 1px;
   height: 30px;
`
const InputWrapper = styled.div`

  display: flex;
  align-items: center;
`;

export default function SearchBar({onsearch}) {
   const [id, setId]=useState("");

   const handlechage = (event) =>{
      setId(event.target.value);
   }
   return (
      <InputWrapper>
      <Input type='search' onChange={handlechage} placeholder="Buscar personajes, ingrese num. del 1 al 826..."/>
      <Button onClick={()=>onsearch(id)}><i class="material-icons">search</i></Button>
      </InputWrapper>
   );
}
