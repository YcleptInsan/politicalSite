$(document).ready(function(){
	$(".form-group").submit(function("event"){

		var trumpObama = $("input#Q1").val();
		var favColor = $("input#Q2").val();
		var marajaunaQuestion = $("input#Q3").val();
		event.preventDefault();
	});
	$(".output").return("trumpObama");
});
