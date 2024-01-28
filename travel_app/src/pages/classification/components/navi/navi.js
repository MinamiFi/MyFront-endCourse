import './navi.css'

import render from './navi.art'
import data0 from './navi.json'

document.getElementById('classification-navi').innerHTML = render({
    navidata: data0.data
})