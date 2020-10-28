function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src','imagem/bebe_menino.png')
                document.body.style.background = '#add8e6'
                genero = 'uma criança'
            } else if(idade < 15){
                // Jovem
                img.setAttribute('src','imagem/menino.png')
                document.body.style.background = '#add8e6'
                genero = 'um jovem'
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src','imagem/homem.png')
                document.body.style.background = '#add8e6'
                genero = 'um adulto'
            } else {
                // Idoso
                img.setAttribute('src','imagem/idoso_homem.png')
                document.body.style.background = '#add8e6'
                genero = 'um idoso'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src','imagem/bebe_menina.png')
                document.body.style.background = '#ffcbdb'
                genero = 'uma criança'
            } else if(idade < 15){
                // Jovem
                img.setAttribute('src','imagem/menina.png')
                document.body.style.background = '#ffcbdb'
                genero = 'uma jovem'
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src','imagem/mulher.png')
                document.body.style.background = '#ffcbdb'
                genero = 'uma adulta'
            } else {
                // Idoso
                img.setAttribute('src','imagem/idosa_mulher.png')
                document.body.style.background = '#ffcbdb'
                genero = 'uma idosa'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}