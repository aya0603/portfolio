// JavaScript Document

const keyName = 'visited';
const keyValue = JSON.stringify(true);
const name_appear = document.getElementById('name');

document.addEventListener("DOMContentLoaded", function () {
  if (name_appear != null) {
    if (!sessionStorage.getItem(keyName)) {
      sessionStorage.setItem(keyName, keyValue);
      name_appear.classList.add("opacity-0");
      setTimeout(() => logging(), 500)
      function logging() {
        name_appear.classList.remove("opacity-0");
        name_appear.classList.add("name__img");
      };
    } else {
    }
  }
}
);

//メニューボタン
let menu__open = document.querySelectorAll('.menu__open');
const drawer__input = document.querySelector(".menu__drawer--open");
const menu__nav = document.querySelector('.menu__nav');
const menu__bg = document.getElementById("menu__bg");
drawer__input.addEventListener('click', () => {

  drawer__input.classList.toggle("appear");
  for (var m = 0; m < menu__open.length; m++) {
    if (drawer__input.classList.contains("appear") == true) {
      menu__open[m].classList.add("appear");
      menu__nav.animate(
        [
          { opacity: 0 },
          { opacity: 1 }
        ],
        {
          duration: 500,
          fill: 'forwards',
          easing: "cubic-bezier(0.12, 0, 0.39, 0)"
        }
      );
      menu__bg.animate(
        [
          { opacity: 0 },
          { opacity: 0.4 }
        ],
        {
          duration: 500,
          fill: 'forwards',
          easing: "cubic-bezier(0.12, 0, 0.39, 0)"
        }
      );
    } else {
      menu__open[m].classList.remove("appear");
    }
  }
});

//メニュー解除
let elements = document.querySelectorAll('.nav__item');
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    drawer__input.click();
  };
}

//うかびあがるやつ

const scrollAppears = document.querySelectorAll(".display--action");

window.addEventListener("load", (event) => {
  createObserver();
}, false);

function createObserver() {
  let options = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0
  };
  let main_observer;
  main_observer = new IntersectionObserver(photo_set, options);
  scrollAppears.forEach((elem) => {
    main_observer.observe(elem);
  });
}
function photo_set(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(-20px)";
      entry.target.style.opacity = 1;
    } else {
    }
  });
}

window.onload = function () {
  const opacity_2 = document.querySelector('.worktop__image__box__js__2');
  const opacity_3 = document.querySelector('.worktop__image__box__js__3');
  if (opacity_2 != null) {
    opacity_2.classList.add('opacity-0');
    opacity_3.classList.add('opacity-0');
  }
}


//スライドするやつ
const worktopAppears = document.querySelectorAll(".worktop__image__box__js");

window.addEventListener("load", (event) => {
  workObserver();
}, false);

function workObserver() {
  let woptions = {
    root: null,
    rootMargin: "-40% 0px",
    threshold: 0
  };
  let main_workobserver;
  main_workobserver = new IntersectionObserver(wphoto_set, woptions);
  worktopAppears.forEach((elem) => {
    main_workobserver.observe(elem);
  });
}
function wphoto_set(wentries) {
  wentries.forEach(wentry => {
    if (wentry.isIntersecting) {
      wentry.target.classList.remove("opacity-0");
      wentry.target.classList.add("work__appear");
    } else {
    }
  });
}

//カーソル変更

const cursor = document.getElementById('cursor');
const windowSize = window.innerWidth;
let cursor_none = document.querySelectorAll('a, body, button, html');
if (windowSize > 768) {
  document.addEventListener('mousemove', function (e) {
    cursor.style.opacity = .5;
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    for (let a = 0; a < cursor_none.length; a++) {
      cursor_none[a].classList.add('cursor_none');
    };
  });

  let link = document.querySelectorAll('a, .menu__drawer--open, .work__comp__pc__img, .work__comp__sp__img');
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
      cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
      cursor.classList.remove('cursor--hover');
    });
  }
}

//モーダル

const modalWrapper = document.querySelector('.modal-wrapper');
const images = document.querySelectorAll('.work__comp__pc__img, .work__comp__sp__img');
const modalImage = document.querySelector('.modal-image');
if (modalWrapper != null) {
images.forEach(function(image) {
     image.addEventListener('click', function() {
          modalWrapper.classList.add('show');
          modalImage.classList.add('show');

          const imageSrc = image.getAttribute('data-src');
          modalImage.src = imageSrc;
     });
});

modalWrapper.addEventListener('click', function() {
     if (this.classList.contains('show')) {
          this.classList.remove('show');
          modalImage.classList.remove('show');
     }
});
}