let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO

    despesas.forEach ((despesa, index, array) => {
        divDespesas.innerHTML += `<p> valor: ${despesa.valor} | tipo: ${despesa.tipo} | descrição: ${despesa.descricao} </p>`
    }

    )

}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0

    // AQUI VEM A IMPLEMENTAÇÃO

    arrDespesas.forEach((despesa, index, array) => {
        if (despesa.tipo === "alimentação"){
            gastoAlimentacao += despesa.valor
        }
        if (despesa.tipo === "utilidades"){
            gastoUtilidades += despesa.valor
        }
        if (despesa.tipo === "viagem"){
            gastoViagem += despesa.valor
        }            
        gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem
    
    } 
    )
    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value) || 0
    let valorMax = Number(document.getElementById('valorFiltroMax').value) || Infinity

    if (valorMax < valorMin || valorMin > valorMax ) {
        alert ("Preencha os valores corretamente!")
    }

    // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    let despesasFiltradas = arrDespesas.filter ((despesa) => {
        if ((despesa.tipo === tipoFiltro) && (despesa.valor > valorMin) && (despesa.valor < valorMax)){
            return despesa
        } 
        else if ((tipoFiltro === "todos") && (despesa.valor > valorMin) && (despesa.valor < valorMax)) {
            return despesa
        }
    }
    ) 

    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}