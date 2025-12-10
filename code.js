function verificar() { // chama a função criada no html.
    var data = new Date() // cria uma variável informações do objeto(data, hora.....)
    var ano = data.getFullYear() // pega do objeto o ano atual
    var nascimento = window.document.querySelector('input#txtano') //pega o valor do input selecionado e guarda.
    var resultado = window.document.querySelector('div#resultado') //pega o valor da div selecionada e guarda.

    if (nascimento.value.length == 0 || Number(nascimento.value) > ano) { // cria uma condição caso o valor seja invalido.
        window.alert('Erro! Dados invalidos, tente novamente!')
    } else {                                                              // cria uma condição caso o valor seja vállido.
        var sexo = document.getElementsByName('radsex')         // pega o objeto que tem o nome selecionado
        var idade = ano - Number(nascimento.value)              // faz a subtração para encontrar quantos anos a pessoa tem e guarda
        var genero = ''             // cria uma variável vazia
        var img = document.createElement('img') // criando um elemento
        img.setAttribute('id', 'foto')      // adicionando atributos

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.style.fontSize = '0.8em'
        resultado.style.background = '#b7b8beff'
        resultado.style.padding = '5px'
        resultado.style.borderRadius = '10px'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos!`

        resultado.appendChild(img)

        // Correção do erro da section
        const sec = document.querySelector('section')
        if (sec) sec.style.height = '450px'
    }
}
