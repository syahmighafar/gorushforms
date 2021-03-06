document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
		
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#normalarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		$("#confirmationarea").hide();
		$("#icnumarea").hide();
		$("#passportnumarea").hide();
		$("#submitregistrationbutton").hide();
		$("#submitregistrationpassbutton").hide();
		
		document.getElementById("uploadbruhealthproof").required = false;
		
		document.getElementById("Type-of-Mandatory").required = true;

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
		
		$('#Type-of-Mandatory').change(function(){
			if ( $(this).val().length == 0 ) {
				$("#normalarea").hide();
     			}
	     
     			if ( $(this).val().includes("Standard") ) {
				$("#normalarea").fadeIn();
     			}
		});
		
		$('#IC-or-Passport').change(function(){
			
			if($(this).val().length == 0) {

				$("#icnumarea").hide();
				$("#passportnumarea").hide();
				$("#submitregistrationbutton").hide();
				$("#submitregistrationpassbutton").hide();
      			}
	     
      			if($(this).val()=="IC") {

				$("#icnumarea").fadeIn();
				$("#passportnumarea").hide();
				$("#submitregistrationbutton").fadeIn();
				$("#submitregistrationpassbutton").hide();
      			}
      		
			if($(this).val()=="Passport") {

				$("#icnumarea").hide();
				$("#passportnumarea").fadeIn();
				$("#submitregistrationbutton").hide();
				$("#submitregistrationpassbutton").fadeIn();
      			}
    		});
		
		document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  			if ( ($("#Full-Name").val().length == 0 ) || ($("#Patient-Service-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
			($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#IC-Number").val().length == 0 ) ||
			($("#Delivery-Address").val().length == 0) || ($("#Postal-Code").val().length == 0) ) {
				$("#otherarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Patient-Service-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
			($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#IC-Number").val().length != 0) &&
			($("#Delivery-Address").val().length != 0) && ($("#Postal-Code").val().length != 0)) {
				$("#submitregistrationbutton").hide();
				$("#otherarea").fadeIn();
			}
		});
		
		document.getElementById("submitregistrationpassbutton").addEventListener("click", function() {
  			if ( ($("#Full-Name").val().length == 0 ) || ($("#Patient-Service-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
			($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#Passport-Number").val().length == 0 ) ||
			($("#Delivery-Address").val().length == 0) || ($("#Postal-Code").val().length == 0) ) {
				$("#otherarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Patient-Service-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
			($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#Passport-Number").val().length != 0) &&
			($("#Delivery-Address").val().length != 0) && ($("#Postal-Code").val().length != 0)) {
				$("#submitregistrationpassbutton").hide();
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
