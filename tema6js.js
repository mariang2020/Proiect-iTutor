var person1 = {
  firstName: "Popescu",
  lastName: "Doina",
  school: "Scoala Generala Nr 1" ,
  loc: 1
};
var person2 = {
  firstName: "Ionescu",
  lastName: "Maria",
  school: "Scoala Generala Nr 2" ,
  loc: 2
};
var person3 = {
  firstName: "Georgescu",
  lastName: "Irina",
  school: "Scoala Generala Nr 3" ,
  loc: 3
};
// Display some data from the object:
document.getElementById("id1").innerHTML =
person1.firstName + " " + person1.lastName + " invata la " + person1.school + " si a castigat Locul " + person1.loc + " la Olimpiada Judeteana de Matematica."
document.getElementById("id2").innerHTML =
person2.firstName + " " + person2.lastName + " invata la " + person2.school + " si a castigat Locul " + person2.loc + " la Olimpiada Judeteana de Matematica."
document.getElementById("id3").innerHTML =
person3.firstName + " " + person3.lastName + " invata la " + person3.school + " si a castigat Locul " + person3.loc + " la Olimpiada Judeteana de Matematica."