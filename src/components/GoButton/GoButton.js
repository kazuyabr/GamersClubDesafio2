import React from 'react'

// Estilo
import './GoButton.scss'

const GoButton = (props) => {

	// Função que abre o link em outra janela
	let setURL = (url) => {
		window.open(url, '_blank');
	}

// Retorna a view
	return (
		<button className="go-button" onClick={() => setURL(props.url)}>
			<i className="fas fa-sign-out-alt"></i>
		</button>
	)
}

export default GoButton
