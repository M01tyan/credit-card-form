import React from 'react';
import './App.scss';
import Card from './components/Card';
import CardInputForm from './components/CardInputForm';
import { Provider } from './redux/store';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Provider>
          <Card />
          <CardInputForm />
        </Provider>
      </div>
    </div>
  );
}

export default App;
