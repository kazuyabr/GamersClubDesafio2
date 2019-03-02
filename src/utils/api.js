// Instancio a API para ser consumido
const api = 'https://gist.githubusercontent.com/LucasKauz/b2336ac5a7d3023f4b4ddb19ab8b965e/raw/905b9c1ea77e883f144dfef998e706709f3dddc0/fronendtest.json'

//metodo que obtera todos os dados da API
export const getAll = () => {
	return fetch(api)
		.then(res => res.json())
		.then(data => data)
}

//metodo que obtera as informações dos jogos
export const getGames = () => {
	return fetch(api)
		.then(res => res.json())
		.then(data => data["games"])
		// .then(resposta => console.log(resposta))
}

//metodo que obtera as informações do usuario
export const getUser = () => {
	return fetch(api)
		.then(res => res.json())
		.then(data => data.user)
}

//metodo que obtera informações do servidor
export const getServers = () => {
	return fetch(api)
		.then(res => res.json())
		.then(data => data['4fun'])
}
