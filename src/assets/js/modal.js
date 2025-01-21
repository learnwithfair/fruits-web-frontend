function openIngredientsModal(title, imageSrc, cardElement) {
    $(".ingredients-modal-title").text(title);
    // $("#shop3ModalImage").attr("src", imageSrc);
    $("#ingredientsModal").modal("show");
}
// Ensure the modal closes when the close button is clicked
$(document).on("click", "#btn-close", function () {
    $("#ingredientsModal").modal("hide");
});

function openInPlantsModal(title, imageSrc, cardElement) {
    $(".ingredients-modal-title").text(title);
    // $("#shop3ModalImage").attr("src", imageSrc);
    $("#inPlantsIngredientsModal").modal("show");
}

function openJuicyModal(title, imageSrc, cardElement) {
    $(".ingredients-modal-title").text(title);
    // $("#shop3ModalImage").attr("src", imageSrc);
    $("#juicyModal").modal("show");
}
// Ensure the modal closes when the close button is clicked
$(document).on("click", "#btn-close", function () {
    $("#ingredientsModal").modal("hide");
});



// Ensure the modal closes when the close button is clicked
$(document).on("click", "#btn-close", function () {
    $("#product1Modal").modal("hide");
});
