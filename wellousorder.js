document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
    
    		$("#deliverytypearea").hide();
    		$("#deliverychoicearea").hide();
    		$("#receiverarea").hide();
    		$("#paymentarea").hide();
    		$("#confirmationarea").hide();
    
    		document.getElementById("intronextbutton").addEventListener("click", function() {
  			if (($("#Agent-Name").val().length == 0 ) || ($("#Items").val().length == 0 )) {
				$("#deliverytypearea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Agent-Name").val().length != 0) && ($("#Items").val().length != 0)) {
				$("#intronextbutton").hide();
				$("#deliverytypearea").fadeIn();
			}
		});

     		$('#Delivery-Type').change(function(){
			
			if($(this).val().length == 0) {
        			$("#receiverarea").hide();
     			}
          
          		if ( ($(this).val()=="Standard") || ($(this).val()=="Self Collect at Go Rush Kiarong") ) {
        			$("#receiverarea").fadeIn();
     			}
	     	});
		
		document.getElementById("deliverydetailsnextbutton").addEventListener("click", function() {
  			if ( ($("#Receiver-Name").val().length == 0 ) || ($("#Receiver-Phone").val().length == 0 ) ||
				($("#District").val().length == 0 )||
				($("#Kampung").val().length == 0 )||
				($("#Jalan-Location").val().length == 0 )||
				($("#Simpang-Number").val().length == 0 )||
				($("#House-Unit-Number").val().length == 0 ) ) {
				$("#paymentarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Receiver-Name").val().length != 0) && ($("#Receiver-Phone").val().length != 0)
			    && ($("#District").val().length != 0)
			   && ($("#Kampung").val().length != 0)
			   && ($("#Jalan-Location").val().length != 0)
			   && ($("#Simpang-Number").val().length != 0)
			   && ($("#House-Unit-Number").val().length != 0)) {
				$("#deliverydetailsnextbutton").hide();
				$("#paymentarea").fadeIn();
			}
		});
			
		$('#Payment-Method').change(function(){
			if($(this).val().length == 0) {
				$("#confirmationarea").hide();
     			}
	     
     			if($(this).val()=="Bank Transfer") {
				$("#confirmationarea").fadeIn();
     			}
			
     			if($(this).val()=="Cash on Delivery") {
				$("#confirmationarea").fadeIn();
			}
		});
	});	
});
