document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
		
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#expressnoticearea").hide();
		$("#normalarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		$("#confirmationarea").hide();
		$("#icnumarea").hide();
		$("#passportnumarea").hide();
		$("#submitregistrationbutton").hide();
		$("#submitregistrationpassbutton").hide();
		$("#addpatientarea").hide();
		$("#addpatientarea1").hide();
		$("#patientcontrolarea").hide();
		$("#completeaddpatient").hide();
		$("#addpatientbutton").hide();
		$("#removepatientbutton").hide();

		document.getElementById("Type-Of-Mandatory").required = true;
		
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
     			}
			
			if ( $(this).val().includes("Self Collect") ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
			}
	     
     			if ( ($(this).val().includes("Standard")) || ($(this).val().includes("Immediate")) ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
     			}
			
			if ( $(this).val().includes("Express") ) {
				$("#expressnoticearea").fadeIn();
				$("#normalarea").fadeIn();
			}
		});
		
		$('#IC-or-Passport').change(function(){
			
			if($(this).val().length == 0) {

				$("#icnumarea").hide();
				$("#passportnumarea").hide();
				$("#submitregistrationbutton").hide();
				$("#submitregistrationpassbutton").hide();
				
				document.getElementById('IC-Number').value = '';
				document.getElementById('Passport-Number').value = '';
      			}
	     
      			if($(this).val()=="IC") {

				$("#icnumarea").fadeIn();
				$("#passportnumarea").hide();
				$("#submitregistrationbutton").fadeIn();
				$("#submitregistrationpassbutton").hide();
				
				document.getElementById('Passport-Number').value = '';
      			}
      		
			if($(this).val()=="Passport") {

				$("#icnumarea").hide();
				$("#passportnumarea").fadeIn();
				$("#submitregistrationbutton").hide();
				$("#submitregistrationpassbutton").fadeIn();
				
				document.getElementById('IC-Number').value = '';
      			}
    		});
		
		document.getElementById("submitregistrationbutton").addEventListener("click", function() {
  			if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
			($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#IC-Number").val().length == 0 ) ||
			($("#Delivery-Address").val().length == 0) || ($("#Postal-Code").val().length == 0) ) {
				$("#addpatientarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
			($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#IC-Number").val().length != 0) &&
			($("#Delivery-Address").val().length != 0) && ($("#Postal-Code").val().length != 0)) {
				$("#submitregistrationbutton").hide();
				$("#addpatientarea").fadeIn();
			}
		});
		
		document.getElementById("submitregistrationpassbutton").addEventListener("click", function() {
  			if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
			($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#Passport-Number").val().length == 0 ) ||
			($("#Delivery-Address").val().length == 0) || ($("#Postal-Code").val().length == 0) ) {
				$("#addpatientarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
			($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#Passport-Number").val().length != 0) &&
			($("#Delivery-Address").val().length != 0) && ($("#Postal-Code").val().length != 0)) {
				$("#submitregistrationpassbutton").hide();
				$("#addpatientarea").fadeIn();
			}
		});
		
		$('#Additional-Patient').change(function(){
			
			if($(this).val().length == 0) {

				$("#addpatientarea1").hide();
				$("#patientcontrolarea").hide();
				$("#completeaddpatient").hide();
				$("#otherarea").hide();
				$("#addpatientbutton").hide();
				
				document.getElementById('Additional-Full-Name').value = '';
				document.getElementById('Additional-Bru-HIMS-Number').value = '';
      			}
	     
      			if($(this).val()=="Yes") {

				$("#addpatientarea1").fadeIn();
				$("#patientcontrolarea").fadeIn();
				$("#completeaddpatient").fadeIn();
				$("#otherarea").hide();
				$("#addpatientbutton").fadeIn();
				
				document.getElementById("Additional-Full-Name").required = true;
				document.getElementById("Additional-Bru-HIMS-Number").required = true;
				
				var additional_patient = document.getElementById('addpatientarea2');
				countadd = 1;
				
				document.getElementById("addpatientbutton").addEventListener("click", function() {
					var newheading = document.createElement('h4');
					newheading.innerHTML = "Additional Patient " + (countadd+1);
					additional_patient.appendChild(newheading);

					var newDiv = document.createElement("div");
					newDiv.setAttribute("id","fullnamearea"+ (countadd+1))
					additional_patient.appendChild(newDiv);

					var newLabel = document.createElement('label');
					newLabel.innerHTML = "Full Name:";
					document.getElementById("fullnamearea"+ (countadd+1)).appendChild(newLabel);

					var newField = document.createElement('input');
					newField.setAttribute('type','text');
					newField.setAttribute('class','text-field w-input');
					newField.setAttribute('maxlength','256');
					newField.setAttribute('name','Full Name ' + (countadd+1));
					newField.setAttribute('data-name','Full Name ' + (countadd+1));
					newField.setAttribute('id','Additional-Full-Name-'+ (countadd+1));
					newField.setAttribute('placeholder','Full Name');
					newField.required = true;
					document.getElementById("fullnamearea"+ (countadd+1)).appendChild(newField);

					var newDiv = document.createElement("div");
					newDiv.setAttribute("id","bruhimsnumarea"+ (countadd+1))
					additional_patient.appendChild(newDiv);

					var newLabel = document.createElement('label');
					newLabel.innerHTML = "Bru-HIMS Number:";
					document.getElementById("bruhimsnumarea"+ (countadd+1)).appendChild(newLabel);

					var newField = document.createElement('input');
					newField.setAttribute('type','text');
					newField.setAttribute('class','Bru HIMS Number');
					newField.setAttribute('minlength','10');
					newField.setAttribute('name','Additional Bru HIMS Number ' + (countadd+1));
					newField.setAttribute('data-name','Bru HIMS Number ' + (countadd+1));
					newField.setAttribute('id','Additional-Bru-HIMS-Number-'+ (countadd+1));
					newField.setAttribute('placeholder','BNxxxxxxxx');
					newField.required = true;
					document.getElementById("bruhimsnumarea"+ (countadd+1)).appendChild(newField);

					countadd = countadd + 1;
					
					$("#removepatientbutton").fadeIn();
				});
				
				document.getElementById("removepatientbutton").addEventListener("click", function() {
					var div_tags = additional_patient.getElementsByTagName('div');
					var heading_tags = additional_patient.getElementsByTagName('h4');
					if(div_tags.length != 0) {
						additional_patient.removeChild(div_tags[(div_tags.length) - 1]);
						additional_patient.removeChild(div_tags[(div_tags.length) - 1]);
						additional_patient.removeChild(heading_tags[(heading_tags.length) - 1]);
						countadd = countadd - 1;
						
						if(div_tags.length == 0) {
							$("#removepatientbutton").hide();
						}
					}
				});
				
				document.getElementById("completeaddpatient").addEventListener("click", function() {
					if ( ($("#Additional-Full-Name-1").val().length == 0 ) || ($("#Additional-Bru-HIMS-Number-1").val().length == 0 ) ) {
					$("#addpatientarea").hide();
					alert("Please do not leave the required fields empty!");
					}

					if ( ($("#Additional-Full-Name-1").val().length != 0) && ($("#Additional-Bru-HIMS-Number-1").val().length != 0) ) {
						$("#completeaddpatient").hide();
						$("#otherarea").fadeIn();
					}
				});
			}
      		
			if($(this).val()=="No") {

				$("#addpatientarea1").hide();
				$("#patientcontrolarea").hide();
				$("#completeaddpatient").hide();
				$("#otherarea").fadeIn();
				$("#addpatientbutton").hide();
				
				document.getElementById('Additional-Full-Name').value = '';
				document.getElementById('Additional-Bru-HIMS-Number').value = '';
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
