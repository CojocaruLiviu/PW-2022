const numbersOnly = (value) => {
 
  (typeof (value) === 'number') ? value :"";
  
}

const Masiv_position = () => {

  let arrNotNumb = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, 'word', 7, 8, false, 9, 100];
  let numbers = arrNotNumb.filter(numbersOnly);
  
  console.log(numbers);






    
  }
