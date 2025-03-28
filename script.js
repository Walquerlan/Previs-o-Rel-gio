
const key = "e04616dc80f467d6f2c760e5bde08256"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "% Umidade"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
    colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
};


const relogio = document.querySelector("div.relogio span")

const renderizarRelogio = () => {
const horaAtual = new Date()
relogio.innerHTML = ("0"+horaAtual.getHours()).slice(-2) + ":"
                +("0"+horaAtual.getMinutes()).slice(-2) + ":"
                +("0"+horaAtual.getSeconds()).slice(-2)
}

setInterval(() => {
    renderizarRelogio()
}, 1000)