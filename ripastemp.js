document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
	
		$("#uploadarea").hide();
		$("#normalarea").show();
		$("#botharea").hide();
		$("#easycollectarea").hide();
		$("#autorefillarea").hide();
		$("#confirmationarea").show();
		$("#paymentnoticearea").hide();
		$("#expressnoticearea").hide();
		
		document.getElementById("Full-Name-2").required = true;
		document.getElementById("Bru-HIMS-Number").required = true;
		document.getElementById("Date-of-Birth").required = true;
		document.getElementById("IC-Number").required = true;
		document.getElementById("Contact-Number").required = true;
		document.getElementById("Delivery-Address-2").required = true;
		document.getElementById("Payment-Method").required = true;
		document.getElementById("Remarks").required = true;
	
		document.getElementById("uploadbruhealthproof").required = false;
		
		document.getElementById("Type-Of-Mandatory").required = true;
		
		$("#deliverychoicearea").hide();
		document.getElementById("Mandatory-Option").required = false;

     		$('#Currently-in-Quarantine').change(function(){
	     
     			if($(this).val()=="Yes") {

				$("#uploadarea").show();
	     			document.getElementById("uploadbruhealthproof").required = true;
     			}
		
     			if($(this).val()=="No") {
	     
				$("#uploadarea").hide();
	     			document.getElementById("uploadbruhealthproof").required = false;   
     			}
		});
    
    		$('#Payment-Method').change(function(){
	     
     			if($(this).val()=="Bank Transfer") {
				$("#paymentnoticearea").show();
     			}
			
     			if($(this).val()=="Cash on Delivery") {
				$("#paymentnoticearea").hide();
			}
		});
		
		$('#Type-Of-Mandatory').change(function(){
	     
     			if($(this).val().includes("Delivery")) {
				$("#deliverychoicearea").show();
				document.getElementById("Mandatory-Option").required = true;
				$("#expressnoticearea").hide();
     			}
			
     			if($(this).val().includes("Self Collect")) {
				$("#deliverychoicearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				$("#expressnoticearea").hide();
			}
			
			if($(this).val().includes("Delivery Express")) {
				$("#deliverychoicearea").show();
				document.getElementById("Mandatory-Option").required = true;
				$("#expressnoticearea").show();
			}
		});

	});
		
});
