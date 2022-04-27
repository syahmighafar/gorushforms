document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
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

          //needed for tracking num reference
          let dropoffreturnOrderId = "DORTN" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

          let customerUsername = document.getElementById("Full-Name").value;
          let customerEmail = document.getElementById("Email").value;
          let customerPhone = document.getElementById("Contact-Number").value;
          let customerAddress = document.getElementById("Address").value;
          let originalTrackingNum = document.getElementById("OriginalTrackingNumber").value;

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
                              if (json_responseo.data[i].custom_field["length"] == 5) {
                                  if (json_responseo.data[i].custom_field[4].data == dropoffreturnOrderId) {
                                    //you need hidden tookan-tracking id field
                                      document.getElementById("Tookan-Tracking").value = json_responseo.data[i].job_id;
                                      i = counttaskhistory;
                                  }
                              }
                          }

                          request.open('POST', 'https://api.tookanapp.com/v2/edit_task');
                          request.setRequestHeader('Content-Type', 'application/json');

                          request.onreadystatechange = function () {
                              if (this.readyState === 4) {
                                  console.log('Status:', this.status);
                                  console.log('Headers:', this.getAllResponseHeaders());
                                  console.log('Body:', this.responseText);
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
              'job_description': '',
              'customer_email': customerEmail,
              'customer_username': customerUsername,
              'customer_phone': customerPhone,
              'customer_address': customerAddress,
              'latitude': '',
              'longitude': '',
              'job_delivery_datetime': jobdeliverydatetime,
              'custom_field_template': 'Drop_Off_Return',
              'meta_data': [
                  { "label": "Old_Tracking_Number", "data": originalTrackingNum },
                  { "label": "Name", "data": customerUsername },
                  { "label": "Phone_Number", "data": customerPhone },
                  { "label": "Date_Time_Submitted", "data": dateSubmitted },
                  { "label": "DropOffReturn_Order_ID", "data": dropoffreturnOrderId }
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
              'tags': '',
              'geofence': 0
          };
          request.send(JSON.stringify(body));
    });
});
