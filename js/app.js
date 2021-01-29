const h4__1 = document.querySelector('.h4__1');
const h4__2 = document.querySelector('.h4__2');
const h4__3 = document.querySelector('.h4__3');
const h4__4 = document.querySelector('.h4__4');
const h4__5 = document.querySelector('.h4__5');
const p1 = document.querySelectorAll('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelectorAll('.p3');
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');

const icon1 = document.querySelector('.icon1')
const icon2 = document.querySelector('.icon2')
const icon3 = document.querySelector('.icon3')
const icon4 = document.querySelector('.icon4')
const icon5 = document.querySelector('.icon5')

h4__1.addEventListener('click',()=> {
    p1.forEach(paragraph => {
        paragraph.classList.toggle('p-show')
    })
    h4__1.classList.toggle('h4-active')
    icon1.classList.toggle('fa-chevron-up')
})
h4__2.addEventListener('click',()=> {
    p2.classList.toggle('p-show')
    icon2.classList.toggle('fa-chevron-down')
    h4__2.classList.toggle('h4-active')
})
h4__3.addEventListener('click',()=> {
    p3.forEach(paragraph=> {
        paragraph.classList.toggle('p-show')
    })
    h4__3.classList.toggle('h4-active')
    icon3.classList.toggle('fa-chevron-up')
})
h4__4.addEventListener('click',()=> {
    h4__4.classList.toggle('h4-active')
    p4.classList.toggle('p-show')
    icon4.classList.toggle('fa-chevron-up')
})
h4__5.addEventListener('click',()=> {
    h4__5.classList.toggle('h4-active')
    p5.classList.toggle('p-show')
    icon5.classList.toggle('fa-chevron-up')
})