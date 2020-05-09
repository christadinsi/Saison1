//debut du programme

/* declarationde la variable nbre et affectation du nombre
 entré par l'utilisateur à la variable nbre*/

var nbre = parseInt(prompt("Entrer un nombre de votre choix: ")); 

var i = 1;//Declaration dela variable et initialisation de lavaribe à 1
/* Tant que la variable i est inferieur ou égale à 10  afficher la table de multiplication dans la console */
while(i<=10){
    console.log(nbre + '*' + i + '=' + nbre*i);
    i++;// incrémentation
}

//fin du programme