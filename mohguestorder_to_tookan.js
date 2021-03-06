document.addEventListener("submit", function(event) {
  
  event.preventDefault();
  
  $(document).ready(function(){
  
  let orderId = document.getElementById("bruhims").value;
  let jobDescription = document.querySelector('input[name=TypeofDelivery]:checked').value
  let customerEmail = document.getElementById("id-Email").value;
  let customerUsername = document.getElementById("name").value;
  let customerPhone = document.getElementById("contact_1").value;
  
  var customerAddress = "";
  
  if (document.getElementById("Simpang").value.length == 0){
    customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("address_4").value;
  } else{
    customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("Simpang").value
   + ", " + document.getElementById("address_4").value;
  }
  var jobdeliverydatetime = "";
  var todaysDate = new Date();

  if (todaysDate.getDate() >= 28){
    var date = todaysDate.getFullYear()+'-'+(todaysDate.getMonth()+2)+'-'+ 28;
  } else {
    var date = todaysDate.getFullYear()+'-'+(todaysDate.getMonth()+1)+'-'+ 28;
  }

    var time = "17:00:00";
  jobdeliverydatetime = date+' '+time;
    
    let customerIC = document.getElementById("icNumber").value;
  let customerRemarks = document.getElementById("re").value;
  let customerPM = document.querySelector('input[name=PaymentMethod]:checked').value
  let order_Origin = document.getElementById("orderOrigin").value;

  var request = new XMLHttpRequest();

  request.open('POST', 'https://api.tookanapp.com/v2/create_task');

  request.setRequestHeader('Content-Type', 'application/json');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
      document.getElementById("mohguestform").submit();
    }
  };

  var body = {
    'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
    'order_id': orderId,
    'job_description': jobDescription,
    'customer_email': customerEmail,
    'customer_username': customerUsername,
    'customer_phone': customerPhone,
    'customer_address': customerAddress,
    'latitude': '',
    'longitude': '',
    'job_delivery_datetime': jobdeliverydatetime,
    'custom_field_template': 'Local_Delivery',
      'meta_data': [{"label":"IC","data":customerIC},{"label":"Patient_Number","data":orderId},{"label":"Remarks","data":customerRemarks},
      {"label":"Type","data":jobDescription},{"label":"Method","data":customerPM},{"label":"Barcode","data":orderId},{"label":"OrderOriginFrom","data":order_Origin}],
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
