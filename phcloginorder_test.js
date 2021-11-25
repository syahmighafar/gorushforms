document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        $("#deliverymethodarea").hide();

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

        $("#remarkarea").hide();

        $("#agreementArea").hide();
        $("#stdAgree").hide();
        $("#expAgree").hide();
        $("#immAgree").hide();

        $("#pleasewait").hide();

        $("#submitbutton").hide();

        $('input[name=radioQO]').change(function () {
            if ($(this).val().length == 0) {
                $("#deliverymethodarea").hide();
            }

            if (($(this).val() == "No") || ($(this).val() == "Yes")) {
                $("#deliverymethodarea").fadeIn();
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
            }

            if ($(this).val() == "Standard ($3)") {
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
            if ($(this).val().checked = true) {

                $("#submitbutton").fadeIn();
            }
        });
    });
});
