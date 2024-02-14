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




new Swiper('.section__main .swiper', {
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

// wheel 막는것
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});


const sectionEls = document.querySelectorAll(".section")

const arrIds = [];

sectionEls.forEach(function(titleTextEl, index) {
  arrIds.push(titleTextEl.getAttribute('id'))
})

let lastScrollTop  = 0
let numIndex = 0;

function scrolling(event) {
  if(event.deltaY > 0) {
    if(numIndex + 1 < arrIds.length) {
      numIndex += 1

      document.querySelectorAll('.chap__list.on').forEach(function(item) {
        item.classList.remove('on');
      });
      document.querySelectorAll('.chap__list')[numIndex].classList.add('on')
    }
  } else {
    if(numIndex - 1 >= 0) {
      numIndex -= 1

      document.querySelectorAll('.chap__list.on').forEach(function(item) {
        item.classList.remove('on');
      });
      document.querySelectorAll('.chap__list')[numIndex].classList.add('on')
    }
  }
  if(arrIds[numIndex] === 'main') {
    document.querySelector('.head .inner .logo').classList.add('fixed')
  } else {
    document.querySelector('.head .inner .logo').classList.remove('fixed')

  }
  gsap.to(window, { duration: .6, scrollTo: '#'+arrIds[numIndex] });
}

window.onwheel = _.throttle(scrolling, 600, { 'trailing': false });

const chapEls = document.querySelectorAll('.chap__list')
chapEls.forEach(function (chapEl, index) {
  chapEl.addEventListener('click', function() {
    document.querySelectorAll('.chap__list.on').forEach(function(item) {
      item.classList.remove('on');
    });
    numIndex = index
    chapEl.classList.add('on')
  })
})


new Swiper('.section__menu .menu__wrapper .middle .contents .contents__list > ul > li .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  // autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 40, // 슬라이드 사이 여백
  slidesPerView: 2, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.section__menu .menu__wrapper .middle .contents .contents__list > ul > li .swiper .swiper-wrapper .swiper-button-prev', // 이전 버튼 선택자
    nextEl: '.section__menu .menu__wrapper .middle .contents .contents__list > ul > li .swiper .swiper-wrapper .swiper-button-next' // 다음 버튼 선택자
  }
})