document.body.style.background = "red";

setTimeout(function BackgroundGreen() {
    document.body.style.background = "green";
},3000);

let btn = document.createElement("button");
btn.innerHTML = "Orange";

btn.addEventListener("click", function () {
    document.body.style.background = "orange";
});
document.body.appendChild(btn);


