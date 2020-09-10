import React from 'react';


const Lunas = ({lunas}) => {
  return (
 	<div className="list-lunas">
		<span>{lunas.nama}</span>
		<button>
			<svg  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
			</svg>
		</button>
  	</div>  	  	
  );
}

export default Lunas;
	