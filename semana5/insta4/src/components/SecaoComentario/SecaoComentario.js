import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentInput : ""
	}

	onChangeComentario = (event) => {
		console.log(this.state.comentInput);
		this.setState ({
			comentInput: event.target.value
		})
	}

	// Tentativa de só uma mensagem, mas não consegui.

	// aoEnviar = () => {   
	// 	console.log(this.state.comentInput);
	// 	this.setState ({
	// 		comentInput : ""
	// 	})
	// }

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentInput}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
