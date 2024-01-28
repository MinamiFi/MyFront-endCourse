import 'swiper/swiper-bundle.min.css'
import './slider.css'
import Swiper from 'swiper/swiper-bundle.min.js'
import data0 from './slide.json'

import render from './slider.art'

document.getElementById('index-slider').innerHTML = render({
    imgs: data0.data
})
new Swiper('.swiper-container', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

})