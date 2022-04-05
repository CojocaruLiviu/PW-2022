const extract = (first, last, arry1, arry2) => {
  let j = 0;
  for (let i = 0; i < arry1.length; i++) {
    (arry1[i] >= arry1[first] && arry1[i] <= arry1[last]) ?

      (arry2[j] = arry1[i]) && (j++) : "";

    }

}


const Masiv_position = () => {

  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;

  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr2 = [];
  extract(start, end, arr1, arr2);
  console.log(arr2);
}
