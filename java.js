
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('not-loaded');

   
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.classList.add('animate');
    });

    const grasses = document.querySelectorAll('.growing-grass');
    grasses.forEach(grass => {
        grass.classList.add('animate');
    });

    const leaves = document.querySelectorAll('.long-g .leaf');
    leaves.forEach(leaf => {
        leaf.classList.add('animate');
    });

    const gFrontLeaves = document.querySelectorAll('.flower__g-front__leaf');
    gFrontLeaves.forEach(leaf => {
        leaf.classList.add('animate');
    });
});

const allFlowers = document.querySelectorAll('.flower');
allFlowers.forEach(flower => {
    flower.addEventListener('mousemove', (e) => {
        const rect = flower.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        flower.style.setProperty('--mouse-x', `${x}px`);
        flower.style.setProperty('--mouse-y', `${y}px`);
    });
});
window.addEventListener('load', () => {
    const flower1 = document.querySelector('.flower--1');
    setTimeout(() => {
        flower1.classList.add('grown'); 
    }, 3000);
});
س
