// ＱＡ問答
$(document).ready(function() {

  $('.question h3').click(function(event) {

    // 讓點擊到的 h3 亮起來，其他h3移除active樣式
    $(this).toggleClass('active');

    // 讓點擊到的 h3找到父元素 .question ，再找裡面的 P 判斷收闔
    $(this).parent().find('p').slideToggle();

    // 自己以外的 p 隱藏起來
    $(this).parent().siblings().find('p').slideUp();
    // 自己以外的 h3 移除u樣式
    $(this).parent().siblings().find('h3').removeClass('active');

  });
});


// 漢堡選單
$(document).ready(function () {
  $('.showmenu').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
});


// AOS js
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});