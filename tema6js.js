// Create objects:
var person1 = {
  firstName: "Popescu",
  lastName: "Doina",
  school: "Scoala Generala Nr 1" ,
  loc: 1,
  nota1: 10,
  nota2: 10
};

var person2 = {
  firstName: "Ionescu",
  lastName: "Maria",
  school: "Scoala Generala Nr 2" ,
  loc: 2,
  nota1: 9,
  nota2: 9
};

var person3 = {
  firstName: "Georgescu",
  lastName: "Irina",
  school: "Scoala Generala Nr 3" ,
  loc: 3,
  nota1: 8,
  nota2: 8
};

function punctaj(a, b) {
  return a + b;
}

// Display some data from the objects:
document.getElementById("id1").innerHTML =
person1.firstName + " " + person1.lastName + " invata la " + person1.school + " si a castigat Locul " + person1.loc + " la Olimpiada Judeteana de Matematica cu " + punctaj(person1.nota1, person1.nota2) + " puncte."
document.getElementById("id2").innerHTML =
person2.firstName + " " + person2.lastName + " invata la " + person2.school + " si a castigat Locul " + person2.loc + " la Olimpiada Judeteana de Matematica cu " + punctaj(person2.nota1, person2.nota2) + " puncte."
document.getElementById("id3").innerHTML =
person3.firstName + " " + person3.lastName + " invata la " + person3.school + " si a castigat Locul " + person3.loc + " la Olimpiada Judeteana de Matematica cu " + punctaj(person3.nota1, person3.nota2) + " puncte."