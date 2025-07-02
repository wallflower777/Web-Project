document.addEventListener('DOMContentLoaded', () => {
    const fadeContainer = document.getElementById('fade-container');
    let isFadingIn = true;
    let opacity = 0;
    const fadeSpeed = 0.02; // Adjust fade speed as needed
    const intervalTime = 50; // Time between opacity updates (in ms)

    function fade() {
        if (isFadingIn) {
            opacity += fadeSpeed;
            if (opacity >= 1) {
                opacity = 1;
                isFadingIn = false;
                setTimeout(fade, 1000); // Hold for 5 seconds
                return;
            }
        } else {
            opacity -= fadeSpeed;
            if (opacity <= 0) {
                opacity = 0;
                isFadingIn = true;
                setTimeout(fade, 1000); // Hold for 5 seconds
                return;
            }
        }
        fadeContainer.style.opacity = opacity;
        setTimeout(fade, intervalTime);
    }

    fade();
});
var myVideo = document.getElementById("Lesson1");

            function playPause() {
                if (myVideo.paused)
                    myVideo.play();
                else
                    myVideo.pause();
            }

            function makeBig() {
                myVideo.style.width = "75%";
            }

            function makeSmall() {
                myVideo.style.width = "25%";
            }

            function makeNormal() {
                myVideo.style.width = "50%";
            } 
            function showAlert(message) {
                alert("Unlock Your Potential with Our Training Courses - " + message + ", Pay now and join us!");
            }
            function redirectToSuccessPage() {
                window.location.href = "payment_success.html";
                return false;
            }
            function redirectToSuccessPage() {
                
                alert("Your information has been updated successfully!");
                return false; 
            }
            