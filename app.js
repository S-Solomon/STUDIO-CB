var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var main = document.querySelector('main');
var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
var image = document.querySelector('.image');
var title = document.querySelector('.title');
var mode = document.querySelector('.mode');
var counter = document.querySelector('.counter');
var cursor = document.querySelector('.cursor');
var splash = document.querySelector('.splash');
var darkMode = false;
mode.addEventListener('click', function () {
    darkMode = !darkMode;
    if (darkMode) {
        document.documentElement.style.setProperty('--main-color', '#161616');
        document.documentElement.style.setProperty('--secondary-color', '#ded9d9');
        document.documentElement.style.setProperty('--third-color', '#9c9c9c');
        document.documentElement.style.setProperty('--title-color', '#ffffff');
    }
    else {
        document.documentElement.style.setProperty('--main-color', '#ffffff');
        document.documentElement.style.setProperty('--secondary-color', '#ded9d9');
        document.documentElement.style.setProperty('--third-color', '#9c9c9c');
        document.documentElement.style.setProperty('--title-color', '#161616');
    }
});
window.addEventListener('mousemove', function (e) {
    cursor.style.transform = "translate3d(" + e.clientX + "px, " + e.clientY + "px, 0)";
});
next.addEventListener('mouseenter', function () {
    cursor.classList.remove('left');
    cursor.classList.add('right');
});
next.addEventListener('mouseleave', function () {
    removeCursorClass(cursor);
});
previous.addEventListener('mouseenter', function () {
    cursor.classList.remove('right');
    cursor.classList.add('left');
});
previous.addEventListener('mouseleave', function () {
    removeCursorClass(cursor);
});
function removeCursorClass(element) {
    element.classList.remove('left');
    element.classList.remove('right');
}
var locations = ['LONDON', 'PARIS', 'NEW YORK', 'COPENHAGEN', 'MADRID'];
image.style.backgroundImage = "url(./images/1.jpg)";
counter.querySelector('p').innerText = '1/5';
title.querySelector('p').innerText = locations[0];
previous.addEventListener('click', function () {
    var num = +image.style.backgroundImage.split('/')[2][0];
    num == 1 ? num = 5 : num--;
    image.style.backgroundImage = "url(./images/" + num + ".jpg)";
    counter.querySelector('p').innerText = num + "/5";
    title.querySelector('p').innerText = "" + locations[num - 1]; // images starts at 1 and array indexes at 0
});
next.addEventListener('click', function () {
    var num = +image.style.backgroundImage.split('/')[2][0];
    num == 5 ? num = 1 : num++;
    image.style.backgroundImage = "url(./images/" + num + ".jpg)";
    counter.querySelector('p').innerText = num + "/5";
    title.querySelector('p').innerText = "" + locations[num - 1]; // images starts at 1 and array indexes at 0
});
function loadPage() {
    var html = '';
    var splashTitle = document.querySelector('.splash-title');
    var splashTitleArray = splashTitle.innerText.split('');
    splashTitleArray.forEach(function (letter) {
        html += "<span>" + letter + "</span>";
    });
    splashTitle.innerHTML = html;
    __spreadArray([], splashTitle.querySelectorAll('span')).forEach(function (span, index) {
        setTimeout(function () {
            span.style.transform = "translateY(0px)";
        }, (index + 1) * 50);
    });
    setTimeout(function () {
        splash.classList.add('active');
        setTimeout(function () {
            main.style.transform = "translateY(0px)";
            main.style.opacity = '1';
            splash.style.display = 'none';
            image.style.transform = "scale(1)";
        }, 500);
    }, 2000);
}
loadPage();
