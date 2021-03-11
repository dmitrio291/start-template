// Универсальный скрипт для табов
let tabs = document.querySelectorAll('.js-tab'),
    tabsItems = document.querySelectorAll('.js-tab__item');

if (tabs && tabsItems) {
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });
            this.classList.add('active');
            let id = tab.dataset.id;
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });
            document.querySelector('#' + id).classList.add('active');
        });
    });
}

// Скрипт для блока choose-your-own-ceiling
const chooseYourCeilingColorsMate = document.querySelectorAll('.choose-your-own-ceiling__colors-item--mate'),
    chooseYourCeilingColorsGlossy = document.querySelectorAll('.choose-your-own-ceiling__colors-item--glossy'),
    chooseYourCeilingColorsPhotoprint = document.querySelectorAll('.choose-your-own-ceiling__colors-item--photoprint'),
    chooseYourCeilingColorsSky = document.querySelectorAll('.choose-your-own-ceiling__colors-item--sky'),
    chooseYourCeilingColorsItems = document.querySelectorAll('.choose-your-own-ceiling__colors-item');

// Ф-ия добавляет бордер для активного элемента 
function chooseYourCeilingAddBorder(colors) {
    colors.forEach(function (color) {
        color.addEventListener('click', function () {
            colors.forEach(function (color) {
                color.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

if (chooseYourCeilingColorsMate || chooseYourCeilingColorsGlossy || chooseYourCeilingColorsPhotoprint || chooseYourCeilingColorsSky) {
    chooseYourCeilingAddBorder(chooseYourCeilingColorsMate);
    chooseYourCeilingAddBorder(chooseYourCeilingColorsGlossy);
    chooseYourCeilingAddBorder(chooseYourCeilingColorsPhotoprint);
    chooseYourCeilingAddBorder(chooseYourCeilingColorsSky);
}

if (chooseYourCeilingColorsItems) {
    // При клике на элемент меняеться фоновое изображение у блока
    chooseYourCeilingColorsItems.forEach(function (color) {
        color.addEventListener('click', function () {
            let data = color.dataset.img;
            let parent = color.closest('.choose-your-own-ceiling__box').querySelector('.choose-your-own-ceiling__image-bg');
            parent.style.backgroundImage = `url(/wp-content/themes/twentytwenty-child/img/ceiling/${data}.webp)`;
        });
    });
}

const chooseYourCeilingPrices = document.querySelectorAll('.choose-your-own-ceiling__price-box');

if (chooseYourCeilingPrices) {
    chooseYourCeilingPrices.forEach(function (priceBox) {
        priceBox.addEventListener('click', function (event) {
            let target = event.target;
            let meterNumber = priceBox.querySelector('.choose-your-own-ceiling__price-input');
            let meterNumberOld = priceBox.querySelector('.choose-your-own-ceiling__price-old-value');
            let meterNumberNew = priceBox.querySelector('.choose-your-own-ceiling__price-new-value');
            let meter = meterNumber.value;

            if (target.classList.contains('choose-your-own-ceiling__price-circle--minus')) {
                meter--;
                if (meter < 1) {
                    meter = 1;
                }
            }

            if (target.classList.contains('choose-your-own-ceiling__price-circle--plus')) {
                meter++;
                if (meter > 100) {
                    meter = 100;
                }
            }

            meterNumber.value = meter;
            meterNumberOld.textContent = Math.round(meterNumberNew.dataset.value * meter * meterNumberOld.dataset.value);
            meterNumberNew.textContent = Math.round(meterNumberNew.dataset.value * meter);

        });
    });
}

// Скрипт для блока repair-before-and-after
const repairBeforeAndFfterBox = document.querySelectorAll('.repair-before-and-after__box');

if (repairBeforeAndFfterBox) {
    repairBeforeAndFfterBox.forEach(function (box) {
        // Получаем все нужные элементы внутри блока repair-before-and-after__box
        let dragLine = box.querySelector('.repair-before-and-after__drag-line');
        let img = box.querySelector('.repair-before-and-after__img-js');
        let beforeItem = box.querySelector('.repair-before-and-after__item.before');
        let afterItem = box.querySelector('.repair-before-and-after__item.after');

        // Вешаем событие input для каждого блока repair-before-and-after__box
        box.addEventListener('input', function (event) {
            if (event.target.classList.contains('repair-before-and-after__range')) {
                let sliderRange = event.target.value;
                // Если значение св-ва value у блока repair-before-and-after__range менее 29 или более 72, то мы скрываем элементы repair-before-and-after__item.before и repair-before-and-after__item.after
                if (sliderRange < 29) beforeItem.style.display = 'none';
                else beforeItem.style.display = 'block';
                if (sliderRange > 72) afterItem.style.display = 'none';
                else afterItem.style.display = 'block';
                // Меняем св-во left у линии
                dragLine.style.left = sliderRange + '%';
                // Меняем ширину у ползунка
                img.style.width = sliderRange + '%';
            }
        });
    });
}

// Скрипт для блока make-repair-in-15-days
let makeRepairIn15DaysSlider = document.querySelector('.make-repair-in-15-days__slider');

if (makeRepairIn15DaysSlider) {
    let makeRepairIn15DaysSwiper = new Swiper(makeRepairIn15DaysSlider, {
        sliderPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
}

// Скрипт для блока favorable-prices
const favorablePricesItemImgBox = document.querySelectorAll('.favorable-prices__item-img-box'),
    favorablePricesItemListBox = document.querySelectorAll('.favorable-prices__item-list-box'),
    favorablePricesBtn = document.querySelector('.favorable-prices__btn'),
    favorablePricesItemNone = document.querySelectorAll('.favorable-prices__item.none');

if (favorablePricesItemImgBox && favorablePricesItemListBox) {
    favorablePricesItemImgBox.forEach(function(box) {
        let imgBigBox = box.querySelector('.favorable-prices__item-img-big'),
            imgBig = box.querySelector('.favorable-prices__item-img-big img'),
            iframe = box.querySelector('iframe'),
            previews = box.querySelectorAll('.favorable-prices__item-img img');

        box.addEventListener('click', function (event) {
            event.preventDefault();
            const target = event.target;
            if  (target.classList.contains('js-favorable-prices-img') || target.classList.contains('js-favorable-prices-video-img')) {
                previews.forEach(preview => preview.classList.remove('active'));
                target.classList.add('active');
            }
            if (target.classList.contains('js-favorable-prices-img')) {                
                const src = event.target.src;
                imgBig.src = src;
                imgBigBox.classList.remove('hide');
                if (iframe) iframe.classList.add('hide');
            }
            if (target.classList.contains('js-favorable-prices-video-img')) {
                imgBigBox.classList.add('hide');
                if (iframe) iframe.classList.remove('hide');
            }
        });
    });

    favorablePricesItemListBox.forEach(function(listBox) {
        // let items = listBox.querySelectorAll('.favorable-prices__item-list-item.hidden');
        let items = listBox.querySelectorAll('.favorable-prices__item-list > .favorable-prices__item-list-item:nth-child(n + 5)');
        
        listBox.addEventListener('click', function (event) {
            const target = event.target;
            if (target.classList.contains('favorable-prices__item-list-btn')) {
                if (target.classList.contains('favorable-prices__item-list-btn--closed')) {
                    target.classList.remove('favorable-prices__item-list-btn--closed');
                    target.classList.add('favorable-prices__item-list-btn--open');

                    items.forEach(item => {
                        item.style.display = 'none';
                    });
                } else {
                    target.classList.add('favorable-prices__item-list-btn--closed');
                    target.classList.remove('favorable-prices__item-list-btn--open');

                    items.forEach(item => {
                        item.style.display = 'flex';
                    });
                }                
            }
        });
    });

    if (favorablePricesBtn) {
        favorablePricesBtn.addEventListener('click', function(event) {
            event.preventDefault();
            favorablePricesItemNone.forEach((item) => {
                item.classList.remove('none');
            });
            this.style.display = 'none';
        });
    }
}

// Скрипт для блока favorable-prices файла C_questions-for-accurate-calculation
let questionsForAccurateCalculationSlider = document.querySelector('.questions-for-accurate-calculation__slider');

if (questionsForAccurateCalculationSlider) {
    let makeRepairIn15DaysSwiper = new Swiper(questionsForAccurateCalculationSlider, {
        sliderPerView: 1,
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: '.questions-for-accurate-calculation__btn--next',
            prevEl: '.questions-for-accurate-calculation__btn--prev'
        }
    });
}

// Скрипт для блока right-balcony
const rightBalconyTabs = document.querySelectorAll('.right-balcony__tabs-item'),
      rightBalconyTabsContents = document.querySelectorAll('.right-balcony__box'),
      rightBalconyNavigationLeft = document.querySelector('.right-balcony__navigation-left'),
      rightBalconyNavigationRight = document.querySelector('.right-balcony__navigation-right'),
      rightBalconyWarmGlazingTab = document.querySelector('[data-tab="warm-glazing"]'),
      rightBalconyColdGlazingTab = document.querySelector('[data-tab="cold-glazing"]'),
      rightBalconyFramelessGlazingTab = document.querySelector('[data-tab="frameless-glazing"]'),
      rightBalconyWarmGlazingTabContent = document.getElementById('warm-glazing'),
      rightBalconyColdGlazingTabContent = document.getElementById('cold-glazing'),
      rightBalconyFramelessGlazingTabContent = document.getElementById('frameless-glazing');

function rightBalconyRemoveClassActive() {
    rightBalconyTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    rightBalconyTabsContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
}

if (rightBalconyTabs && rightBalconyTabsContents && rightBalconyNavigationRight) {
    rightBalconyTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            rightBalconyRemoveClassActive();
            this.classList.add('active');
            const id = this.dataset.tab;
            document.querySelector('#' + id).classList.add('active');

            if (id === 'warm-glazing') {
                rightBalconyNavigationLeft.textContent = 'Безрамное остекление';
                rightBalconyNavigationRight.textContent = 'Холодное остекление';
            }
            if (id === 'cold-glazing') {
                rightBalconyNavigationLeft.textContent = 'Теплое остекление';
                rightBalconyNavigationRight.textContent = 'Безрамное остекление';
            }
            if (id === 'frameless-glazing') {
                rightBalconyNavigationLeft.textContent = 'Холодное остекление';
                rightBalconyNavigationRight.textContent = 'Теплое остекление';
            }
        });        
    });

    rightBalconyNavigationRight.addEventListener('click', function() {
        rightBalconyRemoveClassActive();

        if (this.textContent === 'Холодное остекление' && rightBalconyNavigationLeft.textContent === 'Безрамное остекление') {
            this.textContent = 'Безрамное остекление';
            rightBalconyNavigationLeft.textContent = 'Теплое остекление';
            rightBalconyColdGlazingTab.classList.add('active');
            rightBalconyColdGlazingTabContent.classList.add('active');
            return;
        }

        if (this.textContent === 'Безрамное остекление' && rightBalconyNavigationLeft.textContent === 'Теплое остекление') {
            this.textContent = 'Теплое остекление';
            rightBalconyNavigationLeft.textContent = 'Холодное остекление';
            rightBalconyFramelessGlazingTab.classList.add('active');
            rightBalconyFramelessGlazingTabContent.classList.add('active');
            return;
        }

        if (this.textContent === 'Теплое остекление' && rightBalconyNavigationLeft.textContent === 'Холодное остекление') {
            this.textContent = 'Холодное остекление';
            rightBalconyNavigationLeft.textContent = 'Безрамное остекление';
            rightBalconyWarmGlazingTab.classList.add('active');
            rightBalconyWarmGlazingTabContent.classList.add('active');
            return;
        }
    });

    rightBalconyNavigationLeft.addEventListener('click', function() {
        rightBalconyRemoveClassActive();

        if (this.textContent === 'Безрамное остекление' && rightBalconyNavigationRight.textContent === 'Холодное остекление') {
            this.textContent = 'Холодное остекление';
            rightBalconyNavigationRight.textContent = 'Теплое остекление';
            rightBalconyFramelessGlazingTab.classList.add('active');
            rightBalconyFramelessGlazingTabContent.classList.add('active');
            return;
        }

        if (this.textContent === 'Холодное остекление' && rightBalconyNavigationRight.textContent === 'Теплое остекление') {
            this.textContent = 'Теплое остекление';
            rightBalconyNavigationRight.textContent = 'Безрамное остекление';
            rightBalconyColdGlazingTab.classList.add('active');
            rightBalconyColdGlazingTabContent.classList.add('active');
            return;
        }

        if (this.textContent === 'Теплое остекление' && rightBalconyNavigationRight.textContent === 'Безрамное остекление') {
            this.textContent = 'Безрамное остекление';
            rightBalconyNavigationRight.textContent = 'Холодное остекление';
            rightBalconyWarmGlazingTab.classList.add('active');
            rightBalconyWarmGlazingTabContent.classList.add('active');
            return;
        }
    });
}

// Скрипт для блока four-types-glazing
const fourTypesGlazingSlider = document.querySelector('.four-types-glazing__slider');

if (fourTypesGlazingSlider) {
    let fourTypesGlazingSwiper = new Swiper(fourTypesGlazingSlider, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 11,
        autoplay: {
            delay: 5000
        },
        simulateTouch: false,
        pagination: {
            el: '.four-types-glazing__pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1200 : {
                slidesPerView: 4,
                spaceBetween: 20,
                autoplay: false,
                allowTouchMove: false
            }
        }
    });
}

// Скрипт для блока prices-without-intermediaries
const pricesWithoutIntermediariesSlider = document.querySelector('.prices-without-intermediaries__slider');

if (pricesWithoutIntermediariesSlider) {
    let pricesWithoutIntermediariesSwiper = new Swiper(pricesWithoutIntermediariesSlider, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
        simulateTouch: false,
        pagination: {
            el: '.prices-without-intermediaries__pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10
            },
            1200 : {
                slidesPerView: 3,
                allowTouchMove: false,
                spaceBetween: 0
            }
        }
    });
}

// Скрипт для блока examples-works
const exampleWorksBtn = document.getElementById('exampleWorksBtn'),
    exampleWorksItems = document.querySelectorAll('.examples-works__item'),
    exampleWorksItemJs = document.querySelectorAll('.examples-works-item-js');

if (exampleWorksBtn && exampleWorksItems) {

    // Показ активной превью
    exampleWorksItemJs.forEach(item => {
        item.addEventListener('click', (event) => {
            const target = event.target,
                img = item.querySelector('.examples-works__img'),
                examplesWorksPreviews = item.querySelectorAll('.examples-works__preview');
                          
            if (target.classList.contains('examples-works__preview')) {
                img.src = target.src;
                examplesWorksPreviews.forEach(preview => preview.classList.remove('active'));
                target.classList.add('active');
            }
        });
    });

    // На планшетной версии убираються классы hidden у всех элементов с классом .tablet-block
    if (window.matchMedia("(min-width: 768px)").matches) {
        const tabletBlock = document.querySelectorAll('.tablet-block');
        tabletBlock.forEach(item => item.classList.remove('hidden'));
    }

    // На десктопной версии убираються классы hidden у всех элементов
    if (window.matchMedia("(min-width: 1200px)").matches) {
        const hidden = document.querySelectorAll('.hidden');
        hidden.forEach(item => item.classList.remove('hidden'));
    }

    // Показывает 3 скрытые карточки при каждои клике на кнопку Загрузить еще
    exampleWorksBtn.addEventListener('click', function (event) {
        event.preventDefault();
        
        const hidden = this.parentNode.querySelectorAll('.hidden');

        for (let i = 0; i < 3; i++) {
            if (!hidden[i]) return this.outerHTML = '';
            hidden[i].classList.remove('hidden');
        }

        exampleWorksItems.forEach(item => {
            if (item.classList.contains('hidden')) exampleWorksBtn.style.display = 'block';
            else exampleWorksBtn.style.display = 'none';
        });
    });
}

// Показывает модальные окна при клике на кнопку открытия модального окна
const modalBtns = document.querySelectorAll('*[data-modal-btn]');

if (modalBtns) {
    for (let i = 0; i < modalBtns.length; i++) {
        modalBtns[i].addEventListener('click', function () {
            let name = modalBtns[i].getAttribute('data-modal-btn');
            let modal = document.querySelector("[data-modal-window='" + name + "']");
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            let close = modal.querySelector('.popup__btn-close');
            close.addEventListener('click', function () {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    }
}

function closePopup(popup, popupName) {
    for (let i = 0; i < popup.length; i++) {
        popup[i].addEventListener('click', function (event) {
            const target = event.target;
            if (target.classList.contains(`${popupName}`)) {
                this.style.display = 'none';
                document.body.style.overflow = '';
            };
        });
    }
}

exampleWorksPopups = document.querySelectorAll('.examples-works__popup');
if (exampleWorksPopups) closePopup(exampleWorksPopups, 'popup__inner');

discountPopup = document.querySelectorAll('.discount-popup');
if (discountPopup) closePopup(discountPopup, 'popup__inner');

// Скрипт для блока design-project-free
const designProjectFreeSlider = document.querySelector('.design-project-free__slider');

if(designProjectFreeSlider) {
    const designProjectFreeSliderSwiper = new Swiper(designProjectFreeSlider, {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: '.design-project-free__pagination',
            type: 'bullets',
            clickable: true
        },
        loop: true,
        navigation: {
            nextEl: '.design-project-free__next',
            prevEl: '.design-project-free__prev'
        }
    });
}

// Скрипт для закрытия оверлея модального окна stone-sink-as-gift-popup 
stoneSinkAsGiftPopup = document.querySelectorAll('.stone-sink-as-gift-popup');
if (stoneSinkAsGiftPopup) closePopup(stoneSinkAsGiftPopup, 'popup__inner');

// Скрипт для блока electric-cooking-panel-fds-65-30
const electricCookingPanelFds6530 = document.querySelector('.electric-cooking-panel-fds-65-30__slider');

if(electricCookingPanelFds6530) {
    const electricCookingPanelFds6530Swiper = new Swiper(electricCookingPanelFds6530, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
        pagination: {
            el: '.electric-cooking-panel-fds-65-30__pagination',
            type: 'bullets',
            clickable: true
        },
        loop: true,
        navigation: {
            nextEl: '.electric-cooking-panel-fds-65-30__next',
            prevEl: '.electric-cooking-panel-fds-65-30__prev'
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1200: {
                slidesPerView: 4,
                navigation: false,
                pagination: false,
                allowTouchMove: false
            }
        }
    });
}

// Скрипт для блока popular-types-kitchens
const popularCornerKitchens = document.querySelector('.popular-types-kitchens__corner-slider'),
    popularStraightKitchens = document.querySelector('.popular-types-kitchens__straight-slider'),
    popularSmallKitchens = document.querySelector('.popular-types-kitchens__small-slider'),
    popularKitchensWithBarCounter = document.querySelector('.popular-types-kitchens__bar-counter-slider'),
    popularInexpensiveKitchens = document.querySelector('.popular-types-kitchens__inexpensive-slider'),
    popularKitchensInPvcFilm = document.querySelector('.popular-types-kitchens__pvc-film-slider'),
    popularKitchensInHplPlastic = document.querySelector('.popular-types-kitchens__HPL-plastic-slider'), 
    popularKitchensInVeneerAndMassive = document.querySelector('.popular-types-kitchens__veneer-massive-slider'),
    popularKitchensInNewBuildings = document.querySelector('.popular-types-kitchens__new-buildings-slider'),
    popularKitchensInFiveStoryBuilding = document.querySelector('.popular-types-kitchens__five-story-slider'),
    popularKitchensInNineStoryBuilding = document.querySelector('.popular-types-kitchens__nine-story-slider');

const popularTypesKitchensInitializingSlider = (slider) => {
    if(slider) {
        const popularCornerKitchensSwiper = new Swiper(slider, {
            slidesPerView: 1.2,
            spaceBetween: 15,
            pagination: {
                el: '.popular-types-kitchens__pagination',
                type: 'bullets',
                clickable: true
            },
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 2.23,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    pagination: false,
                    allowTouchMove: false
                }
            }
        });
    }
}

popularTypesKitchensInitializingSlider(popularCornerKitchens);
popularTypesKitchensInitializingSlider(popularStraightKitchens);
popularTypesKitchensInitializingSlider(popularSmallKitchens);
popularTypesKitchensInitializingSlider(popularKitchensWithBarCounter);
popularTypesKitchensInitializingSlider(popularInexpensiveKitchens);
popularTypesKitchensInitializingSlider(popularKitchensInPvcFilm);
popularTypesKitchensInitializingSlider(popularKitchensInHplPlastic);
popularTypesKitchensInitializingSlider(popularKitchensInVeneerAndMassive);
popularTypesKitchensInitializingSlider(popularKitchensInNewBuildings);
popularTypesKitchensInitializingSlider(popularKitchensInFiveStoryBuilding);
popularTypesKitchensInitializingSlider(popularKitchensInNineStoryBuilding);

// Скрипт для блока gallery-works
const galleryWorksFilterContainer = document.querySelector('.gallery-works__tabs'),
    galleryWorksItem = document.querySelectorAll('.gallery-works__content-item'),
    galleryWorksButton = document.querySelector('.gallery-works__button');

if (galleryWorksFilterContainer && galleryWorksItem) {
    galleryWorksFilterContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('gallery-works__tab')) {
            galleryWorksFilterContainer.querySelector('.active').classList.remove('active');
            event.target.classList.add('active');
            const filterValue = event.target.getAttribute('data-filter');
            galleryWorksItem.forEach((item) => {
                if (window.matchMedia('(min-width: 768px)').matches) {
                    item.classList.remove('hidden');
                }
                if (item.classList.contains(filterValue) || filterValue === 'all') {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        }
    });

    if (galleryWorksButton) {
        galleryWorksButton.addEventListener('click', function() {
            galleryWorksItem.forEach(item => {
                item.classList.remove('hidden');
            });
            this.style.display = 'none';
        });
    }
}

const galleryWorksSlider = document.querySelector('.gallery-works-popup__slider'),
    galleryWorksPreviews = document.querySelector('.gallery-works-popup__previews');

if (galleryWorksSlider) {
    const galleryWorksPreviewsSwiper = new Swiper(galleryWorksPreviews, {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
            nextEl: '.gallery-works-popup__preview-next',
            prevEl: '.gallery-works-popup__preview-prev'
        },
        breakpoints: {
            1200: {
                slidesPerView: 4  
            }
        }
    });

    const galleryWorksSwiper = new Swiper(galleryWorksSlider, {
        spaceBetween: 10,
        navigation: {
            nextEl: '.gallery-works-popup__next',
            prevEl: '.gallery-works-popup__prev'
        },
        thumbs: {
            swiper: galleryWorksPreviewsSwiper
        },
        breakpoints: {
            768: {
                spaceBetween: 20
            }
        }
    });
}













