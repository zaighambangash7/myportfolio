function workEvent() {

    var login = document.getElementById("login");

    login.addEventListener("dblclick", () => {
        console.log("SOmethng")
    })

    var content = document.getElementById("content");
    var button = document.getElementById("button");

    button.onclick = function () {
        if (content.className == "open") {
            content.className = "";
            button.innerHTML = "Show More";
        } else {
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    };
    var colorChanger = document.getElementById("content");
    var colours = ["yellow", "blue", "green", "pink"];
    var counter = 0;

    function changeColour() {
        if (counter == colours.length) {
            counter = 0;
        }
        colorChanger.style.borderColor = colours[counter];
        counter++;
    }

    myTimer = setInterval(changeColour, 3000);

    let state = 1

    colorChanger.onclick = function () {
        if (window.myTimer && state % 2 != 0) {
            clearInterval(window.myTimer);
            state++;
        } else {
            state++;
            myTimer = setInterval(changeColour, 3000);
        }
    }

}
window.onload = function () {
    workEvent();
}