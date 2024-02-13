let headEl = document.querySelector('.head')
const headLiEls = headEl.querySelectorAll('.inner .head__menu .menu li')
const dropMenuEls = headEl.querySelectorAll('.inner .head__menu .menu li .head__menu__dropmenu')

headEl.addEventListener('mouseover', function() {
  headEl.classList.add('hover')

})
headEl.addEventListener('mouseout', function() {
  headEl.classList.remove('hover')
  headEl.classList.remove('stretch')

})

headLiEls.forEach(function(headLiEl) {
  headLiEl.addEventListener('mouseover', function() {
    headLiEl.classList.add('check')
    headEl.classList.add('stretch')

  })
  headLiEl.addEventListener('mouseout', function() {
    headLiEl.classList.remove('check')


  })
})

const chapEls = document.querySelectorAll('.chap__list')

chapEls.forEach(function (chapEl, index) {
  chapEl.addEventListener('click', function() {

    document.querySelectorAll('.chap__list.on').forEach(function(item) {
      item.classList.remove('on');
    });

    chapEl.classList.add('on')
  })
})


new Swiper('.swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

document.querySelectorAll('.swiper-pagination-bullet').forEach(function(bullet, index) {
  bullet.addEventListener('click', function() {
    mySwiper.slideTo(index); // 클릭된 버튼에 해당하는 슬라이드로 이동
  });
});


const titleTextEls = document.querySelectorAll(".chap__list__wrap__title__text")

titleTextEls.forEach(function(titleTextEl, index) {
  const att = titleTextEl.getAttribute('href')
  titleTextEl.addEventListener('click', function() {
    gsap.to(window, { duration: .6, scrollTo: att });
  })  
})
