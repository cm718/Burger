import {
    get
} from "http";

$(document).ready(function () {

    $("#create").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $(this).val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                location.reload();
            }
        );
    });

    $("#devour").on("click", function (event) {
        let id = $(this).data("id");
        console.log($(this).attr("data-id"));
        let devoured = 1;
        console.log(id, devoured);

        $.ajax("/api/burgers/", id, {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("changed devoured to " + devoured);
                location.reload();
            }
        );
    });


});