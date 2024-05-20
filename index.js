let cards = document.querySelectorAll('.titulo-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = '/producto.html';
    });
});

let likes = document.querySelectorAll('.favorito-card');

likes.forEach(like => {
    like.addEventListener('click', () => {
        like.classList.toggle('liked');
    });
});