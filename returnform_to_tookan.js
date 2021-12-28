document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        var countAgree = 0;
        var gsheetreturn = 1;

        $("#agreementArea").hide();

        $("#pleasewait").hide();

        $("#submitbutton").hide();

        document.getElementById("nextbutton").addEventListener("click", function () {
            if (($("#Full-Name").val().length == 0) || ($("#id-Email").val().length == 0) || ($("#Contact-Number-2").val().length == 0) || ($("#Postal-Code").val().length == 0) || ($("#Home-Address-2").val().length == 0) || ($("#Item-Description").val().length == 0)) {
                $("#agreementArea").hide();
                alert("Please do not leave the required fields empty!");
            }

            if (($("#Full-Name").val().length != 0) && ($("#id-Email").val().length != 0) && ($("#Contact-Number-2").val().length != 0) && ($("#Postal-Code").val().length != 0) && ($("#Home-Address-2").val().length != 0) && ($("#Item-Description").val().length != 0)) {
                $("#nextbutton").hide();
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

                document.getElementById("dateSubmitted").value = dateTime;

                let customerEmail = document.getElementById("id-Email").value;
                let customerUsername = document.getElementById("Full-Name").value;
                let customerPhone = document.getElementById("Contact-Number-2").value;

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

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/create_task');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);

                        if (gsheetreturn == 1) {
                            const scriptURL = 'https://script.google.com/macros/s/AKfycbxbnu-T2ZyoqpBoFhOtBhgm3mCnsjqkBxj2j2T3BKBtE0asmz6gM2EpWITE8MRYbjLt/exec'
                            const form = document.forms['wf-form-Return-Form']

                            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                .catch(error => console.error('Error!', error.message))
                        }

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
