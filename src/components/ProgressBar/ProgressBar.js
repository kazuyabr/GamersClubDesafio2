import React from 'react'

// Estilo
import './ProgressBar.scss'

// Crio a função de ProgressBar
const ProgressBar = (props) => {

	// defino a porcentagem de progreço segundo a informação de jogadores logados e sua capacidade vezes 100%
	const setProgress = () => {
		let progress = (props.playersIn/props.serverCapacity) * 100
		return `${progress}%`
	}

// Retorno a view
	return (
		<section className="progress-bar">
			<div>
				<p>{props.mapName}</p>
				<p>{props.playersIn}/{props.serverCapacity}</p>
			</div>
			<div className="bar"><div style={{ width: setProgress() }}></div></div>
		</section>
	)
}

export default ProgressBar
