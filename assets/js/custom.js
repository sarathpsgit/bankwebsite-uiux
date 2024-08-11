// top to bottom script
document.addEventListener("DOMContentLoaded", function () {
    var floatingButton = document.getElementById("floatingButton");

    floatingButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show/hide the button based on the scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            floatingButton.style.display = "block";
        } else {
            floatingButton.style.display = "none";
        }
    });
});


// onload banner script
document.addEventListener("DOMContentLoaded", function () {
    var isModalShown = localStorage.getItem("modalShown");

    if (!isModalShown) {
        var imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
        imageModal.show();
        localStorage.setItem("modalShown", true);
    }
});