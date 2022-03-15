document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        var todChoice = 0;
        var split = 1;
        var gsheet2 = 1;
        var countAgree = 0;
        var medicineDBGsheet = 1;
        var createPharmacySheet = 1;

        const d = new Date();
        let hour = d.getHours();
        let day = d.getDay();

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

        $("#selectdistrictarea").hide();

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

        $("#pleasewait").hide();

        $("#submitbutton").hide();

        $('input[name=Requester]').change(function () {
            if ($(this).val().length == 0) {
                $("#requesterarea").hide();
                $("#quarantineArea").hide();
                $("#requesternextbutton").hide();

                document.getElementById('Requester-Name').value = '';
                document.getElementById('Requester-Contact-Number').value = '';
                document.getElementById('Relationship-to-Patient').value = '';
            }

            if ($(this).val() == "No") {
                $("#requesterarea").hide();
                $("#quarantineArea").fadeIn();
                $("#requesternextbutton").hide();

                document.getElementById('Requester-Name').value = '';
                document.getElementById('Requester-Contact-Number').value = '';
                document.getElementById('Relationship-to-Patient').value = '';
            }

            if ($(this).val() == "Yes") {
                $("#requesterarea").fadeIn();
                $("#quarantineArea").hide();
                $("#requesternextbutton").fadeIn();

                document.getElementById("requesternextbutton").addEventListener("click", function () {
                    if (($("#Requester-Name").val().length == 0) || ($("#Requester-Contact-Number").val().length == 0) || ($("#Relationship-to-Patient").val().length == 0)) {
                        $("#quarantineArea").hide();
                        alert("Please do not leave the required fields empty!");
                    }

                    if (($("#Requester-Name").val().length != 0) && ($("#Requester-Contact-Number").val().length != 0) && ($("#Relationship-to-Patient").val().length != 0)) {
                        $("#requesternextbutton").hide();
                        $("#quarantineArea").fadeIn();
                    }
                });
            }
        });

        $('input[name=QuarantineOrder]').change(function () {
            if ($(this).val().length == 0) {
                $("#selecthcarea").hide();
            }

            if ($(this).val().length != 0) {
                $("#selecthcarea").fadeIn();
            }
        });

        $('input[name=District]').change(function () {
            if ($(this).val().length == 0) {
                $("#selectdistrictarea").hide();
                $("#deliverymethodarea").hide();

                $("#expressArea").hide();
                $("#immediateArea").hide();

                document.getElementById("mapSource").src = "";
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

                $('input[name=DistrictAddress]').attr('checked', false);
                $('input[name=TypeofDelivery]').attr('checked', false);
            }

            if ($(this).val() == "Brunei Muara") {
                $("#selectdistrictarea").hide();
                $("#deliverymethodarea").hide();

                $("#expressArea").fadeIn();
                $("#immediateArea").hide();

                document.getElementById("mapSource").src = "";
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

                $('input[name=DistrictAddress]').attr('checked', false);
                $('input[name=TypeofDelivery]').attr('checked', false);
            }

            if ($(this).val() == "Tutong") {
                $("#selectdistrictarea").hide();
                $("#deliverymethodarea").hide();

                $("#expressArea").hide();
                $("#immediateArea").hide();

                document.getElementById("mapSource").src = "";
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

                $('input[name=DistrictAddress]').attr('checked', false);
                $('input[name=TypeofDelivery]').attr('checked', false);
            }

            if ($(this).val() == "Belait") {
                $("#selectdistrictarea").hide();
                $("#deliverymethodarea").hide();

                $("#expressArea").hide();
                $("#immediateArea").hide();

                document.getElementById("mapSource").src = "";
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

                $('input[name=DistrictAddress]').attr('checked', false);
                $('input[name=TypeofDelivery]').attr('checked', false);
            }

            if ($(this).val() == "Temburong") {
                $("#selectdistrictarea").hide();
                $("#deliverymethodarea").hide();

                $("#expressArea").hide();
                $("#immediateArea").hide();

                document.getElementById("mapSource").src = "";
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

                $('input[name=DistrictAddress]').attr('checked', false);
                $('input[name=TypeofDelivery]').attr('checked', false);
            }
        });

        $('#BNHC').change(function () {
            if ($(this).val().length == 0) {
                $("#immediateArea").hide();
                $("#selectdistrictarea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();
            }

            if ($(this).val() == "Raja Isteri Pengiran Anak Saleha Hospital") {

                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2805202346863!2d114.93130540523119!3d4.892630019678778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228acb18b46725%3A0x9118155b10d353ca!2sRaja%20Isteri%20Pengiran%20Anak%20Saleha%20Hospital!5e0!3m2!1sen!2sbn!4v1634281650713!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pengkalan Batu Health Centre") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9930134353094!2d114.81397081532558!3d4.771159642369682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322263643d7b9bf9%3A0xab86d8cb5835ceda!2sPengkalan%20Batu%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285210387!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }


            if ($(this).val() == "Jubli Perak Sengkurong Health Centre") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2877506842783!2d114.84314291532539!3d4.891412441334922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226084b479a23b%3A0xf3137ef638ed3cfd!2sJubli%20Perak%20Sengkurong%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285543314!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Jubli Emas Kg Perpindahan Bunut Health Centre") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.547397189751!2d114.88291741532552!3d4.847486841715639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322261c61f38a619%3A0x3a6a37bd46269d3a!2sJubli%20Emas%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285599556!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pengiran Anak Puteri Hajah Rashidah Sa'adatul Bolkiah Health Centre") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3769360804904!2d114.9340483153255!3d4.876369041465689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228ac25aec45df%3A0x8707ccd2be1d106b!2sPAPHRSB%20SG%20ASAM%20HEALTH%20CENTRE!5e0!3m2!1sen!2sbn!4v1634285838280!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pengiran Anak Puteri Hajah Muta-Wakillah Hayatul Bolkiah Health Centre") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0479626441015!2d114.90431041532548!3d4.9316318409836315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f57fa2c50b8f%3A0x5e99dc6cafc60b21!2sPengiran%20Anak%20Puteri%20Hajah%20Muta-Wakillah%20Hayatul%20Bolkiah%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285881919!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Rimba Dialysis Centre") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.762589183511!2d114.9064117!3d4.9312319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f57fb34628ab%3A0xe11b4fd5ed3d2ce1!2sRimba%20Dialysis%20Centre!5e0!3m2!1sen!2sbn!4v1636339406654!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Berakas Health Centre") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.828175459776!2d114.9636824153256!3d4.96821124066185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f42787932131%3A0xf9ab86325b87674!2sPusat%20Kesihatan%20Berakas!5e0!3m2!1sen!2sbn!4v1634285920206!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Muara Health Centre") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4576007276696!2d115.06447081532535!3d5.029285440119686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f06dcb40542b%3A0xdce8b6a5b55c836d!2sMuara%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285963322!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Psychiatry Department, Ministry of Health") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.254386052767!2d114.90992181532567!3d4.897028391286052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f553a7c821df%3A0x65c23364c25df9!2sPsychiatry%20Department%2C%20Ministry%20of%20Health!5e0!3m2!1sen!2sbn!4v1634992947581!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "KG Bolkiah") {
                $("#immediateArea").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").fadeIn();
            }

            if ($(this).val() == "SG Bunga") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.1432004986946!2d115.01193264313245!3d4.915696991808234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f36f1f0926d9%3A0x5eb0de579e4e2269!2sSungai%20Bunga%20Health%20Clinic%2C%20Kampong%20Sungai%20Bunga!5e0!3m2!1sen!2sbn!4v1634286214099!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "JPMC") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.7582787740073!2d114.82977193840651!3d4.948768090298503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32225e93638da5b1%3A0x90bf9d36cc534c7c!2sJerudong%20Park%20Medical%20Centre!5e0!3m2!1sen!2sbn!4v1637046171509!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "PJSC") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.7576714939253!2d114.83085643710163!3d4.949108116049822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32225e9367a66cc1%3A0x3a6601d28e30b574!2sPantai%20Jerudong%20Specialist%20Centre%20(PJSC)!5e0!3m2!1sen!2sbn!4v1637046289863!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('#TUHC').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Pengiran Muda Mahkota Pengiran Muda Haji Al-Muhtadee Billah Hospital") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7255630496174!2d114.66117111532566!3d4.817114541977045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9a59e46a5%3A0x62066e860030b362!2sPengiran%20Muda%20Mahkota%20Pengiran%20Muda%20Haji%20Al-Muhtadee%20Billah%20Hospital!5e0!3m2!1sen!2sbn!4v1634286463485!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Telisai Health Centre") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1839730746256!2d114.5578142153256!3d4.738075742650269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222728d5f0c92a9%3A0xdae9ecd7acf168f9!2sTelisai%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286496075!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pekan Tutong Health Centre") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.719887312785!2d114.66105286532566!3d4.81808504196872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9c57b185f%3A0x24d45d637ed2282c!2sPusat%20Kesihatan%20Tutong!5e0!3m2!1sen!2sbn!4v1634286553112!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Sungai Kelugos Health Centre") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7792578580184!2d114.76881401532557!3d4.807923542055853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322264370344a2a7%3A0xc548e1a7c1521657!2sSungai%20Kelugos%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286594839!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Lamunin Health Centre") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5164928667486!2d114.7123597153257!3d4.67990954313922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32227a0759340203%3A0x40335e9d8c7eefc1!2sLamunin%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286641487!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('#BHC').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Suri Seri Begawan Hospital") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.058923325921!2d114.19682271532564!3d4.583444243937976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa53c0d42c6b%3A0x4309941067d4ea11!2sSuri%20Seri%20Begawan%20Hospital!5e0!3m2!1sen!2sbn!4v1634286771871!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Kuala Belait Health Centre") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9459.07903208395!2d114.20090259074068!3d4.584540049961497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa33ffffffff%3A0xabcd114352fec08d!2sKuala%20Belait%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286806620!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Seria Health Centre") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.905812341586!2d114.33414371532547!3d4.610877343712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218a7ffbcb7121d%3A0x225eeee88bbd0d4e!2sSeria%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286841382!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Sungai Liang Health Centre") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5325189388823!2d114.49268721532552!3d4.677087943162768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32220b66a610f693%3A0x9385789cab5ba672!2sSungai%20Liang%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286874162!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('#TEHC').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Pengiran Isteri Hajah Mariam Hospital") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3398029284485!2d115.0750711153255!3d4.710906342879327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222853b9a771fd5%3A0xb426306755a3d508!2sPengiran%20Isteri%20Hajjah%20Mariam%20Hospital!5e0!3m2!1sen!2sbn!4v1634286943427!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Bangar Health Clinic") {
                $("#clinicAddress").hide();
                $("#selectdistrictarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.337380807763!2d115.07532101532566!3d4.711329842875782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322285c84bc026a1%3A0xcf7e5ef899e3115!2sKlinik%20Kesihatan%20Bangar%2C%20Temburong!5e0!3m2!1sen!2sbn!4v1634286972450!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('input[name=DistrictAddress]').change(function () {
            if ($(this).val().length == 0) {
                $("#deliverymethodarea").hide();
            }

            if ($(this).val() == "Brunei Muara") {
                $("#deliverymethodarea").fadeIn();
            }

            if (($(this).val() == "Tutong") || ($(this).val() == "Belait") || ($(this).val() == "Temburong")) {
                $("#expressArea").hide();
                $("#deliverymethodarea").fadeIn();
            }
        });

        $('input[name=TypeofDelivery]').change(function () {
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
                document.getElementById('price').value = '';

                todChoice = 0;
            }

            if ($(this).val() == "Standard ($3)") {
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
                document.getElementById('price').value = '3';

                todChoice = "Standard";
            }

            if ($(this).val() == "Express ($5)") {
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
                document.getElementById('price').value = '5';

                todChoice = "Express";
            }

            if ($(this).val() == "Immediate ($20)") {
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
                document.getElementById('price').value = '20';

                todChoice = "Immediate";
            }

            if ($(this).val() == "Self Collect") {
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

        $('input[name=ICorPassport]').change(function () {
            if ($(this).val().length == 0) {
                $("#icarea").hide();
                $("#passportarea").hide();

                document.getElementById('icNumber').value = '';
                document.getElementById('passport').value = '';
            }

            if ($(this).val() == "icNumber") {
                $("#icarea").fadeIn();
                $("#passportarea").hide();

                document.getElementById('icNumber').value = '';
                document.getElementById('passport').value = '';
            }

            if ($(this).val() == "passport") {
                $("#icarea").hide();
                $("#passportarea").fadeIn();

                document.getElementById('icNumber').value = '';
                document.getElementById('passport').value = '';
            }
        });

        document.getElementById("addressnextbutton").addEventListener("click", function () {
            if (($("#name").val().length == 0) || ($("#dob").val().length == 0)
                || ($("#contact_1").val().length == 0) || ($("#bruhims").val().length == 0) || ($("#address_1").val().length == 0)
                || ($("#address_2").val().length == 0) || ($("#address_4").val().length == 0)) {
                $("#paymentmethodarea").hide();
                alert("Please do not leave the required fields empty!");
            }

            if (($("#name").val().length != 0) && ($("#dob").val().length != 0)
                && ($("#contact_1").val().length != 0) && ($("#bruhims").val().length != 0) && ($("#address_1").val().length != 0)
                && ($("#address_2").val().length != 0) && ($("#address_4").val().length != 0)) {
                $("#addressnextbutton").hide();
                $("#paymentmethodarea").fadeIn();
            }
        });

        document.getElementById("selfcollectnextbutton").addEventListener("click", function () {
            if (($("#name").val().length == 0) || ($("#dob").val().length == 0)
                || ($("#contact_1").val().length == 0) || ($("#bruhims").val().length == 0) || ($("#scDate").val().length == 0)) {
                $("#paymentmethodarea").hide();
                alert("Please do not leave the required fields empty!");
            }

            if (($("#name").val().length != 0) && ($("#dob").val().length != 0)
                && ($("#contact_1").val().length != 0) && ($("#bruhims").val().length != 0) && ($("#scDate").val().length != 0)) {
                $("#selfcollectnextbutton").hide();
                $("#paymentmethodarea").fadeIn();
            }
        });

        $('input[name=PaymentMethod]').change(function () {

            if ($(this).val().length == 0) {
                $("#paymentnoticearea").hide();
                $("#remarkarea").hide();
                $("#agreementArea").hide();
            }

            if ($(this).val() == "Cash") {
                $("#paymentnoticearea").hide();
                $("#remarkarea").fadeIn();
                $("#agreementArea").fadeIn();
            }

            if ($(this).val() == "Bank Transfer") {
                $("#paymentnoticearea").fadeIn();
                $("#remarkarea").fadeIn();
                $("#agreementArea").fadeIn();
            }
        });

        $('#Agreement').change(function () {
            if (countAgree == 0) {
                countAgree = countAgree + 1;

                $("#pleasewait").fadeIn();

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

                let patientOrderId = "MOH" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

                let area = "";

                //getCustomerFullAddress
                if (document.getElementById("Simpang").value.length == 0) {
                    var customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " +
                        document.getElementById("address_4").value;
                } else {
                    var customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " +
                        document.getElementById("Simpang").value + ", " + document.getElementById("address_4").value;
                }

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

                if (document.querySelector('input[name=District]:checked').value == "Brunei Muara") {
                    if ((document.getElementById("BNHC").value == "Raja Isteri Pengiran Anak Saleha Hospital") ||
                        (document.getElementById("BNHC").value == "Rimba Dialysis Centre") || (document.getElementById("BNHC").value == "Pengkalan Batu Health Centre") ||
                        (document.getElementById("BNHC").value == "PJSC") || (document.getElementById("BNHC").value == "JPMC") ||
                        (document.getElementById("BNHC").value == "Psychiatry Department, Ministry of Health")) {
                        document.getElementById("sendOrderTo").value = "OPD";
                    } else {
                        document.getElementById("sendOrderTo").value = "BHC";
                    }
                }

                if (document.querySelector('input[name=District]:checked').value == "Tutong") {
                    document.getElementById("sendOrderTo").value = "PMMH";
                }

                if (document.querySelector('input[name=District]:checked').value == "Belait") {
                    document.getElementById("sendOrderTo").value = "SSPH";
                }

                if (document.querySelector('input[name=District]:checked').value == "Temburong") {
                    document.getElementById("sendOrderTo").value = "OPD";
                }

                if (todChoice == "Standard") {
                    var deliveryType = "STD";
                    document.getElementById("deliveryType").value = deliveryType;
                }

                if (todChoice == "Express") {
                    var deliveryType = "EXP";
                    document.getElementById("deliveryType").value = deliveryType;
                }

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

                let quarantineOrder = document.querySelector('input[name=QuarantineOrder]:checked').value;
                let area = document.getElementById("area").value;
                let price = document.getElementById('price').value;
                let appointmentPlaceDistrict = document.querySelector('input[name=District]:checked').value;
                let sendOrderTo = document.getElementById("sendOrderTo").value;

                let customerRemarks = document.getElementById("re").value;
                let customerPM = document.querySelector('input[name=PaymentMethod]:checked').value;
                let order_Origin = document.getElementById("orderOrigin").value;

                let orderId = document.getElementById("bruhims").value;
                let jobDescription = document.querySelector('input[name=TypeofDelivery]:checked').value;
                let customerEmail = document.getElementById("id-Email").value;
                let customerUsername = document.getElementById("name").value;

                document.getElementById("icPassportNum").value = document.getElementById("icNumber").value + document.getElementById("passport").value;
                let icPassportNum = document.getElementById("icPassportNum").value;

                let customerPhone = "+" + document.getElementById("code").value + document.getElementById("contact_1").value;
                let additionalPhone = "+" + document.getElementById("code_2").value + document.getElementById("contact_2").value;
                let requesterPhone = "+" + document.getElementById("code_3").value + document.getElementById("Requester-Contact-Number").value;
                let appointmentPlace = document.getElementById("BNHC").value + document.getElementById("TUHC").value
                    + document.getElementById("BHC").value + document.getElementById("TEHC").value;

                document.getElementById("customerPhone").value = customerPhone;
                document.getElementById("additionalPhone").value = additionalPhone;
                document.getElementById("requesterPhone").value = requesterPhone;
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
                                const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                    .catch(error => console.error('Error!', error.message))

                                if (createPharmacySheet == 1) {
                                    if (todChoice == "Standard") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbxxRcpKi-hcJiyKBvvB12ZYbEeZ6YS2XE9byGVO3031_91nXja45Qa62jieHfZ3cLPOdw/exec'
                                        const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }

                                    if (todChoice == "Express") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbwFchxYwmJ5DWf3KLb0ER1uIfWUmGST2h1EAo02gNIXXmYGHMNSg98N0hsr0913c1hqeQ/exec'
                                        const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }
                                }

                                if (medicineDBGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbdICh1LrT62N7ySvkgIOMq825LEKvM7KRcVREBOJVzzZSbopF4LowFZGZb4-_XMhZNQ/exec'
                                    const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (gsheet2 == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycby6nF1eowr8aTVlTK7xSO5MAdcoRhWYOtaXPGkcqjfgihOAA8nKWoNmF6f1yPKYEvX-1A/exec'
                                    const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (split == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ72tj7gj629knV7iVFRNAOemUyMGSFzUzFPFie70KN3S5cBo573kL3j9c14Q64Ccb/exec'
                                    const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))

                                    if (todChoice == "Standard") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbwonfADS7GmfHrV1U5JbIkZ1c_fcZZNZOyLHgpX4fLJt49on7ur0AwwnM270rsg5OS_/exec'
                                        const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }

                                    if (todChoice == "Express") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbycp82YFWx0oQyShPHqOQQADVhqCjt0kaISN34wVP1MmLmAz3uIncYPs39PNNitUSJF/exec'
                                        const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }
                                }

                                if (todChoice == "Standard") {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbx-GkhT8Zt5eHyAC89cSIivYKpobOq-eeorDC3IGHfn08IzG3revcVViYinzWCwDsrK/exec'
                                    const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (todChoice == "Express") {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbzm4De2NEaYJIC027JRLJ21HHYFC7I7KcTMbsLhWVbjM8Ant804oyhtIZrZIwzLKm7S/exec'
                                    const form = document.forms['wf-form-Guest-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                $("#pleasewait").hide();
                                $("#submitbutton").fadeIn();
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
                        { "label": "Quarantine_Order", "data": quarantineOrder },
                        { "label": "Contact_Name", "data": customerUsername },
                        { "label": "Address", "data": customerAddress },
                        { "label": "Area", "data": area },
                        { "label": "Patient_Number", "data": orderId },
                        { "label": "IC_Passport_Number", "data": icPassportNum },
                        { "label": "Appointment_Place", "data": appointmentPlace },
                        { "label": "Phone_Number", "data": customerPhone },
                        { "label": "Additional_Phone_Number", "data": additionalPhone },
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
        });
    });
});
