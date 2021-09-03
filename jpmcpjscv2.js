document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
	
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#jpmcpjscarea").hide();
		$("#expressnoticearea").hide();
		$("#normalarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		$("#confirmationarea").hide();

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
		
		$('#Type-Of-Delivery').change(function(){
			
			if ( $(this).val().length == 0 ) {
				$("#expressnoticearea").hide();
				$("#jpmcpjscarea").hide();
				
     			}
			
			if ( ( $(this).val().includes("Self Collect") ) || ( $(this).val().includes("Standard") ) ) {
				$("#expressnoticearea").hide();
				$("#jpmcpjscarea").fadeIn();
			}

			if ( $(this).val().includes("Express") ) {
				$("#expressnoticearea").fadeIn();
				$("#jpmcpjscarea").fadeIn();
			}
		});
		
		$('#JPMC-or-PJSC').change(function(){
			
			if($(this).val().length == 0) {
	      			$("#Patient-Number").attr("minlength", "0");
				$("#Patient-Number").attr("maxlength", "0");
        			$("#Patient-Number").attr("size", "0");
				$("#normalarea").hide();
      			}
	     
      			if($(this).val()=="JPMC") {
        			$("#Patient-Number").attr("minlength", "8");
				$("#Patient-Number").attr("maxlength", "8");
        			$("#Patient-Number").attr("size", "8");
				$("#normalarea").fadeIn();
      			}
      		
			if($(this).val()=="PJSC") {
	      			$("#Patient-Number").attr("minlength", "6");
				$("#Patient-Number").attr("maxlength", "6");
        			$("#Patient-Number").attr("size", "6");
				$("#normalarea").fadeIn();
      			}
    		});
		
		document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  			if (($("#Full-Name").val().length == 0 ) || ($("#Patient-Number").val().length == 0 ) ||  ($("#Contact-Number").val().length == 0) ||
			($("#Delivery-Address").val().length == 0) || ($("#Postal-Code").val().length == 0) ) {
				$("#otherarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Patient-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
			($("#Delivery-Address").val().length != 0) && ($("#Postal-Code").val().length != 0) ) {
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
