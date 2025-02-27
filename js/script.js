document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar-custom");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Tampilkan modal saat klik "Coba Gratis"
    if (cobaGratisBtn) {
        cobaGratisBtn.addEventListener("click", function (e) {
            e.preventDefault();
            var signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
            signupModal.show();
        });
    }
});
