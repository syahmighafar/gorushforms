document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
		
		$("#registrationarea").hide();
		$("#uploadarea").hide();
		$("#confirmationarea").hide();
		$("#freelancearea").hide();
		$("#fulltimearea").hide();
		$("#parttimearea").hide();
		$("#daysavailablearea").hide();
		$("#driverlicensearea").hide();
		$("#employementarea").hide();
	
		$("#dispatcherareanotice").hide();
		
		$('#Position-Applied').change(function(){
			
			if($(this).val().length == 0) {
				$("#dispatcherareanotice").hide();
				$("#freelancearea").hide();
				$("#fulltimearea").hide();
				$("#parttimearea").hide();
				$("#driverlicensearea").hide();
				$("#employementarea").hide();
     			}
			
     			if( ($(this).val()=="Accountant") ) {
				$("#dispatcherareanotice").hide();
				$("#freelancearea").hide();
				$("#fulltimearea").fadeIn();
				$("#parttimearea").hide();				
				$("#driverlicensearea").hide();
				$("#employementarea").fadeIn();
     			}
	     
     			if( ($(this).val()=="Field Courier Logistic Support (Dispatchers - Full Time)") ) {
				$("#dispatcherareanotice").fadeIn();
				$("#freelancearea").fadeIn();
				$("#fulltimearea").fadeIn();
				$("#parttimearea").hide();				
				$("#driverlicensearea").show();
				$("#employementarea").fadeIn();
     			}
			
     			if(($(this).val()=="Operation Officer") || ($(this).val()=="Warehouse Assistant") ) {
				$("#dispatcherareanotice").hide();
				$("#freelancearea").fadeIn();
				$("#fulltimearea").fadeIn();
				$("#parttimearea").hide();
				$("#driverlicensearea").hide();
				$("#employementarea").fadeIn();
     			}
		});
		
		$('#Employment').change(function(){
			if($(this).val().length == 0) {
				$("#daysavailablearea").hide();
     			}
	     
     			if($(this).val().length != 0) {
				$("#daysavailablearea").fadeIn();
     			}
		});
		
		document.getElementById("daysavailablenextbutton").addEventListener("click", function() {
  			if (($("#Days-Available").val().length == 0)) {
				$("#registrationarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Days-Available").val().length != 0)) {
				$("#registrationarea").fadeIn();
				$("#daysavailablenextbutton").hide();
			}
		});
		
		document.getElementById("registrationnextbutton").addEventListener("click", function() {
  			if (($("#Full-Name").val().length == 0) || ($("#Email-Address").val().length == 0) || ($("#Date-of-Birth").val().length == 0) ||
			   ($("#IC-Number").val().length == 0) || ($("#Contact-Number").val().length == 0) || ($("#Home-Address").val().length == 0)) {
				$("#uploadarea").hide();
				$("#confirmationarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Email-Address").val().length != 0) && ($("#Date-of-Birth").val().length != 0) &&
			   ($("#IC-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) && ($("#Home-Address").val().length != 0)) {
				$("#uploadarea").fadeIn();
				$("#confirmationarea").fadeIn();
				$("#registrationnextbutton").hide();
			}
		});
	});	
});
