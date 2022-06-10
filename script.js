window.addEventListener('scroll', function(){
    const parallax = document.querySelector('.layerBG');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY('+ scrollPosition * 0.9 + 'px)';
})

window.addEventListener('scroll', function(){
    const parallax = document.querySelector('.layerMountain');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY('+ scrollPosition * 0.75 + 'px)';
})


window.addEventListener('scroll', function(){
    const parallax = document.querySelector('.layerCH');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY('+ scrollPosition * 0.3 + 'px)';
})

 window.addEventListener('scroll', function(){
     const parallax = document.querySelector('.layerLargerStrip');
     let scrollPosition = window.pageYOffset;

     parallax.style.transform = 'translateY('+ scrollPosition * 0.2 + 'px)';
 })


 window.addEventListener('scroll', function(){
     const parallax = document.querySelector('.layerSmallerStrip');
     let scrollPosition = window.pageYOffset;

     parallax.style.transform = 'translateY('+ scrollPosition * 0.04 + 'px)';
 })