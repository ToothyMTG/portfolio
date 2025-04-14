function renderheader () {
    var header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = maintext.header
    header.id = 'header'
    document.body.appendChild(header)
}

function renderleft () {
    var left = document.createElement('div')
    left.classList.add('left')
    left.innerHTML = maintext.left
    left.onclick = () => {pickleft()}
    left.id = 'left'
    document.body.appendChild(left)
}

function renderright () {
    var right = document.createElement('div')
    right.classList.add('right')
    right.innerHTML = maintext.right
    right.onclick = () => {pickright()}
    right.id = 'right'
    document.body.appendChild(right)
}

function renderbody () {
    renderheader()
    renderleft()
    renderright()
}

function renderleftbox () {
    var left = document.getElementById('left')
    var leftmenu = document.createElement('div')
    leftmenu.id = 'leftmenu'
    leftmenu.classList.add ('menu')
    var leftbox = document.createElement('div')
    leftbox.id = 'leftbox'
    leftbox.classList.add ('box')
    left.appendChild(leftmenu)
    left.appendChild(leftbox)
}

function renderrightbox () {
    var right = document.getElementById('right')
    var rightmenu = document.createElement('div')
    rightmenu.id = 'rightmenu'
    rightmenu.classList.add ('menu')
    var rightbox = document.createElement('div')
    rightbox.id = 'rightbox'
    rightbox.classList.add ('box')
    right.appendChild(rightbox)
    right.appendChild(rightmenu)
}