document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
		
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#expressnoticearea").hide();
		$("#deliverychoicearea").hide();
		$("#easyautochoicearea").hide();
		$("#normalarea").hide();
		$("#bookingnumarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		$("#confirmationarea").hide();
		
		document.getElementById("uploadbruhealthproof").required = false;
		
		document.getElementById("Type-Of-Mandatory").required = true;
		
		document.getElementById("Mandatory-Option").required = false;
		
		document.getElementById("Easy-Collect-Auto-Refill-Available").required = true;
		
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
			if ( $(this).val().length == 0 ) {
				$("#deliverychoicearea").hide();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				$("#normalarea").hide();
     			}
			
			if ( $(this).val().includes("Self Collect") ) {
				$("#deliverychoicearea").hide();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				$("#normalarea").fadeIn();
			}
	     
     			if ( ($(this).val().includes("Standard")) || ($(this).val().includes("Immediate")) ) {
				$("#deliverychoicearea").fadeIn();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = true;
				$("#normalarea").hide();
     			}
			
			if ( $(this).val().includes("Express") ) {
				$("#deliverychoicearea").fadeIn();
				$("#expressnoticearea").fadeIn();
				document.getElementById("Mandatory-Option").required = true;
				$("#normalarea").hide();
			}
		});
		
		$('#Mandatory-Option').change(function(){
			if($(this).val().length == 0) {
				$("#normalarea").hide();
     			}
			
			if($(this).val().length != 0) {
				$("#normalarea").fadeIn();
     			}
		});
		
		document.getElementById("submitnewregistrationbutton").addEventListener("click", function() {
  			if (($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) ||
				($("#Date-of-Birth").val().length == 0 ) || ($("#IC-Number").val().length == 0 ) ||
				($("#Contact-Number").val().length == 0) || ($("#Delivery-Address").val().length == 0)) {
				$("#easyautochoicearea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Date-of-Birth").val().length != 0) &&
				($("#IC-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) && ($("#Delivery-Address").val().length != 0)) {
				$("#submitnewregistrationbutton").hide();
				$("#easyautochoicearea").fadeIn();
			}
		});

		$('#Easy-Collect-Auto-Refill-Available').change(function(){
			if($(this).val().length == 0) {
				$("#otherarea").hide();
				$("#bookingnumarea").hide();
				
				document.getElementById("Booking-Number").required = false;
     			}
	     
     			if($(this).val()=="Yes") {
				$("#otherarea").hide();
				$("#bookingnumarea").fadeIn();
				
				document.getElementById("Booking-Number").required = true;
				
				document.getElementById("bookingbutton").addEventListener("click", function() {
  					if (($("#Booking-Number").val().length == 0)) {
						$("#otherarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if (($("#Booking-Number").val().length != 0)) {
						$("#otherarea").fadeIn();
						$("#bookingbutton").hide();
					}
				});
				
     			}
		
     			if($(this).val()=="No") {
				$("#otherarea").fadeIn();
				$("#bookingnumarea").hide();
				
				document.getElementById("Booking-Number").required = false;
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
