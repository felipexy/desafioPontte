import React from 'react';
import { useDispatch } from 'react-redux';
import './CardMonths.scss';

const CardMonths = ({ months, value }) => {
  const dispatch = useDispatch();
  let valids = false;

  function handleClickOption() {
    valids = !valids;
    dispatch({ type: 'CHANGE_VALID', valid: valids });
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
