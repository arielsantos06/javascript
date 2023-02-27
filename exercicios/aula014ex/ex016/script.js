function contar(){
    let ini =  window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '[ERRO] Faltam dados!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(txt.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c}`
        }
    }
}