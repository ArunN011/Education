const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

if (dot && outline) {

    function moveCursor(x, y) {

        dot.style.left = x + "px";
        dot.style.top = y + "px";

        outline.style.left = x + "px";
        outline.style.top = y + "px";
    }

    window.addEventListener("pointermove", (e) => {

        moveCursor(e.clientX, e.clientY);

    });

   
    window.addEventListener("touchstart", (e) => {

        const touch = e.touches[0];

        if (!touch) return;

        moveCursor(touch.clientX, touch.clientY);

    }, { passive: true });

    window.addEventListener("touchmove", (e) => {

        const touch = e.touches[0];

        if (!touch) return;

        moveCursor(touch.clientX, touch.clientY);

    }, { passive: true });

}