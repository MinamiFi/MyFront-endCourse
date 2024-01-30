obox1 = document.getElementById('_1')
obox2 = document.getElementById('_2')
obox3 = document.getElementById('_3')

obox1.addEventListener('click', function () {
    console.log('box1捕获')
}, true)

obox2.addEventListener('click', function () {
    console.log('box2冒泡')
}, false)

obox2.addEventListener('click', function () {
    console.log('box2捕获')
}, true)

obox3.addEventListener('click', function () {
    console.log('box3冒泡')
}, false)

obox3.addEventListener('click', function () {
    console.log('box3捕获')
}, true)

obox1.onclick = function () {
    console.log('box1onclick')
}

obox2.onclick = function () {
    console.log('box2onclick')
}

obox3.onclick = function () {
    console.log('box3onclick')
}
obox1.addEventListener('click', function () {
    console.log('box1冒泡')
}, false)
