$(document).ready(function(){
			$("#comment").validate({
				rules: {
					name:{
						"required": true,
						"minlength": 2
					},
					email: {
						"required": true,
						"email": true
					},
					comment: {
						"required": true
					}
				},
				messages: {
					name: {
						"required": "အမည်ဖြည့်ရန် လိုအပ်သည်",
						"minlength": $('#name').data('err-minlength')
					},
					email: {
						"required": "အီးမေးလ်ဖြည့်ရန် လိုအပ်သည်",
						"email": "အီးမေးလ် ပုံစံမှန်ကန်ရမည်"
					},
					comment: {
						"required": "မှတ်ချက်ပေးရန် လိုအပ်သည်"
					}
				}
			});
		});
		if ( $(window).width() < 991) {
			function searchBox(){
				$('.mobile-search').show();
				$('.mobile-search input').focus();

			}
		}

		function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}

$(document).ready(function(){
	// set up select boxes
	$('.ft-select').each(function(){
		$(this).children().hide();
		var description = $(this).children('label').text();
		$(this).append('<span class="desc">'+description+'</span>');
		$(this).append('<span class="pulldown"><i class="fa fa-angle-down"></i></span>');
		// set up dropdown element
		$(this).append('<div class="selectdropdown"></div>');
	  $(this).children('select').children('option').each(function(){
	  		// if($(this).attr('value') != '0') {
			if($(this).text()) {
				$drop = $(this).parent().siblings('.selectdropdown');
				var name = $(this).text();
				var value  = $(this).val();
				$drop.append('<span data-value="'+value+'">'+name+'</span>');
			}
		});
		// on click, show dropdown
		$(this).click(function(){
			if($(this).hasClass('activeselectholder')) {
				// roll up roll up
				$(this).children('.selectdropdown').slideUp(0);
				$(this).removeClass('activeselectholder');
				// change span back to selected option text
				if($(this).children('select').val() != '0') {
					$(this).children('.desc').fadeOut(100, function(){
						// $(this).text($(this).siblings("select").val());
						$(this).fadeIn(100);
					});
				}
			}
			else {
				// if there are any other open dropdowns, close 'em
				$('.activeselectholder').each(function(){
					$(this).children('.selectdropdown').slideUp(0);
					// change span back to selected option text
					if($(this).children('select').val() != '0') {
						$(this).children('.desc').fadeOut(100, function(){
							$(this).text($(this).siblings("select").val());
							$(this).fadeIn(100);
						});
					}
					$(this).removeClass('activeselectholder');
				});			
				// roll down
				$(this).children('.selectdropdown').slideDown(0);
				$(this).addClass('activeselectholder');
				// change span to show select box title while open
				if($(this).children('select').val() != '0') {
					$(this).children('.desc').fadeOut(100, function(){
						$(this).text($(this).siblings("select").children("option[value=0]").text());
						$(this).fadeIn(100);
					});
				}
			}
		});
	});
	// select dropdown click action
	$('.ft-select .selectdropdown span').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var text = $(this).text();
		var value = $(this).data('value');
		$(this).parent().siblings('select').val(value);
		$(this).parent().siblings('.desc').fadeOut(100, function(){			
			$(this).text(text);
			$(this).fadeIn(100);
		});
	});
});


// ------------------------ Dialog ----------------------

	function showDialog1() {
		document.getElementById("overlay1").style.display = "block";
		document.getElementById("dialog1").style.display = "block";
	}

	function hideDialog1() {
		document.getElementById("overlay1").style.display = "none";
		document.getElementById("dialog1").style.display = "none";
	}

	function showDialog2() {
		document.getElementById("overlay2").style.display = "block";
		document.getElementById("dialog2").style.display = "block";
	}

	function hideDialog2() {
		document.getElementById("overlay2").style.display = "none";
		document.getElementById("dialog2").style.display = "none";
	}

	function showDialog3() {
		document.getElementById("overlay3").style.display = "block";
		document.getElementById("dialog3").style.display = "block";
	}

	function hideDialog3() {
		document.getElementById("overlay3").style.display = "none";
		document.getElementById("dialog3").style.display = "none";
	}

	function showDialog4() {
		document.getElementById("overlay4").style.display = "block";
		document.getElementById("dialog4").style.display = "block";
	}

	function hideDialog4() {
		document.getElementById("overlay4").style.display = "none";
		document.getElementById("dialog4").style.display = "none";
	}

	function showDialog5() {
		document.getElementById("overlay5").style.display = "block";
		document.getElementById("dialog5").style.display = "block";
	}
	function hideDialog5() {
		document.getElementById("overlay5").style.display = "none";
		document.getElementById("dialog5").style.display = "none";
	}

	function showDialog6() {
		document.getElementById("overlay6").style.display = "block";
		document.getElementById("dialog6").style.display = "block";
	}

	function hideDialog6() {
		document.getElementById("overlay6").style.display = "none";
		document.getElementById("dialog6").style.display = "none";
	}

	function showDialog7() {
		document.getElementById("overlay7").style.display = "block";
		document.getElementById("dialog7").style.display = "block";
	}
	
	function hideDialog7() {
		document.getElementById("overlay7").style.display = "none";
		document.getElementById("dialog7").style.display = "none";
	}

	function showDialog8() {
		document.getElementById("overlay8").style.display = "block";
		document.getElementById("dialog8").style.display = "block";
	}

	function hideDialog8() {
		document.getElementById("overlay8").style.display = "none";
		document.getElementById("dialog8").style.display = "none";
	}

	function showDialog9() {
		document.getElementById("overlay9").style.display = "block";
		document.getElementById("dialog9").style.display = "block";
	}

	function hideDialog9() {
		document.getElementById("overlay9").style.display = "none";
		document.getElementById("dialog9").style.display = "none";
	}

	function showDialog10() {
		document.getElementById("overlay10").style.display = "block";
		document.getElementById("dialog10").style.display = "block";
	}

	function hideDialog10() {
		document.getElementById("overlay10").style.display = "none";
		document.getElementById("dialog10").style.display = "none";
	}