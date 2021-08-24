document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
	
		$("#dispatcherareanotice").hide();

     		$('#Position-Applied').change(function(){
	     
     			if($(this).val()=="Dispatcher") {
				    $("#dispatcherareanotice").show();
     			}
			
     			if($(this).val()!="Dispatcher") {
				    $("#dispatcherareanotice").hide();
     			}
		});
	});	
});
