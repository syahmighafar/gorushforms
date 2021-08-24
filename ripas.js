document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
	
		$("#uploadarea").hide();
		$("#normalarea").hide();
		$("#botharea").hide();
		$("#easycollectarea").hide();
		$("#autorefillarea").hide();
		$("#confirmationarea").hide();
		$("#paymentnoticearea").hide();
		
		document.getElementById("Full-Name-2").required = false;
		document.getElementById("Bru-HIMS-Number").required = false;
		document.getElementById("id-Email").required = false;
		document.getElementById("Date-of-Birth").required = false;
		document.getElementById("IC-Number").required = false;
		document.getElementById("Contact-Number").required = false;
		document.getElementById("Delivery-Address-2").required = false;
		document.getElementById("Payment-Method").required = false;
		document.getElementById("Remarks").required = false;
				
		document.getElementById("Pharmacy-HC-Request").required = false;
		document.getElementById("Easy-Collect-Number").required = false;
		document.getElementById("Auto-Refill-Number").required = false;
	
		document.getElementById("uploadbruhealthproof").required = false;
		
		document.getElementById("Type-Of-Mandatory").required = true;

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

		$('#Type-of-Registration').change(function(){
	     
     			if($(this).val()=="Normal Registration") {

				$("#normalarea").show();
				$("#botharea").hide();
				$("#easycollectarea").hide();
				$("#autorefillarea").hide();
				$("#confirmationarea").show();
				$("#paymentnoticearea").hide();
				
				document.getElementById("Full-Name-2").required = true;
				document.getElementById("Bru-HIMS-Number").required = true;
				document.getElementById("id-Email").required = true;
				document.getElementById("Date-of-Birth").required = true;
				document.getElementById("IC-Number").required = true;
				document.getElementById("Contact-Number").required = true;
				document.getElementById("Delivery-Address-2").required = true;
				document.getElementById("Payment-Method").required = true;
				document.getElementById("Remarks").required = true;
				
				document.getElementById("Pharmacy-HC-Request").required = false;
				document.getElementById("Easy-Collect-Number").required = false;
				document.getElementById("Auto-Refill-Number").required = false;
				
				$('#Payment-Method').change(function(){
	     
     					if($(this).val()=="Bank Transfer") {
						$("#paymentnoticearea").show();
     					}
			
     					if($(this).val()=="Cash on Delivery") {
						$("#paymentnoticearea").hide();
					}
				});
     			}
		
     			if($(this).val()=="Easy Collect") {
				
				$("#normalarea").hide();
				$("#botharea").show();
				$("#easycollectarea").show();
				$("#autorefillarea").hide();
				$("#confirmationarea").show();
				$("#paymentnoticearea").hide();
				
				document.getElementById("Full-Name-2").required = false;
				document.getElementById("Bru-HIMS-Number").required = false;
				document.getElementById("id-Email").required = false;
				document.getElementById("Date-of-Birth").required = false;
				document.getElementById("IC-Number").required = false;
				document.getElementById("Contact-Number").required = false;
				document.getElementById("Delivery-Address-2").required = false;
				document.getElementById("Payment-Method").required = false;
				document.getElementById("Remarks").required = false;
				
				document.getElementById("Pharmacy-HC-Request").required = true;
				document.getElementById("Easy-Collect-Number").required = true;
				document.getElementById("Auto-Refill-Number").required = false;
     			}
			
			if($(this).val()=="Auto Refill") {
				
				$("#normalarea").hide();
				$("#botharea").show();
				$("#easycollectarea").hide();
				$("#autorefillarea").show();
				$("#confirmationarea").show();
				$("#paymentnoticearea").hide();
				
				document.getElementById("Full-Name-2").required = false;
				document.getElementById("Bru-HIMS-Number").required = false;
				document.getElementById("id-Email").required = false;
				document.getElementById("Date-of-Birth").required = false;
				document.getElementById("IC-Number").required = false;
				document.getElementById("Contact-Number").required = false;
				document.getElementById("Delivery-Address-2").required = false;
				document.getElementById("Payment-Method").required = false;
				document.getElementById("Remarks").required = false;
				
				document.getElementById("Pharmacy-HC-Request").required = true;
				document.getElementById("Easy-Collect-Number").required = false;
				document.getElementById("Auto-Refill-Number").required = true;
     			}
		});
	});
		
});
