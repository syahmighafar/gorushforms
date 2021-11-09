document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
	
		$("#senderarea").hide();
        	$("#receiverarea").hide();
		$("#paymentarea").hide();
		$("#codamountarea").hide();
		
		$("#sendernameArea").hide();
		$("#senderphoneArea").hide();
		$("#paymentnoticearea").hide();
		
		document.getElementById("Sender-Name").required = false;
		document.getElementById("Sender-Phone").required = false;
		document.getElementById("email").required = false;
		document.getElementById("Pick-Up-Address").required = false;
		document.getElementById("Pickup-Date").required = false;
	
		document.getElementById("Delivery-Type").required = false;
		
		document.getElementById("Sender-Name-Delivery").required = false;
		document.getElementById("Sender-Phone-Delivery").required = false;

		document.getElementById("Receiver-Name").required = false;
		document.getElementById("Receiver-Phone").required = false;
		document.getElementById("Delivery-Address").required = false;
		document.getElementById("Product-Type").required = false;
		document.getElementById("Product-Weight").required = false;
		document.getElementById("codrequired").required = false;
		document.getElementById("COD-Amount").required = false;

     		$('#Pickup-or-Delivery').change(function(){
			
			if($(this).val().length == 0) {
        			$("#senderarea").hide();
        			$("#receiverarea").hide();
				
				$("#sendernameArea").hide();
				$("#senderphoneArea").hide();
	     
				document.getElementById("Sender-Name").required = false;
				document.getElementById("Sender-Phone").required = false;
				document.getElementById("email").required = false;
				document.getElementById("Pick-Up-Address").required = false;
				document.getElementById("Pickup-Date").required = false;
	
				document.getElementById("Delivery-Type").required = false;
				
				document.getElementById("Sender-Name-Delivery").required = false;
				document.getElementById("Sender-Phone-Delivery").required = false;
				
				document.getElementById("Receiver-Name").required = false;
				document.getElementById("Receiver-Phone").required = false;
				document.getElementById("Delivery-Address").required = false;
				document.getElementById("Product-Type").required = false;
				document.getElementById("Product-Weight").required = false;
				document.getElementById("codrequired").required = false;
				document.getElementById("COD-Amount").required = false;
				
				$("#paymentarea").hide();
     			}
	     

     			if($(this).val()=="Pickup") {
        			$("#senderarea").fadeIn();
        			$("#receiverarea").hide();
				
				$("#sendernameArea").hide();
				$("#senderphoneArea").hide();
	     
				document.getElementById("Sender-Name").required = true;
				document.getElementById("Sender-Phone").required = true;
				document.getElementById("email").required = true;
				document.getElementById("Pick-Up-Address").required = true;
				document.getElementById("Pickup-Date").required = true;
	
				document.getElementById("Delivery-Type").required = false;
				
				document.getElementById("Sender-Name-Delivery").required = false;
				document.getElementById("Sender-Phone-Delivery").required = false;
				
				document.getElementById("Receiver-Name").required = false;
				document.getElementById("Receiver-Phone").required = false;
				document.getElementById("Delivery-Address").required = false;
				document.getElementById("Product-Type").required = false;
				document.getElementById("Product-Weight").required = false;
				document.getElementById("codrequired").required = false;
				document.getElementById("COD-Amount").required = false;
			
				$("#paymentarea").fadeIn();
	
     			}
     	
			if($(this).val()=="Delivery") {
	     
				$("#receiverarea").fadeIn();
				$("#senderarea").hide();
				
				$("#sendernameArea").fadeIn();
				$("#senderphoneArea").fadeIn();
	
				document.getElementById("Sender-Name").required = false;
				document.getElementById("Sender-Phone").required = false;
				document.getElementById("email").required = false;
				document.getElementById("Pick-Up-Address").required = false;
				document.getElementById("Pickup-Date").required = false;
	
				document.getElementById("Delivery-Type").required = true;
				
				document.getElementById("Sender-Name-Delivery").required = true;
				document.getElementById("Sender-Phone-Delivery").required = true;
				
				document.getElementById("Receiver-Name").required = true;
				document.getElementById("Receiver-Phone").required = true;
				document.getElementById("Delivery-Address").required = true;
				document.getElementById("Product-Type").required = true;
				document.getElementById("Product-Weight").required = true;
				document.getElementById("codrequired").required = true;
				document.getElementById("COD-Amount").required = false;
				
				$("#paymentarea").show();
	     
	     			$('#codrequired').change(function(){
					if($(this).val().length == 0) {
			     			$("#codamountarea").hide();
			     			document.getElementById("COD-Amount").required = false;
		     			}
					
		     			if($(this).val()=="Yes") {
			     			$("#codamountarea").fadeIn();
			     			document.getElementById("COD-Amount").required = true;
		     			}
		     		
					if($(this).val()=="No") {
			     			$("#codamountarea").hide();
			     			document.getElementById("COD-Amount").required = false;
		     			}
	     			});
     			}
		
			if($(this).val()==="Pickup and Delivery") {
        			$("#senderarea").fadeIn();
        			$("#receiverarea").fadeIn();
				
				$("#sendernameArea").hide();
				$("#senderphoneArea").hide();
		
				document.getElementById("Sender-Name").required = true;
				document.getElementById("Sender-Phone").required = true;
				document.getElementById("email").required = true;
				document.getElementById("Pick-Up-Address").required = true;
				document.getElementById("Pickup-Date").required = true;
		
				document.getElementById("Delivery-Type").required = true;
				
				document.getElementById("Sender-Name-Delivery").required = false;
				document.getElementById("Sender-Phone-Delivery").required = false;
				
				document.getElementById("Receiver-Name").required = true;
				document.getElementById("Receiver-Phone").required = true;
				document.getElementById("Delivery-Address").required = true;
				document.getElementById("Product-Type").required = true;
				document.getElementById("Product-Weight").required = true;
				document.getElementById("codrequired").required = true;
				document.getElementById("COD-Amount").required = false;
				
				$("#paymentarea").fadeIn();
		
				$('#codrequired').change(function(){
					if($(this).val().length == 0) {
			    			 $("#codamountarea").hide();
			     			document.getElementById("COD-Amount").required = true;
		     			}
					
		     			if($(this).val()=="Yes") {
			    			 $("#codamountarea").fadeIn();
			     			document.getElementById("COD-Amount").required = true;
		     			}
		     
					if($(this).val()=="No") {
			     			$("#codamountarea").hide();
			     			document.getElementById("COD-Amount").required = false;
		     			}
	     			});
		     
		    
	     		}
			
			$('#Payment-Method').change(function(){
			
				if ($(this).val().length == 0) {
					$("#paymentnoticearea").hide();
				}

				if ($(this).val()=="Cash On Delivery") {
					$("#paymentnoticearea").hide();
				}

				if ($(this).val()=="Bank Transfer") {
					$("#paymentnoticearea").fadeIn();
				}
			});
  		});

	});
	
});
