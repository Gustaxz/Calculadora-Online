var tamanho = 0

function Tela(num) {
    var resultado = document.getElementsByClassName('resultado')[0]
    var res = resultado.innerHTML
    if (num == 'C') {
        tamanho = 0
        resultado.innerHTML = ''
    }
    if (num == 'B') {
        tamanho --
        resultado.innerHTML = res.substring(0, res.length - 1)
    }
    if (num == '=' && resultado.innerHTML != '') {
        resultado.innerHTML = eval(resultado.innerHTML)
        tamanho = resultado.innerHTML.length
    }
    if (num == '=' && resultado.innerHTML == '') {
        alert('[Erro] Digite um número!')
    }
    if (tamanho >= 10) {
        alert(`Não exceda 10 caracteres!`)
    } else if (num != 'C' && num != 'B' && num != '=') {
        resultado.innerHTML += `${num}`
        tamanho ++
    }
}