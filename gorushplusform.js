document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        $("#pleasewait").hide();

        $("#submitbutton").hide();

        $('#Agreement').change(function () {
            if ($(this).val().checked = true) {
                $("#pleasewait").fadeIn();
                
                const scriptURL = 'https://script.google.com/macros/s/AKfycbxK8Aq46hmRbuXL36ECsn8B_NMDpq2gEzH2MXHLX425JFD-AOM99_FyXaSP5Zl5SqAolw/exec'
                const form = document.forms['google-sheet']

                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))

                let orderId = document.getElementById("Tracking-Number").value;
                let customerUsername = document.getElementById("Consignee-s-Name").value;
                let customerPhone = document.getElementById("Consignee-s-Phone-2").value;

                let supplierName = document.getElementById("Supplier-Name").value;
                let totalPrice = document.getElementById("Price-2").value;


                var customerAddress = document.getElementById("address_1").value;

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
