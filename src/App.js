import React from 'react';

//import components
import Header from './components/Header';
import Info from './components/Info';
import ListPengutang from './components/ListPengutang';
import ListLunas from './components/ListLunas';
import BarFixed from './components/BarFixed';


import './App.css';

function App() {
  return (
  	<div className="container grid">
  	  <Header />
  	  <Info />
  	  <ListPengutang />
  	  <ListLunas />
  	  <BarFixed />
  	</div>


  );
}

export default App;
