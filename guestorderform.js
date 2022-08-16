document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        var createPharmacySheet = 1;
        var medicineDBGsheet = 1;
        var gsheet2 = 1;
        var split = 1;
        var medicineDBjpmcGsheet = 1;
        var gsheetPanagaHC = 1;
        var gobeliDailyReceiveSheet = 1;

        const $name = $('#name');
        const $submitForm = $('#guestorderform');
        const $successTextName = $('.guestcustommessagename');
        const $successTextTN = $('.guestcustommessagetn');

        let customSuccessMessageName = $name.val();
        let customSuccessMessageTN = document.getElementById("Tookan-Tracking").value;

        // when the form's submit button is clicked 
        $submitForm.submit(function (e) {
            customSuccessMessageName = $name.val();

            // if the user selected an option on the select field

            $successTextName.text(`Thank you ${customSuccessMessageName}!`);
            $successTextTN.text(`Your tracking number will be ${customSuccessMessageTN}`);
        });

        const d = new Date();
        let hour = d.getHours();
        let day = d.getDay();

        $(document).on("change", ".itemprice", function () {
            var sum = 0;
            $(".itemprice").each(function () {
                sum += +$(this).val();
            });
            $("#Total-Price").val(sum);
        });

        $('input[name=district]').change(function () {
            if ($(this).val().length == 0) {
                $("#mohhideimm").hide();
                $("#mohhideexp").hide();
                $("#mohimmidiate").hide();
                $("#mohexpress").hide();
                $("#mohstandard").hide();

                $("#jpmcexpressbm").hide();
                $("#jpmcstandardbm").hide();
                $("#jpmcstandardttg").hide();
                $("#jpmcstandardkb").hide();
                $("#jpmcstandardtemb").hide();

                $("#phcstandardkb").hide();
                $("#phcstandardttg").hide();
                $("#phcstandardbm").hide();
                $("#phcstandardtemb").hide();

                $("#sectionone").hide();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").hide();

                $('input[name=products]').attr('checked', false);

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = '';
                document.getElementById("healthCentreTEMB").value = '';
                document.getElementById("healthCentreKB").value = '';
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = '';
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = '';
                document.getElementById("commodities").value = '';
                document.getElementById("currency").value = '';
                document.getElementById("weight").value = '';
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = '';
                document.getElementById("Quantity").value = '';
                document.getElementById("Total-Item-Price").value = '';
                document.getElementById("itemPrice").value = '';

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = '';
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = '';
                document.getElementById("productdescription").value = '';
                document.getElementById("producttype").value = '';
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = '';
                document.getElementById("receiverName").value = '';
                document.getElementById("receiverHouse").value = '';
                document.getElementById("receiverKampong").value = '';
                document.getElementById("receiverJalan").value = '';
                document.getElementById("receiverSimpang").value = '';
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = '';
                document.getElementById("receiverEmail").value = '';
                document.getElementById("receiverContact_1").value = '';

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = '';
                document.getElementById("paymentmethod").value = '';
                document.getElementById("remarks").value = '';
            }

            if ($(this).val() == "Brunei Muara") {
                $("#mohhideimm").fadeIn();
                $("#mohhideexp").fadeIn();
                $("#mohimmidiate").fadeIn();
                $("#mohexpress").fadeIn();
                $("#mohstandard").fadeIn();

                $("#jpmcexpressbm").fadeIn();
                $("#jpmcstandardbm").fadeIn();
                $("#jpmcstandardttg").hide();
                $("#jpmcstandardkb").hide();
                $("#jpmcstandardtemb").hide();

                $("#phcstandardkb").hide();
                $("#phcstandardttg").hide();
                $("#phcstandardbm").fadeIn();
                $("#phcstandardtemb").hide();

                $("#sectionone").hide();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").hide();

                $('input[name=products]').attr('checked', false);

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = '';
                document.getElementById("healthCentreTEMB").value = '';
                document.getElementById("healthCentreKB").value = '';
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = '';
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = '';
                document.getElementById("commodities").value = '';
                document.getElementById("currency").value = '';
                document.getElementById("weight").value = '';
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = '';
                document.getElementById("Quantity").value = '';
                document.getElementById("Total-Item-Price").value = '';
                document.getElementById("itemPrice").value = '';

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = '';
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = '';
                document.getElementById("productdescription").value = '';
                document.getElementById("producttype").value = '';
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = '';
                document.getElementById("receiverName").value = '';
                document.getElementById("receiverHouse").value = '';
                document.getElementById("receiverKampong").value = '';
                document.getElementById("receiverJalan").value = '';
                document.getElementById("receiverSimpang").value = '';
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = '';
                document.getElementById("receiverEmail").value = '';
                document.getElementById("receiverContact_1").value = '';

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = '';
                document.getElementById("paymentmethod").value = '';
                document.getElementById("remarks").value = '';
            }

            if ($(this).val() == "Tutong") {
                $("#mohhideimm").hide();
                $("#mohhideexp").hide();
                $("#mohimmidiate").hide();
                $("#mohexpress").hide();
                $("#mohstandard").fadeIn();

                $("#jpmcexpressbm").hide();
                $("#jpmcstandardbm").hide();
                $("#jpmcstandardttg").fadeIn();
                $("#jpmcstandardkb").hide();
                $("#jpmcstandardtemb").hide();

                $("#phcstandardkb").hide();
                $("#phcstandardttg").fadeIn();
                $("#phcstandardbm").hide();
                $("#phcstandardtemb").hide();

                $("#sectionone").hide();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").hide();

                $('input[name=products]').attr('checked', false);

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = '';
                document.getElementById("healthCentreTEMB").value = '';
                document.getElementById("healthCentreKB").value = '';
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = '';
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = '';
                document.getElementById("commodities").value = '';
                document.getElementById("currency").value = '';
                document.getElementById("weight").value = '';
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = '';
                document.getElementById("Quantity").value = '';
                document.getElementById("Total-Item-Price").value = '';
                document.getElementById("itemPrice").value = '';

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = '';
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = '';
                document.getElementById("productdescription").value = '';
                document.getElementById("producttype").value = '';
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = '';
                document.getElementById("receiverName").value = '';
                document.getElementById("receiverHouse").value = '';
                document.getElementById("receiverKampong").value = '';
                document.getElementById("receiverJalan").value = '';
                document.getElementById("receiverSimpang").value = '';
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = '';
                document.getElementById("receiverEmail").value = '';
                document.getElementById("receiverContact_1").value = '';

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = '';
                document.getElementById("paymentmethod").value = '';
                document.getElementById("remarks").value = '';
            }

            if ($(this).val() == "Temburong") {
                $("#mohhideimm").hide();
                $("#mohhideexp").hide();
                $("#mohimmidiate").hide();
                $("#mohexpress").hide();
                $("#mohstandard").fadeIn();

                $("#jpmcexpressbm").hide();
                $("#jpmcstandardbm").hide();
                $("#jpmcstandardttg").hide();
                $("#jpmcstandardkb").hide();
                $("#jpmcstandardtemb").fadeIn();

                $("#phcstandardkb").hide();
                $("#phcstandardttg").hide();
                $("#phcstandardbm").hide()
                $("#phcstandardtemb").fadeIn();

                $("#sectionone").hide();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").hide();

                $('input[name=products]').attr('checked', false);

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = '';
                document.getElementById("healthCentreTEMB").value = '';
                document.getElementById("healthCentreKB").value = '';
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = '';
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = '';
                document.getElementById("commodities").value = '';
                document.getElementById("currency").value = '';
                document.getElementById("weight").value = '';
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = '';
                document.getElementById("Quantity").value = '';
                document.getElementById("Total-Item-Price").value = '';
                document.getElementById("itemPrice").value = '';

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = '';
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = '';
                document.getElementById("productdescription").value = '';
                document.getElementById("producttype").value = '';
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = '';
                document.getElementById("receiverName").value = '';
                document.getElementById("receiverHouse").value = '';
                document.getElementById("receiverKampong").value = '';
                document.getElementById("receiverJalan").value = '';
                document.getElementById("receiverSimpang").value = '';
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = '';
                document.getElementById("receiverEmail").value = '';
                document.getElementById("receiverContact_1").value = '';

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = '';
                document.getElementById("paymentmethod").value = '';
                document.getElementById("remarks").value = '';
            }

            if ($(this).val() == "Belait") {
                $("#mohhideimm").hide();
                $("#mohhideexp").hide();
                $("#mohimmidiate").hide();
                $("#mohexpress").hide();
                $("#mohstandard").fadeIn();

                $("#jpmcexpressbm").hide();
                $("#jpmcstandardbm").hide();
                $("#jpmcstandardttg").hide();
                $("#jpmcstandardkb").fadeIn();
                $("#jpmcstandardtemb").hide();

                $("#phcstandardkb").fadeIn();
                $("#phcstandardttg").hide();
                $("#phcstandardbm").hide();
                $("#phcstandardtemb").hide();

                $("#sectionone").hide();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").hide();

                $('input[name=products]').attr('checked', false);

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = '';
                document.getElementById("healthCentreTEMB").value = '';
                document.getElementById("healthCentreKB").value = '';
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = '';
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = '';
                document.getElementById("commodities").value = '';
                document.getElementById("currency").value = '';
                document.getElementById("weight").value = '';
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = '';
                document.getElementById("Quantity").value = '';
                document.getElementById("Total-Item-Price").value = '';
                document.getElementById("itemPrice").value = '';

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = '';
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = '';
                document.getElementById("productdescription").value = '';
                document.getElementById("producttype").value = '';
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = '';
                document.getElementById("receiverName").value = '';
                document.getElementById("receiverHouse").value = '';
                document.getElementById("receiverKampong").value = '';
                document.getElementById("receiverJalan").value = '';
                document.getElementById("receiverSimpang").value = '';
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = '';
                document.getElementById("receiverEmail").value = '';
                document.getElementById("receiverContact_1").value = '';

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = '';
                document.getElementById("paymentmethod").value = '';
                document.getElementById("remarks").value = '';
            }
        });

        document.getElementById("personalNextBtn").addEventListener("click", function () {
            if (($("#name").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your name field empty!");
            }

            if (($("#house").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your house/unit number field empty!");
            }

            if (($("#kampong").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your kampong field empty!");
            }

            if (($("#jalan").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your jalan field empty!");
            }

            if (($("input[name=district]").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your district field empty!");
            }

            if (($("#contact_1").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your phone number field empty!");
            }

            if (($("#name").val().length != 0) && ($("#house").val().length != 0)
                && ($("#kampong").val().length != 0) && ($("#jalan").val().length != 0)
                && ($("input[name=district]").val().length != 0)
                && ($("#contact_1").val().length != 0)) {
                $("#personalNextBtn").hide();
                $("#personalsection").hide();
                $("#productNextBtn").fadeIn();
                $("#productsPrevBtn").fadeIn();
                $("#productsection").fadeIn();
            }
        });

        $('input[name=products]').change(function () {
            if ($(this).val().length == 0) {
                $("#sectionone").hide();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").hide();

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = "";
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = "";
                document.getElementById("commodities").value = "";
                document.getElementById("currency").value = "";
                document.getElementById("weight").value = "";
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = "";
                document.getElementById("Quantity").value = "";
                document.getElementById("Total-Item-Price").value = "";
                document.getElementById("itemPrice").value = "";

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = "";
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = "";
                document.getElementById("productdescription").value = "";
                document.getElementById("producttype").value = "";
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = "";
                document.getElementById("receiverName").value = "";
                document.getElementById("receiverHouse").value = "";
                document.getElementById("receiverKampong").value = "";
                document.getElementById("receiverJalan").value = "";
                document.getElementById("receiverSimpang").value = "";
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = "";
                document.getElementById("receiverEmail").value = "";
                document.getElementById("receiverContact_1").value = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "pharmacymoh") {
                $("#sectionone").fadeIn();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").fadeIn();
                $("#hcAreaMapAddress").fadeIn();
                $("#clinicAddress").fadeIn();

                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").fadeIn();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").fadeIn();

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = "";
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = "";
                document.getElementById("commodities").value = "";
                document.getElementById("currency").value = "";
                document.getElementById("weight").value = "";
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = "";
                document.getElementById("Quantity").value = "";
                document.getElementById("Total-Item-Price").value = "";
                document.getElementById("itemPrice").value = "";

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = "";
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = "";
                document.getElementById("productdescription").value = "";
                document.getElementById("producttype").value = "";
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = "";
                document.getElementById("receiverName").value = "";
                document.getElementById("receiverHouse").value = "";
                document.getElementById("receiverKampong").value = "";
                document.getElementById("receiverJalan").value = "";
                document.getElementById("receiverSimpang").value = "";
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = "";
                document.getElementById("receiverEmail").value = "";
                document.getElementById("receiverContact_1").value = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "pharmacyjpmc") {
                $("#sectionone").fadeIn();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").fadeIn();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").fadeIn();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").fadeIn();

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = "";
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = "";
                document.getElementById("commodities").value = "";
                document.getElementById("currency").value = "";
                document.getElementById("weight").value = "";
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = "";
                document.getElementById("Quantity").value = "";
                document.getElementById("Total-Item-Price").value = "";
                document.getElementById("itemPrice").value = "";

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = "";
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = "";
                document.getElementById("productdescription").value = "";
                document.getElementById("producttype").value = "";
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = "";
                document.getElementById("receiverName").value = "";
                document.getElementById("receiverHouse").value = "";
                document.getElementById("receiverKampong").value = "";
                document.getElementById("receiverJalan").value = "";
                document.getElementById("receiverSimpang").value = "";
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = "";
                document.getElementById("receiverEmail").value = "";
                document.getElementById("receiverContact_1").value = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "pharmacyphc") {
                $("#sectionone").fadeIn();
                $("#sectiontwo").hide();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").fadeIn();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").fadeIn();

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = "";
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = "";
                document.getElementById("commodities").value = "";
                document.getElementById("currency").value = "";
                document.getElementById("weight").value = "";
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = "";
                document.getElementById("Quantity").value = "";
                document.getElementById("Total-Item-Price").value = "";
                document.getElementById("itemPrice").value = "";

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = "";
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = "";
                document.getElementById("productdescription").value = "";
                document.getElementById("producttype").value = "";
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = "";
                document.getElementById("receiverName").value = "";
                document.getElementById("receiverHouse").value = "";
                document.getElementById("receiverKampong").value = "";
                document.getElementById("receiverJalan").value = "";
                document.getElementById("receiverSimpang").value = "";
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = "";
                document.getElementById("receiverEmail").value = "";
                document.getElementById("receiverContact_1").value = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "grp") {
                $("#sectionone").hide();
                $("#sectiontwo").fadeIn();
                $("#sectionthree").hide();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").hide();
                $("#paymentmethodarea").hide();

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = "";
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = "";
                document.getElementById("commodities").value = "";
                document.getElementById("currency").value = "";
                document.getElementById("weight").value = "";
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = "";
                document.getElementById("Quantity").value = "";
                document.getElementById("Total-Item-Price").value = "";
                document.getElementById("itemPrice").value = "";

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = "";
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = "";
                document.getElementById("productdescription").value = "";
                document.getElementById("producttype").value = "";
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = "";
                document.getElementById("receiverName").value = "";
                document.getElementById("receiverHouse").value = "";
                document.getElementById("receiverKampong").value = "";
                document.getElementById("receiverJalan").value = "";
                document.getElementById("receiverSimpang").value = "";
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = "";
                document.getElementById("receiverEmail").value = "";
                document.getElementById("receiverContact_1").value = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "general") {
                $("#sectionone").hide();
                $("#sectiontwo").hide();
                $("#sectionthree").fadeIn();

                $("#appointmentDistrictMOH").hide();
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $("#jpmcpjsc").hide();

                $("#sectionmohcharges").hide();
                $("#sectionjpmccharges").hide();
                $("#sectionphccharges").hide();
                $("#sectiongeneralcharges").fadeIn();
                $("#paymentmethodarea").fadeIn();

                document.getElementById('patientNumber').value = '';
                document.getElementById('dateofbirth').value = '';
                $('input[name=icpassport]').attr('checked', false);
                $("#icarea").hide();
                document.getElementById('icnumber').value = '';
                $("#passportarea").hide();
                document.getElementById('passport').value = '';
                $('input[name=districtAppointment]').attr('checked', false);
                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";
                $('input[name=jpmcpjsc]').attr('checked', false);

                document.getElementById("grpTrack").value = "";
                document.getElementById("GoRushReceivingCountry").value = '';
                $('input[name=shipmentMethod]').attr('checked', false);
                document.getElementById("ecommerce").value = "";
                document.getElementById("commodities").value = "";
                document.getElementById("currency").value = "";
                document.getElementById("weight").value = "";
                $('input[name=permit]').attr('checked', false);
                $('input[name=itemContains]').attr('checked', false);
                document.getElementById("Item-Description").value = "";
                document.getElementById("Quantity").value = "";
                document.getElementById("Total-Item-Price").value = "";
                document.getElementById("itemPrice").value = "";

                $('input[name=pickupordelivery]').attr('checked', false);
                $("#pickupdatearea").hide();
                document.getElementById("pickupdate").value = "";
                $("#pickupaddressarea").hide();
                document.getElementById("pickupaddress").value = "";
                document.getElementById("productdescription").value = "";
                document.getElementById("producttype").value = "";
                $('input[name=productweight]').attr('checked', false);
                $('input[name=codrequired]').attr('checked', false);
                document.getElementById("codamount").value = "";
                document.getElementById("receiverName").value = "";
                document.getElementById("receiverHouse").value = "";
                document.getElementById("receiverKampong").value = "";
                document.getElementById("receiverJalan").value = "";
                document.getElementById("receiverSimpang").value = "";
                $('input[name=receiverDistrict]').attr('checked', false);
                document.getElementById("receiverPostal").value = "";
                document.getElementById("receiverEmail").value = "";
                document.getElementById("receiverContact_1").value = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
                $('input[name=jpmcCharges]').attr('checked', false);
                $('input[name=jpmcPayingPatient]').attr('checked', false);
                $('input[name=phcCharges]').attr('checked', false);
                $('input[name=phcPayingPatient]').attr('checked', false);
                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }
        });

        $('input[name=icpassport]').change(function () {
            if ($(this).val().length == 0) {
                $("#icarea").hide();
                $("#passportarea").hide();

                document.getElementById('icnumber').value = '';
                document.getElementById('passport').value = '';
            }

            if ($(this).val() == "icnumber") {
                $("#icarea").fadeIn();
                $("#passportarea").hide();

                document.getElementById('icnumber').value = '';
                document.getElementById('passport').value = '';
            }

            if ($(this).val() == "passport") {
                $("#icarea").hide();
                $("#passportarea").fadeIn();

                document.getElementById('icnumber').value = '';
                document.getElementById('passport').value = '';
            }
        });

        $('input[name=districtAppointment]').change(function () {
            if ($(this).val().length == 0) {
                $("#appointmentDistrictBM").hide();
                $("#appointmentDistrictTTG").hide();
                $("#appointmentDistrictTEMB").hide();
                $("#appointmentDistrictKB").hide();

                $("#mohimmidiate").hide();
                $("#mohexpress").hide();

                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);

                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "Brunei Muara") {
                $("#appointmentDistrictBM").fadeIn();
                $("#appointmentDistrictTTG").hide();
                $("#appointmentDistrictTEMB").hide();
                $("#appointmentDistrictKB").hide();

                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }

                $("#mohexpress").fadeIn();

                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);

                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "Tutong") {
                $("#appointmentDistrictBM").hide();
                $("#appointmentDistrictTTG").fadeIn();
                $("#appointmentDistrictTEMB").hide();
                $("#appointmentDistrictKB").hide();

                $("#mohimmidiate").hide();
                $("#mohexpress").hide();

                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);

                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "Temburong") {
                $("#appointmentDistrictBM").hide();
                $("#appointmentDistrictTTG").hide();
                $("#appointmentDistrictTEMB").fadeIn();
                $("#appointmentDistrictKB").hide();

                $("#mohimmidiate").hide();
                $("#mohexpress").hide();

                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);

                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "Belait") {
                $("#appointmentDistrictBM").hide();
                $("#appointmentDistrictTTG").hide();
                $("#appointmentDistrictTEMB").hide();
                $("#appointmentDistrictKB").fadeIn();

                $("#mohimmidiate").hide();
                $("#mohexpress").hide();

                document.getElementById('healthCentreBM').value = '';
                document.getElementById("healthCentreTTG").value = "";
                document.getElementById("healthCentreTEMB").value = "";
                document.getElementById("healthCentreKB").value = "";
                document.getElementById("mapSource").src = "";

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);

                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }
        });

        $('#healthCentreBM').change(function () {
            if ($(this).val().length == 0) {
                $("#mohimmidiate").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Raja Isteri Pengiran Anak Saleha Hospital") {

                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }

                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2805202346863!2d114.93130540523119!3d4.892630019678778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228acb18b46725%3A0x9118155b10d353ca!2sRaja%20Isteri%20Pengiran%20Anak%20Saleha%20Hospital!5e0!3m2!1sen!2sbn!4v1634281650713!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Pengkalan Batu Health Centre") {

                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }

                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9930134353094!2d114.81397081532558!3d4.771159642369682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322263643d7b9bf9%3A0xab86d8cb5835ceda!2sPengkalan%20Batu%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285210387!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }


            if ($(this).val() == "Jubli Perak Sengkurong Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2877506842783!2d114.84314291532539!3d4.891412441334922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226084b479a23b%3A0xf3137ef638ed3cfd!2sJubli%20Perak%20Sengkurong%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285543314!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Jubli Emas Kg Perpindahan Bunut Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.547397189751!2d114.88291741532552!3d4.847486841715639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322261c61f38a619%3A0x3a6a37bd46269d3a!2sJubli%20Emas%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285599556!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Pengiran Anak Puteri Hajah Rashidah Sa'adatul Bolkiah Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3769360804904!2d114.9340483153255!3d4.876369041465689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228ac25aec45df%3A0x8707ccd2be1d106b!2sPAPHRSB%20SG%20ASAM%20HEALTH%20CENTRE!5e0!3m2!1sen!2sbn!4v1634285838280!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Pengiran Anak Puteri Hajah Muta-Wakillah Hayatul Bolkiah Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0479626441015!2d114.90431041532548!3d4.9316318409836315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f57fa2c50b8f%3A0x5e99dc6cafc60b21!2sPengiran%20Anak%20Puteri%20Hajah%20Muta-Wakillah%20Hayatul%20Bolkiah%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285881919!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Rimba Dialysis Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.762589183511!2d114.9064117!3d4.9312319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f57fb34628ab%3A0xe11b4fd5ed3d2ce1!2sRimba%20Dialysis%20Centre!5e0!3m2!1sen!2sbn!4v1636339406654!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Berakas Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.828175459776!2d114.9636824153256!3d4.96821124066185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f42787932131%3A0xf9ab86325b87674!2sPusat%20Kesihatan%20Berakas!5e0!3m2!1sen!2sbn!4v1634285920206!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Muara Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4576007276696!2d115.06447081532535!3d5.029285440119686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f06dcb40542b%3A0xdce8b6a5b55c836d!2sMuara%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285963322!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Psychiatry Department, Ministry of Health") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.254386052767!2d114.90992181532567!3d4.897028391286052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f553a7c821df%3A0x65c23364c25df9!2sPsychiatry%20Department%2C%20Ministry%20of%20Health!5e0!3m2!1sen!2sbn!4v1634992947581!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "KG Bolkiah") {
                $("#mohimmidiate").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "SG Bunga") {
                $("#mohimmidiate").hide();
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.1432004986946!2d115.01193264313245!3d4.915696991808234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f36f1f0926d9%3A0x5eb0de579e4e2269!2sSungai%20Bunga%20Health%20Clinic%2C%20Kampong%20Sungai%20Bunga!5e0!3m2!1sen!2sbn!4v1634286214099!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "JPMC") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.7582787740073!2d114.82977193840651!3d4.948768090298503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32225e93638da5b1%3A0x90bf9d36cc534c7c!2sJerudong%20Park%20Medical%20Centre!5e0!3m2!1sen!2sbn!4v1637046171509!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "PJSC") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#mohimmidiate").fadeIn();
                    } else {
                        $("#mohimmidiate").hide();
                    }
                } else {
                    $("#mohimmidiate").hide();
                }
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.7576714939253!2d114.83085643710163!3d4.949108116049822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32225e9367a66cc1%3A0x3a6601d28e30b574!2sPantai%20Jerudong%20Specialist%20Centre%20(PJSC)!5e0!3m2!1sen!2sbn!4v1637046289863!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }
        });

        $('#healthCentreTTG').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Pengiran Muda Mahkota Pengiran Muda Haji Al-Muhtadee Billah Hospital") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7255630496174!2d114.66117111532566!3d4.817114541977045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9a59e46a5%3A0x62066e860030b362!2sPengiran%20Muda%20Mahkota%20Pengiran%20Muda%20Haji%20Al-Muhtadee%20Billah%20Hospital!5e0!3m2!1sen!2sbn!4v1634286463485!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Telisai Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1839730746256!2d114.5578142153256!3d4.738075742650269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222728d5f0c92a9%3A0xdae9ecd7acf168f9!2sTelisai%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286496075!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Pekan Tutong Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.719887312785!2d114.66105286532566!3d4.81808504196872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9c57b185f%3A0x24d45d637ed2282c!2sPusat%20Kesihatan%20Tutong!5e0!3m2!1sen!2sbn!4v1634286553112!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Sungai Kelugos Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7792578580184!2d114.76881401532557!3d4.807923542055853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322264370344a2a7%3A0xc548e1a7c1521657!2sSungai%20Kelugos%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286594839!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Lamunin Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5164928667486!2d114.7123597153257!3d4.67990954313922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32227a0759340203%3A0x40335e9d8c7eefc1!2sLamunin%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286641487!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }
        });

        $('#healthCentreKB').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Suri Seri Begawan Hospital") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.058923325921!2d114.19682271532564!3d4.583444243937976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa53c0d42c6b%3A0x4309941067d4ea11!2sSuri%20Seri%20Begawan%20Hospital!5e0!3m2!1sen!2sbn!4v1634286771871!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Kuala Belait Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9459.07903208395!2d114.20090259074068!3d4.584540049961497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa33ffffffff%3A0xabcd114352fec08d!2sKuala%20Belait%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286806620!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Seria Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.905812341586!2d114.33414371532547!3d4.610877343712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218a7ffbcb7121d%3A0x225eeee88bbd0d4e!2sSeria%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286841382!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Sungai Liang Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5325189388823!2d114.49268721532552!3d4.677087943162768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32220b66a610f693%3A0x9385789cab5ba672!2sSungai%20Liang%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286874162!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }
        });

        $('#healthCentreTEMB').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Pengiran Isteri Hajah Mariam Hospital") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3398029284485!2d115.0750711153255!3d4.710906342879327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222853b9a771fd5%3A0xb426306755a3d508!2sPengiran%20Isteri%20Hajjah%20Mariam%20Hospital!5e0!3m2!1sen!2sbn!4v1634286943427!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }

            if ($(this).val() == "Bangar Health Clinic") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.337380807763!2d115.07532101532566!3d4.711329842875782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322285c84bc026a1%3A0xcf7e5ef899e3115!2sKlinik%20Kesihatan%20Bangar%2C%20Temburong!5e0!3m2!1sen!2sbn!4v1634286972450!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();

                $('input[name=mohCharges]').attr('checked', false);
                $('input[name=mohPayingPatient]').attr('checked', false);
            }
        });

        $("#remove_fields").hide();

        document.getElementById("add_more_fields").addEventListener("click", addItems);
        document.getElementById("remove_fields").addEventListener("click", removeItems);

        var additional_item = document.getElementById('additional_item');
        var countadd = 0;

        function addItems() {

            var newheading = document.createElement('h4');
            newheading.innerHTML = "Additional ltem Details " + (countadd + 1);
            additional_item.appendChild(newheading);

            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "itemnamearea" + (countadd + 1))
            additional_item.appendChild(newDiv);


            var newLabel = document.createElement('label');
            newLabel.innerHTML = "Item Description:*";
            document.getElementById("itemnamearea" + (countadd + 1)).appendChild(newLabel);

            var newField = document.createElement('input');
            newField.setAttribute('type', 'text');
            newField.setAttribute('class', 'text-field w-input');
            newField.setAttribute('maxlength', '256');
            newField.setAttribute('name', 'Item Description ' + (countadd + 1));
            newField.setAttribute('data-name', 'Item Description ' + (countadd + 1));
            newField.setAttribute('id', 'Item-Description-' + (countadd + 1));
            newField.required = true;
            document.getElementById("itemnamearea" + (countadd + 1)).appendChild(newField);

            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "quantityarea" + (countadd + 1))
            additional_item.appendChild(newDiv);

            var newLabel = document.createElement('label');
            newLabel.innerHTML = "Quantity:*";
            document.getElementById("quantityarea" + (countadd + 1)).appendChild(newLabel);

            var newField = document.createElement('input');
            newField.setAttribute('type', 'number');
            newField.setAttribute('class', 'text-field w-input');
            newField.setAttribute('maxlength', '5');
            newField.setAttribute('name', 'Quantity ' + (countadd + 1));
            newField.setAttribute('data-name', 'Quantity ' + (countadd + 1));
            newField.setAttribute('id', 'Quantity-' + (countadd + 1));
            newField.required = true;
            document.getElementById("quantityarea" + (countadd + 1)).appendChild(newField);

            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "totalitempricearea" + (countadd + 1))
            additional_item.appendChild(newDiv);

            var newLabel = document.createElement('label');
            newLabel.innerHTML = "Total Item Price:*";
            document.getElementById("totalitempricearea" + (countadd + 1)).appendChild(newLabel);

            var newField = document.createElement('input');
            newField.setAttribute('type', 'number')
            newField.setAttribute('step', '.01')
            newField.setAttribute('class', 'text-field w-input itemprice');
            newField.setAttribute('maxlength', '256');
            newField.setAttribute('name', 'Total Item Price ' + (countadd + 1));
            newField.setAttribute('data-name', 'Total Item Price ' + (countadd + 1));
            newField.setAttribute('id', 'Total-Item-Price-' + (countadd + 1));
            newField.required = true;
            document.getElementById("totalitempricearea" + (countadd + 1)).appendChild(newField);

            countadd = countadd + 1;

            $("#remove_fields").fadeIn();
        }

        function removeItems() {
            var div_tags = additional_item.getElementsByTagName('div');
            var heading_tags = additional_item.getElementsByTagName('h4');
            if (div_tags.length != 0) {
                additional_item.removeChild(div_tags[(div_tags.length) - 1]);
                additional_item.removeChild(div_tags[(div_tags.length) - 1]);
                additional_item.removeChild(div_tags[(div_tags.length) - 1]);
                additional_item.removeChild(heading_tags[(heading_tags.length) - 1]);
                countadd = countadd - 1;

                if (div_tags.length == 0) {
                    $("#remove_fields").hide();
                }
            }
        }

        $('#receiverDistrict').change(function () {
            if ($(this).val().length == 0) {
                $("#gostandardbm").hide();
                $("#gostandardttg").hide();
                $("#gostandardkb").hide();
                $("#gostandardtemb").hide();
                $("#goexpressbm").hide();
                $("#goexpressttg").hide();
                $("#goexpresskb").hide();
                $("#godropoffbm").hide();
                $("#godropoffttg").hide();
                $("#godropoffkb").hide();

                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "Brunei Muara") {
                $("#gostandardbm").fadeIn();
                $("#gostandardttg").hide();
                $("#gostandardkb").hide();
                $("#gostandardtemb").hide();
                $("#goexpressbm").fadeIn();
                $("#goexpressttg").hide();
                $("#goexpresskb").hide();
                $("#godropoffbm").fadeIn();
                $("#godropoffttg").hide();
                $("#godropoffkb").hide();

                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "Tutong") {
                $("#gostandardbm").hide();
                $("#gostandardttg").fadeIn();
                $("#gostandardkb").hide();
                $("#gostandardtemb").hide();
                $("#goexpressbm").hide();
                $("#goexpressttg").fadeIn();
                $("#goexpresskb").hide();
                $("#godropoffbm").hide();
                $("#godropoffttg").fadeIn();
                $("#godropoffkb").hide();

                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "Temburong") {
                $("#gostandardbm").hide();
                $("#gostandardttg").hide();
                $("#gostandardkb").hide();
                $("#gostandardtemb").fadeIn();
                $("#goexpressbm").hide();
                $("#goexpressttg").hide();
                $("#goexpresskb").hide();
                $("#godropoffbm").hide();
                $("#godropoffttg").hide();
                $("#godropoffkb").hide();

                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }

            if ($(this).val() == "Belait") {
                $("#gostandardbm").hide();
                $("#gostandardttg").hide();
                $("#gostandardkb").fadeIn();
                $("#gostandardtemb").hide();
                $("#goexpressbm").hide();
                $("#goexpressttg").hide();
                $("#goexpresskb").fadeIn();
                $("#godropoffbm").hide();
                $("#godropoffttg").hide();
                $("#godropoffkb").fadeIn();

                $('input[name=generalCharges]').attr('checked', false);
                document.getElementById("billto").value = "";
                document.getElementById("paymentmethod").value = "";
                document.getElementById("remarks").value = "";
            }
        });

        $('input[name=pickupordelivery]').change(function () {
            if ($(this).val().length == 0) {
                $("#pickupdatearea").hide();
                $("#pickupaddressarea").hide();

                document.getElementById('pickupdate').value = '';
                document.getElementById('pickupaddress').value = '';
            }

            if ($(this).val() == "deliveryonly") {
                $("#pickupdatearea").hide();
                $("#pickupaddressarea").hide();

                document.getElementById('pickupdate').value = '';
                document.getElementById('pickupaddress').value = '';
            }

            if ($(this).val() == "pickupanddelivery") {
                $("#pickupdatearea").fadeIn();
                $("#pickupaddressarea").fadeIn();

                document.getElementById('pickupdate').value = '';
                document.getElementById('pickupaddress').value = '';
            }
        });

        $('input[name=codrequired]').change(function () {
            if ($(this).val().length == 0) {
                $("#codamountarea").hide();
                document.getElementById('codamount').value = '';
            }

            if ($(this).val() == "Yes") {
                $("#codamountarea").fadeIn();
                document.getElementById('codamount').value = '';
            }

            if ($(this).val() == "No") {
                $("#codamountarea").hide();
                document.getElementById('codamount').value = '';
            }
        });

        document.getElementById("productNextBtn").addEventListener("click", function () {
            if (($("input[name=products]").val().length != 0)) {
                $("#productNextBtn").hide();
                $("#productsection").hide();
                $("#productsPrevBtn").hide();
                $("#chargessection").fadeIn();
                $("#chargesNextBtn").fadeIn();
                $("#chargesPrevBtn").fadeIn();
            }
        });

        document.getElementById("chargesNextBtn").addEventListener("click", function () {
            if (($("#paymentmethod").val().length != 0)) {
                $("#chargesNextBtn").hide();
                $("#chargessection").hide();
                $("#chargesPrevBtn").hide();
                $("#agreementsection").fadeIn();
                $("#submitBtn").fadeIn();
                $("#agreesubmitPrevBtn").fadeIn();

                document.getElementById("namesum").innerHTML = "Name: <b>" + document.getElementById("name").value + "</b>";
                document.getElementById("addresssum").innerHTML = "Address: <b>" + document.getElementById("house").value + " " + document.getElementById("kampong").value
                    + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                    + document.getElementById("postal").value + "</b>";
                document.getElementById("emailsum").innerHTML = "Email: <b>" + document.getElementById("email").value + "</b>";
                document.getElementById("contact_1sum").innerHTML = "Phone Number: <b>+" + document.getElementById("code").value + document.getElementById("contact_1").value + "</b>";
                document.getElementById("contact_2sum").innerHTML = "Additional Phone Number: <b>+" + document.getElementById("code_2").value + document.getElementById("contact_2").value + "</b>";

                document.getElementById("productssum").innerHTML = "Product Type: <b>" + $('input[name=products]:checked').val() + "</b>";

                if (($('input[name=products]:checked').val() == "pharmacymoh")) {
                    $("#productSumGRP").hide();
                    $("#productSumGD").hide();
                    $("#productSumPharmacy").fadeIn();
                    document.getElementById("patientNumbersum").innerHTML = "Patient's Number: <b>" + document.getElementById("patientNumber").value + "</b>";
                    document.getElementById("dateofbirthsum").innerHTML = "Patient's Date of Birth: <b>" + document.getElementById("dateofbirth").value + "</b>";
                    document.getElementById("icnumberpassportsum").innerHTML = "IC-Number / Passport: <b>" + document.getElementById("icnumber").value +
                        document.getElementById("passport").value + "</b>";
                    document.getElementById("healthcentresum").innerHTML = "Health Centre: <b>" + document.getElementById("healthCentreBM").value
                        + document.getElementById("healthCentreTTG").value + document.getElementById("healthCentreTEMB").value
                        + document.getElementById("healthCentreKB").value + "</b>";
                    $("#deliveryTypesum").fadeIn();
                    $("#pharmacyPPsum").fadeIn();
                    $("#paymentmethodsum").fadeIn();
                    document.getElementById("deliveryTypesum").innerHTML = "Delivery Type: <b>" + $('input[name=mohCharges]:checked').val() + "</b>";
                    document.getElementById("pharmacyPPsum").innerHTML = "Paying Patient?: <b>" + $('input[name=mohPayingPatient]:checked').val() + "</b>";
                    document.getElementById("paymentmethodsum").innerHTML = "Payment Method: <b>" + document.getElementById("paymentmethod").value + "</b>";
                }

                if (($('input[name=products]:checked').val() == "pharmacyjpmc")) {
                    $("#productSumGRP").hide();
                    $("#productSumGD").hide();
                    $("#productSumPharmacy").fadeIn();
                    document.getElementById("patientNumbersum").innerHTML = "Patient's Number: <b>" + document.getElementById("patientNumber").value + "</b>";
                    document.getElementById("dateofbirthsum").innerHTML = "Patient's Date of Birth: <b>" + document.getElementById("dateofbirth").value + "</b>";
                    document.getElementById("icnumberpassportsum").innerHTML = "IC-Number / Passport: <b>" + document.getElementById("icnumber").value +
                        document.getElementById("passport").value + "</b>";
                    document.getElementById("healthcentresum").innerHTML = "Health Centre: <b>" + $('input[name=jpmcpjsc]:checked').val() + "</b>";
                    $("#deliveryTypesum").fadeIn();
                    $("#pharmacyPPsum").fadeIn();
                    $("#paymentmethodsum").fadeIn();
                    document.getElementById("deliveryTypesum").innerHTML = "Delivery Type: <b>" + $('input[name=jpmcCharges]:checked').val() + "</b>";
                    document.getElementById("pharmacyPPsum").innerHTML = "Paying Patient?: <b>" + $('input[name=jpmcPayingPatient]:checked').val() + "</b>";
                    document.getElementById("paymentmethodsum").innerHTML = "Payment Method: <b>" + document.getElementById("paymentmethod").value + "</b>";
                }

                if (($('input[name=products]:checked').val() == "pharmacyphc")) {
                    $("#productSumGRP").hide();
                    $("#productSumGD").hide();
                    $("#productSumPharmacy").fadeIn();
                    document.getElementById("patientNumbersum").innerHTML = "Patient's Number: <b>" + document.getElementById("patientNumber").value + "</b>";
                    document.getElementById("dateofbirthsum").innerHTML = "Patient's Date of Birth: <b>" + document.getElementById("dateofbirth").value + "</b>";
                    document.getElementById("icnumberpassportsum").innerHTML = "IC-Number / Passport: <b>" + document.getElementById("icnumber").value +
                        document.getElementById("passport").value + "</b>";
                    document.getElementById("healthcentresum").innerHTML = "Health Centre: <b>Panaga Health</b>";
                    $("#deliveryTypesum").fadeIn();
                    $("#pharmacyPPsum").fadeIn();
                    $("#paymentmethodsum").fadeIn();
                    document.getElementById("deliveryTypesum").innerHTML = "Delivery Type: <b>" + $('input[name=phcCharges]:checked').val() + "</b>";
                    document.getElementById("pharmacyPPsum").innerHTML = "Paying Patient?: <b>" + $('input[name=phcPayingPatient]:checked').val() + "</b>";
                    document.getElementById("paymentmethodsum").innerHTML = "Payment Method: <b>" + document.getElementById("paymentmethod").value + "</b>";
                }

                if (($('input[name=products]:checked').val() == "grp")) {
                    $("#productSumGRP").fadeIn();
                    $("#productSumGD").hide();
                    $("#productSumPharmacy").hide();
                    document.getElementById("grpTracksum").innerHTML = "Parcel Tracking Number: <b>" + document.getElementById("grpTrack").value + "</b>";
                    document.getElementById("GoRushReceivingCountrysum").innerHTML = "Go Rush Receiving Country: <b>" + document.getElementById("GoRushReceivingCountry").value + "</b>";
                    document.getElementById("shipmentMethodsum").innerHTML = "Shipment Method: <b>" + $('input[name=shipmentMethod]:checked').val() + "</b>";
                    document.getElementById("ecommercesum").innerHTML = "E-Commerce Name: <b>" + document.getElementById("ecommerce").value + "</b>";
                    document.getElementById("commoditiessum").innerHTML = "Commodities: <b>" + document.getElementById("commodities").value + "</b>";
                    document.getElementById("currencysum").innerHTML = "Currency: <b>" + document.getElementById("currency").value + "</b>";
                    document.getElementById("weightsum").innerHTML = "Weight (KG): <b>" + document.getElementById("weight").value + "</b>";
                    document.getElementById("permitsum").innerHTML = "Permit Application?: <b>" + $('input[name=permit]:checked').val() + "</b>";
                    document.getElementById("itemContainssum").innerHTML = "Does your item contains one of the following?: <b>" + $('input[name=itemContains]:checked').val() + "</b>";
                    document.getElementById("itemPricesum").innerHTML = "Total Price: <b>" + document.getElementById("itemPrice").value + "</b>";
                    $("#deliveryTypesum").hide();
                    $("#pharmacyPPsum").hide();
                    $("#paymentmethodsum").hide();
                }

                if (($('input[name=products]:checked').val() == "general")) {
                    $("#productSumGRP").hide();
                    $("#productSumGD").fadeIn();
                    $("#productSumPharmacy").hide();
                    document.getElementById("pickupordeliverysum").innerHTML = "Pickup or Delivery?: <b>" + $('input[name=pickupordelivery]:checked').val() + "</b>";
                    document.getElementById("pickupdatesum").innerHTML = "Pick-Up Date: <b>" + document.getElementById("pickupdate").value + "</b>";
                    document.getElementById("pickupaddresssum").innerHTML = "Pick-Up Address: <b>" + document.getElementById("pickupaddress").value + "</b>";
                    document.getElementById("productdescriptionsum").innerHTML = "Product Description: <b>" + document.getElementById("productdescription").value + "</b>";
                    document.getElementById("producttypesum").innerHTML = "Product Type: <b>" + document.getElementById("producttype").value + "</b>";
                    document.getElementById("productweightsum").innerHTML = "Product Weight: <b>" + $('input[name=productweight]:checked').val() + "</b>";
                    document.getElementById("codrequiredsum").innerHTML = "COD (Cash on Delivery) required?: <b>" + $('input[name=codrequired]:checked').val() + "</b>";
                    if ($('input[name=codrequired]:checked').val() == "Yes") {
                        document.getElementById("codamountsum").innerHTML = "COD (Cash on Delivery) Amount: <b>" + document.getElementById("codamount").value + "</b>";
                    }
                    if ($('input[name=codrequired]:checked').val() == "No") {

                    }
                    document.getElementById("receiverNamesum").innerHTML = "Name: <b>" + document.getElementById("receiverName").value + "</b>";
                    document.getElementById("receiverAddresssum").innerHTML = "Address: <b>" + document.getElementById("receiverHouse").value + " " + document.getElementById("receiverKampong").value
                        + " " + document.getElementById("receiverJalan").value + " " + document.getElementById("receiverSimpang").value + " " + $('input[name=receiverDistrict]:checked').val() + " "
                        + document.getElementById("receiverPostal").value + "</b>";
                    document.getElementById("receiverEmailsum").innerHTML = "E-mail: <b>" + document.getElementById("receiverEmail").value + "</b>";
                    document.getElementById("receiverContact_1sum").innerHTML = "Phone Number: <b>+" + document.getElementById("code_3").value + document.getElementById("receiverContact_1").value + "</b>";
                    $("#deliveryTypesum").fadeIn();
                    $("#pharmacyPPsum").hide();
                    $("#paymentmethodsum").fadeIn();
                    document.getElementById("deliveryTypesum").innerHTML = "Delivery Type: <b>" + $('input[name=generalCharges]:checked').val() + "</b>";
                    document.getElementById("billTosum").innerHTML = "Bill to: <b>" + document.getElementById("billto").value + "</b>";
                    document.getElementById("paymentmethodsum").innerHTML = "Payment Method: <b>" + document.getElementById("paymentmethod").value + "</b>";
                }

                document.getElementById("remarkssum").innerHTML = "Remarks: <b>" + document.getElementById("name").value + "</b>";
            }
        });

        document.getElementById("productsPrevBtn").addEventListener("click", function () {
            $("#productsPrevBtn").hide();
            $("#productNextBtn").hide();
            $("#productsection").hide();
            $("#personalsection").fadeIn();
            $("#personalNextBtn").fadeIn();
        });

        document.getElementById("chargesPrevBtn").addEventListener("click", function () {
            $("#chargesPrevBtn").hide();
            $("#chargesNextBtn").hide();
            $("#chargessection").hide();
            $("#productsection").fadeIn();
            $("#productNextBtn").fadeIn();
            $("#productsPrevBtn").fadeIn();
        });

        document.getElementById("agreesubmitPrevBtn").addEventListener("click", function () {
            $("#chargesPrevBtn").fadeIn();
            $("#chargesNextBtn").fadeIn();
            $("#chargessection").fadeIn();
            $("#agreementsection").hide();
            $("#agreesubmitPrevBtn").hide();
            $("#submitBtn").hide();
        });

        document.getElementById("submitBtn").addEventListener("click", function () {
            customSuccessMessage = $name.val();

            //getSubmittedDate
            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

            var ampmhour = '';
            var ampmmin = '';
            var ampmNum = '';

            if (today.getHours() < 12) {
                ampmNum = 0;
                ampmhour = (today.getHours());
            }

            if (today.getHours() >= 12) {
                ampmNum = 1;
                ampmhour = (today.getHours());
            }

            if (today.getMinutes() < 10) {
                ampmmin = "0" + (today.getMinutes());
            }

            if (today.getMinutes() >= 10) {
                ampmmin = (today.getMinutes());
            }

            var time = ampmhour + ":" + ampmmin;

            let dateSubmitted = date + ' ' + time;

            document.getElementById("dateSubmitted").value = dateSubmitted;

            //getCompletionDate
            var todaysDate = new Date();

            //31 January to Feburary
            if (todaysDate.getMonth() == 0) {
                if (todaysDate.getDate() < 31) {
                    var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                }
                if (todaysDate.getDate() >= 31) {
                    if (todaysDate.getHours() < 12) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                    }
                    if (todaysDate.getHours() >= 12) {
                        if ((0 == todaysDate.getFullYear() % 4) && (0 != todaysDate.getFullYear() % 100) || (0 == todaysDate.getFullYear() % 400)) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-29';
                        } else {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-28';
                        }
                    }
                }
            }

            //February
            if (todaysDate.getMonth() == 1) {
                //Leap year
                if ((0 == todaysDate.getFullYear() % 4) && (0 != todaysDate.getFullYear() % 100) || (0 == todaysDate.getFullYear() % 400)) {
                    if (todaysDate.getDate() < 29) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-29';
                    }
                    if (todaysDate.getDate() >= 29) {
                        if (todaysDate.getHours() < 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-29';
                        }
                        if (todaysDate.getHours() >= 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-31';
                        }
                    }
                } else {
                    if (todaysDate.getDate() < 28) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-28';
                    }
                    if (todaysDate.getDate() >= 28) {
                        if (todaysDate.getHours() < 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-28';
                        }
                        if (todaysDate.getHours() >= 12) {
                            var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-31';
                        }
                    }
                }
            }

            //31 July to August
            if (todaysDate.getMonth() == 6) {
                if (todaysDate.getDate() < 31) {
                    var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                }
                if (todaysDate.getDate() >= 31) {
                    if (todaysDate.getHours() < 12) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                    }
                    if (todaysDate.getHours() >= 12) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-31';
                    }
                }
            }

            //December
            if (todaysDate.getMonth() == 11) {
                if (todaysDate.getDate() < 31) {
                    var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                }
                if (todaysDate.getDate() >= 31) {
                    if (todaysDate.getHours() < 12) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                    }
                    if (todaysDate.getHours() >= 12) {
                        var dateD = (todaysDate.getFullYear() + 1) + '-01-31';
                    }
                }
            }

            //31
            if ((todaysDate.getMonth() == 2) || (todaysDate.getMonth() == 4) || (todaysDate.getMonth() == 7) || (todaysDate.getMonth() == 9)) {
                if (todaysDate.getDate() < 31) {
                    var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                }
                if (todaysDate.getDate() >= 31) {
                    if (todaysDate.getHours() < 12) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-31';
                    }
                    if (todaysDate.getHours() >= 12) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-30';
                    }
                }
            }

            //30
            if ((todaysDate.getMonth() == 3) || (todaysDate.getMonth() == 5) || (todaysDate.getMonth() == 8) || (todaysDate.getMonth() == 10)) {
                if (todaysDate.getDate() < 30) {
                    var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-30';
                }
                if (todaysDate.getDate() >= 30) {
                    if (todaysDate.getHours() < 12) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-30';
                    }
                    if (todaysDate.getHours() >= 12) {
                        var dateD = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-31';
                    }
                }
            }

            var timeD = "23:59:00";

            let jobdeliverydatetime = dateD + ' ' + timeD;

            if ($('input[name=products]').val() == "pharmacymoh") {
                let patientOrderId = "MOH" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

                let area = "";

                let customerAddress = document.getElementById("house").value + " " + document.getElementById("kampong").value
                    + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                    + document.getElementById("postal").value;

                document.getElementById("customerAddress").value = customerAddress;

                let address = customerAddress.toUpperCase();

                if (address.includes("MANGGIS") == true) { area = "B1"; }
                else if (address.includes("DELIMA") == true) { area = "B1"; }
                else if (address.includes("ANGGREK DESA") == true) { area = "B1"; }
                else if (address.includes("PULAIE") == true) { area = "B1"; }
                else if (address.includes("LAMBAK") == true) { area = "B1"; }
                else if (address.includes("TERUNJING") == true) { area = "B1"; }
                else if (address.includes("MADANG") == true) { area = "B1"; }
                else if (address.includes("AIRPORT") == true) { area = "B1"; }
                else if (address.includes("ORANG KAYA BESAR IMAS") == true) { area = "B1"; }
                else if (address.includes("OKBI") == true) { area = "B1"; }
                else if (address.includes("SERUSOP") == true) { area = "B1"; }
                else if (address.includes("BURONG PINGAI") == true) { area = "B1"; }
                else if (address.includes("SETIA NEGARA") == true) { area = "B1"; }
                else if (address.includes("PASIR BERAKAS") == true) { area = "B1"; }
                else if (address.includes("MENTERI BESAR") == true) { area = "B1"; }
                else if (address.includes("KEBANGSAAN LAMA") == true) { area = "B1"; }
                else if (address.includes("BATU MARANG") == true) { area = "B2"; }
                else if (address.includes("DATO GANDI") == true) { area = "B2"; }
                else if (address.includes("KAPOK") == true) { area = "B2"; }
                else if (address.includes("KOTA BATU") == true) { area = "B2"; }
                else if (address.includes("MENTIRI") == true) { area = "B2"; }
                else if (address.includes("MERAGANG") == true) { area = "B2"; }
                else if (address.includes("PELAMBAIAN") == true) { area = "B2"; }
                else if (address.includes("PINTU MALIM") == true) { area = "B2"; }
                else if (address.includes("SALAMBIGAR") == true) { area = "B2"; }
                else if (address.includes("SALAR") == true) { area = "B2"; }
                else if (address.includes("SERASA") == true) { area = "B2"; }
                else if (address.includes("MUARA") == true) { area = "B2"; }
                else if (address.includes("SERDANG") == true) { area = "B2"; }
                else if (address.includes("SUNGAI BASAR") == true) { area = "B2"; }
                else if (address.includes("SG BASAR") == true) { area = "B2"; }
                else if (address.includes("SUNGAI BELUKUT") == true) { area = "B2"; }
                else if (address.includes("SG BELUKUT") == true) { area = "B2"; }
                else if (address.includes("SUNGAI HANCHING") == true) { area = "B2"; }
                else if (address.includes("SG HANCHING") == true) { area = "B2"; }
                else if (address.includes("SUNGAI TILONG") == true) { area = "B2"; }
                else if (address.includes("SG TILONG") == true) { area = "B2"; }
                else if (address.includes("SUBOK") == true) { area = "B2"; }
                else if (address.includes("SUNGAI AKAR") == true) { area = "B2"; }
                else if (address.includes("SG AKAR") == true) { area = "B2"; }
                else if (address.includes("SUNGAI BULOH") == true) { area = "B2"; }
                else if (address.includes("SG BULOH") == true) { area = "B2"; }
                else if (address.includes("TANAH JAMBU") == true) { area = "B2"; }
                else if (address.includes("SUNGAI OROK") == true) { area = "B2"; }
                else if (address.includes("SG OROK") == true) { area = "B2"; }
                else if (address.includes("KATOK") == true) { area = "G1"; }
                else if (address.includes("MATA-MATA") == true) { area = "G1"; }
                else if (address.includes("RIMBA") == true) { area = "G1"; }
                else if (address.includes("TUNGKU") == true) { area = "G1"; }
                else if (address.includes("UBD") == true) { area = "G1"; }
                else if (address.includes("JIS") == true) { area = "G1"; }
                else if (address.includes("BERANGAN") == true) { area = "G2"; }
                else if (address.includes("BERIBI") == true) { area = "G2"; }
                else if (address.includes("KIULAP") == true) { area = "G2"; }
                else if (address.includes("RIPAS") == true) { area = "G2"; }
                else if (address.includes("RAJA ISTERI PENGIRAN ANAK SALLEHA") == true) { area = "G2"; }
                else if (address.includes("KIARONG") == true) { area = "G2"; }
                else if (address.includes("PUSAR ULAK") == true) { area = "G2"; }
                else if (address.includes("KUMBANG PASANG") == true) { area = "G2"; }
                else if (address.includes("MENGLAIT") == true) { area = "G2"; }
                else if (address.includes("MABOHAI") == true) { area = "G2"; }
                else if (address.includes("ONG SUM PING") == true) { area = "G2"; }
                else if (address.includes("GADONG") == true) { area = "G2"; }
                else if (address.includes("TASEK LAMA") == true) { area = "G2"; }
                else if (address.includes("BANDAR TOWN") == true) { area = "G2"; }
                else if (address.includes("BATU SATU") == true) { area = "JT1"; }
                else if (address.includes("BENGKURONG") == true) { area = "JT1"; }
                else if (address.includes("BUNUT") == true) { area = "JT1"; }
                else if (address.includes("JALAN BABU RAJA") == true) { area = "JT1"; }
                else if (address.includes("JALAN ISTANA") == true) { area = "JT1"; }
                else if (address.includes("JUNJONGAN") == true) { area = "JT1"; }
                else if (address.includes("KASAT") == true) { area = "JT1"; }
                else if (address.includes("LUMAPAS") == true) { area = "JT1"; }
                else if (address.includes("JALAN HALUS") == true) { area = "JT1"; }
                else if (address.includes("MADEWA") == true) { area = "JT1"; }
                else if (address.includes("PUTAT") == true) { area = "JT1"; }
                else if (address.includes("SINARUBAI") == true) { area = "JT1"; }
                else if (address.includes("TASEK MERADUN") == true) { area = "JT1"; }
                else if (address.includes("TELANAI") == true) { area = "JT1"; }
                else if (address.includes("BAN") == true) { area = "JT2"; }
                else if (address.includes("BATONG") == true) { area = "JT2"; }
                else if (address.includes("BATU AMPAR") == true) { area = "JT2"; }
                else if (address.includes("BEBATIK") == true) { area = "JT2"; }
                else if (address.includes("BEBULOH") == true) { area = "JT2"; }
                else if (address.includes("BEBATIK KILANAS") == true) { area = "JT2"; }
                else if (address.includes("KILANAS") == true) { area = "JT2"; }
                else if (address.includes("DADAP") == true) { area = "JT2"; }
                else if (address.includes("KUALA LURAH") == true) { area = "JT2"; }
                else if (address.includes("KULAPIS") == true) { area = "JT2"; }
                else if (address.includes("LIMAU MANIS") == true) { area = "JT2"; }
                else if (address.includes("MASIN") == true) { area = "JT2"; }
                else if (address.includes("MULAUT") == true) { area = "JT2" }
                else if (address.includes("PANCHOR MURAI") == true) { area = "JT2"; }
                else if (address.includes("PANCHUR MURAI") == true) { area = "JT2"; }
                else if (address.includes("PANGKALAN BATU") == true) { area = "JT2"; }
                else if (address.includes("PASAI") == true) { area = "JT2"; }
                else if (address.includes("WASAN") == true) { area = "JT2"; }
                else if (address.includes("PARIT") == true) { area = "JT2"; }
                else if (address.includes("EMPIRE") == true) { area = "JT3"; }
                else if (address.includes("JANGSAK") == true) { area = "JT3"; }
                else if (address.includes("JERUDONG") == true) { area = "JT3"; }
                else if (address.includes("KATIMAHAR") == true) { area = "JT3"; }
                else if (address.includes("LUGU") == true) { area = "JT3"; }
                else if (address.includes("SENGKURONG") == true) { area = "JT3"; }
                else if (address.includes("TANJONG NANGKA") == true) { area = "JT3"; }
                else if (address.includes("TANJONG BUNUT") == true) { area = "JT3"; }
                else if (address.includes("TANJUNG BUNUT") == true) { area = "JT3"; }
                else if (address.includes("SUNGAI TAMPOI") == true) { area = "JT3"; }
                else if (address.includes("SG TAMPOI") == true) { area = "JT3"; }
                else { area = "N/A"; }

                document.getElementById("area").value = area;

                if (document.querySelector('input[name=districtAppointment]:checked').value == "Brunei Muara") {
                    if ((document.getElementById("healthCentreBM").value == "Raja Isteri Pengiran Anak Saleha Hospital") ||
                        (document.getElementById("healthCentreBM").value == "Rimba Dialysis Centre") || (document.getElementById("healthCentreBM").value == "Pengkalan Batu Health Centre") ||
                        (document.getElementById("healthCentreBM").value == "PJSC") || (document.getElementById("healthCentreBM").value == "JPMC") ||
                        (document.getElementById("healthCentreBM").value == "Psychiatry Department, Ministry of Health")) {
                        document.getElementById("sendOrderTo").value = "OPD";
                    } else {
                        document.getElementById("sendOrderTo").value = "BHC";
                    }
                }

                if (document.querySelector('input[name=districtAppointment]:checked').value == "Tutong") {
                    document.getElementById("sendOrderTo").value = "PMMH";
                }

                if (document.querySelector('input[name=districtAppointment]:checked').value == "Belait") {
                    document.getElementById("sendOrderTo").value = "SSPH";
                }

                if (document.querySelector('input[name=districtAppointment]:checked').value == "Temburong") {
                    document.getElementById("sendOrderTo").value = "OPD";
                }

                if (($('input[name=mohCharges]:checked').val() == "Standard")) {
                    document.getElementById('price').value = '3';
                    var deliveryType = "STD";
                    document.getElementById("deliveryType").value = deliveryType;
                }

                if (($('input[name=mohCharges]:checked').val() == "Express")) {
                    document.getElementById('price').value = '5';
                    var deliveryType = "EXP";
                    document.getElementById("deliveryType").value = deliveryType;
                }

                if (($('input[name=mohCharges]:checked').val() == "Immediate")) {
                    document.getElementById('price').value = '20';
                    var deliveryType = "IMM";
                    document.getElementById("deliveryType").value = deliveryType;
                }

                let price = document.getElementById('price').value;
                let appointmentPlaceDistrict = document.querySelector('input[name=districtAppointment]:checked').value;
                let sendOrderTo = document.getElementById("sendOrderTo").value;

                let customerRemarks = document.getElementById("remarks").value;
                let customerPM = document.getElementById("paymentmethod").value;
                let order_Origin = document.getElementById("orderOrigin").value;

                let orderId = document.getElementById("patientNumber").value;
                let jobDescription = $('input[name=mohCharges]:checked').val();
                let customerEmail = document.getElementById("email").value;
                let customerUsername = document.getElementById("name").value;

                document.getElementById("icPassportNum").value = document.getElementById("icnumber").value + document.getElementById("passport").value;

                let icPassportNum = document.getElementById("icPassportNum").value;

                let customerPhone = "+" + document.getElementById("code").value + document.getElementById("contact_1").value;

                let customerPhoneNoPlus = document.getElementById("code").value + document.getElementById("contact_1").value;

                if (document.getElementById("contact_2").value.length != 0) {
                    let additionalPhone = "+" + document.getElementById("code_2").value + document.getElementById("contact_2").value;
                    document.getElementById("additionalPhone").value = additionalPhone;
                }

                let additionalPhoneNoPlus = document.getElementById("code_2").value + document.getElementById("contact_2").value;

                let appointmentPlace = document.getElementById("healthCentreBM").value + document.getElementById("healthCentreTTG").value
                    + document.getElementById("healthCentreTEM").value + document.getElementById("healthCentreKB").value;

                document.getElementById("customerPhone").value = customerPhone;

                document.getElementById("appointmentPlace").value = appointmentPlace;

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/create_task');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);

                        request.open('POST', 'https://api.tookanapp.com/v2/get_job_details_by_order_id');

                        request.setRequestHeader('Content-Type', 'application/json');

                        request.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                console.log('Status:', this.status);
                                console.log('Headers:', this.getAllResponseHeaders());
                                console.log('Body:', this.responseText);

                                responseo = this.responseText;
                                json_responseo = JSON.parse(responseo);

                                var counttaskhistory = json_responseo.data["length"];

                                for (let i = 0; i < counttaskhistory; i++) {
                                    if (json_responseo.data[i].custom_field["length"] == 18) {
                                        if (json_responseo.data[i].custom_field[17].data == patientOrderId) {
                                            document.getElementById("Tookan-Tracking").value = json_responseo.data[i].job_id;
                                            i = counttaskhistory;
                                        }
                                    }
                                }

                                const scriptURL = 'https://script.google.com/macros/s/AKfycbxUP_Uj1cBh0uMgsNrdp7ygU8HYb3eXyjLqJVvqF9zZFi-FXIdjT6fIuscbQwGD4f1b/exec'
                                const form = document.forms['guestorderform']

                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                    .catch(error => console.error('Error!', error.message))

                                if (createPharmacySheet == 1) {
                                    if (($('input[name=mohCharges]:checked').val() == "Standard")) {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbxxRcpKi-hcJiyKBvvB12ZYbEeZ6YS2XE9byGVO3031_91nXja45Qa62jieHfZ3cLPOdw/exec'
                                        const form = document.forms['guestorderform']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }

                                    if (($('input[name=mohCharges]:checked').val() == "Express")) {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbwFchxYwmJ5DWf3KLb0ER1uIfWUmGST2h1EAo02gNIXXmYGHMNSg98N0hsr0913c1hqeQ/exec'
                                        const form = document.forms['guestorderform']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }

                                    if (($('input[name=mohCharges]:checked').val() == "Immediate")) {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbzo0mbf6Rh8rJBRJ-FO6JaxiuhUt0lzDpKwkO63m8kwaPLn2LtVe5CZPLZqxYDA6xeouA/exec'
                                        const form = document.forms['guestorderform']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }
                                }

                                if (medicineDBGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbdICh1LrT62N7ySvkgIOMq825LEKvM7KRcVREBOJVzzZSbopF4LowFZGZb4-_XMhZNQ/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (gsheet2 == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycby6nF1eowr8aTVlTK7xSO5MAdcoRhWYOtaXPGkcqjfgihOAA8nKWoNmF6f1yPKYEvX-1A/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (split == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ72tj7gj629knV7iVFRNAOemUyMGSFzUzFPFie70KN3S5cBo573kL3j9c14Q64Ccb/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))

                                    if (($('input[name=mohCharges]:checked').val() == "Standard")) {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbwonfADS7GmfHrV1U5JbIkZ1c_fcZZNZOyLHgpX4fLJt49on7ur0AwwnM270rsg5OS_/exec'
                                        const form = document.forms['guestorderform']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }

                                    if (($('input[name=mohCharges]:checked').val() == "Express")) {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbycp82YFWx0oQyShPHqOQQADVhqCjt0kaISN34wVP1MmLmAz3uIncYPs39PNNitUSJF/exec'
                                        const form = document.forms['guestorderform']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }

                                    if (($('input[name=mohCharges]:checked').val() == "Immediate")) {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbzNymxOq-U4XidfVWOj928T8eq9KE_UtMkO-A50YZMzpiaLJejkn9LOreVRz5J0k9jA/exec'
                                        const form = document.forms['guestorderform']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }
                                }

                                if (($('input[name=mohCharges]:checked').val() == "Standard")) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbx-GkhT8Zt5eHyAC89cSIivYKpobOq-eeorDC3IGHfn08IzG3revcVViYinzWCwDsrK/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (($('input[name=mohCharges]:checked').val() == "Express")) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbzm4De2NEaYJIC027JRLJ21HHYFC7I7KcTMbsLhWVbjM8Ant804oyhtIZrZIwzLKm7S/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (($('input[name=mohCharges]:checked').val() == "Immediate")) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwkLPAS6Yr8hTqmhQOqF2Q5cDoxNUW6StYQCX9RDNE2MM4gqZvSFfnirNyBVz7rpHeG/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))

                                }

                                document.getElementById('submitBtnfinal').click()
                            }
                        };

                        var body = {
                            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                            'order_ids': [
                                orderId
                            ],
                            'include_task_history': 0
                        };

                        request.send(JSON.stringify(body));

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
                    'custom_field_template': 'Pharmacy_MOH',
                    'meta_data': [
                        { "label": "Quarantine_Order", "data": "" },
                        { "label": "Contact_Name", "data": customerUsername },
                        { "label": "Address", "data": customerAddress },
                        { "label": "Area", "data": area },
                        { "label": "Patient_Number", "data": orderId },
                        { "label": "IC_Passport_Number", "data": icPassportNum },
                        { "label": "Appointment_Place", "data": appointmentPlace },
                        { "label": "Phone_Number", "data": customerPhoneNoPlus },
                        { "label": "Additional_Phone_Number", "data": additionalPhoneNoPlus },
                        { "label": "Delivery_Type", "data": deliveryType },
                        { "label": "Remarks", "data": customerRemarks },
                        { "label": "Payment_Type", "data": customerPM },
                        { "label": "Submitted_Date", "data": dateSubmitted },
                        { "label": "Appointment_Place_District", "data": appointmentPlaceDistrict },
                        { "label": "Send_Order_To", "data": sendOrderTo },
                        { "label": "Price", "data": price },
                        { "label": "Order_Origin", "data": order_Origin },
                        { "label": "Patient_Order_ID", "data": patientOrderId }
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

            if ($('input[name=products]').val() == "pharmacyjpmc") {
                var patientOrderId = "JPMCPJSC" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

                let customerAddress = document.getElementById("house").value + " " + document.getElementById("kampong").value
                    + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                    + document.getElementById("postal").value;

                document.getElementById("customerAddress").value = customerAddress;

                if (($('input[name=jpmcCharges]:checked').val() == "Express Brunei-Muara")) {
                    document.getElementById('price').value = '5';
                }

                if (($('input[name=jpmcCharges]:checked').val() == "Standard Brunei-Muara")) {
                    document.getElementById('price').value = '3';
                }

                if (($('input[name=jpmcCharges]:checked').val() == "Standard Tutong")) {
                    document.getElementById('price').value = '7';
                }

                if (($('input[name=jpmcCharges]:checked').val() == "Standard Belait")) {
                    document.getElementById('price').value = '7';
                }

                if (($('input[name=jpmcCharges]:checked').val() == "Standard Temburong")) {
                    document.getElementById('price').value = '10';
                }

                let customerRemarks = document.getElementById("remarks").value;
                let customerPM = document.getElementById("paymentmethod").value;
                let order_Origin = document.getElementById("orderOrigin").value;

                let orderId = document.getElementById("patientNumber").value;
                let jobDescription = $('input[name=jpmcCharges]:checked').val();
                let customerEmail = document.getElementById("email").value;
                let customerUsername = document.getElementById("name").value;

                document.getElementById("icPassportNum").value = document.getElementById("icnumber").value + document.getElementById("passport").value;

                let customerPhone = "+" + document.getElementById("code").value + document.getElementById("contact_1").value;

                let appointmentPlace = document.getElementById("healthCentreBM").value + document.getElementById("healthCentreTTG").value
                    + document.getElementById("healthCentreTEM").value + document.getElementById("healthCentreKB").value;

                document.getElementById("customerPhone").value = customerPhone;

                document.getElementById("appointmentPlace").value = appointmentPlace;

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/create_task');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);

                        request.open('POST', 'https://api.tookanapp.com/v2/get_job_details_by_order_id');

                        request.setRequestHeader('Content-Type', 'application/json');

                        request.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                console.log('Status:', this.status);
                                console.log('Headers:', this.getAllResponseHeaders());
                                console.log('Body:', this.responseText);

                                responseo = this.responseText;
                                json_responseo = JSON.parse(responseo);

                                var counttaskhistory = json_responseo.data["length"];

                                for (let i = 0; i < counttaskhistory; i++) {
                                    if (json_responseo.data[i].custom_field["length"] == 7) {
                                        if (json_responseo.data[i].custom_field[6].data == patientOrderId) {
                                            document.getElementById("Tookan-Tracking").value = json_responseo.data[i].job_id;
                                            i = counttaskhistory;
                                        }
                                    }
                                }

                                const scriptURL = 'https://script.google.com/macros/s/AKfycbx8ZYmIx4tygxtJs7m-2XlM7IxR_zikakiSjqxhXvhaVag-IGJUy_Am-61KpZfPeIza/exec'
                                const form = document.forms['guestorderform']

                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                    .catch(error => console.error('Error!', error.message))

                                if (medicineDBGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbdICh1LrT62N7ySvkgIOMq825LEKvM7KRcVREBOJVzzZSbopF4LowFZGZb4-_XMhZNQ/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (medicineDBjpmcGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbypovbPZ5icrus4WPpW_V5wAKc9Rgu0gfx5HnKpP9jYvxa3prL35Yb2e98DNyvyW92ZpA/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (gsheet2 == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycby6nF1eowr8aTVlTK7xSO5MAdcoRhWYOtaXPGkcqjfgihOAA8nKWoNmF6f1yPKYEvX-1A/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (split == 1) {

                                    const scriptURL = 'https://script.google.com/macros/s/AKfycby_15K0elbIbyOTUUn_Npwyu7qyXqchQ5HCthw7IBqb7qiA3L6RQ11lTyWrmeuGeLTuSg/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))

                                }

                                document.getElementById('submitBtnfinal').click()
                            }
                        };

                        var body = {
                            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                            'order_ids': [
                                orderId
                            ],
                            'include_task_history': 0
                        };

                        request.send(JSON.stringify(body));
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
                    'custom_field_template': 'Pharmacy_JPMC',
                    'meta_data': [{ "label": "IC", "data": customerIC },
                    { "label": "Patient_Number", "data": orderId },
                    { "label": "Remarks", "data": customerRemarks },
                    { "label": "Type", "data": jobDescription },
                    { "label": "Method", "data": customerPM },
                    { "label": "Barcode", "data": orderId },
                    { "label": "OrderOriginFrom", "data": order_Origin },
                    { "label": "Patient_Order_ID", "data": patientOrderId }],
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

            if ($('input[name=products]').val() == "pharmacyphc") {
                var patientOrderId = "PHC" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

                let customerAddress = document.getElementById("house").value + " " + document.getElementById("kampong").value
                    + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                    + document.getElementById("postal").value;

                document.getElementById("customerAddress").value = customerAddress;

                if (($('input[name=phcCharges]:checked').val() == "Standard Belait")) {
                    document.getElementById('price').value = '3';
                }

                if (($('input[name=phcCharges]:checked').val() == "Standard Tutong")) {
                    document.getElementById('price').value = '5';
                }

                if (($('input[name=phcCharges]:checked').val() == "Standard Brunei-Muara")) {
                    document.getElementById('price').value = '7';
                }

                if (($('input[name=phcCharges]:checked').val() == "Standard Temburong")) {
                    document.getElementById('price').value = '10';
                }

                let customerRemarks = document.getElementById("remarks").value;
                let customerPM = document.getElementById("paymentmethod").value;
                let order_Origin = document.getElementById("orderOrigin").value;

                let orderId = document.getElementById("patientNumber").value;
                let jobDescription = $('input[name=phcCharges]:checked').val();
                let customerEmail = document.getElementById("email").value;
                let customerUsername = document.getElementById("name").value;

                document.getElementById("icPassportNum").value = document.getElementById("icnumber").value + document.getElementById("passport").value;

                let customerPhone = "+" + document.getElementById("code").value + document.getElementById("contact_1").value;

                document.getElementById("customerPhone").value = customerPhone;

                document.getElementById("appointmentPlace").value = appointmentPlace;

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/create_task');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);
                        request.open('POST', 'https://api.tookanapp.com/v2/get_job_details_by_order_id');

                        request.setRequestHeader('Content-Type', 'application/json');

                        request.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                console.log('Status:', this.status);
                                console.log('Headers:', this.getAllResponseHeaders());
                                console.log('Body:', this.responseText);

                                responseo = this.responseText;
                                json_responseo = JSON.parse(responseo);

                                var counttaskhistory = json_responseo.data["length"];

                                for (let i = 0; i < counttaskhistory; i++) {
                                    if (json_responseo.data[i].custom_field["length"] == 7) {
                                        if (json_responseo.data[i].custom_field[6].data == patientOrderId) {
                                            document.getElementById("Tookan-Tracking").value = json_responseo.data[i].job_id;
                                            i = counttaskhistory;
                                        }
                                    }
                                }

                                if (medicineDBGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbdICh1LrT62N7ySvkgIOMq825LEKvM7KRcVREBOJVzzZSbopF4LowFZGZb4-_XMhZNQ/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (gsheetPanagaHC == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbxlggx7CrM8psD-yaX4Sb2JRgTk_1Q7UQSLEzT-gvzkEP_nX59MGcJvaTa86jWWxAvfSQ/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                document.getElementById('submitBtnfinal').click()
                            }
                        };

                        var body = {
                            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                            'order_ids': [
                                orderId
                            ],
                            'include_task_history': 0
                        };

                        request.send(JSON.stringify(body));
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
                    'custom_field_template': 'Pharmacy_PHC',
                    'meta_data': [{ "label": "IC", "data": customerIC },
                    { "label": "Patient_Number", "data": orderId },
                    { "label": "Remarks", "data": customerRemarks },
                    { "label": "Type", "data": jobDescription },
                    { "label": "Method", "data": customerPM },
                    { "label": "Barcode", "data": orderId },
                    { "label": "OrderOriginFrom", "data": order_Origin },
                    { "label": "Patient_Order_ID", "data": patientOrderId }],
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

            if ($('input[name=products]').val() == "grp") {
                let customerAddress = document.getElementById("house").value + " " + document.getElementById("kampong").value
                    + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                    + document.getElementById("postal").value;

                document.getElementById("customerAddress").value = customerAddress;

                var codeN = "/GRP";
                var conN = document.getElementById("name").value;
                document.getElementById("buyerName").value = conN + codeN;

                if (document.getElementById("GoRushReceivingCountry").value == "MALAYSIA") {
                    if ($('input[name=shipmentMethod]:checked').val() == "air") {
                        document.getElementById("warehouseReference").value = "MAL/AIRGRP" + " - " + conN;
                    }

                    if ($('input[name=shipmentMethod]:checked').val() == "sea") {
                        document.getElementById("warehouseReference").value = "MAL/GRP" + " - " + conN;
                    }
                }

                if (document.getElementById("GoRushReceivingCountry").value == "CHINA") {
                    if ($('input[name=shipmentMethod]:checked').val() == "air") {
                        document.getElementById("warehouseReference").value = "GZ/AIRGRP" + " - " + conN;
                    }

                    if ($('input[name=shipmentMethod]:checked').val() == "sea") {
                        document.getElementById("warehouseReference").value = "GZ/GRP" + " - " + conN;
                    }
                }

                if (document.getElementById("GoRushReceivingCountry").value == "SINGAPORE") {
                    if ($('input[name=shipmentMethod]:checked').val() == "air") {
                        document.getElementById("warehouseReference").value = "SIN/AIRGRP" + " - " + conN;
                    }

                    if ($('input[name=shipmentMethod]:checked').val() == "sea") {
                        document.getElementById("warehouseReference").value = "SIN/GRP" + " - " + conN;
                    }
                }

                let warehouseReference = document.getElementById("warehouseReference").value;

                let orderId = document.getElementById("grpTrack").value;
                let customerEmail = document.getElementById("email").value;
                let customerUsername = document.getElementById("name").value;

                let customerPhone = "+" + document.getElementById("code").value + document.getElementById("contact_1").value;

                document.getElementById("customerPhone").value = customerPhone;

                let commodity = document.getElementById("commodities").value;
                let totalPrice = document.getElementById("itemPrice").value;
                let itemCurrency = document.getElementById("currency").value;
                let itemContains = document.querySelector('input[name=itemContains]:checked').value

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/create_task');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);

                        request.open('POST', 'https://api.tookanapp.com/v2/get_job_details_by_order_id');

                        request.setRequestHeader('Content-Type', 'application/json');

                        request.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                console.log('Status:', this.status);
                                console.log('Headers:', this.getAllResponseHeaders());
                                console.log('Body:', this.responseText);

                                responseo = this.responseText;
                                json_responseo = JSON.parse(responseo);

                                document.getElementById("Tookan-Tracking").value = json_responseo.data[0].job_id;

                                if (tempSplit == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbyT31WOUuuXYtLxiKZpTDrNg0cyO7IgDQRTXij1EdOoVrq03AkRDJAa1BFshM2HJ6k5ow/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                }

                                if (gobeliDailyReceiveSheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbxNHKzgMQRRPGdYX9iJlQPl48w04CRF3KlIzDiZMRVI3cVLe5l3ojMa8xvXur4Pi4FR/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                }

                                if (document.getElementById("GoRushReceivingCountry").value == "MALAYSIA") {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbyoJMDxUwWvWoKjv1o_Us0Xu79WsrKVF6GJldTc5IXlP9x6eNICQIm-reiRih0cis1iHQ/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                }

                                if (document.getElementById("GoRushReceivingCountry").value == "CHINA") {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbzHDabrr8LnVfL4hlO7-JPbf6BJWi98UkiaX7tsRu_EQdBZjmhRC2B17qC7hwNv3iVh/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                }

                                if (document.getElementById("GoRushReceivingCountry").value == "SINGAPORE") {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwh8fwGxsFuXLRmc6NI1WW65iSq7ClLoBGBrOOLXwSgVS4Oae-bMAYTR8EGIdE_hVnU7w/exec'
                                    const form = document.forms['guestorderform']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                }

                                request.open('POST', 'https://api.tookanapp.com/v2/edit_task');
                                request.setRequestHeader('Content-Type', 'application/json');

                                request.onreadystatechange = function () {
                                    if (this.readyState === 4) {
                                        console.log('Status:', this.status);
                                        console.log('Headers:', this.getAllResponseHeaders());
                                        console.log('Body:', this.responseText);

                                        document.getElementById('submitBtnfinal').click()
                                    }
                                };

                                var body = {
                                    'barcode': document.getElementById("Tookan-Tracking").value,
                                    'api_key': '53626885f0400f401d527c6514516c471ae7cdfe2fdf7c38591403c4',
                                    'job_id': document.getElementById("Tookan-Tracking").value,
                                    'merchant_id': '1180025',
                                    'notify': 1
                                };

                                request.send(JSON.stringify(body));
                            }
                        };

                        var body = {
                            'api_key': '53626885f0400f401d527c6514516c471ae7cdfe2fdf7c38591403c4',
                            'order_ids': [
                                orderId
                            ],
                            'include_task_history': 0
                        };
                        request.send(JSON.stringify(body));
                    }
                };

                var body = {
                    'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                    'merchant_id': '1180025',
                    'order_id': orderId,
                    'job_description': 'Go Rush Plus Order',
                    'customer_email': customerEmail,
                    'customer_username': customerUsername,
                    'customer_phone': customerPhone,
                    'customer_address': customerAddress,
                    'latitude': '',
                    'longitude': '',
                    'job_delivery_datetime': jobdeliverydatetime,
                    'custom_field_template': 'Go_Rush_Plus',
                    'meta_data': [
                        {
                            'label': 'Commodity',
                            'data': commodity
                        },
                        {
                            'label': 'Total_Price',
                            'data': totalPrice
                        },
                        {
                            'label': 'Currency',
                            'data': itemCurrency
                        },
                        {
                            'label': 'DG',
                            'data': itemContains
                        },
                        {
                            'label': 'Warehouse_Reference',
                            'data': warehouseReference
                        }
                    ],
                    'team_id': '921691',
                    'auto_assignment': '0',
                    'has_pickup': '0',
                    'has_delivery': '1',
                    'layout_type': '0',
                    'tracking_link': 0,
                    'timezone': '-480',
                    'fleet_id': '',
                    'ref_images': [],
                    'notify': 1,
                    'tags': '',
                    'geofence': 0

                };
                request.send(JSON.stringify(body));
            }

            if ($('input[name=products]').val() == "general") {
                let customerAddress = document.getElementById("house").value + " " + document.getElementById("kampong").value
                    + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                    + document.getElementById("postal").value;

                document.getElementById("customerAddress").value = customerAddress;

                let itemDescription = document.getElementById("productdescription").value;
                let jobDescription = $('input[name=generalCharges]:checked').val();
                let jobType = $('input[name=pickupordelivery]:checked').val();

                let customerEmail = document.getElementById("email").value;
                let customerUsername = document.getElementById("name").value;

                let customerPhone = "+" + document.getElementById("code").value + document.getElementById("contact_1").value;

                document.getElementById("customerPhone").value = customerPhone;

                let deliveryAddress = document.getElementById("receiverHouse").value + " " + document.getElementById("receiverKampong").value
                + " " + document.getElementById("receiverJalan").value + " " + document.getElementById("receiverSimpang").value + " " + $('input[name=receiverDistrict]:checked').val() + " "
                + document.getElementById("receiverPostal").value;

                let receiverName = document.getElementById("receiverName").value;
                let receiverPhone = "+" + document.getElementById("code_3").value + document.getElementById("receiverContact_1").value;
                let productType = document.getElementById("producttype").value;
                let productWeight = $('input[name=productweight]:checked').val();
                let codRequired = $('input[name=codrequired]:checked').val();
                let codAmount = document.getElementById("codamount").value;
                let billTo = document.getElementById("billto").value;

                let pickupAddress = document.getElementById("pickupaddress").value;
                let pickupDate = document.getElementById("pickupdate").value;

                let customerPM = document.getElementById("paymentmethod").value;

                if (($('input[name=generalCharges]:checked').val() == "Standard Brunei-Muara")) {
                    document.getElementById('price').value = '4';
                }

                if (($('input[name=generalCharges]:checked').val() == "Standard Tutong")) {
                    document.getElementById('price').value = '7';
                }

                if (($('input[name=generalCharges]:checked').val() == "Standard Belait")) {
                    document.getElementById('price').value = '10';
                }

                if (($('input[name=generalCharges]:checked').val() == "Standard Temburong")) {
                    document.getElementById('price').value = '12';
                }

                if (($('input[name=generalCharges]:checked').val() == "Express Brunei Muara")) {
                    document.getElementById('price').value = '5';
                }

                if (($('input[name=generalCharges]:checked').val() == "Express Tutong")) {
                    document.getElementById('price').value = '8';
                }

                if (($('input[name=generalCharges]:checked').val() == "Express Belait")) {
                    document.getElementById('price').value = '12';
                }

                if (($('input[name=generalCharges]:checked').val() == "Drop off Brunei Muara")) {
                    document.getElementById('price').value = '3';
                }

                if (($('input[name=generalCharges]:checked').val() == "Drop off Tutong")) {
                    document.getElementById('price').value = '5';
                }

                if (($('input[name=generalCharges]:checked').val() == "Drop off Belait")) {
                    document.getElementById('price').value = '7';
                }

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/create_task');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);

                        const scriptURL = 'https://script.google.com/macros/s/AKfycbzvzp-lNIC5HV2fqyjKOfWxtURgUdE7xx6509Jzj8OhdCpMBu70-6T14FCY-RJ-187a/exec'
                        const form = document.forms['guestorderform']

                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                            .catch(error => console.error('Error!', error.message))

                            document.getElementById('submitBtnfinal').click()
                    }
                };

                var body = {
                    'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                    'order_id': '',
                    'job_description': jobDescription,
                    'customer_email': senderEmail,
                    'customer_username': receiverName,
                    'customer_phone': '',
                    'customer_address': deliveryAddress,
                    'latitude': '',
                    'longitude': '',
                    'job_delivery_datetime': jobdeliverydatetime,
                    'custom_field_template': 'General_Order',
                    'meta_data': [
                        { "label": "Item_Description", "data": itemDescription },
                        { "label": "Job_Type", "data": jobType },
                        { "label": "Sender_Name", "data": customerUsername },
                        { "label": "Sender_Phone", "data": customerPhone },
                        { "label": "Sender_Email", "data": customerEmail },
                        { "label": "Pickup_Address", "data": pickupAddress },
                        { "label": "Pickup_Date", "data": pickupDate },
                        { "label": "Delivery_Type", "data": jobDescription },
                        { "label": "Receiver_Name", "data": receiverName },
                        { "label": "Receiver_Phone", "data": receiverPhone },
                        { "label": "Receiver_Address", "data": deliveryAddress },
                        { "label": "Product_Type", "data": productType },
                        { "label": "Product_Weight", "data": productWeight },
                        { "label": "COD_Required", "data": codRequired },
                        { "label": "COD_Amount", "data": codAmount },
                        { "label": "Payment_Method", "data": customerPM },
                        { "label": "Bill_To", "data": billTo },
                        { "label": "Customer_Order_ID", "data": customerOrderId },
                        { "label": "Submitted_Date", "data": dateSubmitted }],
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
    });
});
