function toggleDetalhes(index) {
    const detalhesDiv = document.getElementById('detalhes-' + index);

    // Alterna entre mostrar e esconder os detalhes
    if (detalhesDiv.classList.contains('mostrar')) {
        detalhesDiv.classList.remove('mostrar');
    } else {
        detalhesDiv.classList.add('mostrar');
    }
}


