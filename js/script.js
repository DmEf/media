let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.page-header__toggle');
// let modalOverlay = document.querySelector('.modal-overlay');

// выпадающее меню.
// Нужно повесить на один клик все. 

navToggle.addEventListener('click', function() {
	if (navToggle.classList.contains('page-header__toggle--open')) {
		navToggle.classList.remove('page-header__toggle--open');
		navToggle.classList.add('page-header__toggle--close');

		navMain.classList.add('main-nav--open');
		// modalOverlay.classList.add('modal-overlay--show');
	} else {
		navToggle.classList.remove('page-header__toggle--close');
		navToggle.classList.add('page-header__toggle--open');

		navMain.classList.remove('main-nav--open');
		// modalOverlay.classList.remove('modal-overlay--show')
	}
});


// navToggle.addEventListener('click', function() {
// 	if (navToggle.classList.contains('page-header__toggle--close')) {
// 		navToggle.classList.remove('page-header__toggle--close');
//  		navToggle.classList.add('page-header__toggle--open');

//  		navMain.classList.remove('main-nav--open');
//  	}
//  });

// форма
let requestToggle = document.querySelector('.main-nav__request-link');
let modalContent = document.querySelector('.modal-content');
let modalOverlay = document.querySelector('.modal-overlay');
let modalOverlayClose = document.querySelector('.modal-content-close');
let name = modalContent.querySelector("[name=name]");


requestToggle.addEventListener('click', function() {
	event.preventDefault();
	modalContent.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
	name.focus();
});

modalOverlayClose.addEventListener('click', function() {
	event.preventDefault();
	modalContent.classList.remove('modal-content-show');
	modalOverlay.classList.remove('modal-overlay-show');
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (modalContent.classList.contains("modal-content-show")) {
            modalContent.classList.remove("modal-content-show");
            modalOverlay.classList.remove('modal-overlay-show');
          }
        }
      });


// блок новостей
let newsLink = document.querySelector('.news__all-link');
let newsItem = document.querySelectorAll('.news__item-link--display--none');

newsLink.addEventListener('click', function() {
	event.preventDefault();
	console.log(newsItem);
	for (let i = 0; i < newsItem.length; i++) {
		if (newsItem[i].classList.contains('news__item-link--display--none')) {
			newsItem[i].classList.remove('news__item-link--display--none');
			newsItem[i].classList.add('news__item-link--display--block');
		} else {
			newsItem[i].classList.remove('news__item-link--display--block');
			newsItem[i].classList.add('news__item-link--display--none');
		}
	}
});