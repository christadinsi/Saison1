/*declaration des variables:
 la variabe a a pour valeur 4
 la variable b a pour valeur 9 
 et la variable c ucune valeur n'a été definie*/

var a = 4 , b = 9 , c; 

// affichager les variables a,b et c  avant la permutation 
 console.log ("affichons la valeur de  variable a est  :" + a + 
 "\net la valeur de la variable b est : " + b +
 "\net la valeur de la variable c est : " + c);

 /* Peemutation des variables */

c = a;
a = b;
b = c;

/* affichege des variables permutées dans la console*/

console.log("la variable a  après permutation est : " + a +
    "\nla valeur de la variable b après permutation est  : " + b); 
    
// fin du programme    