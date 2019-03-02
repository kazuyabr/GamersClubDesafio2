import React from 'react'

// Estilo
import './Topbar.scss'

//Inicio a função que constrói o Topbar
const Topbar = (props) => {

//instancio as variaveis de endereços externos que serão usados
	let medalURL = "url(" + props.medalURL + ")"
	let positionURL = "url(" + props.positionURL + ")"
	let patentURL = "url(" + props.patentURL + ")"
	let playerPhoto = "url(" + props.photo + ")"

	// Metodo responsavel por setar a porcentagem do progresso.
	const setProgress = (value) => {
		return `${value}%`
	}

	// Metodo responsavel por formatar icones
	let setIcon = (url) => {
		return {
			backgroundImage: url,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		}
	}

	// Modifica a cor de estilo referente a experiencia do jogador
	const showExpertise = (value) => {
		if(props.expertise > value) { return { color: '#ffffff' } }
	}

	//retorno responsavel por passar a view da pagina
	return (
		<div className="topbar">

			<section className="player-data">
				{/* Imagem do jogador, nome e ID */}
				<div className="player">
					<div className="image" style={setIcon(playerPhoto)}></div>
					<div className="info">
						<p>{props.name}</p>
						<p>GC ID: {props.id}</p>
					</div>
				</div>

				{/* Barra de progresso */}
				<div className="progressbar-area">
					<div className="top-levels">
						<p style={showExpertise(19)}>Casual <i className="fas fa-map-marker-alt"></i></p>
						<p style={showExpertise(65)}>Amador <i className="fas fa-map-marker-alt"></i></p>
					</div>
					<div className="progress"><div className="bar"><div style={{ width: setProgress(props.expertise) }}></div></div></div>
					<div className="bottom-levels">
						<p style={showExpertise(39)}>Competitivo <i className="fas fa-map-marker-alt"></i></p>
						<p style={showExpertise(99)}>Pro <i className="fas fa-map-marker-alt"></i></p>
					</div>
				</div>

				{/* Exibir as Medalhas */}
				<div className="badgets">
					<ul>
						<li style={setIcon(medalURL)}></li>
						<li style={setIcon(positionURL)}></li>
						<li style={setIcon(patentURL)}></li>
						<li className="level-value"><p>{props.level}</p></li>
					</ul>
				</div>
			</section>

			{/* Exibe o level*/}
			<section className="level">
				<div></div>
			</section>
		</div>
	)
}

export default Topbar
