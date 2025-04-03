 document.addEventListener("DOMContentLoaded", function () {
    // Button dhundho jo 'Send Message' ke liye use ho raha hai
    let button = document.querySelector(".w3-button.w3-black.w3-right.w3-section");

    if (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Form submit hone se roko
            alert("Information saved! Our team will contact you immediately\nAniket Lande \nKKEvents punewadi.");
        });
    }
});
