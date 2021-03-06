document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        var countAgree = 0;

        $("#deliverytypearea").hide();
        $("#deliverychoicearea").hide();
        $("#receiverarea").hide();
        $("#paymentarea").hide();
        $("#confirmationarea").hide();

        $("#pleasewait").hide();
        $("#submitbutton").hide();

        document.getElementById("intronextbutton").addEventListener("click", function () {
            if (($("#Agent-Name").val().length == 0) || ($("#Seller-Name").val().length == 0) || ($("#Items").val().length == 0)) {
                $("#deliverytypearea").hide();
                alert("Please do not leave the required fields empty!");
            }

            if (($("#Agent-Name").val().length != 0) && ($("#Seller-Name").val().length != 0) && ($("#Items").val().length != 0)) {
                $("#intronextbutton").hide();
                $("#deliverytypearea").fadeIn();
            }
        });

        $('#Delivery-Type').change(function () {

            if ($(this).val().length == 0) {
                $("#receiverarea").hide();
            }

            if (($(this).val() == "Standard") || ($(this).val() == "Self Collect at Go Rush Kiarong")) {
                $("#receiverarea").fadeIn();
            }
        });

        document.getElementById("deliverydetailsnextbutton").addEventListener("click", function () {
            if (($("#Receiver-Name").val().length == 0) || ($("#contact_1").val().length == 0) ||
                ($("#address_1").val().length == 0)) {
                $("#paymentarea").hide();
                alert("Please do not leave the required fields empty!");
            }

            if (($("#Receiver-Name").val().length != 0) && ($("#contact_1").val().length != 0)
                && ($("#address_1").val().length != 0)) {
                $("#deliverydetailsnextbutton").hide();
                $("#paymentarea").fadeIn();
            }
        });

        $('#Payment-Method').change(function () {
            if ($(this).val().length == 0) {
                $("#confirmationarea").hide();
            }

            if ($(this).val() == "Bank Transfer") {
                $("#confirmationarea").fadeIn();
            }

            if ($(this).val() == "Cash on Delivery") {
                $("#confirmationarea").fadeIn();
            }
        });

        $('#Agreement').change(function () {
            if (countAgree == 0) {
                countAgree = countAgree + 1;
                $("#pleasewait").fadeIn();

                let agentName = document.getElementById("Agent-Name").value;
                let customerEmail = document.getElementById("Agent-Email").value;

                let wellousItems = document.getElementById("Items").value;
                let receiverName = document.getElementById("Receiver-Name").value;
                let receiverPhone = document.getElementById("contact_1").value;
                let jobDescription = document.getElementById("Delivery-Type").value;
                let sellerName = document.getElementById("Seller-Name").value;
                let receiverAddress = document.getElementById("address_1").value;
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

                let customerPM = document.getElementById("Payment-Method").value;
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
                    'order_id': '',
                    'job_description': jobDescription,
                    'customer_email': customerEmail,
                    'customer_username': receiverName,
                    'customer_phone': receiverPhone,
                    'customer_address': receiverAddress,
                    'latitude': '',
                    'longitude': '',
                    'job_delivery_datetime': jobdeliverydatetime,
                    'custom_field_template': 'Wellous_Delivery',
                    'meta_data': [{ "label": "Agent_Name", "data": agentName }, { "label": "Products", "data": wellousItems }, { "label": "Method", "data": customerPM }, { "label": "OrderOriginFrom", "data": order_Origin }, { "label": "Seller_Name", "data": sellerName }],
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
