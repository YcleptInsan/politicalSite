


$(document).ready(function(){
	$("form#all").submit(function(event){
		event.preventDefault();

		var pickNum = $("input#Q1").val();
		 if (pickNum <= 100){

		var favColor = $("input#Q2").val();
		var marajaunaQuestion = $("input#Q3").val();
		var result = pickNum;
		$("#output").text(result);
	};
	});
});
