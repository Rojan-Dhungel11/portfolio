// Add responsive navigation bar toggle
const menuToggle = document.querySelector('.header .container .flex .logo');
const nav = document.querySelector('.header .container .flex nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
});

// Add smooth scrolling for navigation links
const navigationLinks = document.querySelectorAll('.header .container .flex nav ul li a');

navigationLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        nav.classList.remove('open');

        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add animated typing effect to the bio section
const typedText = "I'm passionate about creating engaging and powerful websites as a web developer. I have technical expertise in JavaScript, HTML, CSS, and several front-end and back-end frameworks, including React, Angular, and Node.js. Additionally, I have experience managing databases and improving website speed for a smooth user experience. In order to stay ahead of the curve and provide creative solutions for my assignments, I stay current with the most recent business trends and technologies. I am committed to producing excellent and user-friendly websites, whether I am working alone or with a team.";
const infoText = document.querySelector('.info .info_text');
let charIndex = 0;

infoText.innerHTML = '';

function typeText() {
if (charIndex < typedText.length) {
infoText.innerHTML += typedText.charAt(charIndex);
charIndex++;
}
}

setInterval(typeText, 100);

// Add fading animation for the profile picture in the bio section
const profile = document.querySelector('.info .bio .image .rounded');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset;
    const bioTop = document.querySelector('.info').offsetTop;
    const bioHeight = document.querySelector('.info').offsetHeight;

    if (scrollTop >= bioTop + bioHeight - window.innerHeight) {
        profile.classList.add('fade');
    } else {
        profile.classList.remove('fade');
    }
});

// Add slide up animation for the education and hobbies sections
const education = document.querySelector('.education');
const hobbies = document.querySelector('.hobbies');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset;
    const educationTop = education.offsetTop;
    const hobbiesTop = hobbies.offsetTop;

    if (scrollTop >= educationTop + education.offsetHeight - window.innerHeight) {
        education.classList.add('slide-up');
    } else {
        education.classList.remove('slide-up');
    }
    
    if (scrollTop >= hobbiesTop + hobbies.offsetHeight - window.innerHeight) {
        hobbies.classList.add('slide-up');
    } else {
        hobbies.classList.remove('slide-up');
    }
})