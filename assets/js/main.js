// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

var createVideo__icon = document.querySelector('.createVideo__icon')
var createVideo__modal = document.querySelector('.createVideo__modal')

var notifi__icon = document.querySelector('.notifi__icon')
var notifi__modal = document.querySelector('.notifi__modal')

var img__user = document.querySelector('.img__user')
var user__modal = document.querySelector('.user__modal')

createVideo__icon.onclick = function () {
    createVideo__modal.classList.toggle('open__CreateVideo')
}

notifi__icon.onclick = function () {
    notifi__modal.classList.toggle('open__notifi')
}

img__user.onclick = function () {
    user__modal.classList.toggle('open__user')
}


