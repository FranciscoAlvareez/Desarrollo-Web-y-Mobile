import React, { useState } from 'react';
import styled from 'styled-components';

const ColumnaContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const ColumnaTitle = styled.h3`
  margin-top: 0;
  font-size: 18px;
`;

const ColumnaInfo = styled.p`
  margin: 8px 0;
`;


const Columna = ({ id, propTitle, propDescription, players, categories }) => {
  const [id, setId] = useState(id)
  const [title, setTitle] = useState(propTitle)
  const [description, setDescription] = useState(propDescription)
  const [players, setPlayers] = useState(players)
  const [categories, setCategories] = useState(categories)

  return (
    <>
    <ColumnaContainer>
      <ColumnaTitle>{isEdit ? <input
        onChange={e => setId(e.target.value)}
        value={id} /> : id}</ColumnaTitle>
      <ColumnaTitle>{isEdit ? <input
        onChange={e => setTitle(e.target.value)}
        value={title} /> : title}</ColumnaTitle>
      <ColumnaInfo>{isEdit ? <input
        onChange={e => setDescription(e.target.value)}
        value={description} /> : description}</ColumnaInfo>
      <ColumnaInfo>Asignado a: {isEdit ? <input
        onChange={e => setPlayers(e.target.value)}
        value={players} /> : assignedTo}</ColumnaInfo>
      <ColumnaInfo>Fecha de inicio: {isEdit ? <input
        onChange={e => setCategories(e.target.value)}
        value={categories} /> : startDate}</ColumnaInfo>
    </ColumnaContainer>
    {isEdit && 
          <button onClick={() => updateTask(id, title, description, players, categories)}>
          Agregar
        </button>
    }
   </>
  );
};


const updateTask = async (id, title, description, players, categories) => {
  let task={
    id:id,
    title: title,
    description: description,
    players: players,
    categories: categories,
  }
  let url = "http://localhost:3000/api/games/${id}"
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (response.ok) {
      

    } else {
      console.error("Ocurrió un error al agregar un deporte");
      return null;
    }
  } catch (error) {
    console.error("Ocurrió un error:", error);
    return null;
  }
};

export default Columna;