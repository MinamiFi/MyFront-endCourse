import './ai.css'
// console.log('test')
import render from './ai.art'
import data0 from './ai.json'

document.getElementById('message-ai').innerHTML = render({
    ais: data0.data
})

// const url = 'https://www.imooc.com/api/mall-wepApp/index/nav'
// const xhr = new XMLHttpRequest()

// console.log(xhr)
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState)
//     if (xhr.readyState !== 4) return;
//     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
//         var data = JSON.parse(xhr.responseText)
//         console.log(xhr.responseText);
//         console.log(data.data);
//         console.log(typeof xhr.responseText);
//         document.getElementById('index-nav').innerHTML = render({
//             navs: data.data
//         })
//     }
// };
// xhr.open('GET', url);
// xhr.send();