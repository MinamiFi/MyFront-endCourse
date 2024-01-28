import './chat.css'
// console.log('test')
import render from './chat.art'
import data0 from './chat.json'

document.getElementById('message-chat').innerHTML = render({
    chats: data0.data
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