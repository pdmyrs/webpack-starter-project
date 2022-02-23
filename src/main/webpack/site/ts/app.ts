console.log('Hiya');


const cards1 = document.querySelectorAll('.card.v1');
cards1.forEach(function(card) {
    const button = card.querySelector('.button');
    button.addEventListener('click', () => {
        card.querySelector<HTMLElement>('.added-to-cart').style.display = 'block';
        console.log(card.children);
        });
});


const cards2 = document.querySelectorAll('.card.v2');
cards2.forEach(function(card) {
    const button = card.querySelector('.button');
    button.addEventListener('click', () => {
        card.querySelector<HTMLElement>('.added-to-cart').style.display = 'block';
        card.querySelector<HTMLElement>('.extra').style.display = 'block';
        console.log(card.children);
        });
});


