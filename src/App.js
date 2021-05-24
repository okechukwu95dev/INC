import './default.scss'
// import '../node_modules/reset-css/reset.css';
import React from 'react';
import Header from './components/Header/index'
import BlackMenu from './components/BlackMenu/index'





function App() {
  return (
    
    <div className="App">
      <BlackMenu />
      <Header />
      <h1>  Hello   <span >Hello </span></h1> 
    </div>
  );
}

export default App;
