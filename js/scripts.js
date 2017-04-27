$(document).ready(function(){
	$("form#all").submit(function(event){
		event.preventDefault();
		var pickNum = $("input#Q1").val()
			if (pickNum <= 100) {
				show("#Q1-text-below");
				alert("do this here")
		// var favColor = $("input#Q2").val();
		// var marajaunaQuestion = $("input#Q3").val();
		var result = pickNum;
	}

		alert(result);

		$("#output").appendTo(result);
	});
});
