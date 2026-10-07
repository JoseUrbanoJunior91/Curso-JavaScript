/*function tabuada() {

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        alert('[ERRO] Faltam dados para gerar tabuada!')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}*/

function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('resultado')
    if (num.value.length == 0) {
        alert('[ERRO] Faltam dados para gerar a tabuada!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
        for (let c=1; c <= 10; c ++){
            res.innerHTML += `${n} x ${c} = ${n*c}</br>`
        }
    }
}