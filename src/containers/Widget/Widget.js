import React, { Component } from 'react';
import * as api from '../../utils/api'

// Estilo
import './Widget.scss';

// IMAGENS
import funIcon from '../../assets/images/fun_icon.png'

// COMPONENTES
import Topbar from '../../components/Topbar/Topbar';
import Bottombar from '../../components/BottomBar/BottomBar';
import GamesContainer from '../GamesContainer/GamesContainer';
import ServersContainer from '../ServersContainer/ServersContainer';

//Inicializo meu component
class Widget extends Component {

	//Inicializo meu construtor para tratar os estados
	constructor(props) {
		super(props)

		this.state = {
			allInfo: [],
			playerInfo: [],
			playerInfoPosition: [],
			playerInfoMedal: [],
			serverInfo: [],
			gamesList: [],
			serversList: [],
		}
	}

	// Metodo de corte para nomes extensos (fara com que o texto não passe de 15 caracteres e coloque ... depois disso)
	slicePlayerName = (text) => {
		if(text !== undefined)
			if(text.length > 15) return text.slice(0, 15) + '...'
			else return text
	}

	// Metodo que converte a experiencia do jogador em numero.
	setExpertiseValue = (expertise) => {
		if(expertise !== undefined)
			switch(expertise) {
				case 'casual': return 20;
				case 'competitive': return 40;
				case 'amateur': return 66;
				case 'pro': return 100;
				default: return 0;
			}
	}

	//Metodo responsavel por passar os dados da API para seus respectivos estados após a renderização
	componentDidMount() {
        api.getAll()
			.then(res => this.setState({
				allInfo: res,
				playerInfo: res["user"],
				playerInfoPosition: res["user"].game_position,
				playerInfoMedal: res["user"].featured_medal,
				serverInfo: res["4fun"],
				gamesList: res["games"],
				serversList: res["4fun"].servers }))
    }

//Metodo responsavel por renderizar nossa classe
    render() {
        return (
			<div className="widget">

			{/*exibe a parte superior da pagina que contem o nome do jogador e seu ID.*/}
				<Topbar
					name={this.slicePlayerName(this.state.playerInfo.name)}
					photo=""
					id={this.state.playerInfo.id}
					expertise={this.setExpertiseValue(this.state.playerInfo.expertise)}
					level={this.state.playerInfo.level}
					patentURL={this.state.playerInfo.patent}
					positionURL={this.state.playerInfoPosition.image}
					medalURL={this.state.playerInfoMedal.image}></Topbar>

				{/* Sessão que apresentara as BOXES e o Painel de Jogos */}
				<section className="mid-section">

					{/* Lista de servidores */}
					<ServersContainer
						areaTitle={this.state.serverInfo.title}
						iconURL={funIcon}
						serversList={this.state.serversList}></ServersContainer>

					{/* Lista de salas para os jogos */}
					<ul>
						{ this.state.gamesList.map((item) => (
							<li key={item.title}>
								<GamesContainer
									areaTitle={item.title}
									iconURL={item.image}
									btnLabel={item.cta.title}
									lineNumber={item.cta.line}
									url={item.cta.link}
									win={item.win}
									lose={item.lose}
									matches={item.matches}
									gamesList={this.state.gamesList}></GamesContainer>
							</li>
						))}
					</ul>
				</section>

				{/*Sessão responsavel por exibir a barra que contem download, quantidade de players online e quantidade players banidos*/}
				<Bottombar
					online={this.state.allInfo.online}
					banned={this.state.allInfo.latest_banned}></Bottombar>
			</div>
        )
    }
}

export default Widget
