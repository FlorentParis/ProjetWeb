const getRandom = () => Math.floor(Math.random() * (100 -1) +1);

var tourJoueur = 0;
var tourOrdi = 1;
var random = getRandom();
var randomOrdi = getRandom();
console.log(random);
var max = 100;
var mini = 1;
var echec = [];

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", confirmer)

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", suivant);

const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
btn3.addEventListener("click", getTourOrdi);
btn4.addEventListener("click", getTourOrdi);

const btn5 = document.getElementById("trouve");
btn5.addEventListener("click", final);

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
    document.getElementById("randomOrdi").innerHTML="L'ordinateur a trouvé "+ randomOrdi;
}

function getTourOrdi(e) {
    const valeur = e.target.value;
    document.getElementById("btnSuivant").style.display = "none";
    console.log(randomOrdi);
    if(!echec.includes(randomOrdi)){
        tourOrdi++;
        echec.push(randomOrdi);
        if(valeur === "grand"){
            mini = randomOrdi;
            randomOrdi = Math.floor(Math.random()* (max - mini)+mini);
            document.getElementById("randomOrdi").innerHTML="L'ordinateur a trouvé "+ randomOrdi;
        }else{
            max = randomOrdi;
            randomOrdi = Math.floor(Math.random()* (max - mini)+mini);
            document.getElementById("randomOrdi").innerHTML="L'ordinateur a trouvé "+ randomOrdi;
        }
        //Todo btn_reset
    }
    console.log(tourOrdi, randomOrdi, echec)

}

function final(){
    if(tourOrdi > tourJoueur){
        document.getElementById("gagne").style.display="block";
    }else if (tourOrdi < tourJoueur){
        document.getElementById("perdu").style.display="block";
    }else{
        document.getElementById("egalite").style.display="block";
    }
}