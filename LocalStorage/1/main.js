let firstInput = document.getElementById("val");

document.getElementById("val").value = localStorage.getItem('val');

firstInput.oninput = () =>{
  localStorage.setItem('val', firstInput.value);
}