import './backtop.css';
import '../../assets/styles/reset.css';
import '../../assets/styles/base.css';
import '../../assets/icons/iconfont.css';
import'../../assets/styles/layout.css';

const scrollContainer = document.getElementsByClassName('page')[0]
const backtopEl = document.querySelector('.backtop')
// console.log(scrollContainer)
// console.log(headerEl)
const INIT_STATE = 'init'
const CHANGED_STATE = 'changed'
let state = INIT_STATE
// console.log(scrollContainer, headerEl)
//在顶部不显示
scrollContainer.addEventListener('scroll', () => {
    if (state !== CHANGED_STATE && scrollContainer.scrollTop <= window.innerHeight) {
        state = CHANGED_STATE
        backtopEl.classList.add('backtop-hidden')
    } else if (state !== INIT_STATE && scrollContainer.scrollTop > window.innerHeight) {
        state = INIT_STATE
        backtopEl.classList.remove('backtop-hidden')
    }
}, false)

//点击返回顶部
backtopEl.addEventListener('click', () => {
    scrollContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}, false)