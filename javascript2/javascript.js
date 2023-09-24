//ローディングアニメーション
{
  const keyName = 'visited';
  const keyValue = JSON.stringify(true);
  const loading = document.querySelector( ".loading__background" );
  const sk = document.querySelector( ".loading__sk" );

document.addEventListener("DOMContentLoaded", function () {
if(loading != null){
if (!sessionStorage.getItem(keyName)) {
    //sessionStorageにキーと値を追加
    sessionStorage.setItem(keyName, keyValue);

    //ここに初回アクセス時の処理
    setTimeout(() => logging(), 1500)

      function logging (){
        sk.style.opacity=0;
        sk.style.visibility="hidden";
        loading.style.opacity=0;
        loading.style.visibility="hidden";
	    };

} else {
    sk.style.opacity=0;
    sk.style.visibility="hidden";
    loading.style.opacity=0;
    loading.style.visibility="hidden";
}
}
}
);}

//メニューボタン
	let menu__open = document.querySelectorAll('.menu__open');
	const drawer__input = document.querySelector(".menu__drawer--open");
	const menu__nav = document.querySelector('.menu__nav');
  const kinshi = document.getElementById('body');
	drawer__input.addEventListener('click', () => {

	drawer__input.classList.toggle("appear");
	for (var m = 0; m < menu__open.length; m++) {
	if (drawer__input.classList.contains("appear") == true) {
	  menu__open[m].classList.add("appear");
    kinshi.classList.add("kinshi");
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
	} else {
	  menu__open[m].classList.remove("appear");
    kinshi.classList.remove("kinshi");
}
}
});

//メニュー解除
	let elements = document.querySelectorAll('.nav__item');
	for (var i = 0; i < elements.length; i++) {
	elements[i].onclick = function() {
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
    rootMargin: "-20% 0px",
    threshold: 0
  };
  let main_observer;
  main_observer = new IntersectionObserver(photo_set, options);
  scrollAppears.forEach( (elem) => {
  main_observer.observe(elem);
  });
}
function photo_set(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(-20px)";
        entry.target.style.opacity = 1;
      }else{
      }
      });
}

// JavaScript Document
const windowSize = window.innerWidth;
if (windowSize > 597) {
const mySwiper = new Swiper ('.swiper', {
   loop: true,
   slidesPerView: '3',
   speed: 2000,
   centeredSlides : true,
	autoplay: {
		delay: 2500,
      disableOnInteraction: false,
      waitForTransition: false,
	},
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     type: 'bullets',
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
} else {
  const mySwiper = new Swiper ('.swiper', {
    loop: true,
    slidesPerView: '1',
    speed: 2000,
    centeredSlides : true,
   autoplay: {
     delay: 2500,
       disableOnInteraction: false,
       waitForTransition: false,
   },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}