import React, {useState} from 'react';
import Pengutang from './Pengutang';

const ListPengutang = () => {

  const [ pengutang, setPengutang ] = useState([
  	{nama: 'Restu Kersana', id: 1},
  	{nama: 'Iwan Fauzy', id: 2},
  	{nama: 'Dadan Wildan', id: 3},
  	{nama: 'Dandi Juliandi', id: 4},
  ]);
  return (
      <div className="main-list-pengutang">
  	  	<div className="header-pengutang">
  	 	 <h2>Nama Peminjam</h2>
  	 	 <button>
			<svg className="w-6 h-6" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>  	 	
		 </button>
  	  	</div>  

  	  	{
  	  	 pengutang.map(pengutang => (
  	  		<Pengutang key={pengutang.id} pengutang={pengutang}  />	  	
  	  	 ))
  	  	}
  	  </div>
  );
}

export default ListPengutang;
	