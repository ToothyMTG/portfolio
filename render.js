function renderheader () {
    var header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = maintext.header
    document.body.appendChild(header)
}

function renderleft () {
    var left = document.createElement('div')
    left.classList.add('left')
    left.innerHTML = maintext.left
    document.body.appendChild(left)
}

function renderright () {
    var right = document.createElement('div')
    right.classList.add('right')
    right.innerHTML = maintext.right
    document.body.appendChild(right)
}

function renderbody () {
    renderheader()
    renderleft()
    renderright()
}