document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
    
		$("#uploadbruhealtharea").hide();
		$("#selecthcarea").hide();
		$("#bmhcarea").hide();
		$("#tutonghcarea").hide();
		$("#belaithcarea").hide();
		$("#temburonghcarea").hide();
		$("#deliverymethodarea").hide();
		$("#selfcollectarea").hide();
		$("#selfcollectnextbutton").hide();
		$("#paymentmethodarea").hide();
		$("#remarkarea").hide();
		$("#asknotifyarea").hide();
		$("#notifyoftenarea").hide();
		$("#submitbutton").hide();

		$('input[name=radioQO]').change(function(){
			if ($(this).val().length == 0) {
				$("#uploadbruhealtharea").hide();
				$("#selecthcarea").hide();
			}

			if ( ($(this).val()=="No") || ($(this).val()=="Yes") ) {
				$("#uploadbruhealtharea").fadeIn();
				$("#selecthcarea").fadeIn();
			}
		});
		
		$('input[name=radioDistrict]').change(function(){
			if ($(this).val().length == 0) {
				$("#bmhcarea").hide();
				$("#tutonghcarea").hide();
				$("#belaithcarea").hide();
				$("#temburonghcarea").hide();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}

			if ($(this).val()=="Brunei Muara") {
				$("#bmhcarea").fadeIn();
				$("#tutonghcarea").hide();
				$("#belaithcarea").hide();
				$("#temburonghcarea").hide();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}
			
			if ($(this).val()=="Tutong") {
				$("#bmhcarea").hide();
				$("#tutonghcarea").fadeIn();
				$("#belaithcarea").hide();
				$("#temburonghcarea").hide();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}
			
			if ($(this).val()=="Belait") {
				$("#bmhcarea").hide();
				$("#tutonghcarea").hide();
				$("#belaithcarea").fadeIn();
				$("#temburonghcarea").hide();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}
			
			if ($(this).val()=="Temburong") {
				$("#bmhcarea").hide();
				$("#tutonghcarea").hide();
				$("#belaithcarea").hide();
				$("#temburonghcarea").fadeIn();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}
		});
		
		$('#BNHC').change(function(){
			if($(this).val().length == 0) {
				$("#deliverymethodarea").hide();
     			}
	     
     			if($(this).val().length != 0) {
				$("#deliverymethodarea").fadeIn();
     			}
		});
		
		$('#TUHC').change(function(){
			if($(this).val().length == 0) {
				$("#deliverymethodarea").hide();
     			}
	     
     			if($(this).val().length != 0) {
				$("#deliverymethodarea").fadeIn();
     			}
		});
		
		$('#BHC').change(function(){
			if($(this).val().length == 0) {
				$("#deliverymethodarea").hide();
     			}
	     
     			if($(this).val().length != 0) {
				$("#deliverymethodarea").fadeIn();
     			}
		});
		
		$('#TEHC').change(function(){
			if($(this).val().length == 0) {
				$("#deliverymethodarea").hide();
     			}
	     
     			if($(this).val().length != 0) {
				$("#deliverymethodarea").fadeIn();
     			}
		});
		
		$('input[name=radioTOD]').change(function(){
			if ($(this).val().length == 0) {
				$("#selfcollectarea").hide();
				$("#paymentmethodarea").hide();
				$("#selfcollectnextbutton").hide();
				
				document.getElementById('scDate').value = '';
			}

			if ( ($(this).val()=="Standard") || ($(this).val()=="Express") || ($(this).val()=="Immediate") ) {
				$("#selfcollectarea").hide();
				$("#paymentmethodarea").fadeIn();
				$("#selfcollectnextbutton").hide();
				
				document.getElementById('scDate').value = '';
			}
			
			if ($(this).val()=="Self Collect") {
				$("#selfcollectarea").fadeIn();
				$("#paymentmethodarea").hide();
				$("#selfcollectnextbutton").fadeIn();
				
				document.getElementById('scDate').value = '';
			}
		});
		
		document.getElementById("selfcollectnextbutton").addEventListener("click", function() {
			if ($("#scDate").val().length == 0 ) {
				$("#paymentmethodarea").hide();
				alert("Please do not leave the required fields empty!");
			}

			if ($("#scDate").val().length != 0) {
				$("#selfcollectnextbutton").hide();
				$("#paymentmethodarea").fadeIn();
			}
		});
		
		$('input[name=radioPAY]').change(function(){
			if ($(this).val().length == 0) {
				$("#asknotifyarea").hide();
			}

			if ( ($(this).val()=="Cash") || ($(this).val()=="Bank Transfer") ) {
				$("#asknotifyarea").fadeIn();
			}
		});
		
		$('input[name=radioNOTI]').change(function(){
			if ($(this).val().length == 0) {
				$("#notifyoftenarea").hide();
				$("#remarkarea").hide();
				$("#submitbutton").hide();
				
				$('input[name=radioOFTEN]').prop('checked', false);
			}

			if ($(this).val()=="Yes") {
				$("#notifyoftenarea").fadeIn();
				$("#remarkarea").hide();
				$("#submitbutton").hide();
				
				$('input[name=radioOFTEN]').prop('checked', false);
			}
			
			if ($(this).val()=="No") {
				$("#notifyoftenarea").hide();
				$("#remarkarea").fadeIn();
				$("#submitbutton").fadeIn();
				
				$('input[name=radioOFTEN]').prop('checked', false);
			}
		});
		
		$('input[name=radioOFTEN]').change(function(){
			if ($(this).val().length == 0) {
				$("#remarkarea").hide();
				$("#submitbutton").hide();
			}

			if ( ($(this).val().length != 0) ) {
				$("#remarkarea").fadeIn();
				$("#submitbutton").fadeIn();
			}
		});
	});		
});
