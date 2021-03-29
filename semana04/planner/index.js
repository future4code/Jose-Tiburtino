// EXERCÍCIO:

// const addTarefa = () => {
//     let inputAdd = document.getElementById('tarefa').value
//     let diaDaSemana = document.getElementById('dias-semana').value
//     const container = document.getElementById(diaDaSemana)
//     container.innerHTML+= `<div> <li> ${inputAdd} </li></div>`
//     tarefa.value = ""
// }

// DESAFIO:

// 1.:

const addTarefa = () => {
    let inputAdd = document.getElementById('tarefa').value
    let diaDaSemana = document.getElementById('dias-semana').value
    const container = document.getElementById(diaDaSemana)
    container.innerHTML+= `<div> <li> ${inputAdd} </li></div>`
    tarefa.value = ""

    if ( inputAdd === "" ){
        alert("Informe uma tarefa!")
    }

}

// 2.:



// 3.:

function limparTarefas () {
    let diaDaSemana = document.getElementById('dias-semana').value
    const container = document.getElementById(diaDaSemana)
    if (confirm('Tem certeza que quer apagar todas as tarefas?')){
        container.innerHTML = ''
    }
}