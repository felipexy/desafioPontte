import './App.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import MainCard from './components/MainCard/MainCard';
import LoadData from './Services/LoadData';
import './Utils/loader.scss';
import reducer from './store/index';

function App() {
  const apiData = LoadData(); //  Chama a função responsável pelo Fetch na API
  let qtdeOptions = 0;

  //  Define a quantidade de opções de parcelas
  if (apiData.loading) {
    const defineQtdeOptions = () => {
      apiData.dataAPI.prazos.forEach((prazo) => {
        qtdeOptions++;
      });
      return qtdeOptions;
    };
    defineQtdeOptions();

    const initialSliderPos = Math.floor(qtdeOptions / 2); //  garante que o slider estará centralizado

    //  Seta o INITIAL_STATE do reducer para que o primeiro Load da página já contenha os valores corretos e centralizados
    const INITIAL_STATE = {
      id: initialSliderPos,
      valid: false,
      data: apiData.dataAPI,
      loading: apiData.loading,
    };

    //  Cria a Store e passa o INITIAL_STATE como parâmetro para o reducer no Provider
    return (
      <Provider store={createStore(reducer, INITIAL_STATE)}>
        <div className="app">
          <div>
            <MainCard />
          </div>
        </div>
      </Provider>
    );
  }
  return <div className="loader" />;
}

export default App;
