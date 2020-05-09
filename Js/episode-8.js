/*declaration des varable nom et sexe et des affectations des valeurs
 qui seront entrées par l'utilsateur  aux variables nom et sexe*/

var nom = prompt("Entrer votre nom :" );
var sexe = prompt("Entrer votre sexe ('masculin', 'M' ou 'feminin' ou 'F') :");

/*  si le sexe entré par l'utilisateur  est M ou masculin 
on affiche Bonjour Monsieur si non Bonjour Madame  */

if(sexe =='M' || sexe == 'masculin') {
    alert("Bonjour Monsieur " + nom);
} else {
    alert("Bonjour Madame " + nom);
}

//fin du programme