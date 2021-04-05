"use strict";
// exports.__esModule = true;
var main = document.querySelector('main');
var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
var image = document.querySelector('.image');
var title = document.querySelector('.title');
var mode = document.querySelector('.mode');
var counter = document.querySelector('.counter');
var cursor = document.querySelector('.cursor');
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
