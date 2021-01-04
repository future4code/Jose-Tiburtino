import React from 'react';
import Etapa1 from './Components/Etapa1/Etapa1'
import Etapa2 from './Components/Etapa2/Etapa2'
import Etapa3 from './Components/Etapa3/Etapa3'
import EtapaFinal from './Components/EtapaFinal/EtapaFinal'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  width: 40%;
  height: 50vh;
  margin: 0 auto;
  align-items: center;
  text-align: center;
`

export class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
        case 4: 
          return <EtapaFinal />
      }
  }

  irParaProximaEtapa = () => {
    let proximaEtapa = this.state.etapa + 1

    this.setState ({
      etapa: proximaEtapa
    })
  }

  render () {
    return (
      <Container>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 ? <button onClick ={this.irParaProximaEtapa}>Próxima Etapa</button> : <div></div>}
      </Container>
    )
  }

}

export default App;
