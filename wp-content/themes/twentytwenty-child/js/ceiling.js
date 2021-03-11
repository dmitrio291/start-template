/* Frontend Дима */

// Универсальная ф-ия проверяет ширину окна и в зависимости от этой ширины включает или отключает слайдер owl-carousel 
function checkWindowWidth(sliderClass, windowWidth, runSliderFunction) {
    let innerWindowWidth = window.innerWidth,
        item = document.querySelector(`.${sliderClass}`),
        itemName = '.' + sliderClass;

    // если ширина окна меньше или равна переменной windowWidth
    if (innerWindowWidth < windowWidth) {
        // добавляет класс owl-carousel и запускает ф-ию runSlider с переданным парметром, которая инициализирует слайдер
        if (item && itemName) {
            item.classList.add('owl-carousel');
            runSliderFunction(itemName);
        }
    } else {
        // реинициализирует слайдер по тригеру и удалет класс owl-loaded
        $(item).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
}

// Скрипт для слайдера блока sale-only-7-days
function saleOnly7DaysSlider(itemName) {
    $(itemName).owlCarousel({
        items: 1,
        dots: true,
        margin: 55,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        responsive: {
            768: {
                items: 2,
                margin: 15
            }
        }
    });
}

// Универсальный скрипт для модальных окон 
let btns = document.querySelectorAll('*[data-modal-btn]'),
    popups = document.querySelectorAll('.holz-modal .popup'),
    coldFramelessGlazingPopups = document.querySelectorAll('.cold-frameless-glazing .popup'),
    reviewsWindows = document.querySelectorAll('.reviews-windows'),
    holzGutModalContent = document.querySelectorAll('.holz-modal .popup__content'),
    coldFramelessGlazingContent = document.querySelectorAll('.cold-frameless-glazing .popup__content');

// Останавливает всплытие на элементе
function stopPropogation(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }
}

// Этот код показывает попап при клике на кнопку или скрывает его при клике на крестик внтри попапа
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let name = btns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='" + name + "']");
        modal.style.display = 'block';
        let close = modal.querySelector('.popup__btn-close');
        close.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });
}

// Цикл перебирает все попапы и вешает обработчик события клик на каждый попап и закрывает попап при клике на него
for (let i = 0; i < popups.length; i++) {
    popups[i].addEventListener('click', function (event) {
        this.style.display = 'none';
    });
}

for (let i = 0; i < coldFramelessGlazingPopups.length; i++) {
    coldFramelessGlazingPopups[i].addEventListener('click', function (event) {
        this.style.display = 'none';
    });
}

for (let i = 0; i < reviewsWindows.length; i++) {
    reviewsWindows[i].addEventListener('click', function (event) {
        event.stopPropagation();
    });
}

// Эта ф-ия останавливает вспллытие на элементе
stopPropogation(reviewsWindows);
stopPropogation(holzGutModalContent);
stopPropogation(coldFramelessGlazingContent);

// В качестве параметра ф-ии checkWindowWidth передаем название класса слайдера, размер окна(до какой ширины окна будет происходить инициализация слайдера) и ф-ию в которой будет инициализироваться слайдер
checkWindowWidth('sale-only-7-days__slider', 1200, saleOnly7DaysSlider);

// При изменении окна будет выполняться событие resize, которое будет запускать нужную ф-ию
window.addEventListener('resize', function () {
    checkWindowWidth('sale-only-7-days__slider', 1200, saleOnly7DaysSlider);
});

/* Frontend Паша */

$('.cost-calculation__box-list').on('click', '.cost-calculation__link', function () {
    $('.cost-calculation__list').toggleClass('list-open');
    $('.cost-calculation__link').toggleClass('btn-open');
});

// скрипт select
$('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
    }
});


// Скрипт для слайдера блока hot-promotions__slider
$('.hot-promotions__slider').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    nav: true,
    responsive: {
        768: {
            margin: 15,
            autoWidth: true,
            items: 2,
        },
        1200: {
            autoWidth: true,
            margin: 20,
            items: 3,
        }
    }
});

/* Frontend Дима */
// Скрипт для блока discounts-promotions-ceilings
const discountsCeilingsBtn = document.getElementById('discountsPromotionsCeilingsBtn'),
    discountsCeilingsItemsHide = document.querySelectorAll('.discounts-promotions-ceilings__item.hide');


if (discountsCeilingsBtn) {
    discountsCeilingsBtn.addEventListener('click', function () {
        this.style.display = 'none';
        discountsCeilingsItemsHide.forEach((item) => {
            item.classList.remove('hide');
        });
    });
}

// Скрипт для слайдера блока with-ceilings-you-get
function withCeilingsYouGetSlider(itemName) {
    $(itemName).owlCarousel({
        items: 1,
        dots: true,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        responsive: {
            768: {
                items: 2,
                margin: 10
            }
        }
    });
}

checkWindowWidth('with-ceilings-you-get__slider', 1200, withCeilingsYouGetSlider);

window.addEventListener('resize', function () {
    checkWindowWidth('with-ceilings-you-get__slider', 1200, withCeilingsYouGetSlider);
});

// Скрипт для слайдера блока photos-ceilings
const more = document.querySelectorAll('.more');

if (more) {
    for (let i = 0; i < more.length; i++) {
        more[i].addEventListener('click', function (event) {
            event.preventDefault();
            const hidden = this.parentNode.querySelectorAll('.hidden');
            for (let i = 0; i < 4; i++) {
                if (!hidden[i]) return this.outerHTML = '';
                hidden[i].classList.remove('hidden');
            }
        });
    }
}

// Скрипт для слайдера блока stretch-ceilings-better
function stretchCeilingsBetter(itemName) {
    $(itemName).owlCarousel({
        items: 1,
        dots: true,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        responsive: {
            768: {
                items: 2,
                margin: 10
            }
        }
    });
}

checkWindowWidth('stretch-ceilings-better__slider', 768, stretchCeilingsBetter);

window.addEventListener('resize', function () {
    checkWindowWidth('stretch-ceilings-better__slider', 768, stretchCeilingsBetter);
});

// Скрипт для слайдера с ползунком блока calculating-cost-stretch-ceiling
const calculatingCostSettings = {
    fill: '#F26422',
    background: '#C4C4C4'
}

const calculatingCostRangeSlider = document.querySelector('.calculating-cost-stretch-ceiling__slider');

function applyFill(calculatingCostRangeSlider) {
    const percentage = 100 * (calculatingCostRangeSlider.value - calculatingCostRangeSlider.min) / (calculatingCostRangeSlider.max - calculatingCostRangeSlider.min),
        bg = `linear-gradient(90deg, ${calculatingCostSettings.fill} ${percentage}%, ${calculatingCostSettings.background} ${percentage + 0.1}%)`;
    calculatingCostRangeSlider.style.background = bg;
}

if (calculatingCostRangeSlider) {
    calculatingCostRangeSlider.addEventListener('input', (event) => {
        calculatingCostValue.textContent = event.target.value;
        applyFill(event.target);
        
        let calcValueMin = String(Math.round(event.target.value * (+event.target.dataset.value)));
        let calcValueMax = String(Math.round(event.target.value * (+event.target.dataset.value) * 1.153));
        calculatingValueMin.textContent = calcValueMin.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        calculatingValueMax.textContent = calcValueMax.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    });

    applyFill(calculatingCostRangeSlider);
}

// Скрипт для слайдера блока use-plastic-doors
function usePlasticDoors(itemName) {
    $(itemName).owlCarousel({
        items: 1,
        dots: true,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        responsive: {
            768: {
                items: 3,
                margin: 16
            }
        }
    });
}

checkWindowWidth('use-plastic-doors__box', 1200, usePlasticDoors);

window.addEventListener('resize', function () {
    checkWindowWidth('use-plastic-doors__box', 1200, usePlasticDoors);
});

// Скрипт для сладйера блока any-window-repair
$('.any-window-repair__slider').owlCarousel({
    items: 1,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
        768: {
            items: 2
        },
        1200: {
            items: 3,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
        }
    }
});

// Скрипт для сладйера блока any-shape-of-ceilings
$('.any-shape-of-ceilings__slider').owlCarousel({
    items: 2,
    dots: true,
    margin: 13,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
        768: {
            margin: 16,
            items: 3
        },
        1200: {
            margin: 20,
            items: 4,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
        }
    }
});

// Скрипт для слайдера блока catalog__item-slider-one
$('.catalog__item-slider-one').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        768: {
            items: 4,
        },
        1200: {
            margin: 20,
            items: 4,
        }
    }
});

// Скрипт для слайдера блока catalog__item-slider-two
$('.catalog__item-slider-two').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        768: {
            items: 4,
        },
        1200: {
            margin: 20,
            items: 4,
        }
    }
});

// Скрипт для слайдера блока catalog__item-slider-three
$('.catalog__item-slider-three').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        768: {
            items: 4,
        },
        1200: {
            margin: 20,
            items: 4,
        }
    }
});

// Скрипт для слайдера блока catalog__item-slider-foure
$('.catalog__item-slider-foure').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        768: {
            items: 4,
        },
        1200: {
            margin: 20,
            items: 4,
        }
    }
});

// Скрипт для слайдера блока catalog__item-slider-five
$('.catalog__item-slider-five').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        768: {
            items: 4,
        },
        1200: {
            margin: 20,
            items: 4,
        }
    }
});

  // Скрипт для слайдера блока expensive-or-cheap__slider
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".expensive-or-cheap__slider");
    if (windowWidth < 768) {

      elem.addClass('owl-carousel');

      $('.expensive-or-cheap__slider').owlCarousel({
        items: 1,
        dots: true,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        margin: 55,
      });
    }
    else {
      elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });

