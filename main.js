var iceCream = 'chocolate';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'fellows.jpg') {
      myImage.setAttribute ('src','child.jpg');
    } else {
      myImage.setAttribute ('src','fellows.jpg');
    }
}
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = myName+',小伙伴欢迎你';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML =  storedName+',小伙伴欢迎你 ';
}
myButton.onclick = function() {
  setUserName();
}
