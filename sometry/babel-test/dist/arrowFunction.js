"use strict";

var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var box = document.getElementById('box');
var show = {
  content: "Hello World",
  timer: null,
  start: function start() {
    timer = setInterval(function () {
      show.content = show.content + ' Hello World';
      console.log("HelloWorld++");
      box.innerHTML = show.content;
    }, 1000);
  },
  stop: function stop() {
    clearInterval(timer);
    console.log("Stop");
  }
};
box.innerHTML = show.content;
startBtn.onclick = function () {
  return show.start();
};
stopBtn.onclick = function () {
  return show.stop();
};