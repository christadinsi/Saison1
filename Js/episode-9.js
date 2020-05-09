alert("Cher élève obtené votre mention");// invitez l'éleve à entrer sa moyene

var moyenne = parseInt(prompt("Entrer votre moyenne :"));//declaré une variable moyenne et l'affecter la moyenne entrée par l"éleve

/* si la moyenne est entre  0 et est inferieur ou égale à 9 affichez mention mediocre */

if(moyenne ==0 || moyenne <= 9){
    alert( "vous avez une mention Médiocre " );

/* si la moyenne est entre  10 et inferieur  12 affichez mention mediocre */

} else if( moyenne == 10 || moyenne < 12){
    alert("Vous avez une mention passable");

/* si la moyenne est égale 12 etinférieur ou égale 13 affichez mention mediocre */

} else if(moyenne == 12 || moyenne <= 13) {
    alert("Vous avez une mention assez bien");
/* si la moyenne est égale 14 et est inférieur ou égale  16 affichez mention mediocre */

}else if(moyenne ==14 || moyenne <= 16){
    alert("Vous avez une mention Bien");

/* si la moyenne est égale 17 et est inférieur ou égale  18 affichez mention mediocre */

}else if( moyenne == 17 || moyenne <= 18){
    alert("Vous avez une mention Très bien");

/* si la moyenne est égale 14 et est inférieur ou égale  16 affichez mention mediocre */

} else if (moyenne == 19 || moyenne <= 20) {
    alert("Vous avez une mention Excellent");

    /* Si non afficher erreur */
} else {
    alert("désolé! veilllez recommencer");
}
//fin du programme