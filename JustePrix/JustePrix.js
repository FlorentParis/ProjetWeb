/* Sources d'aide :
*  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes
*  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
*  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push
*  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
* */

var tourJoueur = 0;
var tourOrdi = 1;
var max = 100;
var min = 1;
var echec = []; //Variable pour stocker les propositions de l'ordinateur --> éviter les doublons

const getRandom = () => Math.floor(Math.random() * (max -min) +min);
/* function getRandom(){
return MAth.floor(MAth.random() + (100-1)+1);
}*/

var alea = getRandom(); // alea premier tour (nombre que le joueur doit trouver)
var aleaOrdi = getRandom(); // alea deuxieme tour (nombre que l'ordi propose dans le but de trouver le nb du joueur)
//console.log(tourJoueur);
const btnConfirmer = document.getElementById("btnConfirmer");
btnConfirmer.addEventListener("click", confirmer);

const btnSuivant = document.getElementById("btnSuivant");
btnSuivant.addEventListener("click", nextTour);

const btnGrand = document.getElementById("btnGrand");
const btnPetit = document.getElementById("btnPetit");
btnGrand.addEventListener("click", getTourOrdi);
btnPetit.addEventListener("click", getTourOrdi);

const btnTrouve = document.getElementById("btnTrouve");
btnTrouve.addEventListener("click", final);

const btnRefresh = document.getElementById("btnRefresh");
btnRefresh.addEventListener("click", refresh);

const btnRejouer = document.getElementById("btnRecommencer");
btnRejouer.addEventListener("click", () => document.location.reload());

//fonction qui va cacher et afficher une div
function afficheDiv(divNone, divBlock){
    document.getElementById(divNone).style.display="none";
    document.getElementById(divBlock).style.display="block";
}

//Premier tour : vérifie si le joueur a deviné le nombre aléatoire de l'ordinateur
function confirmer(e){
    //console.log(alea);
    let nb = document.getElementById("nombre").value;
    if(nb === ""){
        document.getElementById("information").innerHTML="Veuillez saisir un nombre";
    }else{
        nb = parseInt(nb);
        tourJoueur ++;
        if(nb < alea){
            document.getElementById("information").innerHTML="Votre nombre est trop petit.";
        }else if (nb > alea){
            document.getElementById("information").innerHTML="Votre nombre est trop grand.";
        }else{
            afficheDiv("TourJoueur", "tourSuivant");
            document.getElementById("message").innerHTML="Félicitation ! Vous avez réussi à trouver le nombre mystère de l'ordinateur en "+tourJoueur+" tours.<br>";
        }
    }
}

//Affiche le nombre de tour Joueur réalisé ainsi qu'un bouton suivant pour passer au tour suivant
function nextTour(){
    document.getElementById("tourSuivant").style.display="none";
    afficheDiv("TourJoueur", "TourOrdinateur");
    document.getElementById("aleaOrdi").innerHTML="L'ordinateur vous propose "+ aleaOrdi+".";
}

//Deuxieme tour, tour de l'ordinateur de trouver le juste "nombre"
function getTourOrdi(e) {
    const valeur = e.target.value;
    document.getElementById("tourSuivant").style.display = "none";
    if(max === min || max < min){
        document.getElementById("aleaOrdi").innerHTML="La proposition finale de l'ordinateur est : "+ aleaOrdi +"." + "<br> Si ce n'est pas le bon nombre, veuillez recommencer le tour.";
        btnGrand.style.display="none";
        btnPetit.style.display="none";
    }else{
        while(echec.includes(aleaOrdi)){
            aleaOrdi = Math.floor(Math.random()* (max - min)+min);
        }
        tourOrdi++;
        echec.push(aleaOrdi);
        if(valeur === "grand"){
            min = aleaOrdi+1;
            aleaOrdi = Math.floor(Math.random()* (max - min)+min);
            document.getElementById("aleaOrdi").innerHTML="L'ordinateur vous propose "+ aleaOrdi+".";
        }else{
            max = aleaOrdi;
            aleaOrdi = Math.floor(Math.random()* (max - min)+min);
            document.getElementById("aleaOrdi").innerHTML="L'ordinateur vous propose "+ aleaOrdi+".";
        }
    }

}

// réinitialise toute les variables qui concerne le deuxieme tour, et re-affiche le btn grand/petit
function refresh(){
    tourOrdi = 1;
    echec = [];
    min = 1;
    max = 100;
    aleaOrdi = getRandom();
    document.getElementById("aleaOrdi").innerHTML="Vous avez recommencé le tour : L'ordinateur vous propose "+ aleaOrdi+".";
    btnGrand.style.display="block";
    btnPetit.style.display="block";
}

//affiche si le joueur a gagné ou non
function final(){
    if(tourOrdi > tourJoueur){
        afficheDiv("TourOrdinateur", "fin");
        document.getElementById("resultat").innerHTML="Vous avez Gagné !";
        document.querySelector("span.score").innerHTML= tourJoueur+" vs "+tourOrdi;
    }else if (tourOrdi < tourJoueur){
        afficheDiv("TourOrdinateur", "fin");
        document.getElementById("resultat").innerHTML="Vous avez Perdu !";
        document.querySelector("span.score").innerHTML= tourJoueur+" vs "+tourOrdi;
    }else{
        afficheDiv("TourOrdinateur", "fin");
        document.getElementById("resultat").innerHTML="Égalité !";
        document.querySelector("span.score").innerHTML= tourJoueur+" vs "+tourOrdi;
    }
}
