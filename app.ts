let main = document.querySelector('main') as HTMLElement;
let previous = document.querySelector('.previous') as HTMLDivElement;
let next = document.querySelector('.next') as HTMLDivElement;
let image = document.querySelector('.image') as HTMLDivElement;
let title = document.querySelector('.title') as HTMLDivElement;
let mode = document.querySelector('.mode') as HTMLUListElement;
let counter: HTMLElement = document.querySelector('.counter') as HTMLDivElement;
let cursor: HTMLElement = document.querySelector('.cursor') as HTMLDivElement;
let splash: HTMLElement = document.querySelector('.splash') as HTMLDivElement;

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

function loadPage() {
    let html: string = '';
    let splashTitle: any = document.querySelector('.splash-title');
    let splashTitleArray: string[] = splashTitle.innerText.split('');
    splashTitleArray.forEach((letter: string) => {
        html += `<span>${letter}</span>`
    })
    splashTitle.innerHTML = html;

    [...splashTitle.querySelectorAll('span')].forEach((span, index) => {
        setTimeout(() => {
            span.style.transform = `translateY(0px)`
        },(index + 1) * 50)
    })

    setTimeout(() => {
        splash.classList.add('active');

        setTimeout(() => {
            main.style.transform = `translateY(0px)`;
            main.style.opacity =  '1';
            splash.style.display = 'none';
            image.style.transform = `scale(1)`;
        }, 500)
        
    }, 2000)
}

loadPage();