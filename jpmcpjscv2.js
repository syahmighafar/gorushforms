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
		$("#addressarea").hide();
		$("#selfcollectdatearea").hide();

     		$('#Currently-in-Quarantine').change(function(){
			
			if($(this).val().length == 0) {
				$("#uploadarea").hide();
				$("#jpmcpjscarea").hide();
				
     			}
	     
     			if($(this).val()=="Yes") {
				$("#uploadarea").fadeIn();
				$("#jpmcpjscarea").fadeIn();
				
     			}
		
     			if($(this).val()=="No") {
				$("#uploadarea").hide();
				$("#jpmcpjscarea").fadeIn();
     			}
		});
		
		$('#JPMC-or-PJSC').change(function(){
			
			if($(this).val().length == 0) {
	      			$("#Patient-Number").attr("minlength", "0");
				$("#Patient-Number").attr("maxlength", "0");
        			$("#Patient-Number").attr("size", "0");
				$("#deliverytypearea").hide();
      			}
	     
      			if($(this).val()=="JPMC") {
        			$("#Patient-Number").attr("minlength", "8");
				$("#Patient-Number").attr("maxlength", "8");
        			$("#Patient-Number").attr("size", "8");
				$("#deliverytypearea").fadeIn();
      			}
      		
			if($(this).val()=="PJSC") {
	      			$("#Patient-Number").attr("minlength", "6");
				$("#Patient-Number").attr("maxlength", "6");
        			$("#Patient-Number").attr("size", "6");
				$("#deliverytypearea").fadeIn();
      			}
    		});
		
		$('#Type-Of-Delivery').change(function(){
			
			if ( $(this).val().length == 0 ) {
				$("#expressnoticearea").hide();
				$("#normalarea").hide();
				$("#addressarea").hide();
				$("#selfcollectdatearea").hide();
				
     			}
			
			if ( ($(this).val().includes("Self Collect")) ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
				$("#addressarea").hide();
				$("#selfcollectdatearea").fadeIn();
				
				document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  					if ( ($("#Full-Name").val().length == 0 ) || ($("#Patient-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
					($("#Selfcollect-Date").val().length == 0) ) {
						$("#otherarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#Full-Name").val().length != 0) && ($("#Patient-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
					($("#Selfcollect-Date").val().length != 0) ) {
						$("#submitregistrationbutton").hide();
						$("#otherarea").fadeIn();
					}
				});
			}
			
			if ( ($(this).val().includes("Standard")) ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
				$("#addressarea").fadeIn();
				$("#selfcollectdatearea").hide();
				
				document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  					if ( ($("#Full-Name").val().length == 0 ) || ($("#Patient-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
					($("#District").val().length == 0) || ($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
					($("#Simpang-Number").val().length == 0) || ($("#House-Unit-Number").val().length == 0) ) {
						$("#otherarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#Full-Name").val().length != 0) && ($("#Patient-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
					($("#District").val().length != 0) && ($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
					($("#Simpang-Number").val().length != 0) && ($("#House-Unit-Number").val().length != 0) ) {
						$("#submitregistrationbutton").hide();
						$("#otherarea").fadeIn();
					}
				});
			}

			if ( ($(this).val().includes("Express")) ) {
				$("#expressnoticearea").fadeIn();
				$("#normalarea").fadeIn();
				$("#addressarea").fadeIn();
				$("#selfcollectdatearea").hide();
				
				document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  					if ( ($("#Full-Name").val().length == 0 ) || ($("#Patient-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
					($("#District").val().length == 0) || ($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
					($("#Simpang-Number").val().length == 0) || ($("#House-Unit-Number").val().length == 0) ) {
						$("#otherarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#Full-Name").val().length != 0) && ($("#Patient-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
					($("#District").val().length != 0) && ($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
					($("#Simpang-Number").val().length != 0) && ($("#House-Unit-Number").val().length != 0) ) {
						$("#submitregistrationbutton").hide();
						$("#otherarea").fadeIn();
					}
				});
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
