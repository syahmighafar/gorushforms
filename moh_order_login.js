document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
    
		$("#uploadbruhealtharea").hide();
		$("#deliverymethodarea").hide();
		$("#selfcollectarea").hide();
		$("#paymentmethodarea").hide();
		$("#remarkarea").hide();
		$("#asknotifyarea").hide();
		$("#notifyoftenarea").hide();
		$("#submitarea").hide();

		$('input[name=radioQO]').change(function(){
			if($(this).val().length == 0) {
				$("#uploadbruhealtharea").hide();
				$("#deliverymethodarea").hide();
			}

			if($(this).val()=="Yes") {
				$("#uploadbruhealtharea").fadeIn();
				$("#deliverymethodarea").fadeIn();
			}

			if($(this).val()=="No") {
				$("#uploadbruhealtharea").hide();
				$("#deliverymethodarea").fadeIn();
			}
		});
	});		
});
