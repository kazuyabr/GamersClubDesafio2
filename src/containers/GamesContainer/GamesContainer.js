import React, { Component } from 'react'

// Estilo
import './GamesContainer.scss'

// Components
import GameInfo from '../GameInfo/GameInfo'

class GamesContainer extends Component {

    // Função que define a cor principal baseado no numero de linhas ( no caso LINE na API)
	setColor = () => {
		if(typeof(this.props.lineNumber) === 'number') { return "#2788c8" }
		else { return "#ddbc39" }
	}

    // Metodo que define o icone dos titulos Lobby e Ranked baseado no URL
    setIcon = (url) => {
        let formatted_url = `url('${url}')`
        return {
			backgroundImage: formatted_url,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		}
    }

//renderizando a view
	render() {
		return (
            <section className="games-container">
                <h3><div style={this.setIcon(this.props.iconURL)}></div> {this.props.areaTitle}</h3>
                <GameInfo
                    btnLabel={this.props.btnLabel}
                    lineNumber={this.props.lineNumber}
                    win={this.props.win}
                    lose={this.props.lose}
                    matches={this.props.matches}
                    url={this.props.url}
                    mainColor={this.setColor()}></GameInfo>
            </section>
		)
	}
}

export default GamesContainer
