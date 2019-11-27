import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Card from './components/Card';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Card />
        </Router>
        <InputForm />
      </div>
    </div>
  );
}

export default App;
