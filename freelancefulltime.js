document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
		
		$("#registrationarea").hide();
		$("#uploadarea").hide();
		$("#confirmationarea").hide();
		$("#employementarea1").hide();
		$("#employementarea2").hide();
		$("#daysavailablearea").hide();
	
		$("#dispatcherareanotice").hide();

     		$('#Position-Applied').change(function(){
			
			if($(this).val().length == 0) {
				$("#dispatcherareanotice").hide();
				$("#employementarea1").hide();
				$("#employementarea2").hide();
     			}
	     
     			if($(this).val()=="Dispatcher") {
				$("#dispatcherareanotice").fadeIn();
				$("#employementarea1").fadeIn();
				$("#employementarea2").hide();
     			}
			
     			if(($(this).val()=="Customer Services") || ($(this).val()=="Warehouse Operations") || ($(this).val()=="Back Office Operation") ) {
				$("#dispatcherareanotice").hide();
				$("#employementarea1").hide();
				$("#employementarea2").fadeIn();
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
		
		$('#Employment-2').change(function(){
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
				$("#bookingbutton").hide();
			}
		});
		
		document.getElementById("registrationnextbutton").addEventListener("click", function() {
  			if (($("#Full-Name").val().length == 0) || ($("#Email-Address").val().length == 0) || ($("#Date-of-Birth").val().length == 0) ||
			   ($("#IC-Number").val().length == 0) || ($("#Contact-Number").val().length == 0) || ($("#Home-Address").val().length == 0)) {
				$("#uploadarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Email-Address").val().length != 0) && ($("#Date-of-Birth").val().length != 0) &&
			   ($("#IC-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) && ($("#Home-Address").val().length != 0)) {
				$("#uploadarea").fadeIn();
				$("#registrationnextbutton").hide();
			}
		});
		
		document.getElementById("uploadnextbutton").addEventListener("click", function() {
  			if (($("#iccardupload").val().length == 0) || ($("#drivinglicenseupload").val().length == 0) || ($("#cvupload").val().length == 0)) {
				$("#confirmationarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#iccardupload").val().length != 0) && ($("#drivinglicenseupload").val().length != 0) && ($("#cvupload").val().length != 0)) {
				$("#confirmationarea").fadeIn();
				$("#uploadnextbutton").hide();
			}
		});
	});	
});
