document.addEventListener("submit", function(event) {
  
  event.preventDefault();
  
  $(document).ready(function(){
    
  let agentName = document.getElementById("Agent-Name").value; 
  
  let wellousItems = document.getElementById("Items").value;
  let receiverName = document.getElementById("Receiver-Name").value;
  let receiverPhone = document.getElementById("contact_1").value;
  let jobDescription = document.getElementById("Delivery-Type").value;
  
  var receiverAddress = "";
  
  if (document.getElementById("Simpang").value.length == 0){
    receiverAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("address_4").value;
  } else{
    receiverAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("Simpang").value
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
      document.getElementById("wf-form-Wellous-Order-Form").submit();
    }
  };

  var body = {
    'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
    'order_id': '',
    'job_description': jobDescription,
    'customer_email': '',
    'customer_username': receiverName,
    'customer_phone': receiverPhone,
    'customer_address': receiverAddress,
    'latitude': '',
    'longitude': '',
    'job_delivery_datetime': jobdeliverydatetime,
    'custom_field_template': 'Wellous_Delivery',
      'meta_data': [{"label":"Agent_Name","data":agentName},{"label":"Products","data":wellousItems},{"label":"Method","data":customerPM},{"label":"OrderOriginFrom","data":order_Origin}],
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
