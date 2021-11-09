document.addEventListener("submit", function(event) {
  
  event.preventDefault();
  
  $(document).ready(function(){
    
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    
    var ampm = '';
    var ampmhour = '';
    var ampmmin = '';
    
    if (today.getHours()<12){
      ampm = 'am';
      ampmhour = (today.getHours());
    }

    if (today.getHours()==12){
      ampm = 'pm';
      ampmhour = (today.getHours());
    }

    if (today.getHours()>12){
      ampm = 'pm';
      ampmhour = (today.getHours() - 12);
    }

    if (today.getMinutes()<10){
      ampmmin = "0" + (today.getMinutes());
    }

    if (today.getMinutes()>=10){
      ampmmin = (today.getMinutes());
    }
    var time = ampmhour + ":" + ampmmin + " " + ampm;

    var dateTime = date+' '+time;
    document.getElementById("dateSubmitted").value = dateTime;
    
    document.getElementById("wf-form-Sign-Up-Form").submit();
});
});
