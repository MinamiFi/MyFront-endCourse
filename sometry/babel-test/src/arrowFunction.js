
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const box = document.getElementById('box')
var show = {
    content: "Hello World",
    timer: null,
    start: () => {
        timer = setInterval(() => {
            show.content = show.content + ' Hello World';
            console.log("HelloWorld++");
            box.innerHTML = show.content;
        }, 1000)
    },
    stop: () => {
        clearInterval(timer);
        console.log("Stop");
    },
}
box.innerHTML = show.content;
startBtn.onclick = () => show.start();
stopBtn.onclick = () => show.stop();