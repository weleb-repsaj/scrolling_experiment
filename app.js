// INTRO SECTION
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('.title');

// END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// Scenes: like a section of animations
let scene = new ScrollMagic.Scene({
    duration: 6000, // scene lasts for 6000px
    triggerElement: intro,
    triggerHook: 0
})
    //.addIndicators()
    .setPin(intro) // pins video to viewport for duration
    .addTo(controller);

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

// basic event lister on scroll
scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
}, 50.0);