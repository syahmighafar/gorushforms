document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        var countAgree = 0;
        var gsheetreturn = 1;
        var exportzaloraGsheet = 1;

        $("#agreementArea").hide();

        $("#pleasewait").hide();

        $("#submitbutton").hide();

        document.getElementById("nextbutton").addEventListener("click", function () {
            if (($("#Full-Name").val().length == 0)) {
                $("#agreementArea").hide();
                alert("Please do not leave the full name field empty!");
            }

            if (($("#id-Email").val().length == 0)) {
                $("#agreementArea").hide();
                alert("Please do not leave the email field empty!");
            }

            if (($("#Contact-Number-2").val().length == 0)) {
                $("#agreementArea").hide();
                alert("Please do not leave the contact number field empty!");
            }

            if (($("#Postal-Code").val().length == 0)) {
                $("#agreementArea").hide();
                alert("Please do not leave the postal code field empty!");
            }

            if (($("#Home-Address-2").val().length == 0)) {
                $("#agreementArea").hide();
                alert("Please do not leave the home address field empty!");
            }

            if (($("#Item-Description").val().length == 0)) {
                $("#agreementArea").hide();
                alert("Please do not leave the item description field empty!");
            }

            if (($("#OriginalTrackingNumber").val().length == 0)) {
                $("#agreementArea").hide();
                alert("Please do not leave the original tracking number field empty!");
            }

            if (($("#Full-Name").val().length != 0) && ($("#id-Email").val().length != 0) && ($("#Contact-Number-2").val().length != 0) &&
                ($("#Postal-Code").val().length != 0) && ($("#Home-Address-2").val().length != 0) && ($("#Item-Description").val().length != 0) &&
                ($("#OriginalTrackingNumber").val().length != 0)) {
                $("#nextbutton").hide();
                $("#agreementArea").fadeIn();
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

                let returnOrderId = "RTN" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

                let customerEmail = document.getElementById("id-Email").value;
                let customerUsername = document.getElementById("Full-Name").value;
                let customerPhone = document.getElementById("Contact-Number-2").value;
                let originalTrackingNum = document.getElementById("OriginalTrackingNumber").value;
                let customerAddress = document.getElementById("Home-Address-2").value

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
                                    if (json_responseo.data[i].custom_field["length"] == 6) {
                                        if (json_responseo.data[i].custom_field[5].data == returnOrderId) {
                                            document.getElementById("Tookan-Tracking").value = json_responseo.data[i].job_id;
                                            i = counttaskhistory;
                                        }
                                    }
                                }

                                if (exportzaloraGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbxKsUipQWVqgMdAXkpmyxMogwEGo08WMqzh51CmPETIXpOdBbvBt-34uUwPdbBSysBX/exec'
                                    const form = document.forms['wf-form-Return-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (gsheetreturn == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbxbnu-T2ZyoqpBoFhOtBhgm3mCnsjqkBxj2j2T3BKBtE0asmz6gM2EpWITE8MRYbjLt/exec'
                                    const form = document.forms['wf-form-Return-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                request.open('POST', 'https://api.tookanapp.com/v2/edit_task');
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
                                    'barcode': document.getElementById("Tookan-Tracking").value,
                                    'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                    'job_id': document.getElementById("Tookan-Tracking").value,
                                    'notify': 1
                                };

                                request.send(JSON.stringify(body));
                            }
                        };

                        var body = {
                            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                            'order_ids': [
                                originalTrackingNum
                            ],
                            'include_task_history': 0
                        };

                        request.send(JSON.stringify(body));
                    }
                };

                var body = {
                    'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                    'order_id': originalTrackingNum,
                    'job_description': 'RTN TO MY',
                    'customer_email': customerEmail,
                    'customer_username': customerUsername,
                    'customer_phone': customerPhone,
                    'customer_address': 'JADE E SERVICES MALAYSIA SDN BHD, Block A , Mapletree Distripark Persiaran Perusahan, Seksyen 23,Shah Alam, Selangor, Malaysia,',
                    'latitude': '',
                    'longitude': '',
                    'job_delivery_datetime': jobdeliverydatetime,
                    'custom_field_template': 'Returns',
                    'meta_data': [
                        { "label": "Old_Tracking_Number", "data": originalTrackingNum },
                        { "label": "Customer_Name", "data": customerUsername },
                        { "label": "Phone_Number", "data": customerPhone },
                        { "label": "Address", "data": customerAddress },
                        { "label": "Date_Time_Submitted", "data": dateSubmitted },
                        { "label": "Return_Order_ID", "data": returnOrderId }
                    ],
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
            }
        });
    });
});
