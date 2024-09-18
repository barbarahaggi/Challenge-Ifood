const ctx = document.getElementById('grafico-meses');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
      datasets: [{
        label: 'Receita dos meses anteriores',
        data: [120, 190, 130, 150, 120, 130, 100, 111],
        borderWidth: 1,
        backgroundColor: '#FFEBCD',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

  const grafico1 = document.getElementById('grafico1');

  new Chart(grafico1, {
    type: 'bar',
    data: {
      labels: ['Setembro'],
      datasets: [{
        label: 'Receita',
        data: [116],
        borderWidth: 1,
        backgroundColor: '#006400',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
})

const grafico2 = document.getElementById('grafico2');

  new Chart(grafico2, {
    type: 'bar',
    data: {
      labels: ['Setembro'],
      datasets: [{
        label: 'Despesa',
        data: [116],
        borderWidth: 1,
        backgroundColor: '#FF0000',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
})