document.body.style.background = "red";

const listItems = document.getElementsByTagName("li"); 

let i = 1;
setInterval (() => {
    if (i <= 10){
        const list = document.createElement("LI");
        const elements = document.createTextNode(`Element Nr. ${i}`);
        list.appendChild(elements);
        document.getElementById("list").appendChild(list);
        if (i % 2 === 0) {
            list.style.backgroundColor = "green";
        } else {
            list.style.backgroundColor = "purple";
        }
        i++;
    }
}, 2000);
    



 
