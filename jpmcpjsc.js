document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
	
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#expressnoticearea").hide();
		$("#deliverychoicearea").hide();
		$("#normalarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		
		document.getElementById("uploadbruhealthproof").required = false;
		
		document.getElementById("Type-Of-Delivery").required = true;
		
		document.getElementById("Mandatory-Option").required = false;

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
		
		$('#Type-Of-Delivery').change(function(){
			
			if($(this).val().length == 0) {

				$("#deliverychoicearea").hide();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				$("#jpmcpjscarea").hide();
				
     			}
			
			if($(this).val().includes("Self Collect")) {
				
				$("#deliverychoicearea").hide();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				$("#jpmcpjscarea").fadeIn();
				
			}
	     
     			if( ($(this).val()=="Standard $3 (BSB)") || ($(this).val()=="Standard $5 (Temburong)") || ($(this).val()=="Standard $7 (Tutong/KB)") ) {
				
				$("#deliverychoicearea").fadeIn();
				$("#expressnoticearea").hide();
				document.getElementById("Mandatory-Option").required = true;
				$("#jpmcpjscarea").hide();

     			}

			if($(this).val()=="Express $5 (27/08/2021)") {
				$("#deliverychoicearea").fadeIn();
				$("#expressnoticearea").fadeIn();
				document.getElementById("Mandatory-Option").required = true;
				$("#jpmcpjscarea").hide();
			}
		});
		
		$('#Mandatory-Option').change(function(){
			
			if($(this).val().length == 0) {
				$("#jpmcpjscarea").hide();
     			}
			
			if($(this).val().length != 0) {
				$("#jpmcpjscarea").fadeIn();
     			}
		});
		
		$('#JPMC-or-PJSC').change(function(){
			
			if($(this).val().length == 0) {
	      			$("#Patient-Number-2").attr("minlength", "0");
				$("#Patient-Number-2").attr("maxlength", "0");
        			$("#Patient-Number-2").attr("size", "0");
				$("#normalarea").hide();
      			}
	     
      			if($(this).val()=="JPMC") {
        			$("#Patient-Number-2").attr("minlength", "8");
				$("#Patient-Number-2").attr("maxlength", "8");
        			$("#Patient-Number-2").attr("size", "8");
				$("#normalarea").fadeIn();
      			}
      		
			if($(this).val()=="PJSC") {
	      			$("#Patient-Number-2").attr("minlength", "6");
				$("#Patient-Number-2").attr("maxlength", "6");
        			$("#Patient-Number-2").attr("size", "6");
				$("#normalarea").fadeIn();
      			}
    		});
		
		document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  					if (($("#Full-Name").val().length == 0 ) || ($("#Patient-Number").val().length == 0 ) ||
				    ($("#Date-of-Birth").val().length == 0 ) || ($("#IC-Number").val().length == 0 ) ||
				    ($("#Contact-Number").val().length == 0) || ($("#Delivery-Address").val().length == 0)) {
					$("#otherarea").hide();
				}
				
				if (($("#Full-Name").val().length != 0) && ($("#Patient-Number").val().length != 0) && ($("#Date-of-Birth").val().length != 0) &&
				    ($("#IC-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) && ($("#Delivery-Address").val().length != 0)) {
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
