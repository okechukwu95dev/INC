import './default.scss'
import React from 'react';
import Header from './components/Header/index'
import BlackMenu from './components/BlackMenu/index'
import Homepage from './pages/Homepage';




function App() {
  return (
    
    <div className="App">
      <BlackMenu />
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
