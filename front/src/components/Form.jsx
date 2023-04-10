import { useState } from "react"
import validate from "./validate";
import styled from "styled-components";


const Container = styled.div`
background-image: url('/img-login.jpg');
background-size: cover;
background-position: center;
height: 100vh;
position: relative;
@media screen and (max-width: 760px) {
    height: 130vh;
    
  }
  @media screen and (max-width: 280px) {
    height: 150vh;
  }
`;

const Formu = styled.form`
  position: absolute;
  top: 31%;
  left: 35%;
  right: 35%;
  width: 300px;
  height: 200px;
  background-color: rgb(8, 8, 8);
  display: flex;
  justify-content: center;
  color: aliceblue;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px dotted white;
box-shadow: 0px 0px 10px #ccc;

@media screen and (max-width: 912px) {
    top: 20%;
    left: 30%;
    right: 20%;
    width: 300px;
    height: 180px;
  }
  @media screen and (max-width: 540px) {
    top: 20%;
    left: 23%;
    right: 20%;
    width: 300px;
    height: 200px;
  }  
@media screen and (max-width: 500px) {
    top: 20%;
    left: 13%;
    right: 10%;
    width: 300px;
    height: 200px;
  }
@media screen and (max-width: 376px) {
    top: 20%;
    left: 8%;
    width: 300px;
    height: 200px;
}
  @media screen and (max-width: 280px) {
    top: 20%;
    left: 4px;
    width: 270px;
    height: 200px;
  }
`;

const H4 = styled.h4`
margin-bottom: 0%;
`

const Span = styled.span`
margin-bottom: 0%;
`

function Form({ login }) {
    const [user, setUser] = useState({
        name: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        
    });

    const handlechage = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
        setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]: validate(
                {
                    ...user,
                    [event.target.name]: event.target.value,
                },
                prevErrors
            )[event.target.name],
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(user);
    }

    return (
        <Container>
            
            <Formu onSubmit={handleSubmit}>
                <H4><label htmlFor="name">user: </label>
                <input type="text" name='name' value={user.name} onChange={handlechage} /></H4>
                <Span>{errors.name}</Span>
                <H4><label htmlFor="password">password: </label>
                <input type="password" name='password' value={user.password} onChange={handlechage} /></H4>
                <Span>{errors.password}</Span>
                <h5><button type="submit">login</button></h5>
            </Formu>
            
        </Container>
    )


}

export default Form;