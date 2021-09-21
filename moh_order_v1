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
		$("#addressarea").hide();
		$("#selfcollectdatearea").hide();
		$("#requesterarea").hide();
		$("#quarantinearea").hide();
		$("#requesternextbutton").hide();

		document.getElementById("Type-Of-Mandatory").required = true;
		
		$('#Register-For-Other-Person').change(function(){
			if($(this).val().length == 0) {
				$("#requesterarea").hide();
				$("#quarantinearea").hide();
				$("#requesternextbutton").hide();
				
				document.getElementById('Requester-Name').value = '';
				document.getElementById('Requester-Contact-Number').value = '';
     			}
	     
     			if($(this).val()=="Yes") {
				$("#requesterarea").fadeIn();
				$("#quarantinearea").hide();
				$("#requesternextbutton").fadeIn();
				
				document.getElementById("requesternextbutton").addEventListener("click", function() {
					if ( ($("#Requester-Name").val().length == 0 ) || ($("#Requester-Contact-Number").val().length == 0 ) ) {
					$("#quarantinearea").hide();
					alert("Please do not leave the required fields empty!");
					}

					if ( ($("#Requester-Name").val().length != 0) && ($("#Requester-Contact-Number").val().length != 0) ) {
						$("#requesternextbutton").hide();
						$("#quarantinearea").fadeIn();
					}
				});
     			}
		
     			if($(this).val()=="No") {
				$("#requesterarea").hide();
				$("#quarantinearea").fadeIn();
				$("#requesternextbutton").hide();
				
				document.getElementById('Requester-Name').value = '';
				document.getElementById('Requester-Contact-Number').value = '';
     			}
		});
		
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
			
			if ( $(this).val().includes("Self Collect") ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
				
				$("#addressarea").hide();
				$("#selfcollectdatearea").fadeIn();
				
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
						
						document.getElementById("submitregistrationbutton").addEventListener("click", function() {
							if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
							($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#IC-Number").val().length == 0 ) ||
							($("#Selfcollect-Date").val().length == 0) ) {
								$("#addpatientarea").hide();
								alert("Please do not leave the required fields empty!");
							}

							if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
							($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#IC-Number").val().length != 0) &&
							($("#Selfcollect-Date").val().length != 0) ) {
								$("#submitregistrationbutton").hide();
								$("#addpatientarea").fadeIn();
							}
						});
					}

					if($(this).val()=="Passport") {

						$("#icnumarea").hide();
						$("#passportnumarea").fadeIn();
						$("#submitregistrationbutton").hide();
						$("#submitregistrationpassbutton").fadeIn();

						document.getElementById('IC-Number').value = '';
						
						document.getElementById("submitregistrationpassbutton").addEventListener("click", function() {
							if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
							($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#Passport-Number").val().length == 0 ) ||
							($("#Selfcollect-Date").val().length == 0) ) {
								$("#addpatientarea").hide();
								alert("Please do not leave the required fields empty!");
							}

							if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
							($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#Passport-Number").val().length != 0) &&
							($("#Selfcollect-Date").val().length != 0) ) {
								$("#submitregistrationpassbutton").hide();
								$("#addpatientarea").fadeIn();
							}
						});
					}
				});
				
				
			}
	     
     			if ( ($(this).val().includes("Standard")) || ($(this).val().includes("Immediate")) ) {
				$("#expressnoticearea").hide();
				$("#normalarea").fadeIn();
				
				$("#addressarea").fadeIn();
				$("#selfcollectdatearea").hide();
				
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
						
						document.getElementById("submitregistrationbutton").addEventListener("click", function() {
							if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
							($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#IC-Number").val().length == 0 ) ||
							($("#District").val().length == 0) || ($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
							($("#House-Unit-Number").val().length == 0) ) {
								$("#addpatientarea").hide();
								alert("Please do not leave the required fields empty!");
							}

							if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
							($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#IC-Number").val().length != 0) &&
							($("#District").val().length != 0) && ($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
							($("#House-Unit-Number").val().length != 0) ) {
								$("#submitregistrationbutton").hide();
								$("#addpatientarea").fadeIn();
							}
						});
					}

					if($(this).val()=="Passport") {

						$("#icnumarea").hide();
						$("#passportnumarea").fadeIn();
						$("#submitregistrationbutton").hide();
						$("#submitregistrationpassbutton").fadeIn();

						document.getElementById('IC-Number').value = '';
						
						document.getElementById("submitregistrationpassbutton").addEventListener("click", function() {
							if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
							($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#Passport-Number").val().length == 0 ) ||
							($("#District").val().length == 0) || ($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
							($("#House-Unit-Number").val().length == 0) ) {
								$("#addpatientarea").hide();
								alert("Please do not leave the required fields empty!");
							}

							if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
							($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#Passport-Number").val().length != 0) &&
							($("#District").val().length != 0) && ($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
							($("#House-Unit-Number").val().length != 0) ) {
								$("#submitregistrationpassbutton").hide();
								$("#addpatientarea").fadeIn();
							}
						});
					}
				});
     			}
			
			if ( $(this).val().includes("Express") ) {
				$("#expressnoticearea").fadeIn();
				$("#normalarea").fadeIn();
				
				$("#addressarea").fadeIn();
				$("#selfcollectdatearea").hide();
				
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
						
						document.getElementById("submitregistrationbutton").addEventListener("click", function() {
							if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
							($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#IC-Number").val().length == 0 ) ||
							($("#District").val().length == 0) || ($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
							($("#House-Unit-Number").val().length == 0) ) {
								$("#addpatientarea").hide();
								alert("Please do not leave the required fields empty!");
							}

							if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
							($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#IC-Number").val().length != 0) &&
							($("#District").val().length != 0) && ($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
							($("#House-Unit-Number").val().length != 0) ) {
								$("#submitregistrationbutton").hide();
								$("#addpatientarea").fadeIn();
							}
						});
					}

					if($(this).val()=="Passport") {

						$("#icnumarea").hide();
						$("#passportnumarea").fadeIn();
						$("#submitregistrationbutton").hide();
						$("#submitregistrationpassbutton").fadeIn();

						document.getElementById('IC-Number').value = '';
						
						document.getElementById("submitregistrationpassbutton").addEventListener("click", function() {
							if ( ($("#Full-Name").val().length == 0 ) || ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Contact-Number").val().length == 0) ||
							($("#Date-of-Birth").val().length == 0 ) || ($("#IC-or-Passport").val().length == 0) || ($("#Passport-Number").val().length == 0 ) ||
							($("#District").val().length == 0) || ($("#Kampung").val().length == 0) || ($("#Jalan-Location").val().length == 0) ||
							($("#House-Unit-Number").val().length == 0) ) {
								$("#addpatientarea").hide();
								alert("Please do not leave the required fields empty!");
							}

							if ( ($("#Full-Name").val().length != 0) && ($("#Bru-HIMS-Number").val().length != 0) && ($("#Contact-Number").val().length != 0) &&
							($("#Date-of-Birth").val().length != 0) && ($("#IC-or-Passport").val().length != 0) && ($("#Passport-Number").val().length != 0) &&
							($("#District").val().length != 0) && ($("#Kampung").val().length != 0) && ($("#Jalan-Location").val().length != 0) &&
							($("#House-Unit-Number").val().length != 0) ) {
								$("#submitregistrationpassbutton").hide();
								$("#addpatientarea").fadeIn();
							}
						});
					}
				});
			}
		});
		
		$('#Additional-Patient').change(function(){
			
			if($(this).val().length == 0) {

				$("#addpatientarea1").hide();
				$("#patientcontrolarea").hide();
				$("#completeaddpatient").hide();
				$("#otherarea").hide();
				$("#addpatientbutton").hide();
      			}
	     
      			if($(this).val()=="Yes") {

				$("#addpatientarea1").fadeIn();
				$("#patientcontrolarea").fadeIn();
				$("#completeaddpatient").fadeIn();
				$("#otherarea").hide();
				$("#addpatientbutton").fadeIn();
				
				var additional_patient = document.getElementById('addpatientarea2');
				countadd = 1;
				
				document.getElementById("addpatientbutton").addEventListener("click", function() {
					
					let inputElement7 = document.getElementById('Additional-Bru-HIMS-Number-2');
					  let inputElement8 = document.getElementById('Additional-Bru-HIMS-Number-3');
					  let inputElement9 = document.getElementById('Additional-Bru-HIMS-Number-4');
					  let inputElement10 = document.getElementById('Additional-Bru-HIMS-Number-5');
					  let inputElement11 = document.getElementById('Additional-Bru-HIMS-Number-6');
					  let inputElement12 = document.getElementById('Additional-Bru-HIMS-Number-7');
					  let inputElement13 = document.getElementById('Additional-Bru-HIMS-Number-8');
					  let inputElement14 = document.getElementById('Additional-Bru-HIMS-Number-9');
					  let inputElement15 = document.getElementById('Additional-Bru-HIMS-Number-10');
					
					let inputElement17 = document.getElementById('Additional-IC-2');
  let inputElement18 = document.getElementById('Additional-IC-3');
  let inputElement19 = document.getElementById('Additional-IC-4');
  let inputElement20 = document.getElementById('Additional-IC-5');
  let inputElement21 = document.getElementById('Additional-IC-6');
  let inputElement22 = document.getElementById('Additional-IC-7');
  let inputElement23 = document.getElementById('Additional-IC-8');
  let inputElement24 = document.getElementById('Additional-IC-9');
  let inputElement25 = document.getElementById('Additional-IC-10');
					
					var patternMask = IMask(inputElement7, {
					  mask: '{BN}00000000',
					});

					var patternMask = IMask(inputElement8, {
					  mask: '{BN}00000000',
					});

					var patternMask = IMask(inputElement9, {
					  mask: '{BN}00000000',
					});

					var patternMask = IMask(inputElement10, {
					  mask: '{BN}00000000',
					});

					var patternMask = IMask(inputElement11, {
					  mask: '{BN}00000000',
					});

					var patternMask = IMask(inputElement12, {
					  mask: '{BN}00000000',
					});

					var patternMask = IMask(inputElement13, {
					  mask: '{BN}00000000',
					});

					var patternMask = IMask(inputElement14, {
					  mask: '{BN}00000000',
					});

					var patternMask = IMask(inputElement15, {
					  mask: '{BN}00000000',
					});
					
					var patternMask = IMask(inputElement16, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement17, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement18, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement19, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement20, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement21, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement22, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement23, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement24, {
					  mask: '00000000',
					});

					var patternMask = IMask(inputElement25, {
					  mask: '00000000',
					});
					
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
					newField.setAttribute('class','text-field w-input');
					newField.setAttribute('minlength','10');
					newField.setAttribute('name','Additional Bru HIMS Number ' + (countadd+1));
					newField.setAttribute('data-name','Bru HIMS Number ' + (countadd+1));
					newField.setAttribute('id','Additional-Bru-HIMS-Number-'+ (countadd+1));
					newField.setAttribute('placeholder','BNxxxxxxxx');
					newField.required = true;
					document.getElementById("bruhimsnumarea"+ (countadd+1)).appendChild(newField);
					
					var newDiv = document.createElement("div");
					newDiv.setAttribute("id","addcontactnumarea"+ (countadd+1))
					additional_patient.appendChild(newDiv);

					var newLabel = document.createElement('label');
					newLabel.innerHTML = "Patient Contact Number:*";
					document.getElementById("addcontactnumarea"+ (countadd+1)).appendChild(newLabel);

					var newField = document.createElement('input');
					newField.setAttribute('type','text');
					newField.setAttribute('class','text-field w-input');
					newField.setAttribute('name','Additional Contact Number ' + (countadd+1));
					newField.setAttribute('data-name','Additional Contact Number ' + (countadd+1));
					newField.setAttribute('id','Additional-Contact-Number-'+ (countadd+1));
					newField.required = true;
					document.getElementById("addcontactnumarea"+ (countadd+1)).appendChild(newField);

					var newDiv = document.createElement("div");
					newDiv.setAttribute("id","addicnumarea"+ (countadd+1))
					additional_patient.appendChild(newDiv);

					var newLabel = document.createElement('label');
					newLabel.innerHTML = "IC Number:*";
					document.getElementById("addicnumarea"+ (countadd+1)).appendChild(newLabel);

					var newField = document.createElement('input');
					newField.setAttribute('type','text');
					newField.setAttribute('class','text-field w-input');
					newField.setAttribute('name','Additional IC ' + (countadd+1));
					newField.setAttribute('data-name','Additional IC ' + (countadd+1));
					newField.setAttribute('id','Additional-IC-'+ (countadd+1));
					newField.required = true;
					document.getElementById("addicnumarea"+ (countadd+1)).appendChild(newField);

					countadd = countadd + 1;
					
					$("#removepatientbutton").fadeIn();
				});
				
				document.getElementById("removepatientbutton").addEventListener("click", function() {
					var div_tags = additional_patient.getElementsByTagName('div');
					var heading_tags = additional_patient.getElementsByTagName('h4');
					if(div_tags.length != 0) {
						additional_patient.removeChild(div_tags[(div_tags.length) - 1]);
						additional_patient.removeChild(div_tags[(div_tags.length) - 1]);
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
					$("#otherarea").hide();
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
