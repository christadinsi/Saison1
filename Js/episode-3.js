
alert(" Bienvenue dans notre programme d'addition"); // cette ligne de code affiche un bienvenue à l'utilisateur

/*on demande à l'utilisateur de rentrer 
un premier nombre qui sera affecté à  la variable nbre1*/

var nbre1 = parseInt(prompt("veuilez entrer votre premier nombre :")); 

/* on verifie que l'utilsateur à bien entrer un nombre
 si non on lui demande d'entré de nouveau le premier nombre*/

while(isNaN(nbre1)){
    nbre1 = parseInt(prompt("Ce n'est pa un nombre, veuillez entrer votre premier nombre s'il vous plait:"));
}

/*on demande à l'utilisateur de rentrer 
un premier nombre qui sera affecté à la variable nbre2*/

var nbre2 = parseInt(prompt("veuilez entrer votre deuxieme nombre :"));

/* on verire que l'utilsateur à bien entré un nombre si non on
 lui demande d'entré de nouveau le deuxieme nombre*/

while(isNaN(nbre2)){
    nbre1 = parseInt(prompt("Ce n'est pa un nombre, veuillez entrer votre premier nombre s'il vous plait:"));
}
var som = nbre1 + nbre2; // declaration de la variable som et on l'affecte la somme des deux nombre entré par l'utilisateur
 
alert(nbre1 + ' + ' + nbre2 + ' = ' + som);

// fin du programme



