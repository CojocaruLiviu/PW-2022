 
 const Unique = (array) => {
  let uniqueArray = [];
  
  for(i=0; i < array.length; i++){
      if(uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
      }
  }
  return uniqueArray;
}


const Masiv_sort = () => {
  
    let values = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
    let uniqueValues = Unique(values);
    uniquevalues.sort((a, b)=>{a - b});
    console.log(values);

  }
