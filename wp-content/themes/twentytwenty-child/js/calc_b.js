'use strict';

// счётчик, на каком шаге находится текущий шаг
let currentSlide = 0;

// навигация
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const stepWrapper = document.getElementById("step-wrapper");

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

let balcony_add_img = document.querySelector('.balcony-add__img');
let shablon_type = ``;

let flag_namber = true;
let okno_namber = 1;
let balcony_icon_del;
let balcony_icon_copy;
let balcony_icon_setting;
let calc_bal_btn_box = document.querySelector(`.calc-balcony__btn-box`);


// узнать ширину
let range_width = document.querySelector('.range_width');
let range_width_v = document.querySelector('.range_width_value');
// узнать высоту
let range_height = document.querySelector('.range_height');
let range_height_v = document.querySelector('.range_height_value');

let complex_form = document.querySelector('[name="complex-form"]');
let material_name = document.querySelectorAll('[name="material-name"]');
let material_name_value = "";
let finishing = document.querySelector('[name="finishing"]');

// перелистыватель вперёд ( кнопка "вперёд")
function showNextSlide() {
    showSlide(currentSlide + 1);
}
// перелистыватель назад ( кнопка "назад")
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function delite_bg(){
    stepWrapper.classList.remove("balcony-home", 
    "balcony-leaflets", "balcony-size", "balcony-add",
    "balcony-services", "balcony-payment");
}

let btn__next = document.querySelector('.calc-balcony__btn--next');
let i_name_sash = document.querySelectorAll('input[name="sash"]');
for (var i = 0; i < i_name_sash.length; i++) {
    i_name_sash[i].addEventListener('click', function(event) {
        btn__next.classList.remove('blocking');
    });
}

// кнопка "добавить новое окно"
let calc_balcony__add = document.querySelector('.calc-balcony__add');
calc_balcony__add.addEventListener('click', function(event) {
    delite_bg();
    flag_namber = true;
    currentSlide = 1;
    okno_namber++;
    stepWrapper.classList.add("balcony-leaflets");

});

// кнопка "ДА" в модальном окне "удалить окно?" 
let close_window = document.querySelector('.close-window');
close_window.addEventListener('click', function(event) {
    balcony_icon_del = document.querySelector(this.dataset.number_okno);
    balcony_icon_del.remove();
});

// соранить изменения либо отмена
let b_box_icon = document.querySelectorAll('.calc-balcony__box-icon');
for (var i = 0; i < b_box_icon.length; i++) {
    b_box_icon[i].addEventListener('click', function(event) {
        Var_Max();
    });
}

function Wrap_Var_Max(){
    showSlide(3);
    Var_Max();
}
function Var_Max(){
    // включаем дополнительныве две кнопки
    calc_bal_btn_box.style.display = "none";

    let b_img_box = document.querySelectorAll(".balcony-img__box");
    let var_max = 0;
    for (var j = 0; j < b_img_box.length; j++) {
    
        if(Number(b_img_box[j].dataset.number_okno) >= var_max) {
            var_max = Number(b_img_box[j].dataset.number_okno);
        }
    }
    okno_namber = var_max;
}

// ф-ция в которой происходит перелистывание шагов
function showSlide(n) {

    currentSlide = n;
    delite_bg();

    // узнаём какое кол-во створок
    let data_kolvo_stvorok = 0;
    for (let i_item of i_name_sash) {
        if(i_item.checked){
            data_kolvo_stvorok = i_item.value;
        }
    }
    // узнаём какой материал выбран
    for (let i_item of material_name) {
        if(i_item.checked){
            material_name_value = i_item.value;
        }
    }


    shablon_type = `
        <div class="balcony-img__box" 
            data-number_okno="${okno_namber}"
            data-kolvo_stvorok="${data_kolvo_stvorok}"
            data-width="${range_width.value}"
            data-height="${range_height.value}"
            data-complex_form="${complex_form.checked}"
            data-finishing="${finishing.checked}"
            data-material="${material_name_value}">
            <div class="balcony-img">
                <span data-tooltip="удалить окно"
                    class="balcony-icon balcony-icon__del open-modal-1" data-modal="#modal-close">
                    <svg class="icon icon__del">
                        <use
                            xlink:href="/wp-content/themes/twentytwenty-child/img/sprite.svg#del">
                        </use>
                    </svg>
                </span>
                <span data-tooltip="скопировать окно" class="balcony-icon balcony-icon__copy">
                    <svg class="icon icon__copy">
                        <use
                            xlink:href="/wp-content/themes/twentytwenty-child/img/sprite.svg#copy">
                        </use>
                    </svg>
                </span>
                <span data-tooltip="изменить окно" class="balcony-icon balcony-icon__setting">
                    <svg class="icon icon__setting">
                        <use
                            xlink:href="/wp-content/themes/twentytwenty-child/img/sprite.svg#setting">
                        </use>
                    </svg>
                </span>
            </div>
            <div class="balcony-text">Остекление 1 ${range_height.value}*${range_width.value}</div>
        </div>
    `;

    if(currentSlide === 0){
        stepWrapper.classList.add("balcony-home");
        previousButton.classList.add("none-visible");

        btn__next.classList.remove('blocking');
    }
    if(currentSlide === 1){
        stepWrapper.classList.add("balcony-leaflets");
        previousButton.classList.remove("none-visible");
        
        let flag_sash = false;
        
        if(calc_bal_btn_box.style.display !== "none"){
            previousButton.classList.add("none-visible");
        }
        
        for (let i_item of i_name_sash) {
            if(i_item.checked){
                flag_sash = true;
            }
        }

        if(!flag_sash){
            btn__next.classList.add('blocking');
        } 

    }
    if(currentSlide === 2){
        stepWrapper.classList.add("balcony-size");

        if(calc_bal_btn_box.style.display !== "none"){
            previousButton.classList.remove("none-visible");
        }
    }
    if(currentSlide === 3){
        stepWrapper.classList.add("balcony-add");
        
        if(flag_namber){
            balcony_add_img.insertAdjacentHTML('beforeEnd', shablon_type);
        } else{
            let data_n_okno = document.querySelector(`[data-number_okno="${okno_namber}"]`);
            data_n_okno.insertAdjacentHTML('afterEnd', shablon_type);
            data_n_okno.remove();
        }
        flag_namber = false;

        
        
        function block_even() {
            open_modal_1(`[data-number_okno="${okno_namber}"] .open-modal-1`);
        
            balcony_icon_del = document.querySelector(`[data-number_okno="${okno_namber}"] .balcony-icon__del`);
            balcony_icon_del.addEventListener('click', function(event) {
                let delite = this.parentElement.parentElement;
                close_window.dataset.number_okno = `[data-number_okno="${delite.dataset.number_okno}"]`;
            });

            balcony_icon_setting = document.querySelector(`[data-number_okno="${okno_namber}"] .balcony-icon__setting`);
            balcony_icon_setting.addEventListener('click', function(event) {
                delite_bg();

                currentSlide = 1;
                stepWrapper.classList.add("balcony-leaflets");

                // включаем дополнительныве две кнопки
                calc_bal_btn_box.style.display = "flex";

                // скрываем кнопку далее, на втором экране.        
                if(calc_bal_btn_box.style.display !== "none"){
                    previousButton.classList.add("none-visible");
                }

                // определяем какое выбрано окно 
                let setting = this.parentElement.parentElement;
                okno_namber = Number(setting.dataset.number_okno);

                // ставим ширину 
                range_width.value = setting.dataset.width;
                range_width_v.innerHTML = setting.dataset.width;
                applyFill(range_width);
                
                // ставим высоту
                range_height.value = setting.dataset.height;
                range_height_v.innerHTML = setting.dataset.height;
                applyFill(range_height);

                complex_form.checked = JSON.parse(setting.dataset.complex_form);
                finishing.checked = JSON.parse(setting.dataset.finishing);
                material_name_value = setting.dataset.material;

                for (let i_item of material_name) {
                    if(i_item.value == setting.dataset.material ){
                        material_name.checked = true;
                    }
                }

                material_name_value = setting.dataset.material;
                
                 
            });
        
            balcony_icon_copy = document.querySelector(`[data-number_okno="${okno_namber}"] .balcony-icon__copy`);
            balcony_icon_copy.addEventListener('click', function(event) {
                let copy = this.parentElement.parentElement;
                
                okno_namber++;
                let copy_clone = copy.cloneNode(true);
                copy_clone.dataset.number_okno = okno_namber;
                
                copy.insertAdjacentElement('afterEnd', copy_clone);
                block_even();
            });
        }
        block_even();
        Var_Max();
        
       

    }
    if(currentSlide === 4){
        stepWrapper.classList.add("balcony-services");
        nextButton.classList.remove("none-visible");
    }
    if(currentSlide === 5){
        stepWrapper.classList.add("balcony-payment");
        nextButton.classList.add("none-visible");

        let b_check_wrapper = document.querySelector(`.balcony-payment__check-wrapper`);
        b_check_wrapper.innerHTML = "";
        let b_img_box = document.querySelectorAll(".balcony-img__box");

        
        for (var i = 0; i < b_img_box.length; i++) {
            let local_finishing;
            if(b_img_box[i].dataset.finishing !== "false"){
                local_finishing = b_img_box[i].dataset.finishing;
            } else{
                local_finishing = "";
            }
            let local_complex_form;
            if(b_img_box[i].dataset.complex_form !== "false"){
                local_complex_form = b_img_box[i].dataset.complex_form;
            } else {
                local_complex_form = "";
            }
            

            let windows_type = `
                <div class="balcony-payment__check-window dfsb">
                    <div class="balcony-payment__check-img"></div>
                    <div class="balcony-payment__check-info">
                        <div class="balcony-payment__check-img-name balcony-text__m">Остекление
                            <span class="counter-increment"></span></div>
                        <div class="balcony-payment__check-img-info balcony-text__m">
                            <span>${b_img_box[i].dataset.width}*</span><span>${b_img_box[i].dataset.height}</span>
                            мм.<br><span>${b_img_box[i].dataset.kolvo_stvorok}</span> створка</div>
                    </div>
                </div>
                <div class="balcony-payment__box-text">
                    <p class="balcony-text__m">Доп. опции:
                        <span>${b_img_box[i].dataset.material}</span>
                        <span>${local_finishing}</span>
                        <span>${local_complex_form}</span>
                    </p>
                </div>
            `;

            b_check_wrapper.insertAdjacentHTML('beforeEnd', windows_type);
        }
    }

}

// Вызываем первый экран
showSlide(currentSlide);

/*const myQuestions = [
    {
        class: "balcony-home",
    },
    {
        class: "balcony-leaflets",
    },
    {
        class: "balcony-size",
    },
    {
        class: "balcony-add",
    },
    {
        class: "balcony-services",
    },
    {
        class: "balcony-home",
    },

];
*/
