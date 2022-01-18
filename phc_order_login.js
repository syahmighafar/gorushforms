document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        
        var medicineDBGsheet = 1;

        $("#deliverymethodarea").hide();

        $("#pricedurationarea").hide();
        $("#stdselfPrice").hide();
        $("#expPrice").hide();
        $("#immPrice").hide();
        $("#stdDuration").hide();
        $("#expDuration").hide();
        $("#immDuration").hide();

        $("#stdexpselfMessage").hide();
        $("#immMessage").hide();

        $("#selfcollectarea").hide();
        $("#selfcollectnextbutton").hide();
        $("#paymentmethodarea").hide();

        $("#paymentnoticearea").hide();

        $("#remarkarea").hide();
        $("#asknotifyarea").hide();
        $("#notifyoftenarea").hide();

        $("#agreementArea").hide();
        $("#stdAgree").hide();
        $("#expAgree").hide();
        $("#immAgree").hide();

        $("#captchaBox").hide();

        $("#submitbutton").hide();

        $('input[name=radioQO]').change(function () {
            if ($(this).val().length == 0) {
                $("#deliverymethodarea").hide();
            }

            if (($(this).val() == "No") || ($(this).val() == "Yes")) {
                $("#deliverymethodarea").fadeIn();
            }
        });

        $('input[name=radioTOD]').change(function () {
            if ($(this).val().length == 0) {
                $("#selfcollectarea").hide();
                $("#paymentmethodarea").hide();
                $("#selfcollectnextbutton").hide();

                $("#pricedurationarea").hide();
                $("#stdselfPrice").hide();
                $("#expPrice").hide();
                $("#immPrice").hide();
                $("#stdDuration").hide();
                $("#expDuration").hide();
                $("#immDuration").hide();

                $("#stdexpselfMessage").hide();
                $("#immMessage").hide();

                $("#stdAgree").hide();
                $("#expAgree").hide();
                $("#immAgree").hide();

                document.getElementById('scDate').value = '';
                document.getElementById('price').value = '';
            }

            if ($(this).val() == "Standard") {
                $("#selfcollectarea").hide();
                $("#paymentmethodarea").fadeIn();
                $("#selfcollectnextbutton").hide();

                $("#pricedurationarea").fadeIn();
                $("#stdselfPrice").fadeIn();
                $("#expPrice").hide();
                $("#immPrice").hide();
                $("#stdDuration").fadeIn();
                $("#expDuration").hide();
                $("#immDuration").hide();

                $("#stdexpselfMessage").fadeIn();
                $("#immMessage").hide();

                $("#stdAgree").fadeIn();
                $("#expAgree").hide();
                $("#immAgree").hide();

                document.getElementById('scDate').value = '';
                document.getElementById('price').value = '3';
            }

            if ($(this).val() == "Self Collect") {
                $("#selfcollectarea").fadeIn();
                $("#paymentmethodarea").hide();
                $("#selfcollectnextbutton").fadeIn();

                $("#pricedurationarea").fadeIn();
                $("#stdselfPrice").fadeIn();
                $("#expPrice").hide();
                $("#immPrice").hide();
                $("#stdDuration").hide();
                $("#expDuration").hide();
                $("#immDuration").hide();

                $("#stdexpselfMessage").fadeIn();
                $("#immMessage").hide();

                $("#stdAgree").hide();
                $("#expAgree").hide();
                $("#immAgree").hide();

                document.getElementById('scDate').value = '';
            }
        });

        document.getElementById("selfcollectnextbutton").addEventListener("click", function () {
            if ($("#scDate").val().length == 0) {
                $("#paymentmethodarea").hide();
                alert("Please do not leave the required fields empty!");
            }

            if ($("#scDate").val().length != 0) {
                $("#selfcollectnextbutton").hide();
                $("#paymentmethodarea").fadeIn();
            }
        });

        $('input[name=radioPAY]').change(function () {
            if ($(this).val().length == 0) {
                $("#paymentnoticearea").hide();
                $("#remarkarea").hide();
                $("#agreementArea").hide();
                $("#captchaBox").hide();
                $("#submitbutton").hide();
            }

            if ($(this).val() == "Cash") {
                $("#paymentnoticearea").hide();
                $("#remarkarea").fadeIn();
                $("#agreementArea").fadeIn();
                $("#captchaBox").fadeIn();
                $("#submitbutton").fadeIn();
            }

            if ($(this).val() == "Bank Transfer") {
                $("#paymentnoticearea").fadeIn();
                $("#remarkarea").fadeIn();
                $("#agreementArea").fadeIn();
                $("#captchaBox").fadeIn();
                $("#submitbutton").fadeIn();
            }
        });

        document.addEventListener("submit", function (event) {

            event.preventDefault();

            $(document).ready(function () {

                var today = new Date();
                var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

                var ampm = '';
                var ampmhour = '';
                var ampmmin = '';
                var ampmNum = '';

                if (today.getHours() < 12) {
                    ampmNum = 0;
                    ampm = 'am';
                    ampmhour = (today.getHours());
                }

                if (today.getHours() == 12) {
                    ampmNum = 1;
                    ampm = 'pm';
                    ampmhour = (today.getHours());
                }

                if (today.getHours() > 12) {
                    ampmNum = 1;
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

                var patientOrderId = "PHC" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

                document.getElementById("dateSubmitted").value = dateTime;

                let orderId = document.getElementById("panaga").value;
                let jobDescription = document.querySelector('input[name=radioTOD]:checked').value
                let customerEmail = document.getElementById("email").value;
                let customerUsername = document.getElementById("name").value;
                let customerPhone = document.getElementById("contact_1").value;

                var customerAddress = "";

                if (document.getElementById("address_3").value.length == 0) {
                    customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("address_4").value;
                } else {
                    customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("address_3").value
                        + ", " + document.getElementById("address_4").value;
                }
                var jobdeliverydatetime = "";
                var todaysDate = new Date();

                if (todaysDate.getMonth() < 11) {
                    if (todaysDate.getDate() < 28) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-28';
                    }
                    if (todaysDate.getDate() >= 28) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-28';
                    }
                }

                if (todaysDate.getMonth() >= 11) {
                    if (todaysDate.getDate() < 28) {
                        var dateD = (todaysDate.getFullYear()) + '-12-28';
                    }
                    if (todaysDate.getDate() >= 28) {
                        var dateD = (todaysDate.getFullYear() + 1) + '-01-28';
                    }
                }

                var timeD = "17:00:00";
                jobdeliverydatetime = dateD + ' ' + timeD;

                let customerIC = document.getElementById("icNumber").value;
                let customerRemarks = document.getElementById("re").value;
                let customerPM = document.querySelector('input[name=radioPAY]:checked').value
                let order_Origin = document.getElementById("orderOrigin").value;

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/create_task');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);

                        request.open('POST', 'https://api.tookanapp.com/v2/get_job_details_by_order_id');

                        request.setRequestHeader('Content-Type', 'application/json');

                        request.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                console.log('Status:', this.status);
                                console.log('Headers:', this.getAllResponseHeaders());
                                console.log('Body:', this.responseText);

                                responseo = this.responseText;
                                json_responseo = JSON.parse(responseo);

                                var counttaskhistory = json_responseo.data["length"];

                                for (let i = 0; i < counttaskhistory; i++) {
                                    if (json_responseo.data[i].custom_field["length"] == 7) {
                                        if (json_responseo.data[i].custom_field[6].data == patientOrderId) {
                                            document.getElementById("Tookan-Tracking").value = json_responseo.data[i].job_id;
                                            i = counttaskhistory;
                                        }
                                    }
                                }

                                const scriptURL = 'https://script.google.com/macros/s/AKfycbyW1RpgKOJlP_GaFaS28rohQduH4snYl4FYUanNgz-Tnt7M6Meyw9PgVWId2BJpzax3bw/exec'
                                const form = document.forms['wf-form-PHC-Order-Form']

                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                    .catch(error => console.error('Error!', error.message))
                                
                                if (medicineDBGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbdICh1LrT62N7ySvkgIOMq825LEKvM7KRcVREBOJVzzZSbopF4LowFZGZb4-_XMhZNQ/exec'
                                    const form = document.forms['wf-form-PHC-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                document.getElementById("phcloginform").submit();
                            }
                        };

                        var body = {
                            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                            'order_ids': [
                                orderId
                            ],
                            'include_task_history': 0
                        };
                        request.send(JSON.stringify(body));
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
                    { "label": "Type", "data": jobDescription }, { "label": "Method", "data": customerPM }, { "label": "Barcode", "data": orderId },
                    { "label": "OrderOriginFrom", "data": order_Origin }, { "label": "Patient_Order_ID", "data": patientOrderId }],
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
            });
        });
    });
});
