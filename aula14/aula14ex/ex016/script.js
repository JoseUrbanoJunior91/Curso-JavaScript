function contador() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados')
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let fim = Number(fim.value)
        let passo = Number(passo.value)
        
        for (let c = inicio; c <= fim; c += passo) {
            resultado.innerHTML += `${c}`
        }
    }
}

/*resultado.innerHTML = `Contando de ${inicio} até ${fim} de ${passo} em ${passo}: <br>.`}*/
