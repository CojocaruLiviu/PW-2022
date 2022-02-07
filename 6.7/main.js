const ConvertNumb = () => {
    let age = document.getElementById("num").value;
    let message = 'Is not in diapason1';
    let message1 = 'Is not in diapason2';
    const minVal = 14, maxVal = 90;
    
    (age >= minVal && age <= maxVal) ? message = 'Is in diapason1'  : "";

    (!(age < minVal) && !(age > maxVal)) ?  message1 = 'Is in diapason2' : "";

    console.log(message);
    console.log(message1);

}
