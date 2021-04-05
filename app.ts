import { string } from "yargs";

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