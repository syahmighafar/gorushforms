document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
		
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
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
				$("#addressarea").hide();
				$("#selfcollectdatearea").hide();
     			}
			
     			if ( ($(this).val().includes("Self Collect")) ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
				$("#addressarea").hide();
				$("#selfcollectdatearea").fadeIn();
				
				document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  					if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Selfcollect-Date").val().length == 0) ) {
						$("#bruphonechoicearea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Selfcollect-Date").val().length != 0) ) {
						$("#submitregistrationbutton").hide();
						$("#bruphonechoicearea").fadeIn();
					}
				});
     			}
			
			if ( ($(this).val().includes("Standard")) || ($(this).val().includes("Immediate")) ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
				$("#addressarea").fadeIn();
				$("#selfcollectdatearea").hide();
				
				document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  					if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#District").val().length == 0) ||
					($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
					($("#Simpang-Number").val().length == 0) || ($("#House-Unit-Number").val().length == 0) ) {
						$("#bruphonechoicearea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#District").val().length != 0) &&
					($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
					($("#Simpang-Number").val().length != 0) && ($("#House-Unit-Number").val().length != 0) ) {
						$("#submitregistrationbutton").hide();
						$("#bruphonechoicearea").fadeIn();
					}
				});
     			}
			
			if ( $(this).val().includes("Express") ) {
				$("#expressnoticearea").fadeIn();
				$("#normalarea").fadeIn();
				$("#addressarea").fadeIn();
				$("#selfcollectdatearea").hide();
				
				document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  					if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#District").val().length == 0) ||
					($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
					($("#Simpang-Number").val().length == 0) || ($("#House-Unit-Number").val().length == 0) ) {
						$("#bruphonechoicearea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#District").val().length != 0) &&
					($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
					($("#Simpang-Number").val().length != 0) && ($("#House-Unit-Number").val().length != 0) ) {
						$("#submitregistrationbutton").hide();
						$("#bruphonechoicearea").fadeIn();
					}
				});
			}
		});
		
		$('#Using-Brunei-Phone-Number').change(function(){
			if($(this).val().length == 0) {
				$("#brucontactnumarea").hide();
				$("#nonbrucontactnumarea").hide();
				$("#addcontactnumarea").hide();
				$("#submitphonebutton").hide();
     			}
	     
     			if($(this).val()=="Yes") {
				$("#brucontactnumarea").fadeIn();
				$("#nonbrucontactnumarea").hide();
				$("#addcontactnumarea").fadeIn();
				$("#submitphonebutton").fadeIn();
				
				document.getElementById("submitphonebutton").addEventListener("click", function() {
  					if ( ($("#brucontactnumarea").val().length == 0 ) || ($("#addcontactnumarea").val().length == 0 ) ) {
						$("#otherarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#brucontactnumarea").val().length != 0) && ($("#addcontactnumarea").val().length != 0) ) {
						$("#submitphonebutton").hide();
						$("#otherarea").fadeIn();
					}
				});
     			}
			
     			if($(this).val()=="No") {
				$("#brucontactnumarea").hide();
				$("#nonbrucontactnumarea").fadeIn();
				$("#addcontactnumarea").fadeIn();
				$("#submitphonebutton").fadeIn();
				
				document.getElementById("submitphonebutton").addEventListener("click", function() {
  					if ( ($("#nonbrucontactnumarea").val().length == 0 ) || ($("#addcontactnumarea").val().length == 0 ) ) {
						$("#otherarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if ( ($("#nonbrucontactnumarea").val().length != 0) && ($("#addcontactnumarea").val().length != 0) ) {
						$("#submitphonebutton").hide();
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
