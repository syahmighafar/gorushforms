document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
	
		$("#uploadarea").hide();
		$("#paymentnoticearea").hide();
		$("#uploadbruhealthproof").attr("required", "false");
		$("#deliverychoicearea").hide();
		document.getElementById("Mandatory-Option").required = false;
		$("#expressnoticearea").hide();

     		$('#Currently-in-Quarantine').change(function(){
	     
     			if($(this).val().length == 0) {
				$("#uploadarea").hide();
				$("#uploadbruhealthproof").attr("required", "false");
     			}
			
			if($(this).val()=="Yes") {
				$("#uploadarea").show();
				$("#uploadbruhealthproof").attr("required", "true");
     			}
			
     			if($(this).val()=="No") {
				$("#uploadarea").hide();
	     			$("#uploadbruhealthproof").attr("required", "false");
			}
		});
		
		$('#Payment-Method').change(function(){
			if($(this).val().length == 0) {
				$("#paymentnoticearea").hide();
     			}
	     
     			if($(this).val()=="Bank Transfer") {
				$("#paymentnoticearea").show();
     			}
			
     			if($(this).val()=="Cash on Delivery") {
				$("#paymentnoticearea").hide();
			}
		});
    
    		$('#JPMC-or-PJSC').change(function(){
			
			if($(this).val().length == 0) {
	      			$("#Patient-Number-2").attr("minlength", "0");
				$("#Patient-Number-2").attr("maxlength", "0");
        			$("#Patient-Number-2").attr("size", "0");
      			}
	     
      			if($(this).val()=="JPMC") {
        			$("#Patient-Number-2").attr("minlength", "8");
				$("#Patient-Number-2").attr("maxlength", "8");
        			$("#Patient-Number-2").attr("size", "8");
      			}
      		
			if($(this).val()=="PJSC") {
	      			$("#Patient-Number-2").attr("minlength", "6");
				$("#Patient-Number-2").attr("maxlength", "6");
        			$("#Patient-Number-2").attr("size", "6");
      			}
    		});
		
		$('#Type-Of-Delivery').change(function(){
			
			if($(this).val().length == 0) {
				$("#deliverychoicearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				$("#expressnoticearea").hide();
     			}
	     
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
