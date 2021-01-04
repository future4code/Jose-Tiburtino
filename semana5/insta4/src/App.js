import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Input = styled.input `
  width: 300px;
  margin-bottom: 10px;
`
const Button = styled.button `
  width: 150px;
  margin-bottom: 10px;
`

class App extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      posts: [
        {
          nomeUsuario: "paulinha",
          fotoUsuario: "https://picsum.photos/50/50", 
          fotoPost: 'https://picsum.photos/200/150'
        },
        {
          nomeUsuario: "José",
          fotoUsuario: "https://picsum.photos/44/50",
          fotoPost: 'https://picsum.photos/200/160'
        },
        {
          nomeUsuario: "Caio",
          fotoUsuario: "https://picsum.photos/47/50", 
          fotoPost: 'https://picsum.photos/200/161'
        },
      ],
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    }
  }

  addPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const newPost = [...this.state.posts, novaPostagem]
    this.setState({posts: newPost})
  }

  onChangeInputName = event => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFotoUser = event => {
    this.setState ({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = event => {
    this.setState ({valorInputFotoPost: event.target.value})
  }

  render() {

    const divPost = this.state.posts.map ((post, index, array) => {
      return (
        <div key={index} className ={'app-container'}>
          <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
          />
        </div>
      )
    })

    return (
      <div className={'app-container'}>
        <Input
          nomeUsuario={this.state.valorInputNome}
          onChange={this.onChangeInputName}
          placeholder={"Nome"}
        />

        <Input
          fotoUsuario={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUser}
          placeholder={"Sua foto(Coloque o Link)."}
        />

        <Input
          fotoPost={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={'Foto do Post. (Coloque o Link)'}
        />

        <Button onClick = {this.addPost}>Adicionar Post</Button>
        {divPost}

      </div>
    );
  }
}

export default App;
