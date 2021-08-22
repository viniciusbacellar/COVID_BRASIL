
function brazil () {
  fetch('https://covid19-brazil-api.vercel.app/api/report/v1/brazil/')
    .then(r => r.json())
    .then(totalBrazil => {
      const acumulado = document.querySelector('.acumulado')
      const obitoAcumulado = document.querySelector('.obito-acumulado')
      const recuperados = document.querySelector('.recuperados')

      acumulado.innerHTML = (totalBrazil.data.confirmed).toLocaleString('pt-BR')
      obitoAcumulado.innerHTML = (totalBrazil.data.deaths).toLocaleString('pt-BR')
      recuperados.innerHTML = (totalBrazil.data.confirmed - totalBrazil.data.deaths).toLocaleString('pt-BR')
    })
}
brazil()

function estados () {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1')
    .then(r => r.json())
    .then(estadosBrazil => {
      const acompanhamento = document.querySelector('.acompanhamento')
      const teste = estadosBrazil.data
      const somaAcom = teste.reduce((acumulador, item) => {
        return acumulador + item.suspects
      }, 0)
      acompanhamento.innerHTML = somaAcom.toLocaleString('pt-BR')
    })
}
estados()
