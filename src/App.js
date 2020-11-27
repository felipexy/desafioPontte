import logo from './logo.svg';
import './App.scss';
import MainCard from "./components/MainCard/MainCard"
import { Provider } from 'react-redux';

import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="app"> 
        <div>
          <MainCard></MainCard>
        </div>
      </div>
    </Provider>
  );
}

export default App;
