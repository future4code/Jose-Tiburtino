import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/3532/3532827.svg" 
          nome="José Victor T. Ferreira" 
          descricao="Oi, eu sou o José. Sou aluno da Labenu. Estou aprendendo programação e sou formado em Ciências Contábeis."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="dados-container">
        <div className="page-section-container">
          <CardPequeno
            imagem="https://www.flaticon.com/svg/static/icons/svg/1782/1782765.svg"
            titulo="Email:"
            email="josevictortf@gmail.com"
          />

          <CardPequeno
            imagem="https://www.flaticon.com/svg/static/icons/svg/967/967848.svg"
            titulo="Endereço:"
            endereço="Rua Uichi Miyake"
          />

        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1570/1570887.svg" 
          nome="Limsept do Brasil Indústria Química LTDA." 
          descricao="Estagiário Contábil-Fiscal." 
        />
        
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1640/1640820.svg" 
          nome="Hospital Dia" 
          descricao="Estagiário administrativo na área da regulação." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
