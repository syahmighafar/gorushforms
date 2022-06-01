document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        var countAgree = 0;
        var gsheetPanagaHC = 1;
        var medicineDBGsheet = 1;

        $("#requesterarea").hide();
        $("#requesternextbutton").hide();

        $("#quarantineArea").hide();

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
                $("#deliverymethodarea").hide();
            }

            if ($(this).val().length != 0) {
                $("#deliverymethodarea").fadeIn();
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

            if ($(this).val() == "Standard ($3)") {
                $("#mohnormalregArea").fadeIn();

                $("#addressArea").fadeIn();
                $("#addressnextbutton").fadeIn();

                $("#selfcollectarea").hide();
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

            if ($(this).val() == "Express ($5)") {
                $("#mohnormalregArea").fadeIn();

                $("#addressArea").fadeIn();
                $("#addressnextbutton").fadeIn();

                $("#selfcollectarea").hide();
                $("#selfcollectnextbutton").hide();

                $("#pricedurationarea").fadeIn();
                $("#stdselfPrice").hide();
                $("#expPrice").fadeIn();
                $("#immPrice").hide();
                $("#stdDuration").hide();
                $("#expDuration").fadeIn();
                $("#immDuration").hide();
                $("#stdexpselfMessage").fadeIn();
                $("#immMessage").hide();
                $("#stdAgree").hide();
                $("#expAgree").fadeIn();
                $("#immAgree").hide();

                document.getElementById('scDate').value = '';
                document.getElementById('price').value = '5';
            }

            if ($(this).val() == "Immediate ($20)") {
                $("#mohnormalregArea").fadeIn();

                $("#addressArea").fadeIn();
                $("#addressnextbutton").fadeIn();

                $("#selfcollectarea").hide();
                $("#selfcollectnextbutton").hide();

                $("#pricedurationarea").fadeIn();
                $("#stdselfPrice").hide();
                $("#expPrice").hide();
                $("#immPrice").fadeIn();
                $("#stdDuration").hide();
                $("#expDuration").hide();
                $("#immDuration").fadeIn();
                $("#stdexpselfMessage").hide();
                $("#immMessage").fadeIn();
                $("#stdAgree").hide();
                $("#expAgree").hide();
                $("#immAgree").fadeIn();

                document.getElementById('scDate').value = '';
                document.getElementById('price').value = '20';
            }

            if ($(this).val() == "Self Collect") {
                $("#mohnormalregArea").fadeIn();

                $("#addressArea").hide();
                $("#addressnextbutton").hide();

                $("#selfcollectarea").fadeIn();
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

        $('input[name=ICorPassport]').change(function () {
            if ($(this).val().length == 0) {
                $("#icarea").hide();
                $("#passportarea").hide();

                document.getElementById('icNumber').value = '';
                document.getElementById('passport').value = '';
            }

            if ($(this).val() == "IC Number") {
                $("#icarea").fadeIn();
                $("#passportarea").hide();

                document.getElementById('icNumber').value = '';
                document.getElementById('passport').value = '';
            }

            if ($(this).val() == "Passport") {
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
            if (countAgree == 0) {
                countAgree = countAgree + 1;

                $("#pleasewait").fadeIn();

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

                var customerPhone = "+" + document.getElementById("code").value + document.getElementById("contact_1").value;
                var additionalPhone = "+" + document.getElementById("code_2").value + document.getElementById("contact_2").value;
                var requesterPhone = "+" + document.getElementById("code_3").value + document.getElementById("Requester-Contact-Number").value;

                document.getElementById("customerPhone").value = customerPhone;
                document.getElementById("additionalPhone").value = additionalPhone;
                document.getElementById("requesterPhone").value = requesterPhone;

                var jobdeliverydatetime = "";
                var todaysDate = new Date();

                //31 January to Feburary
                if (todaysDate.getMonth() == 0) {
                    if (todaysDate.getDate() < 31) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                    }
                    if (todaysDate.getDate() >= 31) {
                        if (todaysDate.getHours() < 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                        }
                        if (todaysDate.getHours() >= 12) {
                            if ((0 == todaysDate.getFullYear() % 4) && (0 != todaysDate.getFullYear() % 100) || (0 == todaysDate.getFullYear() % 400)) {
                                var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-29';
                            } else {
                                var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-28';
                            }
                        }
                    }
                }

                //February
                if (todaysDate.getMonth() == 1) {
                    //Leap year
                    if ((0 == todaysDate.getFullYear() % 4) && (0 != todaysDate.getFullYear() % 100) || (0 == todaysDate.getFullYear() % 400)) {
                        if (todaysDate.getDate() < 29) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-29';
                        }
                        if (todaysDate.getDate() >= 29) {
                            if (todaysDate.getHours() < 12) {
                                var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-29';
                            }
                            if (todaysDate.getHours() >= 12) {
                                var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-31';
                            }
                        }
                    } else {
                        if (todaysDate.getDate() < 28) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-28';
                        }
                        if (todaysDate.getDate() >= 28) {
                            if (todaysDate.getHours() < 12) {
                                var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-28';
                            }
                            if (todaysDate.getHours() >= 12) {
                                var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-31';
                            }
                        }
                    }
                }

                //31 July to August
                if (todaysDate.getMonth() == 6) {
                    if (todaysDate.getDate() < 31) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                    }
                    if (todaysDate.getDate() >= 31) {
                        if (todaysDate.getHours() < 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                        }
                        if (todaysDate.getHours() >= 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-31';
                        }
                    }
                }

                //December
                if (todaysDate.getMonth() == 11) {
                    if (todaysDate.getDate() < 31) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                    }
                    if (todaysDate.getDate() >= 31) {
                        if (todaysDate.getHours() < 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                        }
                        if (todaysDate.getHours() >= 12) {
                            var dateD = (todaysDate.getFullYear() + 1) + '-01-31';
                        }
                    }
                }

                //31
                if ((todaysDate.getMonth() == 2) || (todaysDate.getMonth() == 4) || (todaysDate.getMonth() == 7) || (todaysDate.getMonth() == 9)) {
                    if (todaysDate.getDate() < 31) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                    }
                    if (todaysDate.getDate() >= 31) {
                        if (todaysDate.getHours() < 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                        }
                        if (todaysDate.getHours() >= 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-30';
                        }
                    }
                }

                //30
                if ((todaysDate.getMonth() == 3) || (todaysDate.getMonth() == 5) || (todaysDate.getMonth() == 8) || (todaysDate.getMonth() == 10)) {
                    if (todaysDate.getDate() < 30) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-30';
                    }
                    if (todaysDate.getDate() >= 30) {
                        if (todaysDate.getHours() < 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-30';
                        }
                        if (todaysDate.getHours() >= 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-31';
                        }
                    }
                }

                var timeD = "23:59:00";
                jobdeliverydatetime = dateD + ' ' + timeD;

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

                                if (medicineDBGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbdICh1LrT62N7ySvkgIOMq825LEKvM7KRcVREBOJVzzZSbopF4LowFZGZb4-_XMhZNQ/exec'
                                    const form = document.forms['wf-form-Guest-PANAGA-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (gsheetPanagaHC == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbxlggx7CrM8psD-yaX4Sb2JRgTk_1Q7UQSLEzT-gvzkEP_nX59MGcJvaTa86jWWxAvfSQ/exec'
                                    const form = document.forms['wf-form-Guest-PANAGA-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                $("#pleasewait").hide();
                                $("#submitbutton").fadeIn();
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
                    'custom_field_template': 'Pharmacy_PHC',
                    'meta_data': [{ "label": "IC", "data": customerIC }, { "label": "Patient_Number", "data": orderId }, { "label": "Remarks", "data": customerRemarks },
                    { "label": "Type", "data": jobDescription }, { "label": "Method", "data": customerPM }, { "label": "Barcode", "data": orderId },
                    { "label": "OrderOriginFrom", "data": order_Origin }, { "label": "Patient_Order_ID", "data": patientOrderId }],
                    'team_id': '1309479',
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
