document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        var countAgree = 0;
        var tempSplit = 1;

        $("#pleasewait").hide();

        $("#itemContainsArea").hide();

        $("#submitbutton").hide();
        $("#additional_item").hide();
        $("#controls").hide();

        $("#itemBtn").hide();
        $("#supplierNext").hide();

        $("#totalPrice").hide();
        $("#supplierName").hide();

        $("#confirmationarea").hide();

        $(document).on("change", ".itemprice", function () {
            var sum = 0;
            $(".itemprice").each(function () {
                sum += +$(this).val();
            });
            $("#Total-Price").val(sum);
        });

        document.getElementById("custDetailBtn").addEventListener("click", function () {
            if ($("#Tracking-Number").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Tracking Number field empty!");
            }

            if ($("#Consignee-Name").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Consignee's Name field empty!");
            }

            if ($("#Consignee-Phone").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Consignee's Phone Number field empty!");
            }

            if ($("#Delivery-Address").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Delivery Address field empty!");
            }

            if ($("#Commodity").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Item Type field empty!");
            }

            if ($("#Currency").val().length == 0) {
                $("#itemContainsArea").hide();
                alert("Please do not leave the Currency field empty!");
            }

            if (($("#Tracking-Number").val().length != 0) && ($("#Consignee-Name").val().length != 0)
                && ($("#Consignee-Phone").val().length != 0) && ($("#Delivery-Address").val().length != 0)
                && ($("#Commodity").val().length != 0) && ($("#Currency").val().length != 0)) {
                $("#itemContainsArea").fadeIn();
                $("#custDetailBtn").hide();
            }
        });

        $('input[name=itemContains]').change(function () {
            if ($(this).val().length == 0) {
                $("#additional_item").hide();
                $("#controls").hide();
                $("#itemBtn").hide();
            }

            if ($(this).val().length != 0) {
                $("#additional_item").fadeIn();
                $("#controls").fadeIn();
                $("#itemBtn").fadeIn();
            }
        });

        document.getElementById("itemBtn").addEventListener("click", function () {
            if ($("#Item-Description").val().length == 0) {
                $("#totalPrice").hide();
                $("#supplierName").hide();
                $("#supplierNext").hide();
                alert("Please do not leave the Item Description field empty!");
            }

            if ($("#Quantity").val().length == 0) {
                $("#totalPrice").hide();
                $("#supplierName").hide();
                $("#supplierNext").hide();
                alert("Please do not leave the Quantity field empty!");
            }

            if ($("#Total-Item-Price").val().length == 0) {
                $("#totalPrice").hide();
                $("#supplierName").hide();
                $("#supplierNext").hide();
                alert("Please do not leave the Total Item Price field empty!");
            }

            if (($("#Item-Description").val().length != 0) && ($("#Quantity").val().length != 0)
                && ($("#Total-Item-Price").val().length != 0)) {
                $("#itemBtn").hide();
                $("#supplierName").fadeIn();
                $("#supplierNext").fadeIn();
                $("#totalPrice").fadeIn();
            }
        });

        document.getElementById("supplierNext").addEventListener("click", function () {
            if ($("#Total-Price").val().length == 0) {
                $("#confirmationarea").hide();
                alert("Please do not leave the Total Price field empty!");
            }

            if ($("#Supplier-Name").val().length == 0) {
                $("#confirmationarea").hide();
                alert("Please do not leave the Suppier Name field empty!");
            }

            if (($("#Total-Price").val().length != 0) && ($("#Supplier-Name").val().length != 0)) {
                $("#supplierNext").hide();
                $("#confirmationarea").fadeIn();
            }
        });

        $('#Agreement').change(function () {
            if (countAgree == 0) {
                countAgree = countAgree + 1;
                $("#pleasewait").fadeIn();

                var today = new Date();
                var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

                var ampm = '';
                var ampmhour = '';
                var ampmmin = '';

                if (today.getHours() < 12) {
                    ampm = 'am';
                    ampmhour = (today.getHours());
                }

                if (today.getHours() == 12) {
                    ampm = 'pm';
                    ampmhour = (today.getHours());
                }

                if (today.getHours() > 12) {
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

                var dateTime = date + ' ' + time;
                document.getElementById("dateSubmitted").value = dateTime;

                var codeN = document.getElementById("codeName").value;
                var conN = document.getElementById("Consignee-Name").value;

                document.getElementById("buyerName").value = conN + codeN;

                let orderId = document.getElementById("Tracking-Number").value;
                let customerUsername = document.getElementById("buyerName").value;
                let customerPhone = document.getElementById("Consignee-Phone").value;

                let commodity = document.getElementById("Commodity").value;
                let totalPrice = document.getElementById("Total-Price").value;
                let itemCurrency = document.getElementById("Currency").value;
                let itemContains = document.querySelector('input[name=itemContains]:checked').value

                let customerEmail = document.getElementById("Email").value;

                var customerAddress = document.getElementById("Delivery-Address").value;

                var jobdeliverydatetime = "";
                var todaysDate = new Date();

                if (todaysDate.getDate() >= 28) {
                    var date = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 2) + '-' + 28;
                } else {
                    var date = todaysDate.getFullYear() + '-' + (todaysDate.getMonth() + 1) + '-' + 28;
                }

                var time = "17:00:00";
                jobdeliverydatetime = date + ' ' + time;

                const scriptURL = 'https://script.google.com/macros/s/AKfycbyoJMDxUwWvWoKjv1o_Us0Xu79WsrKVF6GJldTc5IXlP9x6eNICQIm-reiRih0cis1iHQ/exec'
                const form = document.forms['wf-form-Go-Rush-Plus-Order']

                fetch(scriptURL, { method: 'POST', body: new FormData(form) })

                if (tempSplit == 1) {
                    const scriptURL = 'https://script.google.com/macros/s/AKfycbyT31WOUuuXYtLxiKZpTDrNg0cyO7IgDQRTXij1EdOoVrq03AkRDJAa1BFshM2HJ6k5ow/exec'
                    const form = document.forms['wf-form-Go-Rush-Plus-Order']

                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                }
                
                $("#pleasewait").hide();
                $("#submitbutton").fadeIn();
            }
        });
    });
});
