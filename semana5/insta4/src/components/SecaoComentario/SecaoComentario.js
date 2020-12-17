import React, { Component } from "react";
import "./SecaoComentario.css";

export class SecaoComentario extends Component {
  state = {
    comentInput: "",
    comments: [],
  };

  onChangeComentario = (event) => {
    console.log(this.state.comentInput);
    this.setState({
      comentInput: event.target.value,
    });
  };

  addComment = () => {
    const newComment = {
      comment: this.state.comentInput,
    };

    const newComments = [...this.state.comments, newComment];
	this.setState({ comments: newComments });
	console.log(this.state.comments);
    this.props.aoEnviar();
  };

  render() {

    return (
      <>
        <div className={"comment-container"}>
          <input
            className={"input-comentario"}
            placeholder={"Comentário"}
            value={this.state.comentInput}
            onChange={this.onChangeComentario}
          />
          <button onClick={this.addComment}>Enviar</button>
          {this.state.comments && this.state.comments.map((comments) => {
			  return <p>{comments.comment}</p>
            })}
        </div>
      </>
    );
  }
}
