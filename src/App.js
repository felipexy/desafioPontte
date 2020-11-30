import './App.scss';
import MainCard from "./components/MainCard/MainCard"
import { Provider } from 'react-redux';
import LoadData from './Services/LoadData'
import { createStore } from 'redux';
import './Utils/loader.scss'
import reducer from './store/index';
import React from 'react';

function App() {

  var apiData = LoadData();
  var qtdeOptions = 0;
  
  if (apiData.loading) {
    function defineQtdeOptions() {
      apiData.dataAPI.prazos.forEach(prazo => {
      qtdeOptions++;
    });
      return qtdeOptions;
  }
    defineQtdeOptions();
    
    var initialSliderPos = Math.floor(qtdeOptions / 2);
    const INITIAL_STATE = { id: initialSliderPos, valid: false, data: apiData.dataAPI, loading: apiData.loading };

    return (
      <Provider store={createStore(reducer, INITIAL_STATE)}>
        <div className="app">
          <div>
            <MainCard></MainCard>
          </div>
        </div>
      </Provider>
    );
  }
  else {
    return (
      <div className="loader" />
    );

  }
}

export default App;
