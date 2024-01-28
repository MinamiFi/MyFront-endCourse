import './product.css'

import render from './product.art'
import data0 from './product.json'

document.getElementById('index-product').innerHTML = render({
    productdata: data0.data
})
// const url = 'product.json'
// const xhr = new XMLHttpRequest()
// console.log(xhr)
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState);
//     if (xhr.readyState !== 4) return;
//     if (xhr.status >= 200 && xhr.status <= 300 || xhr.status == 304) {
//         const data = JSON.parse(xhr.responseText)
//         //console.log(data.data)
//         //console.log(typeof data.data)
//         console.log(data.data[0].url)
//         document.getElementById('index-product').innerHTML = render({
//             productdata: data.data
//         })
//     }
// }
// xhr.open('get', url)
// xhr.send()
