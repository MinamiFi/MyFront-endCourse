import './lessons.css'

import render from './lessons.art'
import data0 from './lessons.json'

document.getElementById('classification-lessons').innerHTML = render({
    lessonsdata: data0.data
})