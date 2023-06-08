import React from 'react';
import './App.css';
import ImageCapa from './img/ImageCapa.jpg';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <div className="container">
      <div className="form-image">
        <img src={ImageCapa} alt="Imagem filme e pipoca" />
      </div>
      <div className="form">
        <Header />
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;
