const button = document.querySelector('.button')
const cardSocialIcon = document.querySelector('.card__social-icon')

button.addEventListener('click', function(){
    cardSocialIcon.classList.toggle('active-social')
})
