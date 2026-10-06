function contador() {
    var inicio = document.getElementById('contadorinicio').value
    var fim = document.getElementById('contadorfim').value
    var passo = document.getElementById('contadorpasso').value
    

for (var c = inicio; c <= fim; c += passo) {
    resultado.innerHTML += `${c} \u{1F449}`
}

resultado.innerHTML = `Contando de ${inicio} até ${fim} de ${passo} em ${passo}: <br>.`}