const VerefiMinMax =() => {

  let a, b, c

  a = document.getElementById("a").value ;
  b = document.getElementById("b").value ;
  c = document.getElementById("c").value ;


	console.log("Min value is " + Math.min(a, b, c));
	console.log("Max value is " + Math.max(a, b, c));

}