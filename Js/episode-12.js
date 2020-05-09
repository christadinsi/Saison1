//Debut du pragramme faire la somme des dix premiers nombres

var  som = 0; // declaration et initialisation de la variable som à 0
var i; // declaration de la variable i

/* la vaiable i est initialisé à 1 ,Pour i allant de 1 à 10 , on incremente
 on ajoute à la varible somme le résultat de la somme precedente plus 
 i (qui represente un nombre compris entre 1 et 10)
 */
 for (i = 1 ; i<=10 ; i++){
     console.log(  "+" + i  ) ;
     som = som + i;
 }
console.log("=" + som); //et on affiche la somme  des dix premiers nombres

//fin du programme