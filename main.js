const key ="beed1403d846949992f4b9e1385665c5"


function pesquisarCidade(){
    let cidade = document.getElementById("cidade").value
    console.log(cidade);
    dadosAPI(cidade)
}

async function dadosAPI(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`).then(response => response.json())
    console.log(dados)
    trocarDados(dados)
}

function trocarDados(dados){
    document.getElementById("nome-cidade").innerHTML = "Tempo em:" + dados.name
    document.getElementById("img-icon").src = `https://openweathermap.org/img/wn/${dados.werather[0].icon}@2x.png`

}