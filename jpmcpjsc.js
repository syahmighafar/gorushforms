document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
	
		$("#uploadarea").hide();
		$("#paymentnoticearea").hide();
		$("#uploadbruhealthproof").attr("required", "false");
		$("#deliverychoicearea").hide();
		document.getElementById("Mandatory-Option").required = false;

     		$('#Currently-in-Quarantine').change(function(){
	     
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
	     
     			if($(this).val()=="Bank Transfer") {
				$("#paymentnoticearea").show();
     			}
			
     			if($(this).val()=="Cash on Delivery") {
				$("#paymentnoticearea").hide();
			}
		});
    
    		$('#JPMC-or-PJSC').change(function(){
	     
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
	     
     			if($(this).val().includes("Delivery")) {
				$("#deliverychoicearea").show();
				document.getElementById("Mandatory-Option").required = true;
     			}
			
     			if($(this).val().includes("Self Collect")) {
				$("#deliverychoicearea").hide();
				document.getElementById("Mandatory-Option").required = false;
			}
		});
	});	
});
