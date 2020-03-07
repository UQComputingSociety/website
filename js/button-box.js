var elements = document.getElementsByClassName("button-box");
Array.prototype.slice.call( elements ).forEach(element => {
    element.addEventListener("click", function(e) {
        location.href = element.getAttribute("href");
    }, false);
});