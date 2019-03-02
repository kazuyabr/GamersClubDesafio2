import React from 'react'

// Estilo
import './Panel.scss'

//Função criada para o Panel que exibe as statisticas (partidas, vitórias e derrotas)
const Panel = (props) => {

	let valueColor = props.mainColor

	return (
		<section className="panel">
			<p style={{ color: valueColor }}>{ props.value }</p>
			<p> { props.label }</p>
		</section>
	)
}

export default Panel
