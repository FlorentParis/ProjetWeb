const getRandom = () => Math.floor(Math.random() * (100 -1) +1);

var tourJoueur = 0;
var tourOrdi = 0;
var random = getRandom();
console.log(random);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", confirmer)

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", suivant);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", getTourOrdi);

/* function getRandom(){
return MAth.floor(MAth.radnom() + (100-1)+1);
}*/

function afficheDiv(divNone, divBlock){
    document.getElementById(divNone).style.display="none";
    document.getElementById(divBlock).style.display="block";
}

function confirmer(e){
    e.preventDefault();
    let nb = document.getElementById("number").value;
    console.log(nb)
    nb = parseInt(nb);
    tourJoueur ++;

    if(nb < random){
        document.getElementById("info").innerHTML="Votre nombre est trop petit";
    }else if (nb > random){
        document.getElementById("info").innerHTML="Votre nombre est trop grand";
    }else{
        document.getElementById("info").innerHTML="Félicitation, vous avez reussi à trouver le nombre en"+tourJoueur+" tours.<br>";
        document.getElementById("btnSuivant").style.display="block";
    }
}

function suivant(){
    document.getElementById("btnSuivant").style.display="none";
    afficheDiv("TourJoueur", "TourOrdinateur");
}

function getTourOrdi(){
    document.getElementById("btnSuivant").style.display="none";
    let randomJoueur = parseInt(document.getElementById("number2").value);
    let nbOrdi = getRandom();
    while(nbOrdi !== randomJoueur){
        if (nbOrdi > randomJoueur){
            nbOrdi = Math.floor(Math.random() * (nbOrdi -1) +1);
        }else{
            nbOrdi = Math.floor(Math.random() * (100 -nbOrdi) +1)
        }
        tourOrdi++;
        console.log(tourOrdi);
    }
    if (tourOrdi > tourJoueur){
        afficheDiv("TourOrdinateur", "gagne");
    }else{
        afficheDiv("TourOrdinateur", "perdu");
    }
}
