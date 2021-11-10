document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
    
    		$("#deliverytypearea").hide();
    		$("#deliverychoicearea").hide();
    		$("#receiverarea").hide();
    		$("#confirmationarea").hide();
    
    		document.getElementById("intronextbutton").addEventListener("click", function() {
  			if (($("#Agent-Name").val().length == 0 ) || ($("#Items").val().length == 0 )) {
				$("#receiverarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Agent-Name").val().length != 0) && ($("#Items").val().length != 0)) {
				$("#intronextbutton").hide();
				$("#receiverarea").fadeIn();
			}
		});
		
		document.getElementById("deliverydetailsnextbutton").addEventListener("click", function() {
  			if ( ($("#Tracking-Number").val().length == 0 ) || ($("#AWB-Number").val().length == 0 ) ||
				($("#Reference-Number").val().length == 0 )||
				($("#Arrival-Date").val().length == 0 ) ) {
				$("#confirmationarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Tracking-Number").val().length != 0) && ($("#AWB-Number").val().length != 0)
			    && ($("Reference-Number").val().length != 0)
			   && ($("#Arrival-Date").val().length != 0) ) {
				$("#deliverydetailsnextbutton").hide();
				$("#confirmationarea").fadeIn();
			}
		});
	});	
});
