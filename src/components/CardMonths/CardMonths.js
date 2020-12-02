import React from 'react';
import { useDispatch } from 'react-redux';
import './CardMonths.scss';

//  Recebe o mês e o valor da parcela
const CardMonths = ({ months, value }) => {
  const dispatch = useDispatch();
  let valids = false;

  //  Ao selecionar a opção de parcela, atualiza o estado "valid" no Redux para habilitar o botão principal
  function handleClickOption() {
    valids = !valids;
    dispatch({ type: 'CHANGE_VALID', valid: valids }); // atualiza o Redux
  }

  return (
    <div>
      <button
        type="submit"
        data-testid="cardM"
        className="cards__cardOption"
        onClick={handleClickOption}
      >
        <h3 className="cards__cardMonthContent">{months} meses</h3>
        <h2 className="cards__cardValueContent">R$ {value}</h2>
      </button>
    </div>
  );
};

export default CardMonths;
