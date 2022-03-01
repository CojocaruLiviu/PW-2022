
let addres = [
  'http://google.com',
  'directory/page.html',
  'http://ok.ru',
  'http://facebook.com',
  'direct/page.html',
  'http://youtube.com',
  'asistance/page1.html',
  'https://docs.google.com/document/d/1hpY4Eey9gCDLIukp1r1ZECVU_sy6gizrvvb4UcPp5N8/edit#'
]

for (let i = 0; i < addres.length; i++) {

  for (let j = 0; j < addres[i].length; j++) {
    (addres[i][0] == 'h' && addres[i][1] == 't' && addres[i][2] == 't' && addres[i][3] == 'p') ?

      (document.getElementById("demo").innerHTML += addres[i++] + '<br>') &&
      (document.getElementById("demo").style.color = 'red')
    :
      document.getElementById("demo1").innerHTML += addres[i++] + '<br>';

  
  }
}
