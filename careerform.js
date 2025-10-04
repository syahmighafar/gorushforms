document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        document.getElementById("applybutton").addEventListener("click", function () {
            $("#vacanciesarea").hide();
            $("#applicationformarea").fadeIn();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById("cancelapplication").addEventListener("click", function () {
            $("#vacanciesarea").fadeIn();
            $("#applicationformarea").hide();

            $("#personalNextBtn").fadeIn();
            $("#personalsection").fadeIn();
            $("#applicationNextBtn").hide();
            $("#applicationPrevBtn").hide();
            $("#applicationsection").hide();
            $("#submitBtn").hide();
            $("#agreesubmitPrevBtn").hide();
            $("#agreementsection").hide();
            $("#ensure").fadeIn();
            $("#controlarea").fadeIn();
            $("#loading").hide();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById("personalNextBtn").addEventListener("click", function () {
            if (($("#name").val().length == 0)) {
                $("#applicationsection").hide();
                alert("Please do not leave your name field empty!");
            }

            if (($("#dateofbirth").val().length == 0)) {
                $("#applicationsection").hide();
                alert("Please do not leave your date of birth field empty!");
            }

            if (($("#icnumber").val().length == 0)) {
                $("#applicationsection").hide();
                alert("Please do not leave your IC Number field empty!");
            }

            if (($("#house").val().length == 0)) {
                $("#applicationsection").hide();
                alert("Please do not leave your house/unit number field empty!");
            }

            if (($("#kampong").val().length == 0)) {
                $("#applicationsection").hide();
                alert("Please do not leave your kampong field empty!");
            }

            if (($("#jalan").val().length == 0)) {
                $("#applicationsection").hide();
                alert("Please do not leave your jalan field empty!");
            }

            if ($('input[name=district]:checked').val() == undefined) {
                $("#applicationsection").hide();
                alert("Please do not leave your district field empty!");
            }

            if (($("#email").val().length == 0)) {
                $("#applicationsection").hide();
                alert("Please do not leave your email field empty!");
            }

            if (($("#contact_1").val().length == 0)) {
                $("#applicationsection").hide();
                alert("Please do not leave your phone number field empty!");
            }

            if (($("#name").val().length != 0) && ($("#house").val().length != 0)
                && ($("#dateofbirth").val().length != 0) && ($("#icnumber").val().length != 0)
                && ($("#kampong").val().length != 0) && ($("#jalan").val().length != 0)
                && ($('input[name=district]:checked').val() != undefined)
                && ($("#email").val().length != 0) && ($("#contact_1").val().length != 0)) {
                $("#personalNextBtn").hide();
                $("#personalsection").hide();
                $("#applicationNextBtn").hide();
                $("#applicationPrevBtn").fadeIn();
                $("#applicationsection").fadeIn();

                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        $('#positionapplied').change(function () {
            if (($(this).val().length == 0)) {
                $("#partTimeDurationArea").hide();
                $("#freelancerArea").hide();
                $("#experienceDeliveryArea").hide();
                document.getElementById("partTimeDuration").value = "";
                document.getElementById("carOwn").value = "";
                document.getElementById("deliverBefore").value = "";
                document.getElementById("experienceDelivery").value = "";
                document.getElementById("parcelNum").value = "";

                $("#applicationNextBtn").hide();

            } else if (($(this).val() == "Freelancer")) {
                $("#partTimeDurationArea").fadeIn();
                $("#freelancerArea").fadeIn();
                $("#experienceDeliveryArea").hide();
                document.getElementById("partTimeDuration").value = "";
                document.getElementById("carOwn").value = "";
                document.getElementById("deliverBefore").value = "";
                document.getElementById("experienceDelivery").value = "";
                document.getElementById("parcelNum").value = "";

                $("#applicationNextBtn").fadeIn();
                
            } else {
                $("#partTimeDurationArea").hide();
                $("#freelancerArea").hide();
                $("#experienceDeliveryArea").hide();
                document.getElementById("partTimeDuration").value = "";
                document.getElementById("carOwn").value = "";
                document.getElementById("deliverBefore").value = "";
                document.getElementById("experienceDelivery").value = "";
                document.getElementById("parcelNum").value = "";

                $("#applicationNextBtn").fadeIn();
            }
        })

        $('#deliverBefore').change(function () {
            if (($(this).val().length == 0)) {
                $("#experienceDeliveryArea").hide();
                document.getElementById("experienceDelivery").value = "";
                document.getElementById("parcelNum").value = "";
            }

            if (($(this).val() == "Yes")) {
                $("#experienceDeliveryArea").fadeIn();
                document.getElementById("experienceDelivery").value = "";
                document.getElementById("parcelNum").value = "";
            }

            if (($(this).val() == "No")) {
                $("#experienceDeliveryArea").hide();
                document.getElementById("experienceDelivery").value = "";
                document.getElementById("parcelNum").value = "";
            }
        })

        document.getElementById("applicationNextBtn").addEventListener("click", function () {
            if (($("#positionapplied").val().length == 0)) {
                $("#agreementsection").hide();
                alert("Please choose your position!");
            }

            if (($("#highestachievement").val().length == 0)) {
                $("#agreementsection").hide();
                alert("Please choose your highest achievement!");
            }

            if (($("#positionapplied").val().length != 0) && ($("#highestachievement").val().length != 0)) {
                if ($("#positionapplied").val() == "Freelancer") {
                    if (($("#partTimeDuration").val().length == 0)) {
                        alert("Please choose on how long do you intend to stay in the part time role!");
                    }

                    if (($("#carOwn").val().length == 0)) {
                        alert("Please choose what type of car that you own!");
                    }

                    if (($("#deliverBefore").val().length == 0)) {
                        alert("Please choose if you had done delivery work before!");
                    }

                    if (($("#deliverBefore").val() == "Yes")) {
                        if (($("#experienceDelivery").val().length == 0)) {
                            alert("Please choose how long did you do delivery work!");
                        }

                        if (($("#parcelNum").val().length == 0)) {
                            alert("Please choose how many parcels can you delivery in a day!");
                        }

                        if (($("#experienceDelivery").val().length != 0) && ($("#parcelNum").val().length != 0)) {
                            document.getElementById("namesum").innerHTML = "Name: <b>" + document.getElementById("name").value + "</b>";
                            document.getElementById("dateofbirthsum").innerHTML = "Date of Birth: <b>" + document.getElementById("dateofbirth").value + "</b>";
                            document.getElementById("icnumbersum").innerHTML = "IC Number: <b>" + document.getElementById("icnumber").value + "</b>";
                            document.getElementById("addresssum").innerHTML = "Address: <b>" + document.getElementById("house").value + " " + document.getElementById("kampong").value
                                + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                                + document.getElementById("postal").value + "</b>";

                            document.getElementById("emailsum").innerHTML = "Email: <b>" + document.getElementById("email").value + "</b>";

                            document.getElementById("contact_1sum").innerHTML = "Phone Number: <b>+" + document.getElementById("code").value + document.getElementById("contact_1").value + "</b>";

                            if ($("#contact_2").val().length == 0) {
                                document.getElementById("contact_2sum").innerHTML = "Additional Phone Number: <b>N/A</b>";
                            }

                            if ($("#contact_2").val().length != 0) {
                                document.getElementById("contact_2sum").innerHTML = "Additional Phone Number: <b>+" + document.getElementById("code_2").value + document.getElementById("contact_2").value + "</b>";
                            }

                            document.getElementById("positionappliedsum").innerHTML = "Position Applied: <b>" + document.getElementById("positionapplied").value + "</b>";

                            document.getElementById("highestachievementsum").innerHTML = "Highest Qualification Achieved: <b>" + document.getElementById("highestachievement").value + "</b>";

                            document.getElementById("partTimeDurationsum").innerHTML = "Duration of Part-Time work expected: <b>" + document.getElementById("partTimeDuration").value + "</b>";

                            document.getElementById("carOwnsum").innerHTML = "Type of transportation own: <b>" + document.getElementById("carOwn").value + "</b>";

                            document.getElementById("deliverBeforesum").innerHTML = "Done delivery work before?: <b>" + document.getElementById("deliverBefore").value + "</b>";

                            document.getElementById("experienceDeliverysum").innerHTML = "Duration of past delivery work: <b>" + document.getElementById("experienceDelivery").value + "</b>";

                            document.getElementById("parcelNumsum").innerHTML = "Estimated parcels delivered in a day: <b>" + document.getElementById("parcelNum").value + "</b>";

                            $("#partTimeDurationsum").fadeIn();
                            $("#carOwnsum").fadeIn();
                            $("#deliverBeforesum").fadeIn();
                            $("#experienceDeliverysum").fadeIn();
                            $("#parcelNumsum").fadeIn();

                            $("#applicationNextBtn").hide();
                            $("#applicationPrevBtn").hide();
                            $("#applicationsection").hide();
                            $("#submitBtn").fadeIn();
                            $("#agreesubmitPrevBtn").fadeIn();
                            $("#agreementsection").fadeIn();
                            $("#ensure").hide();

                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }

                    if (($("#deliverBefore").val() == "No")) {
                        document.getElementById("namesum").innerHTML = "Name: <b>" + document.getElementById("name").value + "</b>";
                        document.getElementById("dateofbirthsum").innerHTML = "Date of Birth: <b>" + document.getElementById("dateofbirth").value + "</b>";
                        document.getElementById("icnumbersum").innerHTML = "IC Number: <b>" + document.getElementById("icnumber").value + "</b>";
                        document.getElementById("addresssum").innerHTML = "Address: <b>" + document.getElementById("house").value + " " + document.getElementById("kampong").value
                            + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                            + document.getElementById("postal").value + "</b>";

                        document.getElementById("emailsum").innerHTML = "Email: <b>" + document.getElementById("email").value + "</b>";

                        document.getElementById("contact_1sum").innerHTML = "Phone Number: <b>+" + document.getElementById("code").value + document.getElementById("contact_1").value + "</b>";

                        if ($("#contact_2").val().length == 0) {
                            document.getElementById("contact_2sum").innerHTML = "Additional Phone Number: <b>N/A</b>";
                        }

                        if ($("#contact_2").val().length != 0) {
                            document.getElementById("contact_2sum").innerHTML = "Additional Phone Number: <b>+" + document.getElementById("code_2").value + document.getElementById("contact_2").value + "</b>";
                        }

                        document.getElementById("positionappliedsum").innerHTML = "Position Applied: <b>" + document.getElementById("positionapplied").value + "</b>";

                        document.getElementById("highestachievementsum").innerHTML = "Highest Qualification Achieved: <b>" + document.getElementById("highestachievement").value + "</b>";

                        document.getElementById("partTimeDurationsum").innerHTML = "Duration of Part-Time work expected: <b>" + document.getElementById("partTimeDuration").value + "</b>";

                        document.getElementById("carOwnsum").innerHTML = "Type of transportation own: <b>" + document.getElementById("carOwn").value + "</b>";

                        document.getElementById("deliverBeforesum").innerHTML = "Done delivery work before?: <b>" + document.getElementById("deliverBefore").value + "</b>";

                        document.getElementById("experienceDeliverysum").innerHTML = "";

                        document.getElementById("parcelNumsum").innerHTML = "";

                        $("#partTimeDurationsum").fadeIn();
                        $("#carOwnsum").fadeIn();
                        $("#deliverBeforesum").fadeIn();
                        $("#experienceDeliverysum").hide();
                        $("#parcelNumsum").hide();

                        $("#applicationNextBtn").hide();
                        $("#applicationPrevBtn").hide();
                        $("#applicationsection").hide();
                        $("#submitBtn").fadeIn();
                        $("#agreesubmitPrevBtn").fadeIn();
                        $("#agreementsection").fadeIn();
                        $("#ensure").hide();

                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                } else {
                    document.getElementById("namesum").innerHTML = "Name: <b>" + document.getElementById("name").value + "</b>";
                    document.getElementById("dateofbirthsum").innerHTML = "Date of Birth: <b>" + document.getElementById("dateofbirth").value + "</b>";
                    document.getElementById("icnumbersum").innerHTML = "IC Number: <b>" + document.getElementById("icnumber").value + "</b>";
                    document.getElementById("addresssum").innerHTML = "Address: <b>" + document.getElementById("house").value + " " + document.getElementById("kampong").value
                        + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                        + document.getElementById("postal").value + "</b>";

                    document.getElementById("emailsum").innerHTML = "Email: <b>" + document.getElementById("email").value + "</b>";

                    document.getElementById("contact_1sum").innerHTML = "Phone Number: <b>+" + document.getElementById("code").value + document.getElementById("contact_1").value + "</b>";

                    if ($("#contact_2").val().length == 0) {
                        document.getElementById("contact_2sum").innerHTML = "Additional Phone Number: <b>N/A</b>";
                    }

                    if ($("#contact_2").val().length != 0) {
                        document.getElementById("contact_2sum").innerHTML = "Additional Phone Number: <b>+" + document.getElementById("code_2").value + document.getElementById("contact_2").value + "</b>";
                    }

                    document.getElementById("positionappliedsum").innerHTML = "Position Applied: <b>" + document.getElementById("positionapplied").value + "</b>";

                    document.getElementById("highestachievementsum").innerHTML = "Highest Qualification Achieved: <b>" + document.getElementById("highestachievement").value + "</b>";

                    document.getElementById("partTimeDurationsum").innerHTML = "";

                    document.getElementById("carOwnsum").innerHTML = "";

                    document.getElementById("deliverBeforesum").innerHTML = "";

                    document.getElementById("experienceDeliverysum").innerHTML = "";

                    document.getElementById("parcelNumsum").innerHTML = "";

                    $("#partTimeDurationsum").hide();
                    $("#carOwnsum").hide();
                    $("#deliverBeforesum").hide();
                    $("#experienceDeliverysum").hide();
                    $("#parcelNumsum").hide();

                    $("#applicationNextBtn").hide();
                    $("#applicationPrevBtn").hide();
                    $("#applicationsection").hide();
                    $("#submitBtn").fadeIn();
                    $("#agreesubmitPrevBtn").fadeIn();
                    $("#agreementsection").fadeIn();
                    $("#ensure").hide();

                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });

        document.getElementById("applicationPrevBtn").addEventListener("click", function () {
            $("#applicationPrevBtn").hide();
            $("#applicationNextBtn").hide();
            $("#applicationsection").hide();
            $("#personalsection").fadeIn();
            $("#personalNextBtn").fadeIn();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById("agreesubmitPrevBtn").addEventListener("click", function () {
            $("#agreesubmitPrevBtn").hide();
            $("#submitBtn").hide();
            $("#agreementsection").hide();
            $("#applicationsection").fadeIn();
            $("#applicationNextBtn").fadeIn();
            $("#applicationPrevBtn").fadeIn();
            $("#ensure").fadeIn();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById("submitBtn").addEventListener("click", function () {
            $("#agreementsection").hide();
            $("#controlarea").hide();
            $("#loading").fadeIn();

            document.getElementById("customerthank").innerText = "Thank you " + document.getElementById("name").value + "!";
            document.getElementById("finalsummaryarea").innerHTML = document.getElementById("finalsummary").innerHTML

            document.getElementById("dateSubmitted").value = moment().format('DD-MM-YYYY h:mm a');

            let address = document.getElementById("house").value + " " + document.getElementById("kampong").value
                + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + $('input[name=district]:checked').val() + " "
                + document.getElementById("postal").value;

            document.getElementById("address").value = address;

            let phoneNumber = "+" + document.getElementById("code").value + document.getElementById("contact_1").value;

            document.getElementById("phoneNumber").value = phoneNumber;

            if (($("#contact_2").val().length != 0)) {
                let additionalPhone = "+" + document.getElementById("code_2").value + document.getElementById("contact_2").value;
                document.getElementById("additionalPhone").value = additionalPhone;
            }

            document.getElementById("finalsubmitteddate").innerText = moment().format('Do MMMM YYYY, h:mm a');

            $('#submitBtnfinal').attr('disabled', false);

            document.getElementById('submitBtnfinal').click();
        });
    });
});
