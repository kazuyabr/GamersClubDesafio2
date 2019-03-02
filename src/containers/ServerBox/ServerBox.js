import React, { Component } from 'react'

// Estilo
import './ServerBox.scss'

// COMPONENTS
import CopyButton from '../../components/CopyButton/CopyButton';
import GoButton from '../../components/GoButton/GoButton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

// Crio a classe ServerBox
class ServerBox extends Component {

	// Metodo que define a cor principal do component
	setMainColor = (color) => {
		return `${ this.props.mainColor }`
	}

	// Metodo responsavel por limitar a quantidade de caracteres de uma STRING ( string, max. length)
	limitText = (text, value) => {
		if(text.length > value) return text.slice(0, value-3) + '...'
		else return text
	}

	// Metodo que verifica a capacidade de jogadores
	checkPlayersQuant = () => {
		if(this.props.actual && this.props.capacity) {
			if(this.props.actual > this.props.capacity) { return this.props.capacity }
			else { return this.props.actual }
		} else {
			return 0
		}
	}

//Renderiza a view
	render() {
		return (
			<section className="server-box">
				{/* TOP BUTTON AREA */}
				<div className="server-links">
					<CopyButton url={this.props.linkCopy}></CopyButton>
					<GoButton url={this.props.linkJoin}></GoButton>
				</div>
				{/* SERVER INFO - ID, TITLE, GAME TYPE */}
				<div className="server-info">
					<p>#{ this.props.id } - {this.limitText(this.props.title, 15)}</p>
					<p>{this.limitText(this.props.gameType, 11)}</p>
				</div>

				{/* BOTTOM PROGRESSBAR */}
				<div className="server-bar">
					<ProgressBar
						mapName={this.limitText(this.props.map, 11)}
						serverCapacity={this.props.capacity}
						playersIn={this.checkPlayersQuant()}></ProgressBar>
				</div>
			</section>
		)
	}
}

export default ServerBox
