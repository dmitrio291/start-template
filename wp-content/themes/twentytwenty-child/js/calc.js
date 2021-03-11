// I've added annotations to make this easier to follow along at home. Good luck learning and check out my other pens if you found this useful


// First let's set the colors of our sliders
const settings = {
    fill: '#F26422',
    background: '#D0D0D0'
}

// First find all our sliders
const sliders = document.querySelectorAll('.range-slider');

// Iterate through that list of sliders
// ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
Array.prototype.forEach.call(sliders, (slider) => {
    // Look inside our slider for our input add an event listener
    //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
    slider.querySelector('input').addEventListener('input', (event) => {
        // 1. apply our value to the span
        slider.querySelector('span').innerHTML = event.target.value;
        // 2. apply our fill to the input
        applyFill(event.target);
    });
    // Don't wait for the listener, apply it now!
    applyFill(slider.querySelector('input'));
});

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
    // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
    const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}


// MODAl //

$(".modal").each( function(){
	$(this).wrap('<div class="overlay"></div>')
});

open_modal_1(".open-modal-1");
function open_modal_1(open_modal_1){
    $(open_modal_1).on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation;
		
		var $this = $(this),
				modal = $($this).data("modal");
		
		$(modal).parents(".overlay").addClass("open");
		setTimeout( function(){
			$(modal).addClass("open");
		}, 350);
		
		$(document).on('click', function(e){
			var target = $(e.target);
			
			if ($(target).hasClass("overlay")){
				$(target).find(".modal").each( function(){
					$(this).removeClass("open");
				});
				setTimeout( function(){
					$(target).removeClass("open");
				}, 350);
			}
			
		});
		
	});
}

close_modal(".close-modal");
function close_modal(close_modal){
	$(close_modal).on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation;
		
		var $this = $(this),
				modal = $($this).data("modal");
		
		$(modal).removeClass("open");
		setTimeout( function(){	
			$(modal).parents(".overlay").removeClass("open");
		}, 350);
		
	});
}

