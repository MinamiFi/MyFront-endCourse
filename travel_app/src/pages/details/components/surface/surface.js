import './surface.css'

import render from './surface.art'
import data0 from './surface.json'

document.getElementById('details-surface').innerHTML = render({
    surfacedata: data0.data
})