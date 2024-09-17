
        // Dados para o gráfico de receitas
        const receitasCtx = document.getElementById('receitasChart').getContext('2d');
        new Chart(receitasCtx, {
            type: 'bar',
            data: {
                labels: ['Último Mês'],
                datasets: [{
                    label: 'Receita',
                    data: [24], // Aqui está o valor da receita em porcentagem
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Dados para o gráfico de despesas
        const despesasCtx = document.getElementById('despesasChart').getContext('2d');
        new Chart(despesasCtx, {
            type: 'bar',
            data: {
                labels: ['Último Mês'],
                datasets: [{
                    label: 'Despesa',
                    data: [5], // Aqui está o valor da despesa em porcentagem
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
  