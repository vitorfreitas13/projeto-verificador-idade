function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = window.document.querySelector('input#txtano')
    var resultado = window.document.querySelector('div#resultado')

    if (nascimento.value.length == 0 || Number(nascimento.value) > ano) {
        window.alert('Erro! Dados invalidos, tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

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
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        resultado.appendChild(img)

        // Correção do erro da section
        const sec = document.querySelector('section')
        if (sec) sec.style.height = '450px'
    }
}
