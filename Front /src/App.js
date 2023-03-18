import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App() {
  const [characters, setCharacters] = useState([]);

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id))

  }

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const location = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  // function logout() {
  //   setAccess(false)
  // }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>

      {location.pathname !== '/' && <Nav onSearch={onSearch} /* logout={logout}  *//>}
      {location.pathname === "/" ? <div> <Form login={login} /> </div> : null}

      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>

    </div>
  );
}

export default App

