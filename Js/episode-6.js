var nbre1 = parseInt(prompt("Entrer un premier nombre :")); // declaration de la variable nbre1 ett affectation du premier nombre entré par l'utilisateur
var nbre2 = parseInt(prompt("Entrer un deuxieme nombre :"));// declaration de la variable nbre1 ett affectation du deuxieme nombre entré par l'utilisateur
var nbre3 = parseInt(prompt("Entrer un troisième nombre :"));// declaration de la variable nbre1 ett affectation du troisème nombre entré par l'utilisateur

/* affichage des trois nombres entrés par m'utilisateur dans la boite de dialogues */
alert("le premier nombre est : " + nbre1 +
"\nle deuxième nombre est : " + nbre2 +
"\nle troisième nombre est " + nbre3);

/*declaration de la variable moyenne et on l'affecte la valeur de la somme des trois nombres divisé par trois qui
    constitue la moyenne des trois nombre */

var moyenne = (nbre1 + nbre2 + nbre3)/3;
/*Afiichage de la moyennne des nombres entrés par l'utilisateur */

alert("la moyenne des trois nombres entrés est : " +  moyenne);

//fin du programme
