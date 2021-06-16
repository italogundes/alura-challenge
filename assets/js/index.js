// Função Highlight

let inputColor = document.querySelector('#selecionar-cor')
let fundoColorido = document.querySelector('.fundo-colorido-editor')

inputColor.addEventListener('input', (event) => {
    let cor = event.target.value
    fundoColorido.style = `background: ${cor}`
})

//Salvar dados no LocalStorage

let nomeProjeto = document.querySelector('#nome-projeto')
let descricaoProjeto = document.querySelector('#descricao-projeto')
let inputEditor = document.querySelector('code')
let btnSalvar = document.querySelector('#btn-salvar')


btnSalvar.addEventListener('click', () => {
    if(typeof(Storage) !== 'undefined') {
        const projeto = montaProjeto()
        console.log(projeto)
        salvar(projeto)

    }else {
        console.log('n foi')
    }

    location.reload()
})


function montaProjeto() {
    let projeto = {
        'id': geraID(),
        'nomeProjeto': nomeProjeto.value,
        'descricaoDoProjeto': descricaoProjeto.value,
        'codigo': inputEditor.innerText,
        'corFundo': inputColor.value,
        'linguagem': linguagem.value
    }
    return projeto
}

function geraID(){
    return localStorage.length
}

function salvar(projetoJson){
    localStorage.setItem(projetoJson.id, JSON.stringify(projetoJson))
}