const shareActiveButton = document.querySelector('#share-active-button');
const shareActive = document.querySelector('#share-active');
const autorActiveButton = document.querySelector('#autor-active-button');

autorActiveButton.addEventListener('click', () => {
    shareActive.classList.toggle('active-state');
})

shareActiveButton.addEventListener('click', () => {
    shareActive.classList.toggle('active-state');
})