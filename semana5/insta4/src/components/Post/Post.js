import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvoBranco from '../../img/bookmark-white.svg'
import iconeSalvoPreto from '../../img/bookmarks-black.svg'
import iconeCompartilhar from '../../img/reply.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    salvo: false,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {

      if (!this.state.curtido) {
        console.log("Curtiu!")
        this.setState ({
          curtido: true,
          numeroCurtidas: this.state.numeroCurtidas + 1
        })
      }
        else {
          this.setState ({
            curtido: false,
            numeroCurtidas: this.state.numeroCurtidas - 1
          })
        }
  }

  onClickSalvo = () => {
    if (!this.state.salvo) {
      this.setState ({
        salvo: true
      })
    } else {
      this.setState ({
        salvo: false
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvar

    if (this.state.salvo) {
      iconeSalvar = iconeSalvoPreto
    } else {
      iconeSalvar = iconeSalvoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvo}
        />
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post