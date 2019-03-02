import React from 'react'

// Estilo
import './BigButton.scss'

const BigButton = (props) => {

	let backgroundColor = `linear-gradient(180deg, ${props.bgColorTop} 0%, ${props.bgColorDown} 100%)`


	// Função que define a cor principal pelo numero de linhas (LINE na API)
	let setBgcolor = () => {
		if(typeof(props.line) === 'number') { return "#2788c8" }
		else { return "#ddbc39" }
	}

	// Função responsavel por abrir um link em outra janela
	let setURL = (url) => {
		window.open(url, '_blank');
	}

//retorna a view
	return (
		<button
			className="big-button"
			onClick={() => setURL(props.url)}
			style={{ backgroundColor: setBgcolor() , backgroundImage: backgroundColor }}>
			{ props.line > 0 ? <p className="line-value"> <i className="fas fa-users"></i> { props.line } <span className="brake-line">|</span></p>  : <span></span> }
			<p>{props.label}</p>
		</button>
	)
}

export default BigButton
