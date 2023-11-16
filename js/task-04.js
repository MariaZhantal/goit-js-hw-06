const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

decrementEl.addEventListener('click', () => {
counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

incrementEl.addEventListener('click', () => {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
});