/* affiche à l'utilisateur son age */

alert("Quel est votre age cher utilisateur?");

/*declaration de la variable age et affectation de l'age entré par l'utilisateur à la variable age */
var age = parseInt(prompt("Entrer votre age : "));

/* cette ligne verifie que l'utilisateur à bien entrer un nombre dans le cas contraire */

while(isNaN(age)){
    age = parseInt(prompt("Age invalide, veuilez entrer de nouveau votre age:"));
}
/* affichage de l'age de l'utilisateur */

alert("Vous avez  " + age + " ans");

/* Si l'age entré par l'utilisateur est superieur ou egale à 18 ans alors l'utilisateur est majeur  si non mineur */
if (age >=18){
    alert("vous etes majeur !");
} else {
    alert("vous etes mineur !");
}
//fin du programme