import React, { Component } from 'react'

// Estilo
import './ServersContainer.scss'

// COMPONENTS
import ServerBox from '../ServerBox/ServerBox'

// Criando a classe do ServersContainer
class ServersContainer extends Component {

  //criando construtor para intejarir com os estados da classe
    constructor(props) {
        super(props)

        this.state = {
            serversState: [],
        }
    }

	// Metodo que define uma cor
	setColor = (color) => {
		return color
    }

    // Metodo que define a formatação do icone segundo o URL
    setIcon = (url) => {
        let formatted_url = `url('${url}')`
        return {
            backgroundImage: formatted_url,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }
    }

// Renderiza a view
	render() {
		return (
            <section className="servers-container">
                <h3><div style={this.setIcon(this.props.iconURL)}></div> {this.props.areaTitle}</h3>
                <ul className="servers-section">
                    { this.props.serversList.map((item) => (
                        <li key={item.id}>
                            <ServerBox
                                id={item.id}
                                title={item.title}
                                gameType={item.mode}
                                map={item.map}
                                linkJoin={item.join}
                                linkCopy={item.copy}
                                capacity={item.max}
                                actual={item.current}></ServerBox>
                        </li>
                    ))}
                </ul>
            </section>
		)
	}
}

export default ServersContainer
