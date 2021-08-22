
function brazil () {
  const acumulado = document.querySelector('.acumulado')
  fetch('https://covid19-brazil-api.vercel.app/api/report/v1/brazil/')
    .then(r => r.json())
    .then(totalBrazil => {
      acumulado.innerHTML = (totalBrazil.data.confirmed).toLocaleString('pt-BR')
    })
}
brazil()

function brazilObitos () {
  const obitoAcumulado = document.querySelector('.obito-acumulado')
  fetch('https://covid19-brazil-api.vercel.app/api/report/v1/brazil/')
    .then(r => r.json())
    .then(totalBrazil => {
      obitoAcumulado.innerHTML = (totalBrazil.data.deaths).toLocaleString('pt-BR')
    })
}
brazilObitos()

function casosRecuperados () {
  const recuperados = document.querySelector('.recuperados')
  fetch('https://covid19-brazil-api.vercel.app/api/report/v1/brazil/')
    .then(r => r.json())
    .then(totalBrazil => {
      recuperados.innerHTML = (totalBrazil.data.confirmed - totalBrazil.data.deaths).toLocaleString('pt-BR')
    })
}
casosRecuperados()

function acompanhamento () {
  const acompanhamento = document.querySelector('.acompanhamento')
  fetch('https://covid19-brazil-api.vercel.app/api/report/v1')
    .then(r => r.json())
    .then(totalBrazil => {
      const teste = totalBrazil.data
      const somaAcom = teste.reduce((acumulador, item) => {
        return acumulador + item.suspects
      }, 0)
      acompanhamento.innerHTML = somaAcom.toLocaleString('pt-BR')
    })
}
acompanhamento()
