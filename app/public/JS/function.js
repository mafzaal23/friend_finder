// Capture the form inputs 
$("#submit").on("click", function(event) {
    console.log('ok');
    event.preventDefault();

    // Form validation
    function validateForm() {
        var isValid = true;
        $('.form-control').each(function() {
            if ($(this).val() === '')
                isValid = false;
        });

        $('.chosen-select').each(function() {

            if ($(this).val() === "")
                isValid = false;
        });
        return isValid;
    }


    if (validateForm() === true) {
        var newFriend = {
            name: $('#name').val().trim(),
            photoURL: $('#photo').val().trim(),
            answers: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        };

        console.log(newFriend);

var currentURL = window.location.origin;

        // AJAX post
        $.post(currentURL + "/api/friends", newFriend, function(data) {
            $("#matchName").text(data.name);
            $('#matchImg').attr("src", data.photo);
            // Modal
            $("#resultsModal").modal('toggle');
            // Clear Form
            $('#name').val("");
            $('#photo').val("");
            // $('#q1').val("");
        });
    } else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
});