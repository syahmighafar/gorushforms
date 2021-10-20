document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
    
		$("#selecthcarea").hide();
		
		$("#jpmcpjscInfo").hide();
		
		$("#deliverymethodarea").hide();
		
		$("#pricedurationarea").hide();
		$("#stdselfPrice").hide();
		$("#expPrice").hide();
		$("#immPrice").hide();
		$("#stdDuration").hide();
		$("#expDuration").hide();
		$("#immDuration").hide();
		
		$("#stdexpselfMessage").hide();
		$("#immMessage").hide();
		
		$("#selfcollectarea").hide();
		$("#selfcollectnextbutton").hide();
		$("#paymentmethodarea").hide();
		
		$("#paymentnoticearea").hide();
		
		$("#remarkarea").hide();
		$("#asknotifyarea").hide();
		$("#notifyoftenarea").hide();
		
		$("#agreementArea").hide();
		$("#stdAgree").hide();
		$("#expAgree").hide();
		$("#immAgree").hide();

		$("#captchaBox").hide();
		
		$("#submitbutton").hide();

		$('input[name=radioQO]').change(function(){
			if ($(this).val().length == 0) {
				$("#selecthcarea").hide();
				$("#jpmcpjscInfo").hide();
			}

			if ( ($(this).val()=="No") || ($(this).val()=="Yes") ) {
				$("#selecthcarea").fadeIn();
				$("#jpmcpjscInfo").fadeIn();
			}
		});
		
		$('input[name=radioPharmacy]').change(function(){
			if ($(this).val().length == 0) {
				$("#deliverymethodarea").hide();
			}

			if ($(this).val().length != 0) {
				$("#deliverymethodarea").fadeIn();
			}
		});
		
		$('input[name=radioTOD]').change(function(){
			if ($(this).val().length == 0) {
				$("#selfcollectarea").hide();
				$("#paymentmethodarea").hide();
				$("#selfcollectnextbutton").hide();
				
				$("#pricedurationarea").hide();
				$("#stdselfPrice").hide();
				$("#expPrice").hide();
				$("#immPrice").hide();
				$("#stdDuration").hide();
				$("#expDuration").hide();
				$("#immDuration").hide();
				
				$("#stdexpselfMessage").hide();
				$("#immMessage").hide();

				$("#stdAgree").hide();
				$("#expAgree").hide();
				$("#immAgree").hide();
				
				document.getElementById('scDate').value = '';
			}

			if ($(this).val()=="Standard") {
				$("#selfcollectarea").hide();
				$("#paymentmethodarea").fadeIn();
				$("#selfcollectnextbutton").hide();
				
				$("#pricedurationarea").fadeIn();
				$("#stdselfPrice").fadeIn();
				$("#expPrice").hide();
				$("#immPrice").hide();
				$("#stdDuration").fadeIn();
				$("#expDuration").hide();
				$("#immDuration").hide();
				
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();

				$("#stdAgree").fadeIn();
				$("#expAgree").hide();
				$("#immAgree").hide();
				
				document.getElementById('scDate').value = '';
			}
			
			if ($(this).val()=="Express") {
				$("#selfcollectarea").hide();
				$("#paymentmethodarea").fadeIn();
				$("#selfcollectnextbutton").hide();
				
				$("#pricedurationarea").fadeIn();
				$("#stdselfPrice").hide();
				$("#expPrice").fadeIn();
				$("#immPrice").hide();
				$("#stdDuration").hide();
				$("#expDuration").fadeIn();
				$("#immDuration").hide();
				
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();

				$("#stdAgree").hide();
				$("#expAgree").fadeIn();
				$("#immAgree").hide();
				
				document.getElementById('scDate').value = '';
			}
			
			if ($(this).val()=="Self Collect") {
				$("#selfcollectarea").fadeIn();
				$("#paymentmethodarea").hide();
				$("#selfcollectnextbutton").fadeIn();
				
				$("#pricedurationarea").fadeIn();
				$("#stdselfPrice").fadeIn();
				$("#expPrice").hide();
				$("#immPrice").hide();
				$("#stdDuration").hide();
				$("#expDuration").hide();
				$("#immDuration").hide();
				
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();

				$("#stdAgree").hide();
				$("#expAgree").hide();
				$("#immAgree").hide();
				
				document.getElementById('scDate').value = '';
			}
		});
		
		document.getElementById("selfcollectnextbutton").addEventListener("click", function() {
			if ($("#scDate").val().length == 0 ) {
				$("#paymentmethodarea").hide();
				alert("Please do not leave the required fields empty!");
			}

			if ($("#scDate").val().length != 0) {
				$("#selfcollectnextbutton").hide();
				$("#paymentmethodarea").fadeIn();
			}
		});
		
		$('input[name=radioPAY]').change(function(){
			if ($(this).val().length == 0) {
				$("#paymentnoticearea").hide();
				$("#asknotifyarea").hide();
			}

			if ($(this).val()=="Cash") {
				$("#paymentnoticearea").hide();
				$("#asknotifyarea").fadeIn();
			}
			
			if ($(this).val()=="Bank Transfer") {
				$("#paymentnoticearea").fadeIn();
				$("#asknotifyarea").fadeIn();
			}
		});
		
		$('input[name=radioNOTI]').change(function(){
			if ($(this).val().length == 0) {
				$("#notifyoftenarea").hide();
				$("#remarkarea").hide();
				$("#agreementArea").hide();
				$("#captchaBox").hide();
				$("#submitbutton").hide();
				
				$('input[name=radioOFTEN]').prop('checked', false);
			}

			if ($(this).val()=="Yes") {
				$("#notifyoftenarea").fadeIn();
				$("#remarkarea").hide();
				$("#agreementArea").hide();
				$("#captchaBox").hide();
				$("#submitbutton").hide();
				
				$('input[name=radioOFTEN]').prop('checked', false);
			}
			
			if ($(this).val()=="No") {
				$("#notifyoftenarea").hide();
				$("#remarkarea").fadeIn();
				$("#agreementArea").fadeIn();
				$("#captchaBox").fadeIn();
				$("#submitbutton").fadeIn();
				
				$('input[name=radioOFTEN]').prop('checked', false);
			}
		});
		
		$('input[name=radioOFTEN]').change(function(){
			if ($(this).val().length == 0) {
				$("#remarkarea").hide();
				$("#agreementArea").hide();
				$("#captchaBox").hide();
				$("#submitbutton").hide();
			}

			if ( ($(this).val().length != 0) ) {
				$("#remarkarea").fadeIn();
				$("#agreementArea").fadeIn();
				$("#captchaBox").fadeIn();
				$("#submitbutton").fadeIn();
			}
		});
	});		
});
