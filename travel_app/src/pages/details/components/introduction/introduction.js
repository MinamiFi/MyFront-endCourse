import './introduction.css'
import render from './introduction.art'

import data0 from './introduction.json'


document.getElementById('details-introduction').innerHTML = render({
    introductiondata: data0.data
})