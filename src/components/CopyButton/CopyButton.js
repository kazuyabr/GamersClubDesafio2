import React from 'react'

// Estilo
import './CopyButton.scss'

const CopyButton = (props) => {

	// Função que abre o link em outra pagina
	let setURL = (url) => {
		window.open(url, '_blank');
	}

//retorna a view
	return (
		<button className="copy-button" onClick={() => setURL(props.url)}>
			<i className="far fa-copy"></i>
		</button>
	)
}

export default CopyButton
