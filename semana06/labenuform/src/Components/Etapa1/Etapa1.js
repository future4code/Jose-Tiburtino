import React from 'react';
import styled from 'styled-components'

const Form = styled.form `
display:flex;
align-items: center;
flex-direction:column;
justify-content: space-evenly;
height: 300px;
`

export class Etapa1 extends React.Component {
    state = {
        
    };

    render () {
        return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <Form>
                <label>
                    1. Qual o seu nome?
                </label>
                <input type='text' />
                <label>
                    2. Qual a sua idade?
                </label>
                <input type='text' />
                <label>
                    3. Qual o seu email?
                </label>
                <input type='text' />
                <label>
                    4. Qual a sua escolaridade?
                    <br></br>
                    <br></br>
                    <select name="select">
                        <option value="um">Ensino Médio Incompleto</option>
                        <option value="dois">Ensino Médio Completo</option>
                        <option value="tres">Ensino Superior Incompleto</option>
                        <option value="quatro">Ensino Superior Completo</option>
                    </select>
                </label>
            </Form>
        </div>
        )
    }    

}

export default Etapa1