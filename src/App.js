import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import NavBar from "./components/NavBar";

import './css/App.css';

function App() {
  return (
      <div className="App"><NavBar />
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
