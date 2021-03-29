import React from "react";
import styled from "styled-components";
import axios from "axios";

const DivPokedex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
`;
const UlPokemons = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 40%;
`;

const LiItem = styled.li`
  margin: 3px;
  :hover {
    cursor: pointer;
    width: auto;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  width: 30%;
  height: 30px;
  align-self: center;
`;

const StatsPokemon = styled.div`
  display: inline-block;
  padding: 3px;
  margin: 3px;
  background-color: #dedede;
`;
class Pokedex extends React.Component {
  state = {
    pokemonList: undefined,
    section: false,
    pokemonSelect: undefined,
  };

  componentDidMount = () => {
    this.getPokedex();
  };

  getPokedex = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        return this.setState({ pokemonList: response.data });
      })
      .catch((error) => {
        return console.log(error);
      });
  };

  getDetails = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        return this.setState({
          pokemonSelect: response.data,
          section: true,
        });
      })
      .catch((error) => {
        return console.log(error);
      });
  };

  backToOtherPage = () => {
    this.setState({ section: false, pokemonSelect: undefined });
  };

  render() {
    if (this.state.section) {
      return (
        <DivPokedex>
          <h1>Pokedex</h1>
          <h3>{this.state.pokemonSelect.name}</h3>
          <img src={this.state.pokemonSelect.sprites.front_default} />
          <div>
            <strong>
              {this.state.pokemonSelect.types.length === 1 ? "Tipo:" : "Tipos:"}
            </strong>
            {this.state.pokemonSelect.types.map((pokemon) => {
              return <StatsPokemon>{pokemon.type.name}</StatsPokemon>;
            })}
          </div>
          <div>
            <strong>
              {this.state.pokemonSelect.abilities.length === 1
                ? "Habilidade:"
                : "Habilidades:"}
            </strong>
            {this.state.pokemonSelect.abilities.map((pokemon) => {
              return <StatsPokemon>{pokemon.ability.name}</StatsPokemon>;
            })}
          </div>
          <Button onClick={this.backToOtherPage}>Voltar para lista</Button>
        </DivPokedex>
      );
    }

    return (
      <DivPokedex>
        <h1>Pokedex</h1>
        <h3>Clique em algum Pokemon e veja seus detalhes!</h3>
        <UlPokemons>
          {this.state.pokemonList &&
            this.state.pokemonList.results.map((pokemon, index) => {
              return (
                <LiItem key={index} onClick={() => this.getDetails(index + 1)}>
                  #{index + 1} - {pokemon.name}
                </LiItem>
              );
            })}
        </UlPokemons>
      </DivPokedex>
    );
  }
}

export default Pokedex;
