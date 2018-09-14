var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute ('src','images/gate.png');
    } else {
      myImage.setAttribute ('src','images/logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'IIT BBS is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'IIT BBBS is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/



