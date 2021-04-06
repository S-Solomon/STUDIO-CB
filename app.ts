let main: HTMLElement = document.querySelector('main');
let previous: HTMLElement = document.querySelector('.previous');
let next: HTMLElement = document.querySelector('.next');
let image: HTMLElement = document.querySelector('.image');
let title: HTMLElement = document.querySelector('.title');
let mode: HTMLElement = document.querySelector('.mode');
let counter: HTMLElement = document.querySelector('.counter');
let cursor: HTMLElement = document.querySelector('.cursor');

let darkMode: boolean = false;

mode.addEventListener('click', () => {
    darkMode = !darkMode;

    if(darkMode) {
        document.documentElement.style.setProperty('--main-color','#161616' );
        document.documentElement.style.setProperty('--secondary-color','#ded9d9' );
        document.documentElement.style.setProperty('--third-color','#9c9c9c' );
        document.documentElement.style.setProperty('--title-color','#ffffff' );
    }else {
        document.documentElement.style.setProperty('--main-color','#ffffff' );
        document.documentElement.style.setProperty('--secondary-color','#ded9d9' );
        document.documentElement.style.setProperty('--third-color','#9c9c9c' );
        document.documentElement.style.setProperty('--title-color','#161616' );
    }
})

window.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
})

next.addEventListener('mouseenter', () => {
    cursor.classList.remove('left');
    cursor.classList.add('right');
})

next.addEventListener('mouseleave' , () => {
    removeCursorClass(cursor);
})

previous.addEventListener('mouseenter', () => {
    cursor.classList.remove('right');
    cursor.classList.add('left');
})

previous.addEventListener('mouseleave', () => {
    removeCursorClass(cursor);
})

function removeCursorClass(element: HTMLElement) {
    element.classList.remove('left');
    element.classList.remove('right');
}

let locations: string[] = ['LONDON', 'PARIS', 'NEW YORK', 'COPENHAGEN', 'MADRID'];

image.style.backgroundImage = `url(./images/1.jpg)`;
counter.querySelector('p').innerText = '1/5';
title.querySelector('p').innerText = locations[0];

previous.addEventListener('click', () => {
    let num: number = +image.style.backgroundImage.split('/')[2][0];
    num == 1 ? num = 5 : num --;
    image.style.backgroundImage = `url(./images/${num}.jpg)`;
    counter.querySelector('p').innerText = `${num}/5`;
    title.querySelector('p').innerText = `${locations[num - 1]}` // images starts at 1 and array indexes at 0
})

next.addEventListener('click', () => {
    let num: number = +image.style.backgroundImage.split('/')[2][0];
    num == 5 ? num = 1 : num ++;
    image.style.backgroundImage = `url(./images/${num}.jpg)`;
    counter.querySelector('p').innerText = `${num}/5`;
    title.querySelector('p').innerText = `${locations[num - 1]}` // images starts at 1 and array indexes at 0
})