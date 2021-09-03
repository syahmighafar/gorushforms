document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
    
    		$("#deliverytypearea").hide();
    		$("#deliverychoicearea").hide();
    		$("#receiverarea").hide();
    		$("#codarea").hide();
    		$("#codamountarea").hide();
    		$("#paymentarea").hide();
    		$("#confirmationarea").hide();
	
		document.getElementById("COD-Amount").required = false;
    
    		document.getElementById("intronextbutton").addEventListener("click", function() {
  			if (($("#Agent-Name").val().length == 0 ) || ($("#Item-Description").val().length == 0 )) {
				$("#deliverytypearea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Agent-Name").val().length != 0) && ($("#Item-Description").val().length != 0)) {
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
  			if (($("#Receiver-Name").val().length == 0 ) || ($("#Receiver-Phone").val().length == 0 ) ||
				($("#Delivery-Address").val().length == 0 )) {
				$("#codarea").hide();
				alert("Please do not leave the required fields empty!");
			}
				
			if (($("#Receiver-Name").val().length != 0) && ($("#Receiver-Phone").val().length != 0) && ($("#Delivery-Address").val().length != 0)) {
				$("#deliverydetailsnextbutton").hide();
				$("#codarea").fadeIn();
			}
		});
		
		$('#COD-required').change(function(){
			if($(this).val().length == 0) {
			     	$("#codamountarea").hide();
				$("#paymentarea").hide();
			     	document.getElementById("COD-Amount").required = false;
		     	}
					
		     	if($(this).val()=="Yes") {
			     	$("#codamountarea").fadeIn();
				$("#paymentarea").hide();
			     	document.getElementById("COD-Amount").required = true;
				
				document.getElementById("codbuttonnext").addEventListener("click", function() {
  					if (($("#COD-Amount").val().length == 0 )) {
						$("#paymentarea").hide();
						alert("Please do not leave the required fields empty!");
					}
				
					if (($("#COD-Amount").val().length != 0)) {
						$("#codbuttonnext").hide();
						$("#paymentarea").fadeIn();
		     			}
				});
			}
		     		
			if($(this).val()=="No") {
			     	$("#codamountarea").hide();
				$("#paymentarea").fadeIn();
			     	document.getElementById("COD-Amount").required = false;
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
