// Selecionar os elementos
const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');

// Mostrar o pop-up quando o botão for clicado
openPopupBtn.addEventListener('click', function() {
    popup.style.display = 'flex';
});

// Esconder o pop-up quando o 'X' for clicado
closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Fechar o pop-up ao clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
