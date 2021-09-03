document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
		
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#expressnoticearea").hide();
		$("#normalarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		$("#confirmationarea").hide();
		$("#submitregistrationbutton").hide();
		
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
		
		$('#Type-Of-Mandatory').change(function(){
			if ( $(this).val().length == 0 ) {
				$("#expressnoticearea").hide();
				$("#normalarea").hide();
     			}
			
     			if ( ($(this).val().includes("Self Collect")) || ($(this).val().includes("Standard")) || ($(this).val().includes("Immediate")) ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
     			}
			
			if ( $(this).val().includes("Express") ) {
				$("#expressnoticearea").fadeIn();
				$("#normalarea").fadeIn();
			}
		});
		
		document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  			if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
			($("#Delivery-Address").val().length == 0) || ($("#Postal-Code").val().length == 0) ) {
				$("#otherarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
			($("#Delivery-Address").val().length != 0) && ($("#Postal-Code").val().length != 0)) {
				$("#submitregistrationbutton").hide();
				$("#otherarea").fadeIn();
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
