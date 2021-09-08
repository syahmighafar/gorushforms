document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
		
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#normalarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		$("#confirmationarea").hide();
		$("#addressarea").hide();
		$("#bruphonechoicearea").hide();
		$("#brucontactnumarea").hide();
		$("#nonbrucontactnumarea").hide();
		$("#addcontactnumarea").hide();
		$("#submitphonebutton").hide();

     		$('#Currently-in-Quarantine').change(function(){
			if($(this).val().length == 0) {
				$("#uploadarea").hide();
				$("#deliverytypearea").hide();
     			}
	     
     			if($(this).val()=="Yes") {
				$("#uploadarea").fadeIn();
				$("#deliverytypearea").fadeIn();
     			}
		
     			if($(this).val()=="No") {
				$("#uploadarea").hide();
				$("#deliverytypearea").fadeIn();
     			}
		});
		
		$('#Type-of-Mandatory').change(function(){
			if ( $(this).val().length == 0 ) {
				$("#deliverychoicearea").hide();
				$("#normalarea").hide();
				$("#addressarea").hide();
     			}
	     
     			if ( $(this).val().includes("Standard") ) {
				$("#deliverychoicearea").fadeIn();
				$("#normalarea").fadeIn();
				$("#addressarea").fadeIn();
     			}
		});
		
		document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  			if ( ($("#Full-Name").val().length == 0 ) || ($("#Patient-Service-Number").val().length == 0 ) ||
			($("#District").val().length == 0) || ($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
			($("#Simpang-Number").val().length == 0) || ($("#House-Unit-Number").val().length == 0) ) {
				$("#bruphonechoicearea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if ( ($("#Full-Name").val().length != 0) && ($("#Patient-Service-Number").val().length != 0) &&
			($("#District").val().length != 0) && ($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
			($("#Simpang-Number").val().length != 0) && ($("#House-Unit-Number").val().length != 0) ) {
				$("#submitregistrationbutton").hide();
				$("#bruphonechoicearea").fadeIn();
			}
		});
		
		$('#Using-Brunei-Phone-Number').change(function(){
			if($(this).val().length == 0) {
				$("#brucontactnumarea").hide();
				$("#nonbrucontactnumarea").hide();
				$("#addcontactnumarea").hide();
				$("#submitphonebutton").hide();
     			}
	     
     			if($(this).val()=="Yes") {
				$("#brucontactnumarea").fadeIn();
				$("#nonbrucontactnumarea").hide();
				$("#addcontactnumarea").fadeIn();
				$("#submitphonebutton").fadeIn();
				
				document.getElementById("submitphonebutton").addEventListener("click", function() {
  					if ( ($("#Contact-Number").val().length == 0 ) ) {
						$("#otherarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#Contact-Number").val().length != 0) ) {
						$("#submitphonebutton").hide();
						$("#otherarea").fadeIn();
					}
				});
     			}
			
     			if($(this).val()=="No") {
				$("#brucontactnumarea").hide();
				$("#nonbrucontactnumarea").fadeIn();
				$("#addcontactnumarea").fadeIn();
				$("#submitphonebutton").fadeIn();
				
				document.getElementById("submitphonebutton").addEventListener("click", function() {
  					if ( ($("#Non-Brunei-Contact-Number").val().length == 0 ) ) {
						$("#otherarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#Non-Brunei-Contact-Number").val().length != 0) ) {
						$("#submitphonebutton").hide();
						$("#otherarea").fadeIn();
					}
				});
			}
		});
		
		
		
		$('#Payment-Method').change(function(){
			if($(this).val().length == 0) {
				$("#paymentnoticearea").hide();
				$("#confirmationarea").hide();
     			}
	     
     			if($(this).val()=="Bank Transfer") {
				$("#paymentnoticearea").fadeIn();
				$("#confirmationarea").fadeIn();
     			}
			
     			if($(this).val()=="Cash on Delivery") {
				$("#paymentnoticearea").hide();
				$("#confirmationarea").fadeIn();
			}
		});
	});	
});
