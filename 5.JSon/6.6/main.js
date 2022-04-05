//https://jsoneditoronline.org/#left=cloud.5700db3b16a94c61ad12005db96f3232
let worker = {
  "name": "Cojocaru",
  "surname": "Liviu",
  "patronymic": "Igor",
  "birthday": "2000-06-09",
  "phone": "+3736666309",
  "adress": "R.Floresti",
  "mail": "liviucoddasjocaru@gmail.ru",
  "gen": "male",
  "profession": "programmer",
  "frstdayprof": "2021-05-09",
  "IDNP": 2009018054564,
  "salary": 7000,
  "birthplace": "R.Floresti",
  "Ywork": 1.7,
  "department": "Backend",
  "homenumber": "025065784",
  "schedule": "at 8:00 to 16:30"
};
let worker1 = {
  "name": "Ciobanu",
  "surname": "Ion",
  "patronymic": "Alex",
  "birthday": "2001-08-19",
  "phone": "+37364562309",
  "adress": "R.Cantemir",
  "mail": "asdaLord@gmail.ru",
  "gen": "male",
  "profession": "teacher",
  "frstdayprof": "2020-08-18",
  "IDNP": 200901244564,
  "salary": 8000,
  "birthplace": "R.Glodeni",
  "Ywork": 2.2,
  "department": "English",
  "homenumber": "025065784",
  "schedule": "at 8:00 to 16:30"
};
let worker2 = {
  "name": "Ciupac",
  "surname": "Victor",
  "patronymic": "Ion",
  "birthday": "2002-04-15",
  "phone": "+37368789309",
  "adress": "R.Balti",
  "mail": "Onloared@gmail.ru",
  "gen": "male",
  "profession": "taxy",
  "frstdayprof": "2022-01-06",
  "IDNP": 2009018754564,
  "salary": 9000,
  "birthplace": "R.Telenesti",
  "Ywork": 1.1,
  "department": "driver",
  "homenumber": "025065784",
  "schedule": "at 8:00 to 16:30"
};

let salariu = worker.salary + obj1.salary + obj2.salary;

json = JSON.stringify(worker);


document.getElementById("stud").innerHTML = `The workers are ${obj.name} ${obj1.name} ${obj2.name} </br> The salary summ is ${salariu},</br> Amount of salary is ${salariu / 3}  `;

document.getElementById("salar").innerHTML = `The salary at ${obj.name} is ${obj.salary}</br>The salary at ${obj1.name} is ${obj1.salary}</br>The salary at ${obj2.name} is ${obj2.salary}`;

