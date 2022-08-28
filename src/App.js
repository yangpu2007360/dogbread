import './App.css';
import Header from './components/header/header';
import Search from './components/search/search';
import Doglist from './components/dog-list/doglist';
import React, { useState, useEffect } from 'react';


function App() {

  const [dogs, setDogs] = useState({});
  const [searchstring, setSearchstring] = useState("");


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => setDogs(data.message));
  }, []);

  const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearchstring(lowerCase);
    console.log(searchstring)
  };


  return (
    <div className="App">
      <Header />
      <Search inputHandler={inputHandler} />
      <Doglist dogs={dogs} searchstring={searchstring} />
    </div>
  );
}

export default App;
