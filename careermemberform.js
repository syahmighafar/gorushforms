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
                $("#personalNextBtn").hide();
                $("#personalsection").hide();
                $("#applicationNextBtn").fadeIn();
                $("#applicationPrevBtn").fadeIn();
                $("#applicationsection").fadeIn();

                window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById("applicationNextBtn").addEventListener("click", function () {
            if (($("#positionapplied").val().length == 0)) {
                $("#agreementsection").hide();
                alert("Please do not leave the position empty!");
            }

            if (($("#highestachievement").val().length == 0)) {
                $("#agreementsection").hide();
                alert("Please do not leave the highest achievement field empty!");
            }

            if (($("#positionapplied").val().length != 0) && ($("#highestachievement").val().length != 0)) {

                document.getElementById("namesum").innerHTML = "Name: <b>" + document.getElementById("name").value + "</b>";
                document.getElementById("dateofbirthsum").innerHTML = "Date of Birth: <b>" + document.getElementById("dateofbirth").value + "</b>";
                document.getElementById("icnumbersum").innerHTML = "IC Number: <b>" + document.getElementById("icnumber").value + "</b>";
                document.getElementById("addresssum").innerHTML = "Address: <b>" + document.getElementById("house").value + " " + document.getElementById("kampong").value
                    + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + document.getElementById("district").value + " "
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

                $("#applicationNextBtn").hide();
                $("#applicationPrevBtn").hide();
                $("#applicationsection").hide();
                $("#submitBtn").fadeIn();
                $("#agreesubmitPrevBtn").fadeIn();
                $("#agreementsection").fadeIn();
                $("#ensure").hide();

                window.scrollTo({ top: 0, behavior: 'smooth' });
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
                + " " + document.getElementById("jalan").value + " " + document.getElementById("simpang").value + " " + document.getElementById("district").value + " "
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
