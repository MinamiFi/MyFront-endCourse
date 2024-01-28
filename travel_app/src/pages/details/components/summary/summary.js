import './summary.css'

import render from './summary.art'
import data0 from './summary.json'

document.getElementById('details-summary').innerHTML = render({
    summarydata: data0.data
})