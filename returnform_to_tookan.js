document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        $("#pleasewait").hide();

        $("#submitbutton").hide();

        $('#Agreement').change(function () {
            if ($(this).val().checked = true) {

                $("#pleasewait").fadeIn();

                let customerEmail = document.getElementById("id-Email").value;
                let customerUsername = document.getElementById("Full-Name").value;
                let customerPhone = document.getElementById("Contact-Number-2").value;

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
                    'order_id': '',
                    'job_description': 'RTN TO MY',
                    'customer_email': customerEmail,
                    'customer_username': customerUsername,
                    'customer_phone': customerPhone,
                    'customer_address': 'JADE E SERVICES MALAYSIA SDN BHD, Block A , Mapletree Distripark Persiaran Perusahan, Seksyen 23,Shah Alam, Selangor, Malaysia,',
                    'latitude': '',
                    'longitude': '',
                    'job_delivery_datetime': jobdeliverydatetime,
                    'custom_field_template': '',
                    'meta_data': '',
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
