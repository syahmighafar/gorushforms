document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        var countAgree = 0;

        $("#senderarea").hide();
        $("#receiverarea").hide();
        $("#paymentarea").hide();
        $("#codamountarea").hide();

        $("#sendernameArea").hide();
        $("#senderphoneArea").hide();
        $("#paymentnoticearea").hide();

        $("#billToArea").hide();
        $("#agreementArea").hide();
        $("#pleasewait").hide();
        $("#submitbutton").hide();

        document.getElementById("Sender-Name").required = false;
        document.getElementById("Sender-Phone").required = false;
        document.getElementById("email").required = false;
        document.getElementById("Pick-Up-Address").required = false;
        document.getElementById("Pickup-Date").required = false;

        document.getElementById("Delivery-Type").required = false;

        document.getElementById("Sender-Name-Delivery").required = false;
        document.getElementById("Sender-Phone-Delivery").required = false;

        document.getElementById("Receiver-Name").required = false;
        document.getElementById("Receiver-Phone").required = false;
        document.getElementById("Delivery-Address").required = false;
        document.getElementById("Product-Type").required = false;
        document.getElementById("Product-Weight").required = false;
        document.getElementById("codrequired").required = false;
        document.getElementById("COD-Amount").required = false;

        $('#Pickup-or-Delivery').change(function () {

            if ($(this).val().length == 0) {
                $("#senderarea").hide();
                $("#receiverarea").hide();

                $("#sendernameArea").hide();
                $("#senderphoneArea").hide();

                document.getElementById("Sender-Name").required = false;
                document.getElementById("Sender-Phone").required = false;
                document.getElementById("email").required = false;
                document.getElementById("Pick-Up-Address").required = false;
                document.getElementById("Pickup-Date").required = false;

                document.getElementById("Delivery-Type").required = false;

                document.getElementById("Sender-Name-Delivery").required = false;
                document.getElementById("Sender-Phone-Delivery").required = false;

                document.getElementById("Receiver-Name").required = false;
                document.getElementById("Receiver-Phone").required = false;
                document.getElementById("Delivery-Address").required = false;
                document.getElementById("Product-Type").required = false;
                document.getElementById("Product-Weight").required = false;
                document.getElementById("codrequired").required = false;
                document.getElementById("COD-Amount").required = false;

                document.getElementById('Sender-Name').value = '';
                document.getElementById('Sender-Phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('Pick-Up-Address').value = '';
                document.getElementById('Pickup-Date').value = '';
                document.getElementById('Delivery-Type').value = '';
                document.getElementById('Sender-Name-Delivery').value = '';
                document.getElementById('Sender-Phone-Delivery').value = '';
                document.getElementById('Receiver-Name').value = '';
                document.getElementById('Receiver-Phone').value = '';
                document.getElementById('Delivery-Address').value = '';
                document.getElementById('Product-Type').value = '';
                document.getElementById('Product-Weight').value = '';
                document.getElementById('codrequired').value = '';
                document.getElementById('COD-Amount').value = '';

                $("#paymentarea").hide();
            }


            if ($(this).val() == "Pickup") {
                $("#senderarea").fadeIn();
                $("#receiverarea").hide();

                $("#sendernameArea").hide();
                $("#senderphoneArea").hide();

                document.getElementById("Sender-Name").required = true;
                document.getElementById("Sender-Phone").required = true;
                document.getElementById("email").required = true;
                document.getElementById("Pick-Up-Address").required = true;
                document.getElementById("Pickup-Date").required = true;

                document.getElementById("Delivery-Type").required = false;

                document.getElementById("Sender-Name-Delivery").required = false;
                document.getElementById("Sender-Phone-Delivery").required = false;

                document.getElementById("Receiver-Name").required = false;
                document.getElementById("Receiver-Phone").required = false;
                document.getElementById("Delivery-Address").required = false;
                document.getElementById("Product-Type").required = false;
                document.getElementById("Product-Weight").required = false;
                document.getElementById("codrequired").required = false;
                document.getElementById("COD-Amount").required = false;

                document.getElementById('Sender-Name').value = '';
                document.getElementById('Sender-Phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('Pick-Up-Address').value = '';
                document.getElementById('Pickup-Date').value = '';
                document.getElementById('Delivery-Type').value = '';
                document.getElementById('Sender-Name-Delivery').value = '';
                document.getElementById('Sender-Phone-Delivery').value = '';
                document.getElementById('Receiver-Name').value = '';
                document.getElementById('Receiver-Phone').value = '';
                document.getElementById('Delivery-Address').value = '';
                document.getElementById('Product-Type').value = '';
                document.getElementById('Product-Weight').value = '';
                document.getElementById('codrequired').value = '';
                document.getElementById('COD-Amount').value = '';

                $("#paymentarea").fadeIn();
            }

            if ($(this).val() == "Delivery") {

                $("#receiverarea").fadeIn();
                $("#senderarea").hide();

                $("#sendernameArea").fadeIn();
                $("#senderphoneArea").fadeIn();

                document.getElementById("Sender-Name").required = false;
                document.getElementById("Sender-Phone").required = false;
                document.getElementById("email").required = false;
                document.getElementById("Pick-Up-Address").required = false;
                document.getElementById("Pickup-Date").required = false;

                document.getElementById("Delivery-Type").required = true;

                document.getElementById("Sender-Name-Delivery").required = true;
                document.getElementById("Sender-Phone-Delivery").required = true;

                document.getElementById("Receiver-Name").required = true;
                document.getElementById("Receiver-Phone").required = true;
                document.getElementById("Delivery-Address").required = true;
                document.getElementById("Product-Type").required = true;
                document.getElementById("Product-Weight").required = true;
                document.getElementById("codrequired").required = true;
                document.getElementById("COD-Amount").required = false;

                document.getElementById('Sender-Name').value = '';
                document.getElementById('Sender-Phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('Pick-Up-Address').value = '';
                document.getElementById('Pickup-Date').value = '';
                document.getElementById('Delivery-Type').value = '';
                document.getElementById('Sender-Name-Delivery').value = '';
                document.getElementById('Sender-Phone-Delivery').value = '';
                document.getElementById('Receiver-Name').value = '';
                document.getElementById('Receiver-Phone').value = '';
                document.getElementById('Delivery-Address').value = '';
                document.getElementById('Product-Type').value = '';
                document.getElementById('Product-Weight').value = '';
                document.getElementById('codrequired').value = '';
                document.getElementById('COD-Amount').value = '';

                $("#paymentarea").show();
            }

            if ($(this).val() === "Pickup and Delivery") {
                $("#senderarea").fadeIn();
                $("#receiverarea").fadeIn();

                $("#sendernameArea").hide();
                $("#senderphoneArea").hide();

                document.getElementById("Sender-Name").required = true;
                document.getElementById("Sender-Phone").required = true;
                document.getElementById("email").required = true;
                document.getElementById("Pick-Up-Address").required = true;
                document.getElementById("Pickup-Date").required = true;

                document.getElementById("Delivery-Type").required = true;

                document.getElementById("Sender-Name-Delivery").required = false;
                document.getElementById("Sender-Phone-Delivery").required = false;

                document.getElementById("Receiver-Name").required = true;
                document.getElementById("Receiver-Phone").required = true;
                document.getElementById("Delivery-Address").required = true;
                document.getElementById("Product-Type").required = true;
                document.getElementById("Product-Weight").required = true;
                document.getElementById("codrequired").required = true;
                document.getElementById("COD-Amount").required = false;

                document.getElementById('Sender-Name').value = '';
                document.getElementById('Sender-Phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('Pick-Up-Address').value = '';
                document.getElementById('Pickup-Date').value = '';
                document.getElementById('Delivery-Type').value = '';
                document.getElementById('Sender-Name-Delivery').value = '';
                document.getElementById('Sender-Phone-Delivery').value = '';
                document.getElementById('Receiver-Name').value = '';
                document.getElementById('Receiver-Phone').value = '';
                document.getElementById('Delivery-Address').value = '';
                document.getElementById('Product-Type').value = '';
                document.getElementById('Product-Weight').value = '';
                document.getElementById('codrequired').value = '';
                document.getElementById('COD-Amount').value = '';

                $("#paymentarea").fadeIn();
            }

            $('#codrequired').change(function () {
                if ($(this).val().length == 0) {
                    $("#codamountarea").hide();
                    document.getElementById("COD-Amount").required = true;
                }

                if ($(this).val() == "Yes") {
                    $("#codamountarea").fadeIn();
                    document.getElementById("COD-Amount").required = true;
                }

                if ($(this).val() == "No") {
                    $("#codamountarea").hide();
                    document.getElementById("COD-Amount").required = false;
                }
            });

            $('#Payment-Method').change(function () {

                if ($(this).val().length == 0) {
                    $("#paymentnoticearea").hide();
                    $("#billToArea").hide();
                }

                if ($(this).val() == "Cash On Delivery") {
                    $("#paymentnoticearea").hide();
                    $("#billToArea").fadeIn();
                }

                if ($(this).val() == "Bank Transfer") {
                    $("#paymentnoticearea").fadeIn();
                    $("#billToArea").fadeIn();
                }
            });

            $('#Bill-to').change(function () {
                if ($(this).val().length == 0) {
                    $("#agreementArea").hide();
                }

                if ($(this).val().length != 0) {
                    $("#agreementArea").fadeIn();
                }
            });

            $('#Delivery-Type').change(function () {
                if ($(this).val().length == 0) {
                    document.getElementById('price').value = '0';
                }

                if ($(this).val() == "Drop-off $3 (BSB)") {
                    document.getElementById('price').value = '3';
                }

                if (($(this).val() == "Standard $5 (BSB)") || ($(this).val() == "Drop-off $5 (Tutong)")) {
                    document.getElementById('price').value = '5';
                }

                if (($(this).val() == "Standard $7 (Tutong)") || ($(this).val() == "Express $7 (BSB)")) {
                    document.getElementById('price').value = '7';
                }

                if (($(this).val() == "Drop-off $8 (KB)") || ($(this).val() == "Drop-off $8 (Temburong)")) {
                    document.getElementById('price').value = '8';
                }

                if (($(this).val() == "Standard $10 (Seria)") || ($(this).val() == "Express $10 (Tutong)")) {
                    document.getElementById('price').value = '10';
                }

                if (($(this).val() == "Standard $12 (KB)") || ($(this).val() == "Standard $12 (Temburong)") || ($(this).val() == "Express $12 (Seria)")) {
                    document.getElementById('price').value = '12';
                }

                if (($(this).val() == "Express $15 (KB)") || ($(this).val() == "Express $15 (Temburong)")) {
                    document.getElementById('price').value = '15';
                }
            });

            $('#Agreement').change(function () {
                if (countAgree == 0) {
                    countAgree = countAgree + 1;

                    $("#pleasewait").fadeIn();

                    //getSubmittedDate
                    var today = new Date();
                    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

                    var ampmhour = '';
                    var ampmmin = '';
                    var ampmNum = '';

                    if (today.getHours() < 12) {
                        ampmNum = 0;
                        ampmhour = (today.getHours());
                    }

                    if (today.getHours() >= 12) {
                        ampmNum = 1;
                        ampmhour = (today.getHours());
                    }

                    if (today.getMinutes() < 10) {
                        ampmmin = "0" + (today.getMinutes());
                    }

                    if (today.getMinutes() >= 10) {
                        ampmmin = (today.getMinutes());
                    }

                    var time = ampmhour + ":" + ampmmin;

                    let dateSubmitted = date + ' ' + time;

                    document.getElementById("dateSubmitted").value = dateSubmitted;

                    var customerOrderId = "GO" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

                    let itemDescription = document.getElementById("Item-Description").value;

                    let jobDescription = document.getElementById("Delivery-Type").value;
                    let jobType = document.getElementById("Pickup-or-Delivery").value;

                    let senderName = document.getElementById("Sender-Name").value;
                    let senderPhone = document.getElementById("Sender-Phone").value;

                    let senderName2 = document.getElementById("Sender-Name-Delivery").value;
                    let senderPhone2 = document.getElementById("Sender-Phone-Delivery").value;

                    var finalSenderName = "";
                    var finalSenderPhone = "";

                    if ((senderName.length != 0) || (senderPhone.length != 0)) {
                        finalSenderName = senderName;
                        finalSenderPhone = senderPhone;
                    }

                    if ((senderName2.length != 0) || (senderPhone2.length != 0)) {
                        finalSenderName = senderName2;
                        finalSenderPhone = senderPhone2;
                    }

                    document.getElementById("senderName").value = finalSenderName;
                    document.getElementById("senderPhone").value = finalSenderPhone;

                    let senderEmail = document.getElementById("email").value;

                    let deliveryAddress = document.getElementById("Delivery-Address").value;

                    let receiverName = document.getElementById("Receiver-Name").value;
                    let receiverPhone = document.getElementById("Receiver-Phone").value;
                    let productType = document.getElementById("Product-Type").value;
                    let productWeight = document.getElementById("Product-Weight").value;
                    let codRequired = document.getElementById("codrequired").value;
                    let codAmount = document.getElementById("COD-Amount").value;  
                    let billTo = document.getElementById("Bill-to").value;

                    let pickupAddress = document.getElementById("Pick-Up-Address").value;
                    let pickupDate = document.getElementById("Pickup-Date").value;

                    let customerPM = document.getElementById("Payment-Method").value;
                    let order_Origin = document.getElementById("orderOrigin").value;

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

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/create_task');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            const scriptURL = 'https://script.google.com/macros/s/AKfycbzvzp-lNIC5HV2fqyjKOfWxtURgUdE7xx6509Jzj8OhdCpMBu70-6T14FCY-RJ-187a/exec'
                            const form = document.forms['wf-form-General-Order-Form']

                            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                .catch(error => console.error('Error!', error.message))

                            $("#pleasewait").hide();
                            $("#submitbutton").fadeIn();

                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'order_id': '',
                        'job_description': jobDescription,
                        'customer_email': senderEmail,
                        'customer_username': receiverName,
                        'customer_phone': '',
                        'customer_address': deliveryAddress,
                        'latitude': '',
                        'longitude': '',
                        'job_delivery_datetime': jobdeliverydatetime,
                        'custom_field_template': 'General_Order',
                        'meta_data': [
                            { "label": "Item_Description", "data": itemDescription },
                            { "label": "Job_Type", "data": jobType },
                            { "label": "Sender_Name", "data": finalSenderName },
                            { "label": "Sender_Phone", "data": finalSenderPhone },
                            { "label": "Sender_Email", "data": senderEmail },
                            { "label": "Pickup_Address", "data": pickupAddress },
                            { "label": "Pickup_Date", "data": pickupDate },
                            { "label": "Delivery_Type", "data": jobDescription },
                            { "label": "Receiver_Name", "data": receiverName },
                            { "label": "Receiver_Phone", "data": receiverPhone },
                            { "label": "Receiver_Address", "data": deliveryAddress },
                            { "label": "Product_Type", "data": productType },
                            { "label": "Product_Weight", "data": productWeight },
                            { "label": "COD_Required", "data": codRequired },
                            { "label": "COD_Amount", "data": codAmount },
                            { "label": "Payment_Method", "data": customerPM },
                            { "label": "Bill_To", "data": billTo },
                            { "label": "Customer_Order_ID", "data": customerOrderId },
                            { "label": "Submitted_Date", "data": dateSubmitted }],
                        'team_id': '1309482',
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
});
