import React, { useState } from 'react';
import Lunas from './Lunas';

const ListLunas = () => {
  const [ dataLunas, setDataLunas ] = useState([
  	{nama: 'Restu Kersana', id: 1},
  	{nama: 'Iwan Fauzy', id: 2},
  	{nama: 'Dadan Wildan', id: 3},
  	{nama: 'Dandi Juliandi', id: 4},
  ]);
  return (
    <div className="main-list-lunas">
  	  <h2>Sudah Lunas</h2>

  	  {
  	  	dataLunas.map(lunas => (
	  	  <Lunas key={lunas.id} lunas={lunas} />
  	  	))
  	  }
  	</div>
  );
}

export default ListLunas;
	