var osub = document.getElementById("sub")//提交按钮
var otext = document.getElementById('text')//提交的内容
var oul = document.getElementById('ul')//列表
var keynum//lcoalstorage中已经存取的键的个数


if (localStorage.getItem('keynum') != null) {
  keynum = localStorage.getItem('keynum')
}
else {
  keynum = 0
  localStorage.setItem('keynum', keynum)
}


//从本地存储加载数据
for (var i = 1; i <= keynum; i++) {
  
  //找到数据
  var key = localStorage.key(i)
  var value = localStorage.getItem(key)

  var li = document.createElement('li')
  li.innerHTML = value
  oul.appendChild(li)
}

//用提交按钮添加内容
sub.onclick = function () {
  text = otext.value
  if (text === '') {
    alert('请输入要添加的文本内容')
    return
  }
  otext.value = ""
  oli = document.createElement('li')
  oli.innerHTML = text
  oul.appendChild(oli)


  //将添加的数据存储到localstorage中
  localStorage.setItem(text, text)
}


//删除数据
oul.addEventListener('click', function (event) {
  var li = event.target;
  if (li.tagName === 'LI') {
    oul.removeChild(li);
  }


  //将localstorage里的数据删除
});

window.onunload = function () {
  localStorage.setItem('keynum', keynum)
}