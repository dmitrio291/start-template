
/**
 * Вычисление значений
 */
// шаги калькулятора
let current_Slide = 1;
// что выбрали: Квартира, Частный дом, Офис
let c__window = "Частный дом";

let arr_index = 0;
let arr__window = [];
let data__all = {
	//stv_text: '', 
	width: 0,
	height: 0,
	windowsill: false,
	slopes: false,
	slopes_block_add: "",
	otlivi: false,
	stvorki: []
}
let arr_raspolozenie = ["Левая створка", "Центральная створка", "Правая створка"];
let arr_stvorki = 
	{
		raspolozenie: '',
		glyhaia_pov: 'glyhaia_1',
		moskitnaia_setka: false,
		detskii_zamok: false
	};

// начальный экран
let i_name_window = document.querySelectorAll('input[name="window"]');
for (let i_item of i_name_window) {
	
	i_item.addEventListener("click",  function() { 
		if (i_item.checked) {
			c__window = i_item.parentNode.children[1].children[1].innerText;
		}
	});
}

// второй экран
let i_name_window_two = document.querySelectorAll('input[name="window-two"]');
for (let i_item of i_name_window_two) {
	i_item.addEventListener("click",  function() {
		document.querySelector('.calc-window-two .calc-window__btn--next').classList.remove('blocking');
		if (i_item.checked) {
			//let local_data__all = data__all;
			data__all.stvorki = [];
			let item_local = document.querySelectorAll('.calc-window-two__list-item');
			for (let i of item_local) {
				i.setAttribute('style', "pointer-events: auto;") ;
			}

			if(this.dataset.win_st == 1){
				//console.log( 'Маловато' );
				data__all.stvorki.push(arr_stvorki);
				
			} else{
				for (let i = 0; i < Number(this.dataset.win_st); i++) {
					data__all.stvorki.push(arr_stvorki);
				}
			   
			}
			this.parentNode.setAttribute('style', "pointer-events: none;") ;
			//arr__window.push(data__all);

			
		}
	});
}

// третий экран
document.querySelector(".range-slider__height").addEventListener("change", function() {
	console.log(this.value);
});



let btn__prew = document.querySelectorAll('.calc-window__btn--prew');
for (let i_item of btn__prew) {
	i_item.addEventListener("click",  function() { 
		showPrevious_Slide();
	});
}

let btn_next = document.querySelectorAll('.calc-window__btn--next');
for (let i_item of btn_next) {
	i_item.addEventListener("click",  function() { 
		showNext_Slide();
	});
}

function showSlide(n) {

	let btn_next = document.querySelectorAll('.calc-window');
	for (let i_item of btn_next) {
		i_item.style.display = "none";
	}

	switch (n) {

		case 1:
			document.querySelector('.calc-window-1').style.display = "block" ;
			break;
		case 2:
			document.querySelector('.calc-window-2').style.display = "block" ;
			break;
		case 3:
			document.querySelector('.calc-window-3').style.display = "block" ;
			// загружаем картинку окон с выбранным кол-вом створок
			document.querySelector('.calc-window-three__box_click').className = "calc-window-three__box calc-window-three__box_click calc-window-three__box--" + data__all.stvorki.length;
			data__all.height = Number(document.querySelector('.range-slider__height').value);
			data__all.width = Number(document.querySelector('.range-slider__width').value);
			data__all.windowsill = document.querySelector('[id="check-windowsill-1"]').checked;
			data__all.slopes = document.querySelector('[id="slopes-2"]').checked;
			let slopes_block_add  = document.querySelectorAll('[name="slopes-block-add"]');
			console.log("hhh");
			for (let i of slopes_block_add) {
				if(i.checked){
					data__all.slopes_block_add = i.value;
				}
			}
			data__all.otlivi = document.querySelector('[id="otlivi-3"]').checked;

			break;

			
		/*
		case 4:
			
			if(data__all.stvorki.length == 1){
				document.querySelector('.calc-window-4').style.display = "block" ;
				
				// добавляем картинки окон
				let shablon_type = ` 
					<div class="calc-window-three__list-item flex-row ">
						<div class="calc-window-three__box calc-window-three__box--1">
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--s calc-window-two__box-img--1">
								<span class="deaf"></span>
								<span class="type-open-left"></span>
								<span class="type-open-right"></span>
								<span class="type-open-up"></span>
							</div>
						</div>
					</div>
				`;
				let cw_shablon_type = document.querySelector('.cw_shablon_type');
				cw_shablon_type.innerHTML = shablon_type;

				// меняем надпись на какая створка (напр. Правая створка )
				document.querySelector('.cw__bt_value').innerHTML = "Створка";
				
				
			}
			if(data__all.stvorki.length == 2){
				document.querySelector('.calc-window-4').style.display = "block" ;
				let shablon_type = ` 
					<div class="calc-window-three__list-item flex-row ">
						<div class="calc-window-three__box calc-window-three__box--2">
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--m calc-window-two__box-img--1">
								<span class="deaf"></span>
								<span class="type-open-left"></span>
								<span class="type-open-right"></span>
								<span class="type-open-up"></span>
							</div>
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--m calc-window-two__box-img--2">
							</div>
						</div>
					</div>
				`;
				let cw_shablon_type = document.querySelector('.cw_shablon_type');

				cw_shablon_type.innerHTML = shablon_type;

				// меняем надпись на какая створка (напр. Правая створка )
				document.querySelector('.cw__bt_value').innerHTML = arr_raspolozenie[0];

			}
			if(data__all.stvorki.length == 3){
				document.querySelector('.calc-window-4').style.display = "block" ;

				let sash_radio = document.querySelectorAll('[name="sash-radio"]');

				for (let i of data__all.stvorki) {	
				}

				let shablon_type = ` 
					
					<div class="calc-window-three__list-item flex-row">
						<div class="calc-window-three__box calc-window-three__box--3">
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--1">
								
							</div>
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--2">
								
							</div>
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--3">
								
							</div>
						</div>
					</div>
				`;

				let cw_shablon_type = document.querySelector('.cw_shablon_type');

				cw_shablon_type.innerHTML = shablon_type;

				// меняем надпись на какая створка (напр. Правая створка )
				document.querySelector('.cw__bt_value').innerHTML = arr_raspolozenie[0];

				

				for(let i = 0; sash_radio.length > i; i++){

					//if() sash_radio[i].value;
					let item_radio = sash_radio[i];
					let item_glyhaia_pov =  data__all.stvorki[i];

					if(item_radio.value	==  item_glyhaia_pov.glyhaia_pov){
						item_radio.checked = true;
					}

				}
			}
			

			break;
		case 5:
			if(data__all.stvorki.length == 2){
				document.querySelector('.calc-window-4').style.display = "block" ;
				let shablon_type = ` 
					<div class="calc-window-three__list-item flex-row ">
						<div class="calc-window-three__box calc-window-three__box--2">
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--m calc-window-two__box-img--1">
								<span class="deaf"></span>
								<span class="type-open-left"></span>
								<span class="type-open-right"></span>
								<span class="type-open-up"></span>
							</div>
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--m calc-window-two__box-img--2">
							</div>
						</div>
					</div>
				`;
				let cw_shablon_type = document.querySelector('.cw_shablon_type');

				cw_shablon_type.innerHTML = shablon_type;

				// меняем надпись на какая створка (напр. Правая створка )
				document.querySelector('.cw__bt_value').innerHTML = arr_raspolozenie[2];

			}
			if(data__all.stvorki.length == 3){
				document.querySelector('.calc-window-4').style.display = "block";
				let shablon_type = `
					<div class="calc-window-three__list-item flex-row">
						<div class="calc-window-three__box calc-window-three__box--3">
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--1">
								<span class="type-open-left"></span>
							</div>
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--2">
								<span class="type-open-right"></span>
								<span class="type-open-up"></span>
							</div>
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--3">
								<span class="deaf"></span>
								<span class="type-open-right"></span>
								<span class="type-open-up"></span>
							</div>
						</div>
					</div>
				`;

				let cw_shablon_type = document.querySelector('.cw_shablon_type');

				cw_shablon_type.innerHTML = shablon_type;

				// меняем надпись на какая створка (напр. Правая створка )
				document.querySelector('.cw__bt_value').innerHTML = arr_raspolozenie[1];

			}
			

			break;

		case 6:
			if(data__all.stvorki.length == 3){
				document.querySelector('.calc-window-4').style.display = "block";
				let shablon_type = `
					<div class="calc-window-three__list-item flex-row">
						<div class="calc-window-three__box calc-window-three__box--3">
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--1">
								<span class="type-open-left"></span>
							</div>
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--2">
								<span class="type-open-right"></span>
								<span class="type-open-up"></span>
							</div>
							<div
								class="calc-window-two__box-img calc-window-two__box-img-size--l calc-window-two__box-img--3">
								<span class="deaf"></span>
								<span class="type-open-right"></span>
								<span class="type-open-up"></span>
							</div>
						</div>
					</div>
				`;
				let cw_shablon_type = document.querySelector('.cw_shablon_type');

				cw_shablon_type.innerHTML = shablon_type;

				// меняем надпись на какая створка (напр. Правая створка )
				document.querySelector('.cw__bt_value').innerHTML = arr_raspolozenie[2];
			}
			break;
*/

	}
	
}

function showNext_Slide() {
	current_Slide++;
	showSlide(current_Slide);
}

function showPrevious_Slide() {
	current_Slide--;
	showSlide(current_Slide);
}
