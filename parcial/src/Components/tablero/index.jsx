import React from 'react';
import Columna from '../column/index';
import LogicAnswer from '../logiButton';
    
const TableroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColumnaContainer = styled.div`
  width: 30%;
`;

const ColumnaTitle = styled.h1`
  margin-top: 0;
`;

const Tablero = ({ deportes }) => {
  const listDeportes = deportes.filter((deporte));
  return (
    <TableroContainer>
      <ColumnaContainer>
        <ColumnaTitle>Deportes</ColumnaTitle>
        {listDeportes.map((deporte) => (
          <>
          <Columna
            id={deporte.id}
            propTitle={deporte.title}
            propDescription={deporte.description}
            players={deporte.players}
            categories={deporte.categories}
            isEdit={false}
          />
          <LogicAnswer taskToUpdate={deporte} />
        </>
        ))}
      </ColumnaContainer>
      </TableroContainer>
  );
};

export default Tablero;