document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
		
		$("#requesterarea").hide();
		$("#requesternextbutton").hide();
		
		$("#quarantineArea").hide();
		
		$("#selecthcarea").hide();
		$("#jpmcpjscInfo").hide();
		
		$("#deliverymethodarea").hide();
		
		$("#immediateArea").hide();
	
		$("#pricedurationarea").hide();
		$("#stdselfPrice").hide();
		$("#expPrice").hide();
		$("#immPrice").hide();
		$("#stdDuration").hide();
		$("#expDuration").hide();
		$("#immDuration").hide();
		$("#stdexpselfMessage").hide();
		$("#immMessage").hide();
		
		$("#mohnormalregArea").hide();
		$("#icarea").hide();
		$("#passportarea").hide();
		
		$("#addressArea").hide();
		$("#addressnextbutton").hide();
		
		$("#selfcollectarea").hide();
		$("#selfcollectnextbutton").hide();
		
		$("#paymentmethodarea").hide();
		$("#paymentnoticearea").hide();
		
		$("#remarkarea").hide();
		
		$("#agreementArea").hide();
		$("#stdAgree").hide();
		$("#expAgree").hide();
		$("#immAgree").hide();
		
		$("#captchaBox").hide();

		$("#submitbutton").hide();
		
		$('input[name=Requester]').change(function(){
			if($(this).val().length == 0) {
				$("#requesterarea").hide();
				$("#quarantineArea").hide();
				$("#requesternextbutton").hide();
				
				document.getElementById('Requester-Name').value = '';
				document.getElementById('Requester-Contact-Number').value = '';
     			}
			
			if($(this).val()=="No") {
				$("#requesterarea").hide();
				$("#quarantineArea").fadeIn();
				$("#requesternextbutton").hide();
				
				document.getElementById('Requester-Name').value = '';
				document.getElementById('Requester-Contact-Number').value = '';
     			}
	     
     			if($(this).val()=="Yes") {
				$("#requesterarea").fadeIn();
				$("#quarantineArea").hide();
				$("#requesternextbutton").fadeIn();
				
				document.getElementById("requesternextbutton").addEventListener("click", function() {
					if ( ($("#Requester-Name").val().length == 0 ) || ($("#Requester-Contact-Number").val().length == 0 )|| ($("#Relationship-to-Patient").val().length == 0 ) ) {
						$("#quarantineArea").hide();
						alert("Please do not leave the required fields empty!");
					}

					if ( ($("#Requester-Name").val().length != 0) && ($("#Requester-Contact-Number").val().length != 0)&& ($("#Relationship-to-Patient").val().length != 0) ) {
						$("#requesternextbutton").hide();
						$("#quarantineArea").fadeIn();
					}
				});
     			}
		});

		$('input[name=QuarantineOrder]').change(function(){
			if ($(this).val().length == 0) {
				$("#selecthcarea").hide();
				$("#jpmcpjscInfo").hide();
			}

			if ($(this).val().length != 0) {
				$("#selecthcarea").fadeIn();
				$("#jpmcpjscInfo").fadeIn();
			}
		});
		
		$('input[name=Pharmacy]').change(function(){
			if ($(this).val().length == 0) {
				$("#deliverymethodarea").hide();
			}

			if ($(this).val().length != 0) {
				$("#deliverymethodarea").fadeIn();
			}
		});
		
		$('input[name=ICorPassport]').change(function(){
			if ($(this).val().length == 0) {
				$("#icarea").hide();
				$("#passportarea").hide();
        
        			document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}

			if ($(this).val()=="icNumber") {
				$("#icarea").fadeIn();
				$("#passportarea").hide();
        
        			document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}
      
      			if ($(this).val()=="passport") {
				$("#icarea").hide();
				$("#passportarea").fadeIn();
        
        			document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}
		});
		
		$('input[name=TypeofDelivery]').change(function(){
			if ($(this).val().length == 0) {
				$("#mohnormalregArea").hide();
				
				$("#addressArea").hide();
				$("#addressnextbutton").hide();

				$("#selfcollectarea").hide();
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
				$("#mohnormalregArea").fadeIn();
				
				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
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
				$("#mohnormalregArea").fadeIn();
				
				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
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
			
			if ($(this).val()=="Immediate") {
				$("#mohnormalregArea").fadeIn();
				
				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();
				
				$("#pricedurationarea").fadeIn();
				$("#stdselfPrice").hide();
				$("#expPrice").hide();
				$("#immPrice").fadeIn();
				$("#stdDuration").hide();
				$("#expDuration").hide();
				$("#immDuration").fadeIn();
				$("#stdexpselfMessage").hide();
				$("#immMessage").fadeIn();
				$("#stdAgree").hide();
				$("#expAgree").hide();
				$("#immAgree").fadeIn();
				
				document.getElementById('scDate').value = '';
			}
			
			if ($(this).val()=="Self Collect") {
				$("#mohnormalregArea").fadeIn();
				
				$("#addressArea").hide();
				$("#addressnextbutton").hide();

				$("#selfcollectarea").fadeIn();
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
		
		document.getElementById("addressnextbutton").addEventListener("click", function() {
			if ($('input[name=ICorPassport]').val() == "icNumber"){
				if ( ($("#name").val().length == 0 )||($("#icNumber").val().length == 0 )||($("#dob").val().length == 0 )
				    ||($("#contact_1").val().length == 0 )||($("#Patient-Number").val().length == 0 )||($("#address_1").val().length == 0 )
				    ||($("#address_2").val().length == 0 )||($("#address_4").val().length == 0 )) {
					$("#paymentmethodarea").hide();
					alert("Please do not leave the required fields empty!");
				}

				if ( ($("#name").val().length != 0)&&($("#icNumber").val().length != 0)&&($("#dob").val().length != 0)
				    &&($("#contact_1").val().length != 0)&&($("#Patient-Number").val().length != 0)&&($("#address_1").val().length != 0)
				    &&($("#address_2").val().length != 0)&&($("#address_4").val().length != 0)) {
					$("#addressnextbutton").hide();
					$("#paymentmethodarea").fadeIn();
				}
			}
			
			if ($('input[name=ICorPassport]').val() == "passport"){
				if ( ($("#name").val().length == 0 )||($("#passport").val().length == 0 )||($("#dob").val().length == 0 )
				    ||($("#contact_1").val().length == 0 )||($("#Patient-Number").val().length == 0 )||($("#address_1").val().length == 0 )
				    ||($("#address_2").val().length == 0 )||($("#address_4").val().length == 0 )) {
					$("#paymentmethodarea").hide();
					alert("Please do not leave the required fields empty!");
				}

				if ( ($("#name").val().length != 0)&&($("#passport").val().length != 0)&&($("#dob").val().length != 0)
				    &&($("#contact_1").val().length != 0)&&($("#Patient-Number").val().length != 0)&&($("#address_1").val().length != 0)
				    &&($("#address_2").val().length != 0)&&($("#address_4").val().length != 0)) {
					$("#addressnextbutton").hide();
					$("#paymentmethodarea").fadeIn();
				}
			}
		});
		
		document.getElementById("selfcollectnextbutton").addEventListener("click", function() {
			if ($('input[name=ICorPassport]').val() == "icNumber"){
				if ( ($("#name").val().length == 0 )||($("#icNumber").val().length == 0 )||($("#dob").val().length == 0 )
				    ||($("#contact_1").val().length == 0 )||($("#Patient-Number").val().length == 0 )||($("#scDate").val().length == 0 ) ) {
					$("#paymentmethodarea").hide();
					alert("Please do not leave the required fields empty!");
				}

				if ( ($("#name").val().length != 0)&&($("#icNumber").val().length != 0)&&($("#dob").val().length != 0)
				    &&($("#contact_1").val().length != 0)&&($("#Patient-Number").val().length != 0)&&($("#scDate").val().length != 0) ) {
					$("#selfcollectnextbutton").hide();
					$("#paymentmethodarea").fadeIn();
				}
			}
			
			if ($('input[name=ICorPassport]').val() == "passport"){
				if ( ($("#name").val().length == 0 )||($("#passport").val().length == 0 )||($("#dob").val().length == 0 )
				    ||($("#contact_1").val().length == 0 )||($("#Patient-Number").val().length == 0 )||($("#scDate").val().length == 0 ) ) {
					$("#paymentmethodarea").hide();
					alert("Please do not leave the required fields empty!");
				}

				if ( ($("#name").val().length != 0)&&($("#passport").val().length != 0)&&($("#dob").val().length != 0)
				    &&($("#contact_1").val().length != 0)&&($("#Patient-Number").val().length != 0)&&($("#scDate").val().length != 0) ) {
					$("#selfcollectnextbutton").hide();
					$("#paymentmethodarea").fadeIn();
				}
			}
		});
		
		$('input[name=PaymentMethod]').change(function(){
			
			if ($(this).val().length == 0) {
				$("#paymentnoticearea").hide();
				$("#remarkarea").hide();
				$("#agreementArea").hide();
				$("#captchaBox").hide();
				$("#submitbutton").hide();
			}

			if ($(this).val()=="Cash") {
				$("#paymentnoticearea").hide();
				$("#remarkarea").fadeIn();
				$("#agreementArea").fadeIn();
				$("#captchaBox").fadeIn();
				$("#submitbutton").fadeIn();
			}
			
			if ($(this).val()=="Bank Transfer") {
				$("#paymentnoticearea").fadeIn();
				$("#remarkarea").fadeIn();
				$("#agreementArea").fadeIn();
				$("#captchaBox").fadeIn();
				$("#submitbutton").fadeIn();
			}
		});
	});		
});
