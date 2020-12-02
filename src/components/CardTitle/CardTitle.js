import React from 'react';
import './CardTitle.scss';

//  Título do card principal
const CardTitle = () => {
  return (
    <div className="cardTitle">
      <h2 data-testid="cdTitle" className="cardTitle__cardTitleContent">
        Valor Solicitado
      </h2>
    </div>
  );
};

export default CardTitle;
