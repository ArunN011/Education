

const progressFill = document.querySelector(".progress-fill");
const progressText = document.getElementById("loading-percent");
const loadingMessage = document.getElementById("loading-message");
const preloader = document.getElementById("preloader");
const website = document.getElementById("website");

website.style.display = "none";

const messages = [
    "Preparing Your Learning Experience...",
    "Loading Educational Resources...",
    "Building Smart Learning Environment...",
    "Almost Ready..."
];

let percent = 0;
let messageIndex = 0;

const progress = setInterval(() => {

    percent++;

    progressFill.style.width = percent + "%";

    progressText.innerHTML = percent + "%";

    if (percent === 25) {
        loadingMessage.innerHTML = messages[1];
    }

    if (percent === 50) {
        loadingMessage.innerHTML = messages[2];
    }

    if (percent === 75) {
        loadingMessage.innerHTML = messages[3];
    }

    if (percent >= 100) {

    clearInterval(progress);

    setTimeout(() => {

        preloader.style.transition = "all .8s ease";

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

        preloader.style.transform = "scale(1.05)";

        website.style.display = "block";
        setTimeout(() => {

    testimonialSwiper.update();

    testimonialSwiper.updateSize();

    testimonialSwiper.updateSlides();

    testimonialSwiper.updateProgress();

    testimonialSwiper.slideTo(0);

}, 300);

        website.style.animation = "fadeWebsite 1s ease";

        document.body.style.overflow = "auto";

        setTimeout(() => {

            AOS.refreshHard();

        },100);

    },300);

}
    

},30);

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeWebsite{

0%{

opacity:0;

transform:translateY(30px);

}

100%{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(style);