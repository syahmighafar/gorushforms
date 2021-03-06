document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
		
		$("#uploadarea").hide();
		$("#deliverytypearea").hide();
		$("#normalarea").hide();
		$("#otherarea").hide();
		$("#paymentnoticearea").hide();
		$("#confirmationarea").hide();
		$("#submitregistrationbutton").hide();
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
					if ( ($("#Requester-Name").val().length == 0 ) || ($("#Requester-Contact-Number").val().length == 0 )
					   || ($("#Patient-Relationship").val().length == 0 )) {
					$("#quarantinearea").hide();
					alert("Please do not leave the required fields empty!");
					}

					if ( ($("#Requester-Name").val().length != 0) && ($("#Requester-Contact-Number").val().length != 0)
					   && ($("#Patient-Relationship").val().length != 0)) {
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
				$("#normalarea").hide();
				
				$("#addressarea").hide();
				$("#selfcollectdatearea").hide();
     			}
			
			if ( $(this).val().includes("Self Collect") ) {
				$("#normalarea").fadeIn();
				
				$("#addressarea").hide();
				$("#selfcollectdatearea").fadeIn();
				
				$("#submitregistrationbutton").fadeIn();
				
				document.getElementById("submitregistrationbutton").addEventListener("click", function() {
					if ( ($("#Bru-HIMS-Number").val().length == 0 ) || ($("#Selfcollect-Date").val().length == 0) ) {
						$("#addpatientarea").hide();
						alert("Please do not leave the required fields empty!");
					}

					if ( ($("#Bru-HIMS-Number").val().length != 0) && ($("#Selfcollect-Date").val().length != 0) ) {
						$("#submitregistrationbutton").hide();
						$("#addpatientarea").fadeIn();
					}
				});	
			}
	     
     			if ( ($(this).val().includes("Standard")) || ($(this).val().includes("Immediate")) || ($(this).val().includes("Express")) ) {
				$("#normalarea").fadeIn();
				
				$("#addressarea").fadeIn();
				$("#selfcollectdatearea").hide();
				
				$("#submitregistrationbutton").fadeIn();
				
				document.getElementById("submitregistrationbutton").addEventListener("click", function() {
					if ( ($("#Bru-HIMS-Number").val().length == 0 ) ) {
						$("#addpatientarea").hide();
						alert("Please do not leave the required fields empty!");
					}

					if ( ($("#Bru-HIMS-Number").val().length != 0) ) {
						$("#submitregistrationbutton").hide();
						$("#addpatientarea").fadeIn();
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
