let headEl = document.querySelector('.head')
// let headEl = document.querySelector('.head')
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

    const target = chapEl.getAttribute('id');
      window.location.hash = target;

    document.querySelectorAll('.chap__list.on').forEach(function(item) {
      item.classList.remove('on');
    });

    chapEl.classList.add('on')
  })
})


new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});