import React, { useState } from 'react';

import './App.css';


import UserForm from './components/UserForm';
import Header from './components/Header';
import Predictions from './components/Predictions';
import Footer from './components/Footer';

const App = () => {
  const [prediction, setPrediction] = useState("")
  const [proba, setProba] = useState([])
  return (
    
    <div className="App">
      <Header />
      <UserForm setPrediction={setPrediction} setProba={setProba} />
      <Predictions prediction={prediction} proba={proba} />
      <Footer />
    </div>
  );
}

export default App;
