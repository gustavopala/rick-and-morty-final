import './App.css'
import Cards from './components/Cards.jsx'
import { useState, useEffect } from "react";
import Nav from './components/Nav.jsx'
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form';
import  Favorites  from './components/Favorites';
import {useNavigate, useLocation, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';

const Div = styled.div`
background-size: cover;
`;

function App() {
  const location=useLocation([]);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';
  const login=(user) =>{
     if (user.password === password && user.name === username) {
        setAccess(true);
        navigate('/home');
     }else{
      alert('Usuario o contraceña incorrecta');
     }
  }
  const onsearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty/onsearch"
    const API_KEY = "7f3295b85d1e.89c5c9bd63bcfb16a7e1"
    fetch(`${URL_BASE}/${id}`)/* ?key=${API_KEY} */
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  return (
    <Div className='App' >
      {location.pathname === '/' ? <Form login={login}/>: <Nav onsearch={onsearch} />}
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/favorite' element={<Favorites />}/>
        <Route path='/home' element={<Cards
          characters={characters}
          onClose={onClose}
        />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
      
    </Div>
  )
}

export default App
