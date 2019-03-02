import React from 'react'

// estilo
import './BottomBar.scss'
import BottomData from '../BottomData/BottomData';

//Criação da função
const Bottombar = (props) => {

//retorno da view construida
	return (
		<div className="bottombar">
			<button className="bottom-btn"><i className="fas fa-download"></i> <span>Download Gamers Club Anti-Cheat</span></button>
			<section className="bottom-info">
				<BottomData
					textTop="Jogadores"
					textBottom="Online"
					mainColor="#2c97de"
					number={props.online}></BottomData>
				<BottomData
					textTop="Cheaters Banidos"
					textBottom="Nos Últimos 7 Dias"
					mainColor="#eb2f2f"
					number={props.banned}></BottomData>
			</section>
		</div>
	)
}

export default Bottombar
