$('.d-box .d-b-inner').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
});
/* ============= Date Picker =========*/
$(document).ready(function () {
	'use strict';
	$(".date").datepicker({
		autoclose: true,
		todayHighlight: false
	});
});
/*===========menu=============*/

$(document).ready(function () { 
 $(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.nav-link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

});

$(document).ready(function () {
	$("select").click(function(){
    $(this).toggleClass("open");
});

});
$(document).ready(function () {
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
});
$(document).ready(function () {
$(".login-form-input input").focusout(function(){
        if($(this).val() != "") {
            $(this).parents(".login-form-input").find("label").addClass("active");
        }
        else {
            $(this).parents(".login-form-input").find("label").removeClass("active");
        }
    });
});

$(function() {
    $(".form-input-date .date").datepicker();
    $(".date").on("change",function(){
		if($(this).parents('.form-input-date input').val() != "") {
            $(this).find("label").addClass("active");
        }
		 else {
            $(this).find("label").removeClass("active");
        }
    });
	
});
$(document).ready(function () {
$(".form-input input").focusout(function(){
        if($(this).val() != "") {
            $(this).parents(".form-input").find("label").addClass("active");
        }
        else {
            $(this).parents(".form-input").find("label").removeClass("active");
        }
    });
});
$(document).ready(function () {
$('.click-list').click(function(){
  $(this).parents('.header-main-heading').addClass('hide');
});
});

$("#tile-1 .sort-list li a").click(function() {
  var position = $(this).parent().position();
  var width = $(this).parent().width();
    $("#tile-1 .tab-slider").css({"left":+ position.left,"width":width});
});
var actWidth = $("#tile-1 .sort-list").find(".active").parent("li").width();
var actPosition = $("#tile-1 .sort-list li.active").position();
$("#tile-1 .tab-slider").css({"left":+ actPosition.left,"width": actWidth});

  $('.sort-list li').click(function() {
             $(this).addClass('active').siblings().removeClass('active');
  });

/*=============OPTIONAL JS Dropdown=============*/
// Change the button text & add active class
$('.jRadioDropdown').change(function () {
	var dropdown = $(this).closest('.dropdown');
	var thislabel = $(this).closest('label');

	dropdown.find('label').removeClass('active');
	if ($(this).is(':checked')) {
		thislabel.addClass('active');
		dropdown.find('span').html(thislabel.text());
	}

});
/* ============= Date Picker Inline =========*/

$(document).ready(function () {
	$(".date-pick").datepicker({
		todayHighlight: true,
		inline:true,
	}).datepicker('update', new Date());
});
$(document).ready(function () {
	$(".date-pick").datepicker({
		todayHighlight: true,
		inline:true,
	}).datepicker('update', new Date());
});

/*=========== slot ===============*/


 $('.show-slot').click(function(){
    var link = $(this);
    $('.slot-container').slideToggle( function() {
        if ($(this).is(':visible')) {
             link.text('view less');                
        } else {
             link.text('view slot');                
        }        
    });       
});


$(".check-main-btn .check-btn").click(function(){
  $('.hidden-btn').css({'display':'flex'});
  $('.hide-click').css({'display':'none'});
   $(this).css({'display':'none'});
 
});

