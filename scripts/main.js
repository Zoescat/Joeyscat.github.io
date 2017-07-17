var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cat_1.jpg') {
      myImage.setAttribute('src', 'images/cat_3.jpg');
    } else {
      myImage.setAttribute('src', 'images/cat_1.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


/*设置姓名*/
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Lovely ' + myName;
}

/*判断是否存在用户名,不存在立即请求输入用户名,存在则直接显示*/
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'Lovely ' + storeName;
}

myButton.onclick = function() {
    setUserName();
}