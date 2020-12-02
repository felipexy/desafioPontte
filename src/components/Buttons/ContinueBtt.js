import React from 'react';
import './ContinueBtt.scss';

//  Recebe "isValid" para validar se o botão deve ser habilitado ou não
const ContinueBtt = ({ isValid }) => {
  function handleClick() {}

  if (!isValid) {
    return (
      <div className="buttonContainer">
        <button
          type="submit"
          data-testid="contBtt"
          className="buttonContainer__continueBtt--NotValid"
          onClick={handleClick}
        >
          <h2 className="content">Gostei, continuar</h2>
        </button>
      </div>
    );
  }
  return (
    <div className="buttonContainer">
      <button
        type="submit"
        data-testid="contBtt"
        className="buttonContainer__continueBtt"
        onClick={handleClick}
      >
        <h2 className="buttonContainer__continueBtt__content">
          Gostei, continuar
        </h2>
      </button>
    </div>
  );
};

export default ContinueBtt;
