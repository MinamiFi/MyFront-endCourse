import './title.css'

import render from './title.art'
import data0 from './title.json'

document.getElementById('details-title').innerHTML = render({
    titledata: data0.data
})