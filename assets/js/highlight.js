const areaCodigo = document.querySelector('.codigo-wrapper')
const linguagem = document.querySelector('#selecionar-linguagem')
const botao = document.querySelector('#btn-highlight')

function mudaLinguagem() {
    const codigo = areaCodigo.querySelector('code')
    areaCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    areaCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaCodigo.querySelector('code')
    hljs.highlightElement(codigo)
})