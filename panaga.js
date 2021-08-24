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
		
		$('#Type-of-Mandatory').change(function(){
	     
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
