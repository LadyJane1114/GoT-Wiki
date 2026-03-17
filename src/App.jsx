import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './css/App.css'
import {getCharacters} from './ThronesAPI'
import NavOfThrones from './Components/NavOfThrones'
import CharacterPage from './Components/pages/CharacterPage'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Button } from 'react-bootstrap'
import ComingSoon from './Components/ComingSoon'


function App() {
  
  const [characters, setCharacters] = useState([])
  const [searchResults, setSearchResults] = useState([])
      
    
      useEffect(() => {
        getCharacters().then(json => {
          setCharacters(json);
          setSearchResults(json);
        });
      }, []);

      
  return (
    <>
      <NavOfThrones/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/characterPage' element={<CharacterPage characters={characters} setSearchResults={setSearchResults} searchResults={searchResults}/>}/>
        <Route path='/comingSoon' element={<ComingSoon/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
