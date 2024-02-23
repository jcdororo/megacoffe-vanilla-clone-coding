# megacoffe-vanilla-clone-coding

배포 by netlify <br />
<a href="https://whimsical-rugelach-f688e2.netlify.app" title="이동!"> 클론코딩 사이트</a>

<a href="https://www.mega-mgccoffee.com/#main" title="이동!"> 메가커피 원본 사이트</a>

# ☕ MEGACOFFEE 
<img src='./img/main_1.gif.gif' alt="main_1"/>
<img src='./img/main_1.gif.gif' alt="main_2"/>


<br/>

## 스크롤 화면 이동

> 뷰포트 화면 이동은 window객체의 wheel을 막고 , 화면을 section으로 나누어 gsap의 #id로 이동하는 것으로 구현.

```javascript
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
  // 화면 이동
  if(event.deltaY > 0) {
    if(numIndex + 1 < arrIds.length) {
      numIndex += 1
    }
  } else {
    if(numIndex - 1 >= 0) {
      numIndex -= 1
  }
  
  gsap.to(window, { duration: .6, scrollTo: '#'+arrIds[numIndex] });
}
```
## 딜레이 요소 출력

```javascript
```

> 화면에 보여졌을때 요소 출력

## 스크롤바 숨기기


```css
/* 스크롤바 숨기기 */
::-webkit-scrollbar {
  display: none; /* 모든 스크롤바 숨기기 */
}
```

<br />


