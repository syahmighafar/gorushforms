document.addEventListener("DOMContentLoaded", function(event) {
  
  document.getElementById("submitbutton").addEventListener("click", wfToTookan);
  
  function wfToTookan(){
  
    let orderId = document.getElementById("bruhims").value;
    let jobDescription = document.getElementsByName("radioTOD").value;
    let customerEmail = document.getElementById("email").value;
    let customerUsername = document.getElementById("name").value;
    let customerPhone = document.getElementById("contact_1").value;
    let customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("address_3").value
     + ", " + document.getElementById("address_4").value;
    
    var todaysDate = new Date();
    
    var lastDate = "";
    
    if(jobDescription == "Standard"){
      if ( (todaysDate.getMonth() == 0)||(todaysDate.getMonth() == 2)||(todaysDate.getMonth() == 4)||(todaysDate.getMonth() == 6)||(todaysDate.getMonth() == 7)||
         (todaysDate.getMonth() == 9)||(todaysDate.getMonth() == 11) ){
          lastDate = todaysDate.getDate()+7;
          if(lastDate >= 31){
            var date = todaysDate.getFullYear()+'-'+(todaysDate.getMonth()+1)+'-'+(todaysDate.getDate()+7);
          }else{
            var date = todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+(todaysDate.getDate()+7);
          }
       }
      
      if ( (todaysDate.getMonth() == 3)||(todaysDate.getMonth() == 5)||(todaysDate.getMonth() == 8)||(todaysDate.getMonth() == 10) ){
          lastDate = todaysDate.getDate()+7;
          if(lastDate >= 30){
            var date = todaysDate.getFullYear()+'-'+(todaysDate.getMonth()+1)+'-'+(todaysDate.getDate()+7);
          }else{
            var date = todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+(todaysDate.getDate()+7);
          }
       }
      
      if (todaysDate.getMonth() == 1){
          lastDate = todaysDate.getDate()+7;
          if(lastDate >= 28){
            var date = todaysDate.getFullYear()+'-'+(todaysDate.getMonth()+1)+'-'+(todaysDate.getDate()+7);
          }else{
            var date = todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+(todaysDate.getDate()+7);
          }
       }
      var time = "17" + ":" + 00 + ":" + 00;
    }
    
    if(jobDescription == "Express"){
       if ( (todaysDate.getMonth() == 0)||(todaysDate.getMonth() == 2)||(todaysDate.getMonth() == 4)||(todaysDate.getMonth() == 6)||(todaysDate.getMonth() == 7)||
         (todaysDate.getMonth() == 9)||(todaysDate.getMonth() == 11) ){
          lastDate = todaysDate.getDate()+4;
          if(lastDate >= 31){
            var date = todaysDate.getFullYear()+'-'+(todaysDate.getMonth()+1)+'-'+(todaysDate.getDate()+7);
          }else{
            var date = todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+(todaysDate.getDate()+7);
          }
       }
      
      if ( (todaysDate.getMonth() == 3)||(todaysDate.getMonth() == 5)||(todaysDate.getMonth() == 8)||(todaysDate.getMonth() == 10) ){
          lastDate = todaysDate.getDate()+4;
          if(lastDate >= 30){
            var date = todaysDate.getFullYear()+'-'+(todaysDate.getMonth()+1)+'-'+(todaysDate.getDate()+7);
          }else{
            var date = todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+(todaysDate.getDate()+7);
          }
       }
      
      if (todaysDate.getMonth() == 1){
          lastDate = todaysDate.getDate()+4;
          if(lastDate >= 28){
            var date = todaysDate.getFullYear()+'-'+(todaysDate.getMonth()+1)+'-'+(todaysDate.getDate()+7);
          }else{
            var date = todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+(todaysDate.getDate()+7);
          }
       }
      var time = "17" + ":" + 00 + ":" + 00;
    }
    
    if(jobDescription == "Immediate"){
       var date = todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+todaysDate.getDate();
      var time = "17" + ":" + 00 + ":" + 00;
    }
    
    var fullDateTime = date+' '+time;
    
    let jobdeliverydatetime = fullDateTime;
    
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
      'customer_address': customerAddress,
      'latitude': '',
      'longitude': '',
      'job_delivery_datetime': jobdeliverydatetime,
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
