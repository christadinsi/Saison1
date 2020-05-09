/* Debut du programme */

/*declarartion de la variable montant et 
l'affectation du montant de la facture entré  à la variable montant*/

var montant = parseInt(prompt("Entrez le  montant de votre facture :"));

var remise = (montant*10)/100; //Déclaration de la variable remise  et effectation du calcul de la remise. 

/* si le montant de la facture est  supérieur à 40000Fr alors on attribut une remise  si non pas de remise */

if(montant >40000){
    alert("vous avez une remise est : " + remise + "Fr");
} else {
    alert("Désolé vous n'avez pas de remise car le  montant de votre facture est inférieur à 40000Fr.Faites plus d'achat");
}
 alert("Merci d'etre passé!")

// fin du programme