//METHODE 1 mais on peut pas boucler à l'infini
/* age = parseInt(prompt("Qu'elle est votre âge svp?  "));
if (age >= 0 && age < 130) {
  alert("Votre âge est de " + age + " ans");
} else {
  alert("Votre âge est erroné !");
}
age = parseInt(prompt("Qu'elle est votre âge svp?  "));
if (age >= 0 && age < 130) {
  alert("Votre âge est de " + age + " ans");
} else {
  alert("Votre âge est erroné !");
} */

// METHODE 2 En utilisant la struture while qui boucle à l'infini
age = parseInt(prompt("Qu'elle est votre âge svp?  "));
while (age <= 0 || age > 130) {
  alert("votre âge est incorrect! ");
  age = parseInt(prompt("Qu'elle est votre âge svp?  "));
}
alert("votre âge est de  " + age + " ans");
