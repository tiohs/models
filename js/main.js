/*show menu */
const showMenu = (toggledId, navId) =>{
  const toggle = document.getElementById(toggledId),
  nav = document.getElementById(navId)

    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
    } )
  }

showMenu('nav-toggle', 'nav-menu');

/* remove menu mobile */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* scroll section active link */
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* change bacground header */
function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/* Show scrool top */
function scrollTop(){
  const  scrollTop = document.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/*project swiper */
let swiper = new Swiper('.portfolio_container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

/** swiper* */
const myswiper = new Swiper('.testimonial_container', {
  spaceBetween: 48,
  loop: true,
  grabcursor: true,

  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    568:{
      slidesPerview: 2,
    },
  }
})

/* */
let planSlides = document.querySelectorAll('.bd-container');
let indexPlan = 0;

function nextPlan(){
  planSlides[indexPlan].classList.remove('active');
  indexPlan = (indexPlan + 1) % planSlides.length;
  planSlides[indexPlan].classList.add('active');
}

function prevPlan(){
  planSlides[indexPlan].classList.remove('active');
  indexPlan = (indexPlan - 1 + planSlides.length) % planSlides.length;
  planSlides[indexPlan].classList.add('active');
}
