import React from 'react'

// Estilo
import './BottomData.scss'

const BottomData = (props) => {

	let setColor = (mainColor) => {
		return {
			color: mainColor
		}
	}

	return (
		<div className="bottom-data">
			<div style={setColor(props.mainColor)}>{props.number}</div>
			<div>
				<p>{props.textTop}</p>
				<p style={setColor(props.mainColor)}>{props.textBottom}</p>
			</div>
		</div>
	)
}

export default BottomData
