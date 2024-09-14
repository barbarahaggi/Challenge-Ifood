const mediaMesData = {
    labels: ['Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Média',
        data: [14, 20, 19, 10],
        borderColor: 'black',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'green',
        backgroundColor: 'green',
        fill: false
    },
    {
        label: 'Pedidos',
        data: [20, 33, 23, 36],
        borderColor: 'black',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'yellow',
        backgroundColor: 'yellow',
        fill: false
    },
    {
        label: 'Cancelamentos',
        data: [10, 8, 6, 4],
        borderColor: 'black',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'red',
        backgroundColor: 'red',
        fill: false
    }]
};

const ctxMediaMes = document.getElementById('chartMediaMes').getContext('2d');
const chartMediaMes = new Chart(ctxMediaMes, {
    type: 'line',
    data: mediaMesData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const pratosMaisPedidosData = {
    labels: ['Temaki Salmão', 'Temaki Atum', 'Temaki Skin', 'Temaki Pescada'],
    datasets: [{
        label: 'Pedidos',
        data: [30, 24, 13, 28],
        backgroundColor: ['#E60000', '#FFC107', '#FD7E14', '#00420B'],
        hoverOffset: 4
    }]
};


const ctxPratosMaisPedidos = document.getElementById('chartPratosMaisPedidos').getContext('2d');
const chartPratosMaisPedidos = new Chart(ctxPratosMaisPedidos, {
    type: 'pie',
    data: pratosMaisPedidosData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
