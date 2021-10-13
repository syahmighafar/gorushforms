document.addEventListener("DOMContentLoaded", function(event) {
  
  document.getElementById("submitbutton").addEventListener("click", tracknumber);
  
  function wfToTookan(){
  
    let orderId = document.getElementById("Bru-HIMS-Number").value;
    let jobDescription = document.getElementById("Type-Of-Mandatory").value;
    let customerEmail = document.getElementById("id-Email").value;
    let customerUsername = document.getElementById("Full-Name").value;
    let customerPhone = document.getElementById("Contact-Number").value;
    
    var request = new XMLHttpRequest();

    request.open('POST', 'https://api.tookanapp.com/v2/create_task');

    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };

    var body = {
      'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
      'order_id': orderId,
      'job_description': jobDescription,
      'customer_email': customerEmail,
      'customer_username': customerUsername,
      'customer_phone': customerPhone,
      'customer_address': 'Brunei',
      'latitude': '',
      'longitude': '',
      'job_delivery_datetime': '2021-10-31 21:00:00',
      'custom_field_template': '',
      'meta_data': [

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
  }
});
