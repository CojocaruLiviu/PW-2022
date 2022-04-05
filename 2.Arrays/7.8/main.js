const checkColor = (color, pos) => {

  for (let i = 0; i < color.length; i++) {

    if (i == pos) {
    
      pos = color[i];
      return pos;
    
    }
    
  }

  if (pos != ' ') {
    pos = '-1';
    return pos;
  }

}

 const Masiv_position = () => {

  let position = document.getElementById("position").value;

  let colors = ['red', 'green', 'blue'];

  let result = checkColor(colors, position);

  console.log(result);

}
