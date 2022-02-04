const ReturnNr = () => {
   let val;
   val = document.getElementById("name").value;

   console.log(CurentNr(val));
}

const CurentNr = (str) => {

   var matches = str.match(/(\d+)/);

   (matches) ?
      str = matches[0] : "";
   return str;

}
