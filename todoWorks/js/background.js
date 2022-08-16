const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

const theImage = images[Math.floor(Math.random() * images.length)];
// goal : let's make <img> on html file.

const bgImge = document.querySelector('#background-frame');

bgImge.style.setProperty('--bg-img', `url(./js/images/${theImage})`);
