document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        $("#pleasewait").hide();

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
            $("#Total-Price-RM").val(sum);
        });

        document.getElementById("custDetailBtn").addEventListener("click", function () {
            if (($("#Tracking-Number").val().length == 0) || ($("#Consignee-Name").val().length == 0)
                || ($("#Consignee-Phone").val().length == 0) || ($("#Delivery-Address").val().length == 0)) {
                $("#additional_item").hide();
                $("#controls").hide();
                $("#itemBtn").hide();
                alert("Please do not leave the required fields empty!");
            }

            if (($("#Tracking-Number").val().length != 0) && ($("#Consignee-Name").val().length != 0)
                && ($("#Consignee-Phone").val().length != 0) && ($("#Delivery-Address").val().length != 0)) {
                $("#custDetailBtn").hide();
                $("#additional_item").fadeIn();
                $("#controls").fadeIn();
                $("#itemBtn").fadeIn();
            }
        });

        document.getElementById("itemBtn").addEventListener("click", function () {
            if (($("#Item").val().length == 0) || ($("#Quantity").val().length == 0)
                || ($("#Total-Item-Price-RM").val().length == 0)) {
                $("#totalPrice").hide();
                $("#supplierName").hide();
                $("#supplierNext").hide();
                alert("Please do not leave the required fields empty!");
            }

            if (($("#Item").val().length != 0) && ($("#Quantity").val().length != 0)
                && ($("#Total-Item-Price-RM").val().length != 0)) {
                $("#itemBtn").hide();
                $("#supplierName").fadeIn();
                $("#supplierNext").fadeIn();
                $("#totalPrice").fadeIn();
            }
        });

        document.getElementById("supplierNext").addEventListener("click", function () {
            if (($("#Total-Price-RM").val().length == 0) || ($("#Supplier-Name").val().length == 0)) {
                $("#confirmationarea").hide();
                alert("Please do not leave the required fields empty!");
            }

            if (($("#Total-Price-RM").val().length != 0) && ($("#Supplier-Name").val().length != 0)) {
                $("#supplierNext").hide();
                $("#confirmationarea").fadeIn();
            }
        });

        $('#Agreement').change(function () {
            if ($(this).val().checked = true) {
                $("#pleasewait").fadeIn();

                const scriptURL = 'https://script.google.com/macros/s/AKfycbwj9CLVaYMlqIslasLwv_lL5JDFD99y0qCPDv4o4-m5I3q_s-_3JUy3vIJ8MLIjAic22w/exec'
                const form = document.forms['wf-form-Go-Rush-Plus-Order']

                fetch(scriptURL, { method: 'POST', body: new FormData(form) })

                let orderId = document.getElementById("Tracking-Number").value;
                let customerUsername = document.getElementById("Consignee-Name").value;
                let customerPhone = document.getElementById("Consignee-Phone").value;

                let supplierName = document.getElementById("Supplier-Name").value;
                let totalPrice = document.getElementById("Total-Price-RM").value;


                var customerAddress = document.getElementById("Delivery-Address").value;

                var jobdeliverydatetime = "";
                var todaysDate = new Date();

                if (todaysDate.getDate() >= 28) {
                    var date = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-' + 28;
                } else {
                    var date = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-' + 28;
                }

                var time = "17:00:00";
                jobdeliverydatetime = date + ' ' + time;

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
                    'merchant_id': '1175683',
                    'order_id': orderId,
                    'job_description': 'Go Rush Plus Order',
                    'customer_email': '',
                    'customer_username': customerUsername,
                    'customer_phone': customerPhone,
                    'customer_address': customerAddress,
                    'latitude': '',
                    'longitude': '',
                    'job_delivery_datetime': jobdeliverydatetime,
                    'custom_field_template': 'Go_Rush_Plus',
                    'meta_data': [
                        {
                            'label': 'Supplier_Name',
                            'data': supplierName
                        },
                        {
                            'label': 'Total Price',
                            'data': totalPrice
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
