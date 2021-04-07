import React from 'react';
import styled from 'styled-components'

const Form = styled.form `
display:flex;
align-items: center;
flex-direction:column;
justify-content: space-evenly;
height: 250px;
`

export class Etapa2 extends React.Component {
    state = {

    };

    render () {
        return (
        <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <Form>
                <label>
                    5. Qual curso?
                </label>
                <input type='text' />
                <label>
                    6. Qual a unidade de ensino?
                </label>
                <input type='text' />

            </Form>
        </div>
        )
    }
}

export default Etapa2