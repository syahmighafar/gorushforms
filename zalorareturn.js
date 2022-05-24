document.addEventListener("DOMContentLoaded", function (event) {
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

            document.getElementById("dateSubmitted").value = dateTime;

            let customerEmail = document.getElementById("id-Email").value;
            let customerUsername = document.getElementById("Full-Name").value;
            let customerPhone = document.getElementById("Contact-Number-2").value;


            //check date for complete before date
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

            //API for pushing form data into Tookan
            var request = new XMLHttpRequest();

            request.open('POST', 'https://api.tookanapp.com/v2/create_task');

            request.setRequestHeader('Content-Type', 'application/json');

            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);

                    //use this to push form data into Gsheet

                    // const scriptURL = 'https://script.google.com/macros/s/AKfycbxbnu-T2ZyoqpBoFhOtBhgm3mCnsjqkBxj2j2T3BKBtE0asmz6gM2EpWITE8MRYbjLt/exec'
                    // const form = document.forms['formName']

                    // fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    //     .catch(error => console.error('Error!', error.message))

                    document.getElementById("formID").submit();
                }
            };

            var body = {
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'merchant_id': 'merchantIDhere',
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
                'tags': 'Return',
                'geofence': 0
            };
            request.send(JSON.stringify(body));
        });
    });
});
