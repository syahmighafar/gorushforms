document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
		
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#expressnoticearea").hide();
		$("#deliverychoicearea").hide();
		$("#registrationtypearea").hide();
		$("#normalarea").hide();
		$("#botharea").hide();
		$("#easycollectarea").hide();
		$("#autorefillarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		$("#confirmationarea").hide();
		
		document.getElementById("uploadbruhealthproof").required = false;
		
		document.getElementById("Type-Of-Mandatory").required = true;
		
		document.getElementById("Mandatory-Option").required = false;
		
		document.getElementById("Type-of-Registration").required = true;
		
     		$('#Currently-in-Quarantine').change(function(){
			
			if($(this).val().length == 0) {

				$("#uploadarea").hide();
	     			document.getElementById("uploadbruhealthproof").required = false;
				$("#deliverytypearea").hide();
				
     			}
	     
     			if($(this).val()=="Yes") {

				$("#uploadarea").fadeIn();
	     			document.getElementById("uploadbruhealthproof").required = true;
				$("#deliverytypearea").fadeIn();
				
     			}
		
     			if($(this).val()=="No") {
	     
				$("#uploadarea").hide();
	     			document.getElementById("uploadbruhealthproof").required = false;
				$("#deliverytypearea").fadeIn();
				
     			}
		});
		
		$('#Type-Of-Mandatory').change(function(){
			
			if($(this).val().length == 0) {
				$("#deliverychoicearea").hide();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				$("#registrationtypearea").hide();
     			}
			
			if($(this).val().includes("Self Collect")) {
				$("#deliverychoicearea").hide();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				$("#registrationtypearea").fadeIn();
			}
	     
     			if (($(this).val()=="Standard $3")||($(this).val()=="Immediate $20")) {
				$("#deliverychoicearea").fadeIn();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = true;
				$("#registrationtypearea").hide();
     			}
			
			if($(this).val()=="Express $5 (28/08/2021)") {
				$("#deliverychoicearea").fadeIn();
				$("#expressnoticearea").fadeIn();
				document.getElementById("Mandatory-Option").required = true;
				$("#registrationtypearea").hide();
			}
		});
		
		$('#Mandatory-Option').change(function(){
			
			if($(this).val().length == 0) {
				$("#registrationtypearea").hide();
     			}
			
			if($(this).val().length != 0) {
				$("#registrationtypearea").fadeIn();
     			}
		});

		$('#Type-of-Registration').change(function(){
			
			if($(this).val().length == 0) {

				$("#normalarea").hide();
				$("#botharea").hide();
				$("#easycollectarea").hide();
				$("#autorefillarea").hide();
				
				setTimeout(function() {
				document.getElementById("Full-Name-2").required = false;
				document.getElementById("Bru-HIMS-Number").required = false;
				document.getElementById("Date-of-Birth").required = false;
				document.getElementById("IC-Number").required = false;
				document.getElementById("Contact-Number").required = false;
				document.getElementById("Delivery-Address-2").required = false;
				
				document.getElementById("Pharmacy-HC-Request").required = false;
				document.getElementById("Easy-Collect-Number").required = false;
				document.getElementById("Auto-Refill-Number").required = false;
				}, 5000);
				
				
     			}
	     
     			if($(this).val()=="New Registration") {

				$("#normalarea").fadeIn();
				$("#botharea").hide();
				$("#easycollectarea").hide();
				$("#autorefillarea").hide();
				
				setTimeout(function() { document.getElementById("Full-Name-2").required = true;
				document.getElementById("Bru-HIMS-Number").required = true;
				document.getElementById("Date-of-Birth").required = true;
				document.getElementById("IC-Number").required = true;
				document.getElementById("Contact-Number").required = true;
				document.getElementById("Delivery-Address-2").required = true;
				
				document.getElementById("Pharmacy-HC-Request").required = false;
				document.getElementById("Easy-Collect-Number").required = false;
				document.getElementById("Auto-Refill-Number").required = false; }, 5000);
				
				
				
				if (($("#Full-Name-2").val().length == 0) || ($("#Bru-HIMS-Number").val().length == 0) || ($("#Date-of-Birth").val().length == 0) || ($("#IC-Number").val().length == 0) || ($("#Contact-Number").val().length == 0) || ($("#Delivery-Address-2").val().length == 0)) {
					$("#otherarea").hide();
				}
				
				if (($("#Full-Name-2").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Date-of-Birth").val().length != 0) && ($("#IC-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) && ($("#Delivery-Address-2").val().length != 0)) {
					$("#otherarea").fadeIn();
				}
     			}
		
     			if($(this).val()=="Easy Collect") {
				
				$("#normalarea").hide();
				$("#botharea").fadeIn();
				$("#easycollectarea").fadeIn();
				$("#autorefillarea").hide();
				
				setTimeout(function() { document.getElementById("Full-Name-2").required = false;
				document.getElementById("Bru-HIMS-Number").required = false;
				document.getElementById("Date-of-Birth").required = false;
				document.getElementById("IC-Number").required = false;
				document.getElementById("Contact-Number").required = false;
				document.getElementById("Delivery-Address-2").required = false;
				
				document.getElementById("Pharmacy-HC-Request").required = true;
				document.getElementById("Easy-Collect-Number").required = true;
				document.getElementById("Auto-Refill-Number").required = false; }, 5000);

				
				
				if (($("#Pharmacy-HC-Request").val().length == 0) || ($("#Easy-Collect-Number").val().length == 0)) {
					$("#otherarea").hide();
				}
				
				if (($("#Pharmacy-HC-Request").val().length != 0) && ($("#Easy-Collect-Number").val().length != 0)) {
					$("#otherarea").fadeIn();
				}
     			}
			
			if($(this).val()=="Auto Refill") {
				
				$("#normalarea").hide();
				$("#botharea").fadeIn();
				$("#easycollectarea").hide();
				$("#autorefillarea").fadeIn();
				
				setTimeout(function() { document.getElementById("Full-Name-2").required = false;
				document.getElementById("Bru-HIMS-Number").required = false;
				document.getElementById("Date-of-Birth").required = false;
				document.getElementById("IC-Number").required = false;
				document.getElementById("Contact-Number").required = false;
				document.getElementById("Delivery-Address-2").required = false;
				
				document.getElementById("Pharmacy-HC-Request").required = true;
				document.getElementById("Easy-Collect-Number").required = false;
				document.getElementById("Auto-Refill-Number").required = true; }, 5000);
				
				
				
				if (($("#Pharmacy-HC-Request").val().length == 0) || ($("#Auto-Refill-Number").val().length == 0)) {
					$("#otherarea").hide();
				}
				
				if (($("#Pharmacy-HC-Request").val().length != 0) && ($("#Auto-Refill-Number").val().length != 0)) {
					$("#otherarea").fadeIn();
				}
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
