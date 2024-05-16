import React from 'react';

const ButtonComponents = ({ tipo, onClick }) => {
  const buttonStyles = {
    DETALLES:    { backgroundColor: 'green'},
    AGREGAR:     { backgroundColor: 'red' },
    ELIMINAR:     { backgroundColor: 'blue' },
  };

  return (
    <button style={buttonStyles[tipo]} onClick={onClick}>
      {tipo}
    </button>
  );
};

export default ButtonComponents;