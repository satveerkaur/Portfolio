const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
// const projectHover = document.querySelectorAll('.project-card');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

// projectHover.forEach(project => {
//     project.addEventListener('hover', () => {
//         document.body.classList.toggle('project-open');
//     })
// })

