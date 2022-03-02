const showNotification = (option) => {
    const elem = document.getElementById("notification").innerHTML = option;

    setTimeout(() => {

        const elem = document.getElementById("notification").innerHTML = "";

    }, 1500);

}

let option = "Hello";

showNotification(option);


