

let hidetext2 = document.getElementById('hidetext2');

let hidetext = document.getElementById('hidetext');

hidetext2.addEventListener('click', toggleText)

function toggleText () {
    hidetext.classList.toggle('show')
}
