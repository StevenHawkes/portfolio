// Day & Night Switch

var today = new Date().getHours();

if (today >= 6 && today <= 18) {
   	$('body').removeClass('nacht');
    $('body').addClass('dag');
    $('#sw').prop('checked', false);	   
} else {
	$('body').removeClass('dag');
    $('body').addClass('nacht');
    $('#sw').prop('checked', true);
}

$('#sw').change(function() {
 	if (this.checked) {
		$('body').removeClass('dag');
    	$('body').addClass('nacht');
  	} else {
    	$('body').removeClass('nacht');
    	$('body').addClass('dag');
  	}
});

$('.fa-sun-o').on('click', function() {
	$('body').removeClass('nacht');
    $('body').addClass('dag');
	$('#sw').prop('checked', false);
});

$('.fa-moon-o').on('click', function() {
	$('body').removeClass('dag');
    $('body').addClass('nacht');
    $('#sw').prop('checked', true);
});