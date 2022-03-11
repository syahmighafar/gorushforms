document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        var todChoice = 0;
        var split = 1;
        var medicineDBGsheet = 1;
        var createPharmacySheet = 1;

        const d = new Date();
        let hour = d.getHours();
        let day = d.getDay();

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

        $("#selfcollectarea").hide();
        $("#selfcollectnextbutton").hide();
        $("#paymentmethodarea").hide();

        $("#paymentnoticearea").hide();
        $(".radio-button-field-14").hide();

        $("#remarkarea").hide();
        $("#asknotifyarea").hide();
        $("#notifyoftenarea").hide();

        $("#agreementArea").hide();
        $("#stdAgree").hide();
        $("#expAgree").hide();
        $("#immAgree").hide();

        $("#captchaBox").hide();

        $("#submitbutton").hide();

        $('input[name=radioQO]').change(function () {
            if ($(this).val().length == 0) {
                $("#selecthcarea").hide();
            }

            if ($(this).val().length != 0) {
                $("#selecthcarea").fadeIn();
            }
        });

        $('input[name=radioDistrict]').change(function () {
            if ($(this).val().length == 0) {

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
            }

            if ($(this).val() == "Brunei Muara") {

                $("#expressArea").fadeIn();
                $("#immediateArea").fadeIn();

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
            }

            if ($(this).val() == "Tutong") {

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
            }

            if ($(this).val() == "Belait") {

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
            }

            if ($(this).val() == "Temburong") {

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
            }
        });

        $('#BNHC').change(function () {
            if ($(this).val().length == 0) {
                $("#immediateArea").hide();
                $("#deliverymethodarea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();
            }

            if ($(this).val() == "Raja Isteri Pengiran Anak Saleha Hospital") {

                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }

                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2805202346863!2d114.93130540523119!3d4.892630019678778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228acb18b46725%3A0x9118155b10d353ca!2sRaja%20Isteri%20Pengiran%20Anak%20Saleha%20Hospital!5e0!3m2!1sen!2sbn!4v1634281650713!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pengkalan Batu Health Centre") {

                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }

                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9930134353094!2d114.81397081532558!3d4.771159642369682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322263643d7b9bf9%3A0xab86d8cb5835ceda!2sPengkalan%20Batu%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285210387!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }


            if ($(this).val() == "Jubli Perak Sengkurong Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2877506842783!2d114.84314291532539!3d4.891412441334922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226084b479a23b%3A0xf3137ef638ed3cfd!2sJubli%20Perak%20Sengkurong%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285543314!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Jubli Emas Kg Perpindahan Bunut Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.547397189751!2d114.88291741532552!3d4.847486841715639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322261c61f38a619%3A0x3a6a37bd46269d3a!2sJubli%20Emas%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285599556!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pengiran Anak Puteri Hajah Rashidah Sa'adatul Bolkiah Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3769360804904!2d114.9340483153255!3d4.876369041465689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228ac25aec45df%3A0x8707ccd2be1d106b!2sPAPHRSB%20SG%20ASAM%20HEALTH%20CENTRE!5e0!3m2!1sen!2sbn!4v1634285838280!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pengiran Anak Puteri Hajah Muta-Wakillah Hayatul Bolkiah Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0479626441015!2d114.90431041532548!3d4.9316318409836315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f57fa2c50b8f%3A0x5e99dc6cafc60b21!2sPengiran%20Anak%20Puteri%20Hajah%20Muta-Wakillah%20Hayatul%20Bolkiah%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285881919!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Rimba Dialysis Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.762589183511!2d114.9064117!3d4.9312319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f57fb34628ab%3A0xe11b4fd5ed3d2ce1!2sRimba%20Dialysis%20Centre!5e0!3m2!1sen!2sbn!4v1636339406654!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Berakas Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.828175459776!2d114.9636824153256!3d4.96821124066185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f42787932131%3A0xf9ab86325b87674!2sPusat%20Kesihatan%20Berakas!5e0!3m2!1sen!2sbn!4v1634285920206!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Muara Health Centre") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4576007276696!2d115.06447081532535!3d5.029285440119686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f06dcb40542b%3A0xdce8b6a5b55c836d!2sMuara%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634285963322!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Psychiatry Department, Ministry of Health") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.254386052767!2d114.90992181532567!3d4.897028391286052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f553a7c821df%3A0x65c23364c25df9!2sPsychiatry%20Department%2C%20Ministry%20of%20Health!5e0!3m2!1sen!2sbn!4v1634992947581!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "KG Bolkiah") {
                $("#immediateArea").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").fadeIn();
            }

            if ($(this).val() == "SG Bunga") {
                $("#immediateArea").hide();
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.1432004986946!2d115.01193264313245!3d4.915696991808234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f36f1f0926d9%3A0x5eb0de579e4e2269!2sSungai%20Bunga%20Health%20Clinic%2C%20Kampong%20Sungai%20Bunga!5e0!3m2!1sen!2sbn!4v1634286214099!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "JPMC") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.7582787740073!2d114.82977193840651!3d4.948768090298503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32225e93638da5b1%3A0x90bf9d36cc534c7c!2sJerudong%20Park%20Medical%20Centre!5e0!3m2!1sen!2sbn!4v1637046171509!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "PJSC") {
                if ((day != 0) && (day != 5)) {
                    if ((hour >= 8) && (hour < 12)) {
                        $("#immediateArea").fadeIn();
                    } else {
                        $("#immediateArea").hide();
                    }
                } else {
                    $("#immediateArea").hide();
                }
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.7576714939253!2d114.83085643710163!3d4.949108116049822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32225e9367a66cc1%3A0x3a6601d28e30b574!2sPantai%20Jerudong%20Specialist%20Centre%20(PJSC)!5e0!3m2!1sen!2sbn!4v1637046289863!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('#TUHC').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Pengiran Muda Mahkota Pengiran Muda Haji Al-Muhtadee Billah Hospital") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7255630496174!2d114.66117111532566!3d4.817114541977045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9a59e46a5%3A0x62066e860030b362!2sPengiran%20Muda%20Mahkota%20Pengiran%20Muda%20Haji%20Al-Muhtadee%20Billah%20Hospital!5e0!3m2!1sen!2sbn!4v1634286463485!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Telisai Health Centre") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1839730746256!2d114.5578142153256!3d4.738075742650269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222728d5f0c92a9%3A0xdae9ecd7acf168f9!2sTelisai%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286496075!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pekan Tutong Health Centre") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.719887312785!2d114.66105286532566!3d4.81808504196872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9c57b185f%3A0x24d45d637ed2282c!2sPusat%20Kesihatan%20Tutong!5e0!3m2!1sen!2sbn!4v1634286553112!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Sungai Kelugos Health Centre") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7792578580184!2d114.76881401532557!3d4.807923542055853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322264370344a2a7%3A0xc548e1a7c1521657!2sSungai%20Kelugos%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286594839!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Lamunin Health Centre") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5164928667486!2d114.7123597153257!3d4.67990954313922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32227a0759340203%3A0x40335e9d8c7eefc1!2sLamunin%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286641487!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('#BHC').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Suri Seri Begawan Hospital") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.058923325921!2d114.19682271532564!3d4.583444243937976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa53c0d42c6b%3A0x4309941067d4ea11!2sSuri%20Seri%20Begawan%20Hospital!5e0!3m2!1sen!2sbn!4v1634286771871!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Kuala Belait Health Centre") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9459.07903208395!2d114.20090259074068!3d4.584540049961497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa33ffffffff%3A0xabcd114352fec08d!2sKuala%20Belait%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286806620!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Seria Health Centre") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.905812341586!2d114.33414371532547!3d4.610877343712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218a7ffbcb7121d%3A0x225eeee88bbd0d4e!2sSeria%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286841382!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Sungai Liang Health Centre") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5325189388823!2d114.49268721532552!3d4.677087943162768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32220b66a610f693%3A0x9385789cab5ba672!2sSungai%20Liang%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286874162!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('#TEHC').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Pengiran Isteri Hajah Mariam Hospital") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3398029284485!2d115.0750711153255!3d4.710906342879327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222853b9a771fd5%3A0xb426306755a3d508!2sPengiran%20Isteri%20Hajjah%20Mariam%20Hospital!5e0!3m2!1sen!2sbn!4v1634286943427!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Bangar Health Clinic") {
                $("#clinicAddress").hide();
                $("#deliverymethodarea").fadeIn();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.337380807763!2d115.07532101532566!3d4.711329842875782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322285c84bc026a1%3A0xcf7e5ef899e3115!2sKlinik%20Kesihatan%20Bangar%2C%20Temburong!5e0!3m2!1sen!2sbn!4v1634286972450!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('input[name=radioTOD]').change(function () {
            if ($(this).val().length == 0) {
                $("#selfcollectarea").hide();
                $("#paymentmethodarea").hide();
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

            if ($(this).val() == "Standard") {
                $("#selfcollectarea").hide();
                $("#paymentmethodarea").fadeIn();
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

            if ($(this).val() == "Express") {
                $("#selfcollectarea").hide();
                $("#paymentmethodarea").fadeIn();
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

            if ($(this).val() == "Immediate") {
                $("#selfcollectarea").hide();
                $("#paymentmethodarea").fadeIn();
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
                $("#selfcollectarea").fadeIn();
                $("#paymentmethodarea").hide();
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

        document.getElementById("selfcollectnextbutton").addEventListener("click", function () {
            if ($("#scDate").val().length == 0) {
                $("#paymentmethodarea").hide();
                alert("Please do not leave the required fields empty!");
            }

            if ($("#scDate").val().length != 0) {
                $("#selfcollectnextbutton").hide();
                $("#paymentmethodarea").fadeIn();
            }
        });

        $('input[name=radioPAY]').change(function () {

            if ($(this).val().length == 0) {
                $("#paymentnoticearea").hide();
                $("#remarkarea").hide();
                $("#agreementArea").hide();
                $("#captchaBox").hide();
                $("#submitbutton").hide();
            }

            if ($(this).val() == "Cash") {
                $("#paymentnoticearea").hide();
                $("#remarkarea").fadeIn();
                $("#agreementArea").fadeIn();
                $("#captchaBox").fadeIn();
                $("#submitbutton").fadeIn();
            }

            if ($(this).val() == "Bank Transfer") {
                $("#paymentnoticearea").fadeIn();
                $("#remarkarea").fadeIn();
                $("#agreementArea").fadeIn();
                $("#captchaBox").fadeIn();
                $("#submitbutton").fadeIn();
            }
        });

        document.addEventListener("submit", function (event) {

            event.preventDefault();

            $(document).ready(function () {

                var today = new Date();
                var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

                var ampm = '';
                var ampmhour = '';
                var ampmmin = '';
                var ampmNum = '';

                if (today.getHours() < 12) {
                    ampmNum = 0;
                    ampm = 'am';
                    ampmhour = (today.getHours());
                }

                if (today.getHours() == 12) {
                    ampmNum = 1;
                    ampm = 'pm';
                    ampmhour = (today.getHours());
                }

                if (today.getHours() > 12) {
                    ampmNum = 1;
                    ampm = 'pm';
                    ampmhour = (today.getHours() - 12);
                }

                if (today.getMinutes() < 10) {
                    ampmmin = "0" + (today.getMinutes());
                }

                if (today.getMinutes() >= 10) {
                    ampmmin = (today.getMinutes());
                }

                var time = ampmhour + ":" + ampmmin + " " + ampm;

                let dateSubmitted = date + ' ' + time;

                document.getElementById("dateSubmitted").value = dateSubmitted;

                let patientOrderId = "MOH" + today.getDate() + (today.getMonth() + 1) + today.getFullYear() + ampmhour + ampmmin + ampmNum;

                //getCustomerFullAddress

                if (document.getElementById("address_3").value.length == 0) {
                    var customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("address_4").value;
                } else {
                    var customerAddress = document.getElementById("address_1").value + ", " + document.getElementById("address_2").value + ", " + document.getElementById("address_3").value
                        + ", " + document.getElementById("address_4").value;
                }

                document.getElementById("customerAddress").value = customerAddress;

                if (document.querySelector('input[name=radioDistrict]:checked').value == "Brunei Muara") {
                    if ((document.getElementById("BNHC").value == "Raja Isteri Pengiran Anak Saleha Hospital") ||
                        (document.getElementById("BNHC").value == "Rimba Dialysis Centre") || (document.getElementById("BNHC").value == "Pengkalan Batu Health Centre") ||
                        (document.getElementById("BNHC").value == "PJSC") || (document.getElementById("BNHC").value == "JPMC") ||
                        (document.getElementById("BNHC").value == "Psychiatry Department, Ministry of Health")) {
                        document.getElementById("sendOrderTo").value = "OPD";
                    } else {
                        document.getElementById("sendOrderTo").value = "BHC";
                    }
                }

                if (document.querySelector('input[name=radioDistrict]:checked').value == "Tutong") {
                    document.getElementById("sendOrderTo").value = "PMMH";
                }

                if (document.querySelector('input[name=radioDistrict]:checked').value == "Belait") {
                    document.getElementById("sendOrderTo").value = "SSPH";
                }

                if (document.querySelector('input[name=radioDistrict]:checked').value == "Temburong") {
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

                if (todChoice == "Immediate") {
                    var deliveryType = "IMM";
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

                let quarantineOrder = document.querySelector('input[name=radioQO]:checked').value;
                let area = document.getElementById("area").value;
                let price = document.getElementById('price').value;
                let appointmentPlaceDistrict = document.querySelector('input[name=radioDistrict]:checked').value;
                let sendOrderTo = document.getElementById("sendOrderTo").value;

                let customerRemarks = document.getElementById("re").value;
                let customerPM = document.querySelector('input[name=radioPAY]:checked').value
                let order_Origin = document.getElementById("orderOrigin").value;

                let orderId = document.getElementById("bruhims").value;
                let jobDescription = document.querySelector('input[name=radioTOD]:checked').value
                let customerEmail = document.getElementById("email").value;
                let customerUsername = document.getElementById("name").value;

                document.getElementById("icPassportNum").value = document.getElementById("icNumber").value + document.getElementById("passport").value;
                let icPassportNum = document.getElementById("icPassportNum").value;

                let customerPhone = "+" + document.getElementById("contact_1").value;
                let additionalPhone = "+" + document.getElementById("contact_2").value;
                let appointmentPlace = document.getElementById("BNHC").value + document.getElementById("TUHC").value
                    + document.getElementById("BHC").value + document.getElementById("TEHC").value;


                document.getElementById("customerPhone").value = customerPhone;
                document.getElementById("additionalPhone").value = additionalPhone;
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

                                const scriptURL = 'https://script.google.com/macros/s/AKfycbwnXnUR2LKTVgQLAcuxa8lJn-_L7Qx6WYw_CTAp52PK5Z4J29YIiUNsuDE_Bp5bL2MN/exec'
                                const form = document.forms['wf-form-MOH-Order-Form']

                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                    .catch(error => console.error('Error!', error.message))

                                if (createPharmacySheet == 1) {
                                    if (todChoice == "Standard") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbzL6XkKveQ42lrKUHGKWkYn-Wg89iL6GFRsmkkUpW3-CwZ4ljCEONxZlhR5RaucXIAxbA/exec'
                                        const form = document.forms['wf-form-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }

                                    if (todChoice == "Express") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbx-CzV_n3dF0Ox0etTFKMQcFqmvmqC5XO-zgg-cWTweXRI9COcUCj5t7i0-6o2u4xUqdQ/exec'
                                        const form = document.forms['wf-form-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }

                                    if (todChoice == "Immediate") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbzo0mbf6Rh8rJBRJ-FO6JaxiuhUt0lzDpKwkO63m8kwaPLn2LtVe5CZPLZqxYDA6xeouA/exec'
                                        const form = document.forms['wf-form-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }
                                }

                                if (medicineDBGsheet == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbdICh1LrT62N7ySvkgIOMq825LEKvM7KRcVREBOJVzzZSbopF4LowFZGZb4-_XMhZNQ/exec'
                                    const form = document.forms['wf-form-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))
                                }

                                if (todChoice == "Standard") {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbzRqkefb8xdEsS3qvKFwGwRGPJ74QrkrtYPteTjIOxSaHArgNZrw7kjC2lDc0cAgbPe/exec'
                                    const form = document.forms['wf-form-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))

                                }

                                if (todChoice == "Express") {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbxTiVlpyNyLo0T5bEKqN9Kwkkf18thYFkBcZzPSljflIzy8L_Y6o7kSBhEKrn0vAPy3/exec'
                                    const form = document.forms['wf-form-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))

                                }

                                if (todChoice == "Immediate") {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbwkLPAS6Yr8hTqmhQOqF2Q5cDoxNUW6StYQCX9RDNE2MM4gqZvSFfnirNyBVz7rpHeG/exec'
                                    const form = document.forms['wf-form-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))

                                }

                                if (split == 1) {
                                    const scriptURL = 'https://script.google.com/macros/s/AKfycbxId5Vwwshl6WcisSQfiqPJhlWPqAL08ExO5NUdTFChpe_CVAy3bxRs3VO4QExvslFD/exec'
                                    const form = document.forms['wf-form-MOH-Order-Form']

                                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                        .catch(error => console.error('Error!', error.message))

                                    if (todChoice == "Standard") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbz7lCB9fVvPqnU7q0tpEsehRjnMY43HVamAPBUyjKcxw5Rg8gummT4fFJdfGQE4BwWU/exec'
                                        const form = document.forms['wf-form-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))

                                    }

                                    if (todChoice == "Express") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbxnFdAxgwHpiOGdzZe-hbjjAUEw83snPT3bbmhobECqo2NDbIBebRi-DXAX3euxH_Vn/exec'
                                        const form = document.forms['wf-form-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))

                                    }

                                    if (todChoice == "Immediate") {
                                        const scriptURL = 'https://script.google.com/macros/s/AKfycbzNymxOq-U4XidfVWOj928T8eq9KE_UtMkO-A50YZMzpiaLJejkn9LOreVRz5J0k9jA/exec'
                                        const form = document.forms['wf-form-MOH-Order-Form']

                                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            .catch(error => console.error('Error!', error.message))
                                    }
                                }
                                document.getElementById("mohloginform").submit();
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
            });
        });
    });
});
