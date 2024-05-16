import React, { useState } from 'react';
import Columna from '../column/index';
import { useLocation } from 'react-router-dom'
import ButtonComponents from '../button/index';
import { Link } from 'react-router-dom';


const handleClick = (operation) => {
    console.log(operation)
  };

const UpdateTask = () => {
    const location = useLocation()
    let { deporte } = location.state
    return(
        <>
        <Columna
            propTitle={deporte.deporteToUpdate.title}
            propDescription={deporte.deporteToUpdate.description}
            propPlayers={deporte.deporteToUpdate.propPlayers}
            propCategories={deporte.deporteToUpdate.propCategories}
            isEdit={true}
            
      />
      <Link to={"/"}>
        <ButtonComponents tipo="VOLVER" onClick={() => handleClick('VOLVER')}/>
     </Link>
    </>
    )

}

export default UpdateTask;