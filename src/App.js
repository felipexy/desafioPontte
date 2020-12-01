import './App.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import MainCard from './components/MainCard/MainCard';
import LoadData from './Services/LoadData';
import './Utils/loader.scss';
import reducer from './store/index';

function App() {
  const apiData = LoadData();
  let qtdeOptions = 0;

  if (apiData.loading) {
    const defineQtdeOptions = () => {
      apiData.dataAPI.prazos.forEach((prazo) => {
        qtdeOptions++;
      });
      return qtdeOptions;
    };
    defineQtdeOptions();

    const initialSliderPos = Math.floor(qtdeOptions / 2);
    const INITIAL_STATE = {
      id: initialSliderPos,
      valid: false,
      data: apiData.dataAPI,
      loading: apiData.loading,
    };

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
