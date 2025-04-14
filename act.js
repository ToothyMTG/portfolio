function pickleft() {
var left = document.getElementById('left')
var right = document.getElementById('right')
left.innerHTML = ''
right.innerHTML = maintext.right
renderleftbox()
left.classList.add('leftbig')
right.classList.add('rightsmall')
right.classList.remove('rightbig')
left.classList.remove('leftsmall')
}

function pickright() {
var left = document.getElementById('left')
var right = document.getElementById('right')
left.innerHTML = maintext.left
right.innerHTML = ''
renderrightbox()
right.classList.add('rightbig')
left.classList.add('leftsmall')
left.classList.remove('leftbig')
right.classList.remove('rightsmall')
}