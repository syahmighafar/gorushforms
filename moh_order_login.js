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
			if ($(this).val().length == 0) {
				$("#uploadbruhealtharea").hide();
				$("#deliverymethodarea").hide();
			}

			if ( ($(this).val()=="No") || ($(this).val()=="Yes") ) {
				$("#uploadbruhealtharea").fadeIn();
				$("#deliverymethodarea").fadeIn();
			}
		});
		
		$('input[name=radioTOD]').change(function(){
			if ($(this).val().length == 0) {
				$("#selfcollectarea").hide();
				$("#paymentmethodarea").hide();
			}

			if ( ($(this).val()=="Standard") || ($(this).val()=="Express") ) {
				$("#selfcollectarea").hide();
				$("#paymentmethodarea").fadeIn();
			}
			
			if ($(this).val()=="Self Collect") {
				$("#selfcollectarea").fadeIn();
				$("#paymentmethodarea").hide();
			}
		});
		
		$('input[name=radioPAY]').change(function(){
			if ($(this).val().length == 0) {
				$("#remarkarea").hide();
				$("#asknotifyarea").hide();
			}

			if ( ($(this).val()=="Cash") || ($(this).val()=="Bank Transfer") ) {
				$("#remarkarea").fadeIn();
				$("#asknotifyarea").fadeIn();
			}
		});
		
		$('input[name=radioNOTI]').change(function(){
			if ($(this).val().length == 0) {
				$("#notifyoftenarea").hide();
				$("#submitarea").hide();
			}

			if ( ($(this).val()=="Cash") || ($(this).val()=="Bank Transfer") ) {
				$("#notifyoftenarea").fadeIn();
				$("#submitarea").hide();
			}
		});
		
		$('input[name=radioOFTEN]').change(function(){
			if ($(this).val().length == 0) {
				$("#submitarea").hide();
			}

			if ( ($(this).val().length != 0) ) {
				$("#submitarea").fadeIn();
			}
		});
	});		
});
