import React, { useState, useEffect } from 'react';
import Tablero from '../tablero/index';


const Dogis = () => {
  const [deportes, setDeportes] = useState([]);

  useEffect(() => {
    const fetchDeportes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/games');
        const data = await response.json();
        setDeportes(data);
      } catch (error) {
      }
    };
    fetchDeportes();
  }, []);

  return (
    <div className="App">
      <Tablero deportes={deportes}/>
    </div>
  );
};

export default Dogis;