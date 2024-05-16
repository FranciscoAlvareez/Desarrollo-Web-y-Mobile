import React, { useState } from 'react';
import ButtonComponents from '../button/index';
import { Link } from 'react-router-dom';

const LogicAnswer = (taskToUpdate) => {

  const handleClick = (operation) => {
    switch (operation) {
      case 'AGREGAR':
        console.log("AGREGAR")
        break;
      default:
        break;
    }
  };

 

  return (
    <div>
      <div>
        <Link to={"/update"} state={{ task: taskToUpdate }}>
          <ButtonComponents tipo="AGREGAR" onClick={() => handleClick('AGREGAR')} to={"/update"}/>
        </Link>
      </div>
    </div>
  );
};

export default LogicAnswer;