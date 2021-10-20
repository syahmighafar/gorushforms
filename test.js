document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
  
  	if ($(bruhims).val().length == 0) {
      $("#mohorderarea").hide();
    }

    if ($(bruhims).val().length != 0) {
      $("#mohorderarea").fadeIn();
    }
    
    if ($(jpmc).val().length == 0) {
      $("#jpmcorderarea").hide();
    }

    if ($(jpmc).val().length != 0) {
      $("#jpmcorderarea").fadeIn();
    }
    
    if ($(panaga).val().length == 0) {
      $("#panagaorderarea").hide();
    }

    if ($(panaga).val().length != 0) {
      $("#panagaorderarea").fadeIn();
    }
	});		
});
