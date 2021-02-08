var tourJoueur = 0;
var tourOrdi = 1;

var max = 100;
var min = 1;
var echec = []; //Variable pour stocker les propositions de l'ordinateur --> éviter les doublons

const getRandom = () => Math.floor(Math.random() * (max -min) +min);
/* function getRandom(){
return MAth.floor(MAth.random() + (100-1)+1);
}*/
var alea = getRandom();
var aleaOrdi = getRandom();

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

//fonction qui va cacher et afficher une div
function afficheDiv(divNone, divBlock){
    document.getElementById(divNone).style.display="none";
    document.getElementById(divBlock).style.display="block";
}

function confirmer(e){
    e.preventDefault();
    let nb = document.getElementById("nombre").value;
    if(nb===""){
        document.getElementById("info").innerHTML="Veuillez saisir un nombre";
    }else{
        console.log(alea)
        nb = parseInt(nb);
        tourJoueur ++;
        if(nb < alea){
            document.getElementById("info").innerHTML="Votre nombre est trop petit";
        }else if (nb > alea){
            document.getElementById("info").innerHTML="Votre nombre est trop grand";
        }else{
            afficheDiv("btnConfirmer", "tourSuivant");
            document.getElementById("message").innerHTML="Félicitation, vous avez reussi à trouver le nombre en"+tourJoueur+" tours.<br>";
        }
    }
    // TODO Verife si input n'est pas vide

}

function nextTour(){
    document.getElementById("tourSuivant").style.display="none";
    afficheDiv("TourJoueur", "TourOrdinateur");
    document.getElementById("aleaOrdi").innerHTML="L'ordinateur a trouvé "+ aleaOrdi;
}

function getTourOrdi(e) {
    const valeur = e.target.value;
    document.getElementById("tourSuivant").style.display = "none";
    //console.log(aleaOrdi);
    if(max === min || max < min){
        alert("error");
    }else{
        while(echec.includes(aleaOrdi)){
            aleaOrdi = Math.floor(Math.random()* (max - min)+min);
        }
        tourOrdi++;
        echec.push(aleaOrdi);
        if(valeur === "grand"){
            min = aleaOrdi+1;
            aleaOrdi = Math.floor(Math.random()* (max - min)+min);
            document.getElementById("aleaOrdi").innerHTML="L'ordinateur a trouvé "+ aleaOrdi;
        }else{
            max = aleaOrdi;
            aleaOrdi = Math.floor(Math.random()* (max - min)+min);
            document.getElementById("aleaOrdi").innerHTML="L'ordinateur a trouvé "+ aleaOrdi;
        }
        //Todo btn_reset
        console.log(echec);
        console.log("min : " + min + " max : "+ max)
    }

}

function refresh(){
    tourOrdi = 0;
    echec = [];
    min = 1;
    max = 100;
    aleaOrdi = getRandom();
    document.getElementById("aleaOrdi").innerHTML="Vous avez ReFresh : L'ordinateur a trouvé "+ aleaOrdi;
}

function final(){
    if(tourOrdi > tourJoueur){
        afficheDiv("TourOrdinateur", "gagne");

    }else if (tourOrdi < tourJoueur){
        afficheDiv("TourOrdinateur", "perdu");

    }else{
        afficheDiv("TourOrdinateur", "egalite");
    }
}