
// Скрипт для слайдера блока choose-your-bathroom-renovation

$('.choose-your-bathroom-renovation__slider').owlCarousel({
  items: 1,
  dots: true,
  dotsClass: ['pagination-box'],
  dotClass: ['pagination'],
  margin: 15,
  responsive: {
    768: {
      items: 2
    },
    1200: {
      margin: 20,
      items: 3,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
    }
  }
});

// Скрипт для слайдера блока work-algorithm__slider
function checkWidth1() {
  var windowWidth = $('body').innerWidth(),
    elem = $(".work-algorithm__slider");
  if (windowWidth < 768) {

    elem.addClass('owl-carousel');

    $('.work-algorithm__slider').owlCarousel({
      items: 1,
      dots: true,
      dotsClass: ['pagination-box'],
      dotClass: ['pagination'],
      margin: 15,
    });
  }
  else {
    elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
  }
}

checkWidth1(); // проверит при загрузке страницы

$(window).resize(function () {
  checkWidth1(); // проверит при изменении размера окна клиента
});

// Скрипт для слайдера блока profitable-proposition__slider

$('.profitable-proposition__slider').owlCarousel({
  items: 1,
  margin: 15,
  dots: false,
  responsive: {
    768: {
      items: 2,
      margin: 15,
    },
    1200: {
      margin: 20,
      items: 3,
      dots: true,
      dotsClass: ['pagination-box'],
      dotClass: ['pagination'],
      nav: true,
    }
  }
});

// Скрипт для блока profitable-proposition

$(".profitable-proposition__item-list").on('click', '> .profitable-proposition__list-btn-open', function () {
  $(this).closest(".profitable-proposition__item-list").addClass("open");
})
  .on('click', '> .profitable-proposition__list-btn-closed', function () {
    $(this).closest(".profitable-proposition__item-list").removeClass("open");
  });


// Скрипт для слайдера блока our-repair-is-advised__slider
function checkWidth3() {
  var windowWidth = $('body').innerWidth(),
  elem = $(".our-repair-is-advised__slider");
  if (windowWidth < 768) {
    
    elem.addClass('owl-carousel');
    
    $('.our-repair-is-advised__slider').owlCarousel({
      items: 1,
      dots: true,
      dotsClass: ['pagination-box'],
      dotClass: ['pagination'],
      margin: 15,
    });
  }
  else {
    elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
  }
}

checkWidth3(); // проверит при загрузке страницы

$(window).resize(function () {
  checkWidth3(); // проверит при изменении размера окна клиента
});

// Скрипт для слайдера блока design-project__slider
$('.design-project__slider').owlCarousel({
  items: 1,
  dots: true,
  dotsClass: ['pagination-box'],
  dotClass: ['pagination'],
  navContainerClass: ['navigation'],
  navClass: ['navigation-left', 'navigation-right'],
  navText: [''],
  margin: 15,
});