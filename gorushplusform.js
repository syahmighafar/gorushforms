document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        var countAgree = 0;
        var tempSplit = 1;

        $("#pleasewait").hide();

        $("#itemContainsArea").hide();

        $("#submitbutton").hide();
        $("#additional_item").hide();
        $("#controls").hide();

        $("#itemBtn").hide();
        $("#supplierNext").hide();

        $("#totalPrice").hide();
        $("#supplierName").hide();

        $("#confirmationarea").hide();

        $(document).on("change", ".itemprice", function () {
            var sum = 0;
            $(".itemprice").each(function () {
                sum += +$(this).val();
            });
            $("#Total-Price").val(sum);
        });

        document.getElementById("custDetailBtn").addEventListener("click", function () {
            if ($("#Tracking-Number").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Tracking Number field empty!");
            }

            if ($("#Consignee-Name").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Consignee's Name field empty!");
            }

            if ($("#Consignee-Phone").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Consignee's Phone Number field empty!");
            }

            if ($("#Delivery-Address").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Delivery Address field empty!");
            }

            if ($("#Commodity").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Item Type field empty!");
            }

            if ($("#Currency").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Currency field empty!");
            }

            if (($("#Tracking-Number").val().length != 0) && ($("#Consignee-Name").val().length != 0)
                && ($("#Consignee-Phone").val().length != 0) && ($("#Delivery-Address").val().length != 0)
                && ($("#Commodity").val().length != 0) && ($("#Currency").val().length != 0)) {
                $("#itemContainsArea").fadeIn();
                $("#custDetailBtn").hide();
            }
        });

        $('input[name=itemContains]').change(function () {
            if ($(this).val().length == 0) {
                $("#additional_item").hide();
                $("#controls").hide();
                $("#itemBtn").hide();
            }

            if ($(this).val().length != 0) {
                $("#additional_item").fadeIn();
                $("#controls").fadeIn();
                $("#itemBtn").fadeIn();
            }
        });

        document.getElementById("itemBtn").addEventListener("click", function () {
            if ($("#Item-Description").val().length == 0) {
                $("#totalPrice").hide();
                $("#supplierName").hide();
                $("#supplierNext").hide();
                alert("Please do not leave the Item Description field empty!");
            }

            if ($("#Quantity").val().length == 0) {
                $("#totalPrice").hide();
                $("#supplierName").hide();
                $("#supplierNext").hide();
                alert("Please do not leave the Quantity field empty!");
            }

            if ($("#Total-Item-Price").val().length == 0) {
                $("#totalPrice").hide();
                $("#supplierName").hide();
                $("#supplierNext").hide();
                alert("Please do not leave the Total Item Price field empty!");
            }

            if (($("#Item-Description").val().length != 0) && ($("#Quantity").val().length != 0)
                && ($("#Total-Item-Price").val().length != 0)) {
                $("#itemBtn").hide();
                $("#supplierName").fadeIn();
                $("#supplierNext").fadeIn();
                $("#totalPrice").fadeIn();
            }
        });

        document.getElementById("supplierNext").addEventListener("click", function () {
            if ($("#Total-Price").val().length == 0) {
                $("#confirmationarea").hide();
                alert("Please do not leave the Total Price field empty!");
            }

            if ($("#Supplier-Name").val().length == 0) {
                $("#confirmationarea").hide();
                alert("Please do not leave the Suppier Name field empty!");
            }

            if (($("#Total-Price").val().length != 0) && ($("#Supplier-Name").val().length != 0)) {
                $("#supplierNext").hide();
                $("#confirmationarea").fadeIn();
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

                var codeN = document.getElementById("codeName").value;
                var conN = document.getElementById("Consignee-Name").value;

                document.getElementById("buyerName").value = conN + codeN;

                let orderId = document.getElementById("Tracking-Number").value;
                let customerUsername = document.getElementById("buyerName").value;
                let customerPhone = document.getElementById("Consignee-Phone").value;

                let commodity = document.getElementById("Commodity").value;
                let totalPrice = document.getElementById("Total-Price").value;
                let itemCurrency = document.getElementById("Currency").value;
                let itemContains = document.querySelector('input[name=itemContains]:checked').value

                let customerEmail = document.getElementById("Email").value;

                var customerAddress = document.getElementById("Delivery-Address").value;

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
                        var dateD = (todaysDate.getFullYear() + '-12-28';
                    }
                    if (todaysDate.getDate() >= 28) {
                        var dateD = (todaysDate.getFullYear()+1) + '-01-28';
                    }
                }

                var timeD = "17:00:00";
                jobdeliverydatetime = dateD + ' ' + timeD;

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

                                document.getElementById("Tookan-Tracking").value = json_responseo.data[0].job_id;
                                
                                const scriptURL = 'https://script.google.com/macros/s/AKfycbyoJMDxUwWvWoKjv1o_Us0Xu79WsrKVF6GJldTc5IXlP9x6eNICQIm-reiRih0cis1iHQ/exec'
                                const form = document.forms['wf-form-Go-Rush-Plus-Order']

                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                
                                if (tempSplit == 1){
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbyT31WOUuuXYtLxiKZpTDrNg0cyO7IgDQRTXij1EdOoVrq03AkRDJAa1BFshM2HJ6k5ow/exec'
                                    const form = document.forms['wf-form-Go-Rush-Plus-Order']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                }

                                $("#pleasewait").hide();
                                $("#submitbutton").fadeIn();
                            }
                        };

                        var body = {
                            'api_key': '53626885f0400f401d527c6514516c471ae7cdfe2fdf7c38591403c4',
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
                    'merchant_id': '1180025',
                    'order_id': orderId,
                    'job_description': 'Go Rush Plus Order',
                    'customer_email': customerEmail,
                    'customer_username': customerUsername,
                    'customer_phone': customerPhone,
                    'customer_address': customerAddress,
                    'latitude': '',
                    'longitude': '',
                    'job_delivery_datetime': jobdeliverydatetime,
                    'custom_field_template': 'Go_Rush_Plus',
                    'meta_data': [
                        {
                            'label': 'Commodity',
                            'data': commodity
                        },
                        {
                            'label': 'Total_Price',
                            'data': totalPrice
                        },
                        {
                            'label': 'Currency',
                            'data': itemCurrency
                        },
                        {
                            'label': 'DG',
                            'data': itemContains
                        }

                    ],
                    'team_id': '921691',
                    'auto_assignment': '0',
                    'has_pickup': '0',
                    'has_delivery': '1',
                    'layout_type': '0',
                    'tracking_link': 0,
                    'timezone': '-480',
                    'fleet_id': '',
                    'ref_images': [],
                    'notify': 1,
                    'tags': '',
                    'geofence': 0

                };
                request.send(JSON.stringify(body));
            }
        });
    });
});
