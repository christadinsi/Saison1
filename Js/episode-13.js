// Debut du programme

var nbre1 = 12 ;            // declaration de la variable nbre1 et affectation d'une valeur 12
var nbre2 = 10;             // declaration de la variable nbre2 et affectation d'une valeur 10
var reponse;               // Declartion de la variable reponse
var som = nbre1 + nbre2;  // declaration de la variable nbre et affectation de la somme de l'operation des deux nombres
 
reponse = parseInt(prompt("Combien font 12 + 10")); // on demande à l'utilsateur d'entré la réponse.

/*Si la réponse est différent de la  somme, on le demande de saisir la bonne réponse */

while(reponse != som){
    reponse = parseInt(prompt("Mauvaise réponse! Combien font 12 + 10? Entrez la bonne reponse: "));
}
//fin du programme