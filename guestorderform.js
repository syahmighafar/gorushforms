document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        const d = new Date();
        let hour = d.getHours();
        let day = d.getDay();

        $('input[name=district]').change(function () {
            if ($(this).val().length == 0) {
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
            }

            if ($(this).val() == "Brunei Muara") {
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
            }

            if ($(this).val() == "Tutong") {
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
            }

            if ($(this).val() == "Temburong") {
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
            }

            if ($(this).val() == "Belait") {
                $("#mohimmidiate").hide()
                $("#mohexpress").hide()
                $("#mohstandard").fadeIn();

                $("#jpmcexpressbm").hide()
                $("#jpmcstandardbm").hide()
                $("#jpmcstandardttg").hide();
                $("#jpmcstandardkb").fadeIn();
                $("#jpmcstandardtemb").hide();

                $("#phcstandardkb").fadeIn();
                $("#phcstandardttg").hide();
                $("#phcstandardbm").hide()
                $("#phcstandardtemb").hide();
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

            if (($("#simpang").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your simpang field empty!");
            }

            if (($("#district").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your district field empty!");
            }

            if (($("#contact_1").val().length == 0)) {
                $("#productsection").hide();
                alert("Please do not leave your phone number field empty!");
            }

            if (($("#name").val().length != 0) && ($("#house").val().length != 0)
                && ($("#kampong").val().length != 0) && ($("#jalan").val().length != 0)
                && ($("#simpang").val().length != 0) && ($("#district").val().length != 0)
                && ($("#contact_1").val().length != 0)) {
                $("#personalNextBtn").hide();
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
            }
        });

        $('input[name=districtAppointment]').change(function () {
            if ($(this).val().length == 0) {
                $("#appointmentDistrictBM").hide();
                $("#appointmentDistrictTTG").hide();
                $("#appointmentDistrictTEMB").hide();
                $("#appointmentDistrictKB").hide();
            }

            if ($(this).val() == "Brunei Muara") {
                $("#appointmentDistrictBM").fadeIn();
                $("#appointmentDistrictTTG").hide();
                $("#appointmentDistrictTEMB").hide();
                $("#appointmentDistrictKB").hide();
            }

            if ($(this).val() == "Tutong") {
                $("#appointmentDistrictBM").hide();
                $("#appointmentDistrictTTG").fadeIn();
                $("#appointmentDistrictTEMB").hide();
                $("#appointmentDistrictKB").hide();
            }

            if ($(this).val() == "Temburong") {
                $("#appointmentDistrictBM").hide();
                $("#appointmentDistrictTTG").hide();
                $("#appointmentDistrictTEMB").fadeIn();
                $("#appointmentDistrictKB").hide();
            }

            if ($(this).val() == "Belait") {
                $("#appointmentDistrictBM").hide();
                $("#appointmentDistrictTTG").hide();
                $("#appointmentDistrictTEMB").hide();
                $("#appointmentDistrictKB").fadeIn();
            }
        });

        $('#healthCentreBM').change(function () {
            if ($(this).val().length == 0) {
                $("#immediateArea").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").hide();
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
            }

            if ($(this).val() == "KG Bolkiah") {
                $("#mohimmidiate").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
                $("#clinicAddress").fadeIn();
            }

            if ($(this).val() == "SG Bunga") {
                $("#mohimmidiate").hide();
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.1432004986946!2d115.01193264313245!3d4.915696991808234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f36f1f0926d9%3A0x5eb0de579e4e2269!2sSungai%20Bunga%20Health%20Clinic%2C%20Kampong%20Sungai%20Bunga!5e0!3m2!1sen!2sbn!4v1634286214099!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
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
            }
        });

        $('#healthCentreTTG').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Pengiran Muda Mahkota Pengiran Muda Haji Al-Muhtadee Billah Hospital") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7255630496174!2d114.66117111532566!3d4.817114541977045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9a59e46a5%3A0x62066e860030b362!2sPengiran%20Muda%20Mahkota%20Pengiran%20Muda%20Haji%20Al-Muhtadee%20Billah%20Hospital!5e0!3m2!1sen!2sbn!4v1634286463485!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Telisai Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1839730746256!2d114.5578142153256!3d4.738075742650269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222728d5f0c92a9%3A0xdae9ecd7acf168f9!2sTelisai%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286496075!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Pekan Tutong Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.719887312785!2d114.66105286532566!3d4.81808504196872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32226ed9c57b185f%3A0x24d45d637ed2282c!2sPusat%20Kesihatan%20Tutong!5e0!3m2!1sen!2sbn!4v1634286553112!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Sungai Kelugos Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7792578580184!2d114.76881401532557!3d4.807923542055853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322264370344a2a7%3A0xc548e1a7c1521657!2sSungai%20Kelugos%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286594839!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Lamunin Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5164928667486!2d114.7123597153257!3d4.67990954313922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32227a0759340203%3A0x40335e9d8c7eefc1!2sLamunin%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286641487!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('#healthCentreKB').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Suri Seri Begawan Hospital") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.058923325921!2d114.19682271532564!3d4.583444243937976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa53c0d42c6b%3A0x4309941067d4ea11!2sSuri%20Seri%20Begawan%20Hospital!5e0!3m2!1sen!2sbn!4v1634286771871!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Kuala Belait Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9459.07903208395!2d114.20090259074068!3d4.584540049961497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218aa33ffffffff%3A0xabcd114352fec08d!2sKuala%20Belait%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286806620!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Seria Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.905812341586!2d114.33414371532547!3d4.610877343712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218a7ffbcb7121d%3A0x225eeee88bbd0d4e!2sSeria%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286841382!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Sungai Liang Health Centre") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5325189388823!2d114.49268721532552!3d4.677087943162768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32220b66a610f693%3A0x9385789cab5ba672!2sSungai%20Liang%20Health%20Centre!5e0!3m2!1sen!2sbn!4v1634286874162!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }
        });

        $('#healthCentreTEM').change(function () {
            if ($(this).val().length == 0) {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "";
                $("#hcAreaMapAddress").hide();
            }

            if ($(this).val() == "Pengiran Isteri Hajah Mariam Hospital") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3398029284485!2d115.0750711153255!3d4.710906342879327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222853b9a771fd5%3A0xb426306755a3d508!2sPengiran%20Isteri%20Hajjah%20Mariam%20Hospital!5e0!3m2!1sen!2sbn!4v1634286943427!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
            }

            if ($(this).val() == "Bangar Health Clinic") {
                $("#clinicAddress").hide();
                document.getElementById("mapSource").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.337380807763!2d115.07532101532566!3d4.711329842875782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x322285c84bc026a1%3A0xcf7e5ef899e3115!2sKlinik%20Kesihatan%20Bangar%2C%20Temburong!5e0!3m2!1sen!2sbn!4v1634286972450!5m2!1sen!2sbn";
                $("#hcAreaMapAddress").fadeIn();
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

        $('input[name=pickupordelivery]').change(function () {
            if ($(this).val().length == 0) {
                $("#pickupdatearea").hide();
            }

            if ($(this).val() == "deliveryonly") {
                $("#pickupdatearea").hide();
            }

            if ($(this).val() == "pickupanddelivery") {
                $("#pickupdatearea").fadeIn();
            }
        });

        document.getElementById("productNextBtn").addEventListener("click", function () {
            if (($("input[name=products]").val().length != 0)) {
                $("#productNextBtn").hide();
                $("#chargessection").fadeIn();
                $("#chargesNextBtn").fadeIn();
                $("#productsPrevBtn").fadeIn();
            }
        });

        document.getElementById("chargesNextBtn").addEventListener("click", function () {
            if (($("#paymentmethod").val().length != 0)) {
                $("#chargesNextBtn").hide();
                $("#agreementsection").fadeIn();
                $("#submitBtn").fadeIn();
                $("#chargesPrevBtn").fadeIn();
            }
        });

        document.getElementById("productsPrevBtn").addEventListener("click", function () {
            if (($("#paymentmethod").val().length != 0)) {
                $("#productsPrevBtn").hide();
                $("#productsection").hide();
                $("#personalsection").fadeIn();
                $("#personalNextBtn").fadeIn();
            }
        });

        document.getElementById("chargesPrevBtn").addEventListener("click", function () {
            if (($("#paymentmethod").val().length != 0)) {
                $("#chargesPrevBtn").hide();
                $("#chargessection").hide();
                $("#productsection").fadeIn();
                $("#productNextBtn").fadeIn();
            }
        });

        document.getElementById("chargesPrevBtn").addEventListener("click", function () {
            if (($("#paymentmethod").val().length != 0)) {
                $("#chargesPrevBtn").hide();
                $("#chargessection").hide();
                $("#productsection").fadeIn();
                $("#productNextBtn").fadeIn();
            }
        });

        document.getElementById("submitBtn").addEventListener("click", function () {
            document.getElementById("guestorderform").submit();
        });

        /* $('#guestorderform').submit(function(){
            
        }); */
    });
});
