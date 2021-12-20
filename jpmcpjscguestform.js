document.addEventListener("DOMContentLoaded", function (event) {
	$(document).ready(function () {
		var countAgree = 0;
		var split = 1;

		$("#requesterarea").hide();
		$("#requesternextbutton").hide();

		$("#quarantineArea").hide();

		$("#selecthcarea").hide();
		$("#jpmcpjscInfo").hide();

		$("#selectdistrictarea").hide();

		$("#stdtodbm").hide();
		$("#stdtodtb").hide();
		$("#stdtodtu").hide();
		$("#expressArea").hide();

		$("#stdTB").hide();
		$("#stdTU").hide();

		$("#deliverymethodarea").hide();

		$("#immediateArea").hide();

		$("#pricedurationarea").hide();
		$("#stdselfPrice").hide();
		$("#expPrice").hide();
		$("#immPrice").hide();
		$("#stdDuration").hide();
		$("#expDuration").hide();
		$("#immDuration").hide();
		$("#stdexpselfMessage").hide();
		$("#immMessage").hide();

		$("#mohnormalregArea").hide();
		$("#icarea").hide();
		$("#passportarea").hide();

		$("#addressArea").hide();
		$("#addressnextbutton").hide();

		$("#selfcollectarea").hide();
		$("#selfcollectnextbutton").hide();

		$("#paymentmethodarea").hide();
		$("#paymentnoticearea").hide();

		$("#remarkarea").hide();

		$("#agreementArea").hide();
		$("#stdAgree").hide();
		$("#expAgree").hide();
		$("#immAgree").hide();

		$("#pleasewait").hide();

		$("#submitbutton").hide();

		$('input[name=Requester]').change(function () {
			if ($(this).val().length == 0) {
				$("#requesterarea").hide();
				$("#quarantineArea").hide();
				$("#requesternextbutton").hide();

				document.getElementById('Requester-Name').value = '';
				document.getElementById('Requester-Contact-Number').value = '';
				document.getElementById('Relationship-to-Patient').value = '';
			}

			if ($(this).val() == "No") {
				$("#requesterarea").hide();
				$("#quarantineArea").fadeIn();
				$("#requesternextbutton").hide();

				document.getElementById('Requester-Name').value = '';
				document.getElementById('Requester-Contact-Number').value = '';
				document.getElementById('Relationship-to-Patient').value = '';
			}

			if ($(this).val() == "Yes") {
				$("#requesterarea").fadeIn();
				$("#quarantineArea").hide();
				$("#requesternextbutton").fadeIn();

				document.getElementById("requesternextbutton").addEventListener("click", function () {
					if (($("#Requester-Name").val().length == 0) || ($("#Requester-Contact-Number").val().length == 0) || ($("#Relationship-to-Patient").val().length == 0)) {
						$("#quarantineArea").hide();
						alert("Please do not leave the required fields empty!");
					}

					if (($("#Requester-Name").val().length != 0) && ($("#Requester-Contact-Number").val().length != 0) && ($("#Relationship-to-Patient").val().length != 0)) {
						$("#requesternextbutton").hide();
						$("#quarantineArea").fadeIn();
					}
				});
			}
		});

		$('input[name=QuarantineOrder]').change(function () {
			if ($(this).val().length == 0) {
				$("#selecthcarea").hide();
				$("#jpmcpjscInfo").hide();
			}

			if ($(this).val().length != 0) {
				$("#selecthcarea").fadeIn();
				$("#jpmcpjscInfo").fadeIn();
			}
		});

		$('input[name=Pharmacy]').change(function () {
			if ($(this).val().length == 0) {
				$("#selectdistrictarea").hide();
			}

			if ($(this).val().length != 0) {
				$("#selectdistrictarea").fadeIn();
			}
		});

		$('input[name=DistrictAddress]').change(function () {
			if ($(this).val().length == 0) {
				$("#deliverymethodarea").hide();
				$("#stdtodbm").hide();
				$("#stdtodtb").hide();
				$("#stdtodtu").hide();
				$("#expressArea").hide();

				$("#stdselfPrice").hide();
				$("#stdTB").hide();
				$("#stdTU").hide();
				$("#expPrice").hide();
				$("#immPrice").hide();
			}

			if ($(this).val() == "Brunei Muara") {
				$("#deliverymethodarea").fadeIn();
				$("#stdtodbm").fadeIn();
				$("#stdtodtb").hide();
				$("#stdtodtu").hide();
				$("#expressArea").fadeIn();

				$("#stdselfPrice").hide();
				$("#stdTB").hide();
				$("#stdTU").hide();
				$("#expPrice").hide();
				$("#immPrice").hide();
			}

			if (($(this).val() == "Tutong") || ($(this).val() == "Belait")) {
				$("#deliverymethodarea").fadeIn();
				$("#stdtodbm").hide();
				$("#stdtodtb").fadeIn();
				$("#stdtodtu").hide();
				$("#expressArea").hide();

				$("#stdselfPrice").hide();
				$("#stdTB").fadeIn();
				$("#stdTU").hide();
				$("#expPrice").hide();
				$("#immPrice").hide();
			}

			if ($(this).val() == "Temburong") {
				$("#deliverymethodarea").fadeIn();
				$("#stdtodbm").hide();
				$("#stdtodtb").hide();
				$("#stdtodtu").fadeIn();
				$("#expressArea").hide();

				$("#stdselfPrice").hide();
				$("#stdTB").hide();
				$("#stdTU").fadeIn();
				$("#expPrice").hide();
				$("#immPrice").hide();
			}
		});

		$('input[name=TypeofDelivery]').change(function () {
			if ($(this).val().length == 0) {
				$("#mohnormalregArea").hide();

				$("#addressArea").hide();
				$("#addressnextbutton").hide();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();

				$("#pricedurationarea").hide();
				$("#stdDuration").hide();
				$("#expDuration").hide();
				$("#immDuration").hide();
				$("#stdexpselfMessage").hide();
				$("#immMessage").hide();
				$("#stdAgree").hide();
				$("#expAgree").hide();
				$("#immAgree").hide();

				$("#stdselfPrice").hide();
				$("#expPrice").hide();

				document.getElementById('scDate').value = '';
			}

			if ($(this).val() == "Standard ($3)") {
				$("#mohnormalregArea").fadeIn();

				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();

				$("#pricedurationarea").fadeIn();
				$("#stdDuration").fadeIn();
				$("#expDuration").hide();
				$("#immDuration").hide();
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();
				$("#stdAgree").fadeIn();
				$("#expAgree").hide();
				$("#immAgree").hide();

				$("#stdselfPrice").fadeIn();
				$("#expPrice").hide();

				document.getElementById('scDate').value = '';
			}

			if (($(this).val() == "Standard ($7)") || ($(this).val() == "Standard ($10)")) {
				$("#mohnormalregArea").fadeIn();

				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();

				$("#pricedurationarea").fadeIn();
				$("#stdDuration").fadeIn();
				$("#expDuration").hide();
				$("#immDuration").hide();
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();
				$("#stdAgree").fadeIn();
				$("#expAgree").hide();
				$("#immAgree").hide();

				$("#stdselfPrice").hide();
				$("#expPrice").hide();

				document.getElementById('scDate').value = '';
			}

			if ($(this).val() == "Express ($5)") {
				$("#mohnormalregArea").fadeIn();

				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();

				$("#pricedurationarea").fadeIn();
				$("#stdDuration").hide();
				$("#expDuration").fadeIn();
				$("#immDuration").hide();
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();
				$("#stdAgree").hide();
				$("#expAgree").fadeIn();
				$("#immAgree").hide();

				$("#stdselfPrice").hide();
				$("#expPrice").fadeIn();

				document.getElementById('scDate').value = '';
			}

			if ($(this).val() == "Self Collect") {
				$("#mohnormalregArea").fadeIn();

				$("#addressArea").hide();
				$("#addressnextbutton").hide();

				$("#selfcollectarea").fadeIn();
				$("#selfcollectnextbutton").fadeIn();

				$("#pricedurationarea").fadeIn();
				$("#stdDuration").hide();
				$("#expDuration").hide();
				$("#immDuration").hide();
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();
				$("#stdAgree").hide();
				$("#expAgree").hide();
				$("#immAgree").hide();

				$("#stdselfPrice").hide();
				$("#expPrice").hide();

				document.getElementById('scDate').value = '';
			}
		});

		$('input[name=ICorPassport]').change(function () {
			if ($(this).val().length == 0) {
				$("#icarea").hide();
				$("#passportarea").hide();

				document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}

			if ($(this).val() == "icNumber") {
				$("#icarea").fadeIn();
				$("#passportarea").hide();

				document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}

			if ($(this).val() == "passport") {
				$("#icarea").hide();
				$("#passportarea").fadeIn();

				document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}
		});

		document.getElementById("addressnextbutton").addEventListener("click", function () {
			if (($("#name").val().length == 0) || ($("#dob").val().length == 0)
				|| ($("#contact_1").val().length == 0) || ($("#Patient-Number").val().length == 0) || ($("#address_1").val().length == 0)
				|| ($("#address_2").val().length == 0) || ($("#address_4").val().length == 0)) {
				$("#paymentmethodarea").hide();
				alert("Please do not leave the required fields empty!");
			}

			if (($("#name").val().length != 0) && ($("#dob").val().length != 0)
				&& ($("#contact_1").val().length != 0) && ($("#Patient-Number").val().length != 0) && ($("#address_1").val().length != 0)
				&& ($("#address_2").val().length != 0) && ($("#address_4").val().length != 0)) {
				$("#addressnextbutton").hide();
				$("#paymentmethodarea").fadeIn();
			}
		});

		document.getElementById("selfcollectnextbutton").addEventListener("click", function () {
			if (($("#name").val().length == 0) || ($("#dob").val().length == 0)
				|| ($("#contact_1").val().length == 0) || ($("#Patient-Number").val().length == 0) || ($("#scDate").val().length == 0)) {
				$("#paymentmethodarea").hide();
				alert("Please do not leave the required fields empty!");
			}

			if (($("#name").val().length != 0) && ($("#dob").val().length != 0)
				&& ($("#contact_1").val().length != 0) && ($("#Patient-Number").val().length != 0) && ($("#scDate").val().length != 0)) {
				$("#selfcollectnextbutton").hide();
				$("#paymentmethodarea").fadeIn();
			}
		});

		$('input[name=PaymentMethod]').change(function () {

			if ($(this).val().length == 0) {
				$("#paymentnoticearea").hide();
				$("#remarkarea").hide();
				$("#agreementArea").hide();
			}

			if ($(this).val() == "Cash") {
				$("#paymentnoticearea").hide();
				$("#remarkarea").fadeIn();
				$("#agreementArea").fadeIn();
			}

			if ($(this).val() == "Bank Transfer") {
				$("#paymentnoticearea").fadeIn();
				$("#remarkarea").fadeIn();
				$("#agreementArea").fadeIn();
			}
		});

		$('#Agreement').change(function () {
			if (countAgree == 0){
                		countAgree = countAgree + 1;

				$("#pleasewait").fadeIn();

				var today = new Date();
				var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

				var ampm = '';
				var ampmhour = '';
				var ampmmin = '';

				if (today.getHours() < 12) {
					ampm = 'am';
					ampmhour = (today.getHours());
				}

				if (today.getHours() == 12) {
					ampm = 'pm';
					ampmhour = (today.getHours());
				}

				if (today.getHours() > 12) {
					ampm = 'pm';
					ampmhour = (today.getHours() - 12);
				}

				if (today.getMinutes() < 10) {
					ampmmin = "0" + (today.getMinutes());
				}

				if (today.getMinutes() >= 10) {
					ampmmin = (today.getMinutes());
				}
				var time = ampmhour + ":" + ampmmin + " " + ampm;

				var dateTime = date + ' ' + time;
				document.getElementById("dateSubmitted").value = dateTime;

				let orderId = document.getElementById("Patient-Number").value;
				let jobDescription = document.querySelector('input[name=TypeofDelivery]:checked').value
				let customerEmail = document.getElementById("id-Email").value;
				let customerUsername = document.getElementById("name").value;

				var customerAddress = "";

				if (document.getElementById("Simpang").value.length == 0) {
					customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("address_4").value;
				} else {
					customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("Simpang").value
						+ ", " + document.getElementById("address_4").value;
				}

				document.getElementById("customerAddress").value = customerAddress;
				
				var customerPhone = document.getElementById("code").value + document.getElementById("contact_1").value;
				var additionalPhone = document.getElementById("code_2").value + document.getElementById("contact_2").value;
				var requesterPhone = document.getElementById("code_3").value + document.getElementById("Requester-Contact-Number").value;
				
				document.getElementById("customerPhone").value = customerPhone;
				document.getElementById("additionalPhone").value = additionalPhone;
				document.getElementById("requesterPhone").value = requesterPhone;
				
				const scriptURL = 'https://script.google.com/macros/s/AKfycbx8ZYmIx4tygxtJs7m-2XlM7IxR_zikakiSjqxhXvhaVag-IGJUy_Am-61KpZfPeIza/exec'
				const form = document.forms['wf-form-Guest-JPMC-PJSC-Order-Form']

				fetch(scriptURL, { method: 'POST', body: new FormData(form) })
					.catch(error => console.error('Error!', error.message))
				
				if (split == 1){
					
				const scriptURL = 'https://script.google.com/macros/s/AKfycby_15K0elbIbyOTUUn_Npwyu7qyXqchQ5HCthw7IBqb7qiA3L6RQ11lTyWrmeuGeLTuSg/exec'
				const form = document.forms['wf-form-Guest-JPMC-PJSC-Order-Form']

				fetch(scriptURL, { method: 'POST', body: new FormData(form) })
					.catch(error => console.error('Error!', error.message))
					
				}

				var jobdeliverydatetime = "";
				var todaysDate = new Date();

				if (todaysDate.getDate() >= 28) {
					var date = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-' + 28;
				} else {
					var date = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-' + 28;
				}

				var time = "17:00:00";
				jobdeliverydatetime = date + ' ' + time;

				let customerIC = document.getElementById("icNumber").value;
				let customerRemarks = document.getElementById("re").value;
				let customerPM = document.querySelector('input[name=PaymentMethod]:checked').value
				let order_Origin = document.getElementById("orderOrigin").value;

				var request = new XMLHttpRequest();

				request.open('POST', 'https://api.tookanapp.com/v2/create_task');

				request.setRequestHeader('Content-Type', 'application/json');

				request.onreadystatechange = function () {
					if (this.readyState === 4) {
						console.log('Status:', this.status);
						console.log('Headers:', this.getAllResponseHeaders());
						console.log('Body:', this.responseText);
						$("#pleasewait").hide();
						$("#submitbutton").fadeIn();
					}
				};

				var body = {
					'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
					'order_id': orderId,
					'job_description': jobDescription,
					'customer_email': customerEmail,
					'customer_username': customerUsername,
					'customer_phone': customerPhone,
					'customer_address': customerAddress,
					'latitude': '',
					'longitude': '',
					'job_delivery_datetime': jobdeliverydatetime,
					'custom_field_template': 'Local_Delivery',
					'meta_data': [{ "label": "IC", "data": customerIC }, { "label": "Patient_Number", "data": orderId }, { "label": "Remarks", "data": customerRemarks },
					{ "label": "Type", "data": jobDescription }, { "label": "Method", "data": customerPM }, { "label": "Barcode", "data": orderId }, { "label": "OrderOriginFrom", "data": order_Origin }],
					'team_id': '921691',
					'auto_assignment': '0',
					'has_pickup': '0',
					'has_delivery': '1',
					'layout_type': '0',
					'tracking_link': 0,
					'timezone': '-480',
					'fleet_id': '',
					'ref_images': [
					],
					'notify': 1,
					'tags': '',
					'geofence': 0
				};
				request.send(JSON.stringify(body));
			}
		});
	});
});
