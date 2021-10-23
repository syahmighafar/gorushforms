document.addEventListener("DOMContentLoaded", function(event) {
	$(document).ready(function(){
		
		$("#requesterarea").hide();
		$("#requesternextbutton").hide();
		
		$("#quarantineArea").hide();
		
		$("#selecthcarea").hide();
		$("#bmhcarea").hide();
		$("#tutonghcarea").hide();
		$("#belaithcarea").hide();
		$("#temburonghcarea").hide();
		$("#hcAreaMapAddress").hide();
		$("#clinicAddress").hide();
		
		$("#deliverymethodarea").hide();
		
		$("#expressArea").hide();
		$("#immediateArea").hide();
	
		$("#pricedurationarea").hide();
		$("#stdselfPrice").hide();
		$("#expPrice").hide();
		$("#immPrice").hide();
		$("#stdDuration").hide();
		$("#expDuration").hide();
		$("#immDuration").hide();
		$("#stdexpselfMessage").hide();
		$("#immMessage").hide();
		
		$("#mohnormalregArea").hide();
		$("#icarea").hide();
		$("#passportarea").hide();
		
		$("#addressArea").hide();
		$("#addressnextbutton").hide();
		
		$("#selfcollectarea").hide();
		$("#selfcollectnextbutton").hide();
		
		$("#paymentmethodarea").hide();
		$("#paymentnoticearea").hide();
		
		$("#remarkarea").hide();
		
		$("#agreementArea").hide();
		$("#stdAgree").hide();
		$("#expAgree").hide();
		$("#immAgree").hide();

		$("#submitbutton").hide();
		
		$('input[name=radioRequest]').change(function(){
			if($(this).val().length == 0) {
				$("#requesterarea").hide();
				$("#quarantineArea").hide();
				$("#requesternextbutton").hide();
				
				document.getElementById('Requester-Name').value = '';
				document.getElementById('Requester-Contact-Number').value = '';
     			}
			
			if($(this).val()=="No") {
				$("#requesterarea").hide();
				$("#quarantineArea").fadeIn();
				$("#requesternextbutton").hide();
				
				document.getElementById('Requester-Name').value = '';
				document.getElementById('Requester-Contact-Number').value = '';
     			}
	     
     			if($(this).val()=="Yes") {
				$("#requesterarea").fadeIn();
				$("#quarantineArea").hide();
				$("#requesternextbutton").fadeIn();
				
				document.getElementById("requesternextbutton").addEventListener("click", function() {
					if ( ($("#Requester-Name").val().length == 0 ) || ($("#Requester-Contact-Number").val().length == 0 ) ) {
					$("#quarantineArea").hide();
					alert("Please do not leave the required fields empty!");
					}

					if ( ($("#Requester-Name").val().length != 0) && ($("#Requester-Contact-Number").val().length != 0) ) {
						$("#requesternextbutton").hide();
						$("#quarantineArea").fadeIn();
					}
				});
     			}
		});

		$('input[name=radioQO]').change(function(){
			if ($(this).val().length == 0) {
				$("#selecthcarea").hide();
			}

			if ($(this).val().length != 0) {
				$("#selecthcarea").fadeIn();
			}
		});
		
		$('input[name=radioDistrict]').change(function(){
			if ($(this).val().length == 0) {
				
				$("#expressArea").hide();
				$("#immediateArea").hide();
				
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
				$("#clinicAddress").hide();
				
				$("#bmhcarea").hide();
				$("#tutonghcarea").hide();
				$("#belaithcarea").hide();
				$("#temburonghcarea").hide();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}

			if ($(this).val()=="Brunei Muara") {
				
				$("#expressArea").fadeIn();
				$("#immediateArea").fadeIn();
				
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
				$("#clinicAddress").hide();
				
				$("#bmhcarea").fadeIn();
				$("#tutonghcarea").hide();
				$("#belaithcarea").hide();
				$("#temburonghcarea").hide();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}
			
			if ($(this).val()=="Tutong") {
				
				$("#expressArea").hide();
				$("#immediateArea").hide();
				
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
				$("#clinicAddress").hide();
				
				$("#bmhcarea").hide();
				$("#tutonghcarea").fadeIn();
				$("#belaithcarea").hide();
				$("#temburonghcarea").hide();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}
			
			if ($(this).val()=="Belait") {
				
				$("#expressArea").hide();
				$("#immediateArea").hide();
				
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
				$("#clinicAddress").hide();
				
				$("#bmhcarea").hide();
				$("#tutonghcarea").hide();
				$("#belaithcarea").fadeIn();
				$("#temburonghcarea").hide();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}
			
			if ($(this).val()=="Temburong") {
				
				$("#expressArea").hide();
				$("#immediateArea").hide();
				
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
				$("#clinicAddress").hide();
				
				$("#bmhcarea").hide();
				$("#tutonghcarea").hide();
				$("#belaithcarea").hide();
				$("#temburonghcarea").fadeIn();
				
				document.getElementById('BNHC').value = '';
				document.getElementById('TUHC').value = '';
				document.getElementById('BHC').value = '';
				document.getElementById('TEHC').value = '';
			}
		});
		
		$('#BNHC').change(function(){
			if($(this).val().length == 0) {
				$("#deliverymethodarea").hide();
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
				$("#clinicAddress").hide();
     			}
			
			if($(this).val()=="Raja Isteri Pengiran Anak Saleha Hospital") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2805202346863!2d114.93130540523119!3d4.892630019678778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228acb18b46725%3A0x9118155b10d353ca!2sRaja%20Isteri%20Pengiran%20Anak%20Saleha%20Hospital!5e0!3m2!1sen!2sbn!4v1634281650713!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Pengkalan Batu Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9930134353094!2d114.81397081532558!3d4.771159642369682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322263643d7b9bf9%3A0xab86d8cb5835ceda!2sPengkalan%20Batu%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285210387!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			
			if($(this).val()=="Jubli Perak Sengkurong Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2877506842783!2d114.84314291532539!3d4.891412441334922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226084b479a23b%3A0xf3137ef638ed3cfd!2sJubli%20Perak%20Sengkurong%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285543314!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}

			if($(this).val()=="Jubli Emas Kg Perpindahan Bunut Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.547397189751!2d114.88291741532552!3d4.847486841715639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322261c61f38a619%3A0x3a6a37bd46269d3a!2sJubli%20Emas%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285599556!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}

			if($(this).val()=="Pengiran Anak Puteri Hajah Rashidah Sa'adatul Bolkiah Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3769360804904!2d114.9340483153255!3d4.876369041465689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228ac25aec45df%3A0x8707ccd2be1d106b!2sPAPHRSB%20SG%20ASAM%20HEALTH%20CENTRE!5e0!3m2!1sen!2sbn!4v1634285838280!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Pengiran Anak Puteri Hajah Muta-Wakillah Hayatul Bolkiah Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0479626441015!2d114.90431041532548!3d4.9316318409836315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f57fa2c50b8f%3A0x5e99dc6cafc60b21!2sPengiran%20Anak%20Puteri%20Hajah%20Muta-Wakillah%20Hayatul%20Bolkiah%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285881919!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Berakas Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.828175459776!2d114.9636824153256!3d4.96821124066185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f42787932131%3A0xf9ab86325b87674!2sPusat%20Kesihatan%20Berakas!5e0!3m2!1sen!2sbn!4v1634285920206!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}

			if($(this).val()=="Muara Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4576007276696!2d115.06447081532535!3d5.029285440119686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f06dcb40542b%3A0xdce8b6a5b55c836d!2sMuara%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285963322!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();	
     			}

			if($(this).val()=="KG Bolkiah") {
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
				$("#clinicAddress").fadeIn();
     			}

			if($(this).val()=="SG Bunga") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.1432004986946!2d115.01193264313245!3d4.915696991808234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f36f1f0926d9%3A0x5eb0de579e4e2269!2sSungai%20Bunga%20Health%20Clinic%2C%20Kampong%20Sungai%20Bunga!5e0!3m2!1sen!2sbn!4v1634286214099!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
		});
		
		$('#TUHC').change(function(){
			if($(this).val().length == 0) {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").hide();
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
     			}
	     
     			if($(this).val()=="Pengiran Muda Mahkota Pengiran Muda Haji Al-Muhtadee Billah Hospital") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7255630496174!2d114.66117111532566!3d4.817114541977045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9a59e46a5%3A0x62066e860030b362!2sPengiran%20Muda%20Mahkota%20Pengiran%20Muda%20Haji%20Al-Muhtadee%20Billah%20Hospital!5e0!3m2!1sen!2sbn!4v1634286463485!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Telisai Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1839730746256!2d114.5578142153256!3d4.738075742650269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222728d5f0c92a9%3A0xdae9ecd7acf168f9!2sTelisai%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286496075!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Pekan Tutong Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.719887312785!2d114.66105286532566!3d4.81808504196872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9c57b185f%3A0x24d45d637ed2282c!2sPusat%20Kesihatan%20Tutong!5e0!3m2!1sen!2sbn!4v1634286553112!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Sungai Kelugos Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7792578580184!2d114.76881401532557!3d4.807923542055853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322264370344a2a7%3A0xc548e1a7c1521657!2sSungai%20Kelugos%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286594839!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Lamunin Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5164928667486!2d114.7123597153257!3d4.67990954313922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32227a0759340203%3A0x40335e9d8c7eefc1!2sLamunin%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286641487!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
		});
		
		$('#BHC').change(function(){
			if($(this).val().length == 0) {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").hide();
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
     			}
	     
     			if($(this).val()=="Suri Seri Begawan Hospital") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.058923325921!2d114.19682271532564!3d4.583444243937976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa53c0d42c6b%3A0x4309941067d4ea11!2sSuri%20Seri%20Begawan%20Hospital!5e0!3m2!1sen!2sbn!4v1634286771871!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Kuala Belait Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9459.07903208395!2d114.20090259074068!3d4.584540049961497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa33ffffffff%3A0xabcd114352fec08d!2sKuala%20Belait%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286806620!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Seria Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.905812341586!2d114.33414371532547!3d4.610877343712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218a7ffbcb7121d%3A0x225eeee88bbd0d4e!2sSeria%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286841382!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Sungai Liang Health Centre") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5325189388823!2d114.49268721532552!3d4.677087943162768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32220b66a610f693%3A0x9385789cab5ba672!2sSungai%20Liang%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286874162!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
		});
		
		$('#TEHC').change(function(){
			if($(this).val().length == 0) {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").hide();
				document.getElementById("mapSource").src="";
				$("#hcAreaMapAddress").hide();
     			}
	     
     			if($(this).val()=="Pengiran Isteri Hajah Mariam Hospital") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3398029284485!2d115.0750711153255!3d4.710906342879327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222853b9a771fd5%3A0xb426306755a3d508!2sPengiran%20Isteri%20Hajjah%20Mariam%20Hospital!5e0!3m2!1sen!2sbn!4v1634286943427!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
			
			if($(this).val()=="Bangar Health Clinic") {
				$("#clinicAddress").hide();
				$("#deliverymethodarea").fadeIn();
				document.getElementById("mapSource").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.337380807763!2d115.07532101532566!3d4.711329842875782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322285c84bc026a1%3A0xcf7e5ef899e3115!2sKlinik%20Kesihatan%20Bangar%2C%20Temburong!5e0!3m2!1sen!2sbn!4v1634286972450!5m2!1sen!2sbn";
				$("#hcAreaMapAddress").fadeIn();
     			}
		});
		
		$('input[name=radioCred]').change(function(){
			if ($(this).val().length == 0) {
				$("#icarea").hide();
				$("#passportarea").hide();
        
        			document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}

			if ($(this).val()=="icNumber") {
				$("#icarea").fadeIn();
				$("#passportarea").hide();
        
        			document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}
      
      			if ($(this).val()=="passport") {
				$("#icarea").hide();
				$("#passportarea").fadeIn();
        
        			document.getElementById('icNumber').value = '';
				document.getElementById('passport').value = '';
			}
		});
		
		$('input[name=radioTOD]').change(function(){
			if ($(this).val().length == 0) {
				$("#mohnormalregArea").hide();
				
				$("#addressArea").hide();
				$("#addressnextbutton").hide();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();
				
				$("#pricedurationarea").hide();
				$("#stdselfPrice").hide();
				$("#expPrice").hide();
				$("#immPrice").hide();
				$("#stdDuration").hide();
				$("#expDuration").hide();
				$("#immDuration").hide();
				$("#stdexpselfMessage").hide();
				$("#immMessage").hide();
				$("#stdAgree").hide();
				$("#expAgree").hide();
				$("#immAgree").hide();
				
				document.getElementById('scDate').value = '';
			}

			if ($(this).val()=="Standard") {
				$("#mohnormalregArea").fadeIn();
				
				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();
				
				$("#pricedurationarea").fadeIn();
				$("#stdselfPrice").fadeIn();
				$("#expPrice").hide();
				$("#immPrice").hide();
				$("#stdDuration").fadeIn();
				$("#expDuration").hide();
				$("#immDuration").hide();
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();
				$("#stdAgree").fadeIn();
				$("#expAgree").hide();
				$("#immAgree").hide();
				
				document.getElementById('scDate').value = '';
			}
			
			if ($(this).val()=="Express") {
				$("#mohnormalregArea").fadeIn();
				
				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();
				
				$("#pricedurationarea").fadeIn();
				$("#stdselfPrice").hide();
				$("#expPrice").fadeIn();
				$("#immPrice").hide();
				$("#stdDuration").hide();
				$("#expDuration").fadeIn();
				$("#immDuration").hide();
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();
				$("#stdAgree").hide();
				$("#expAgree").fadeIn();
				$("#immAgree").hide();
				
				document.getElementById('scDate').value = '';
			}
			
			if ($(this).val()=="Immediate") {
				$("#mohnormalregArea").fadeIn();
				
				$("#addressArea").fadeIn();
				$("#addressnextbutton").fadeIn();

				$("#selfcollectarea").hide();
				$("#selfcollectnextbutton").hide();
				
				$("#pricedurationarea").fadeIn();
				$("#stdselfPrice").hide();
				$("#expPrice").hide();
				$("#immPrice").fadeIn();
				$("#stdDuration").hide();
				$("#expDuration").hide();
				$("#immDuration").fadeIn();
				$("#stdexpselfMessage").hide();
				$("#immMessage").fadeIn();
				$("#stdAgree").hide();
				$("#expAgree").hide();
				$("#immAgree").fadeIn();
				
				document.getElementById('scDate').value = '';
			}
			
			if ($(this).val()=="Self Collect") {
				$("#mohnormalregArea").fadeIn();
				
				$("#addressArea").hide();
				$("#addressnextbutton").hide();

				$("#selfcollectarea").fadeIn();
				$("#selfcollectnextbutton").fadeIn();
				
				$("#pricedurationarea").fadeIn();
				$("#stdselfPrice").fadeIn();
				$("#expPrice").hide();
				$("#immPrice").hide();
				$("#stdDuration").hide();
				$("#expDuration").hide();
				$("#immDuration").hide();
				$("#stdexpselfMessage").fadeIn();
				$("#immMessage").hide();
				$("#stdAgree").hide();
				$("#expAgree").hide();
				$("#immAgree").hide();
				
				document.getElementById('scDate').value = '';
			}
		});
		
		document.getElementById("addressnextbutton").addEventListener("click", function() {
			if ($('input[name=radioCred]').val() == "icNumber"){
				if ( ($("#name").val().length == 0 )||($("#icNumber").val().length == 0 )||($("#dob").val().length == 0 )
				    ||($("#contact_1").val().length == 0 )||($("#bruhims").val().length == 0 )||($("#address_1").val().length == 0 )
				    ||($("#address_2").val().length == 0 )||($("#address_4").val().length == 0 )) {
					$("#paymentmethodarea").hide();
					alert("Please do not leave the required fields empty!");
				}

				if ( ($("#name").val().length != 0)&&($("#icNumber").val().length != 0)&&($("#dob").val().length != 0)
				    &&($("#contact_1").val().length != 0)&&($("#bruhims").val().length != 0)&&($("#address_1").val().length != 0)
				    &&($("#address_2").val().length != 0)&&($("#address_4").val().length != 0)) {
					$("#addressnextbutton").hide();
					$("#paymentmethodarea").fadeIn();
				}
			}
			
			if ($('input[name=radioCred]').val() == "passport"){
				if ( ($("#name").val().length == 0 )||($("#passport").val().length == 0 )||($("#dob").val().length == 0 )
				    ||($("#contact_1").val().length == 0 )||($("#bruhims").val().length == 0 )||($("#address_1").val().length == 0 )
				    ||($("#address_2").val().length == 0 )||($("#address_4").val().length == 0 )) {
					$("#paymentmethodarea").hide();
					alert("Please do not leave the required fields empty!");
				}

				if ( ($("#name").val().length != 0)&&($("#passport").val().length != 0)&&($("#dob").val().length != 0)
				    &&($("#contact_1").val().length != 0)&&($("#bruhims").val().length != 0)&&($("#address_1").val().length != 0)
				    &&($("#address_2").val().length != 0)&&($("#address_4").val().length != 0)) {
					$("#addressnextbutton").hide();
					$("#paymentmethodarea").fadeIn();
				}
			}
		});
		
		document.getElementById("selfcollectnextbutton").addEventListener("click", function() {
			if ($('input[name=radioCred]').val() == "icNumber"){
				if ( ($("#name").val().length == 0 )||($("#icNumber").val().length == 0 )||($("#dob").val().length == 0 )
				    ||($("#contact_1").val().length == 0 )||($("#bruhims").val().length == 0 )||($("#scDate").val().length == 0 ) ) {
					$("#paymentmethodarea").hide();
					alert("Please do not leave the required fields empty!");
				}

				if ( ($("#name").val().length != 0)&&($("#icNumber").val().length != 0)&&($("#dob").val().length != 0)
				    &&($("#contact_1").val().length != 0)&&($("#bruhims").val().length != 0)&&($("#scDate").val().length != 0) ) {
					$("#selfcollectnextbutton").hide();
					$("#paymentmethodarea").fadeIn();
				}
			}
			
			if ($('input[name=radioCred]').val() == "passport"){
				if ( ($("#name").val().length == 0 )||($("#passport").val().length == 0 )||($("#dob").val().length == 0 )
				    ||($("#contact_1").val().length == 0 )||($("#bruhims").val().length == 0 )||($("#scDate").val().length == 0 ) ) {
					$("#paymentmethodarea").hide();
					alert("Please do not leave the required fields empty!");
				}

				if ( ($("#name").val().length != 0)&&($("#passport").val().length != 0)&&($("#dob").val().length != 0)
				    &&($("#contact_1").val().length != 0)&&($("#bruhims").val().length != 0)&&($("#scDate").val().length != 0) ) {
					$("#selfcollectnextbutton").hide();
					$("#paymentmethodarea").fadeIn();
				}
			}
		});
		
		$('input[name=radioPAY]').change(function(){
			
			if ($(this).val().length == 0) {
				$("#paymentnoticearea").hide();
				$("#remarkarea").hide();
				$("#agreementArea").hide();
				$("#submitbutton").hide();
			}

			if ($(this).val()=="Cash") {
				$("#paymentnoticearea").hide();
				$("#remarkarea").fadeIn();
				$("#agreementArea").fadeIn();
				$("#submitbutton").fadeIn();
			}
			
			if ($(this).val()=="Bank Transfer") {
				$("#paymentnoticearea").fadeIn();
				$("#remarkarea").fadeIn();
				$("#agreementArea").fadeIn();
				$("#submitbutton").fadeIn();
			}
		});
	});		
});
