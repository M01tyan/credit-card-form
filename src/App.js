import React from 'react';
import './App.scss';
import Card from './components/Card';
import CardInputForm from './components/CardInputForm';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Card />
        <CardInputForm />
      </div>
    </div>
  );
}

export default App;
