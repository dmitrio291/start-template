'use strict';

document.addEventListener('DOMContentLoaded', () =>  {
    const toggle = document.getElementById('jsToggle'),
        menuOverlay = document.getElementById('jsMenuOverlay'),
        workingSchemeAdvantagesOne = document.getElementById('workingSchemeAdvantagesOne'),
        workingSchemeAdvantagesTwo = document.getElementById('workingSchemeAdvantagesTwo'),
        workingSchemeAdvantagesHidden = document.querySelector('.working-scheme-advantages__text--none'),
        workingSchemeAdvantagesTextBox = document.querySelector('.working-scheme-advantages__text-box'),
        aboutSlider = document.querySelector('.about-box__slider'),
        companiesSlider = document.querySelector('.companies-box__slider'),
        portfolioButton = document.querySelector('.portfolio__button'),
        trialPeriodSlider = document.querySelector('.trial-period-slider'),
        aboutUsSlider = document.querySelector('.about-us-box__slider'),
        solvingProblemsSlider = document.querySelector('.solving-problems-slider'),
        links = document.querySelectorAll('a[href*="#"]');

    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('hide-scroll');
            toggle.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        });

        window.addEventListener('resize', () => {
            document.body.classList.remove('hide-scroll');
            toggle.classList.remove('active');
            menuOverlay.classList.remove('active');
        });
    }

    if (workingSchemeAdvantagesOne) {
        workingSchemeAdvantagesOne.addEventListener('click', function() {
            workingSchemeAdvantagesHidden.classList.toggle('working-scheme-advantages__text--none');
            (this.textContent === 'Подробнее') ? this.textContent = 'Cвернуть' : this.textContent = 'Подробнее';
        });
    }

    if (workingSchemeAdvantagesTwo) {
        workingSchemeAdvantagesTwo.addEventListener('click', function() {
            workingSchemeAdvantagesTextBox.classList.toggle('working-scheme-advantages__text-box');
            (this.textContent === 'Подробнее') ? this.textContent = 'Cвернуть' : this.textContent = 'Подробнее';
        });
    }

    if (aboutSlider) {
        const aboutSliderSwiper = new Swiper(aboutSlider, {
            spaceBetween: 20,
            loop: true,
            pagination: {
                clickable: true,
                el: '.about-box__pagination',
                bulletClass: 'about-box__bullet',
                bulletActiveClass: 'active'
            },
            navigation: {
                nextEl: '.about-box__nav--next',
                prevEl: '.about-box__nav--prev'
            }
        });
    }

    if(companiesSlider) {
        const companiesSliderSwiper = new Swiper(companiesSlider, {
            slidesPerView: 1.255,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.companies-box__nav--next',
                prevEl: '.companies-box__nav--prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 1.45
                },
                1400: {
                    slidesPerView: 1.49
                }
            }
        });
    }

    if (portfolioButton) {
        if (window.matchMedia('(min-width: 768px)').matches) {
            const items = document.querySelectorAll('.portfolio-list__item--show-tablet');
    
            for (let i = 0 ; i < items.length; i++) {                
                items[i].classList.remove('portfolio-list__item--none');
            }
        }

        portfolioButton.addEventListener('click', function() {
            let showPerClick = 3;            
            const Itemshidden = this.parentNode.querySelectorAll('.portfolio-list__item--none');

            for (let i = 0; i < showPerClick; i++) {
                if (!Itemshidden[i]) return this.outerHTML = '';      
                Itemshidden[i].classList.remove('portfolio-list__item--none');
            }                      
        });
    }

    if (trialPeriodSlider) {
        const trialSliderSwiper = new Swiper(trialPeriodSlider, {
            slidesPerView: 1.27,
            spaceBetween: 15,
            loop: true,
            navigation: {
                nextEl: '.trial-period-slider__nav--next',
                prevEl: '.trial-period-slider__nav--prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 1.25,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 1.25,
                    centeredSlides: true,
                    loop: false
                },
                1400: {
                    centeredSlides: true,
                    loop: false
                },
                1600: {
                    slidesPerView: 1.35,
                    centeredSlides: true,
                    loop: false
                },
                1800: {
                    slidesPerView: 1.60,
                    centeredSlides: true,
                    loop: false
                }
            }
        });
    }

    if (aboutUsSlider) {
        const aboutUsSliderSwiper = new Swiper(aboutUsSlider, {
            spaceBetween: 15,
            loop: true,
            navigation: {
                nextEl: '.about-us-box__nav--next',
                prevEl: '.about-us-box__nav--prev'
            },
            pagination: {
                clickable: true,
                el: '.about-us-box__pagination',
                bulletClass: 'about-us-box__pagination-bullet',
                bulletActiveClass: 'active'
            }
        });
    }

    if (solvingProblemsSlider) {
        const solvingProblemsSliderSwiper = new Swiper(solvingProblemsSlider, {
            autoHeight: true,
            spaceBetween: 15,
            loop: true,
            pagination: {
                clickable: true,
                el: '.solving-problems-slider__pagination',
                bulletClass: 'solving-problems-slider__pagination-bullet',
                bulletActiveClass: 'active'
            }
        });

        if (window.innerWidth > 767) {
            solvingProblemsSliderSwiper.destroy();
        }
    }

    if (links) {
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
    
                let href = this.getAttribute('href').substring(1);
    
                const scrollTarget = document.getElementById(href),
                    topOffset = 0,
                    elementPosition = scrollTarget.getBoundingClientRect().top,
                    offsetPosition = elementPosition - topOffset;
    
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }   
});