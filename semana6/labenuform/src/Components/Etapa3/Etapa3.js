import React from 'react';
import styled from 'styled-components'

const Form = styled.form `
display:flex;
align-items: center;
flex-direction:column;
justify-content: space-evenly;
height: 200px;
`

export class Etapa3 extends React.Component {
    state = {

    };

    render () {
        return (
        <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <Form>
                <label>
                    7. Por que você não terminou um curso de Graduação?
                </label>
                <input type='text' />
                <label>
                    8. Você fez algum curso complementar?
                    <br></br>
                    <br></br>
                    <select name='select'>
                        <option value='cinco'>Curso Técnico</option>
                        <option value='seis'>Cursos de Inglês</option>
                        <option value='sete'>Não fiz curso complementar</option>
                    </select>
                </label>
            </Form>
        </div>
        )
    }

}

export default Etapa3