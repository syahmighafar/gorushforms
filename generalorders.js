document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
	
		$("#senderarea").hide();
        	$("#receiverarea").hide();
		$("#paymentarea").hide();
		$("#codamountarea").hide();
	
		document.getElementById("Sender-Name").required = false;
		document.getElementById("Sender-Phone").required = false;
		document.getElementById("email").required = false;
		document.getElementById("Pick-Up-Address").required = false;
		document.getElementsByName("Pick-Up Date").required = false;
	
		document.getElementById("Delivery-Type").required = false;
		document.getElementById("Receiver-Name").required = false;
		document.getElementById("Receiver-Phone").required = false;
		document.getElementById("Delivery-Address").required = false;
		document.getElementsByName("Delivery Date").required = false;
		document.getElementById("Product-Type").required = false;
		document.getElementById("Product-Weight").required = false;
		document.getElementById("codrequired").required = false;
		document.getElementById("COD-Amount").required = false;
	
		$("#deliverychoicearea").hide();
		document.getElementById("Mandatory-Option").required = false;

     		$('#Pickup-or-Delivery').change(function(){
	     
	     		$("#paymentarea").hide();
	     

     			if($(this).val()=="Pickup") {
        			$("#senderarea").show();
        			$("#receiverarea").hide();
	     
				document.getElementById("Sender-Name").required = true;
				document.getElementById("Sender-Phone").required = true;
				document.getElementById("email").required = true;
				document.getElementById("Pick-Up-Address").required = true;
				document.getElementsByName("Pick-Up Date").required = true;
	
				document.getElementById("Delivery-Type").required = false;
				document.getElementById("Receiver-Name").required = false;
				document.getElementById("Receiver-Phone").required = false;
				document.getElementById("Delivery-Address").required = false;
				document.getElementsByName("Delivery Date").required = false;
				document.getElementById("Product-Type").required = false;
				document.getElementById("Product-Weight").required = false;
				document.getElementById("codrequired").required = false;
				document.getElementById("COD-Amount").required = false;
				
				$("#deliverychoicearea").hide();
				document.getElementById("Mandatory-Option").required = false;
	
     			}
     	
			if($(this).val()=="Delivery") {
	     
				$("#receiverarea").show();
				$("#senderarea").hide();
	
				document.getElementById("Sender-Name").required = false;
				document.getElementById("Sender-Phone").required = false;
				document.getElementById("email").required = false;
				document.getElementById("Pick-Up-Address").required = false;
				document.getElementsByName("Pick-Up Date").required = false;
	
				document.getElementById("Delivery-Type").required = true;
				document.getElementById("Receiver-Name").required = true;
				document.getElementById("Receiver-Phone").required = true;
				document.getElementById("Delivery-Address").required = true;
				document.getElementsByName("Delivery Date").required = true;
				document.getElementById("Product-Type").required = true;
				document.getElementById("Product-Weight").required = true;
				document.getElementById("codrequired").required = true;
				document.getElementById("COD-Amount").required = false;
				
				$("#deliverychoicearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				
				$('#Delivery-Type').change(function(){
	     
     					if($(this).val().includes("Delivery")) {
						$("#deliverychoicearea").show();
						document.getElementById("Mandatory-Option").required = true;
     					}
			
     					if($(this).val().includes("Self Collect")) {
						$("#deliverychoicearea").hide();
						document.getElementById("Mandatory-Option").required = false;
					}
				});
	     
	     			$('#codrequired').change(function(){
		     			if($(this).val()=="Yes") {
			     			$("#codamountarea").show();
			     			document.getElementById("COD-Amount").required = true;
		     			}
		     		
					if($(this).val()=="No") {
			     			$("#codamountarea").hide();
			     			document.getElementById("COD-Amount").required = false;
		     			}
	     			});
	     
	     
     			}
		
			if($(this).val()=="Pickup and Delivery") {
        			$("#senderarea").show();
        			$("#receiverarea").show();
		
				document.getElementById("Sender-Name").required = true;
				document.getElementById("Sender-Phone").required = true;
				document.getElementById("email").required = true;
				document.getElementById("Pick-Up-Address").required = true;
				document.getElementsByName("Pick-Up Date").required = true;
		
				document.getElementById("Delivery-Type").required = true;
				document.getElementById("Receiver-Name").required = true;
				document.getElementById("Receiver-Phone").required = true;
				document.getElementById("Delivery-Address").required = true;
				document.getElementsByName("Delivery Date").required = true;
				document.getElementById("Product-Type").required = true;
				document.getElementById("Product-Weight").required = true;
				document.getElementById("codrequired").required = true;
				document.getElementById("COD-Amount").required = false;
				
				$("#deliverychoicearea").hide();
				document.getElementById("Mandatory-Option").required = false;
				
				$('#Delivery-Type').change(function(){
	     
     					if($(this).val().includes("Delivery")) {
						$("#deliverychoicearea").show();
						document.getElementById("Mandatory-Option").required = true;
     					}
			
     					if($(this).val().includes("Self Collect")) {
						$("#deliverychoicearea").hide();
						document.getElementById("Mandatory-Option").required = false;
					}
				});
		
				$('#codrequired').change(function(){
		     			if($(this).val()=="Yes") {
			    			 $("#codamountarea").show();
			     			document.getElementById("COD-Amount").required = true;
		     			}
		     
					if($(this).val()=="No") {
			     			$("#codamountarea").hide();
			     			document.getElementById("COD-Amount").required = false;
		     			}
	     			});
		     
		    
	     		}

	     		$("#paymentarea").show();

  		});

	});
	
});
