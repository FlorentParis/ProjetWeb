let button = document.getElementById("Resultat");
let compteur1 = document.getElementById('compteur1').innerHTML = 0;
let compteur2 = document.getElementById('compteur2').innerHTML = 0;
let compteur3 = document.getElementById('compteur3').innerHTML = 0;
let compteur4 = document.getElementById('compteur4').innerHTML = 0;


function Somme() {
    if (compteur1 < 9){
        document.getElementById("compteur1").classList.add("message_animated");
        setTimeout(function(){
            document.getElementById("compteur1").classList.add("message_animatedEnBas");
            document.getElementById("compteur1").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur1++;
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur1").classList.remove("message_animatedEnBas");
            document.getElementById("compteur1").classList.add("message");
        }, 1000)
    } else if (compteur2 < 9) {
        compteur2++
        compteur1 = 0
    } else if ( compteur3 < 9) {
        compteur3++
        compteur2 = 0
        compteur1 = 0
    } else if ( compteur4 < 9) {
        compteur4++
        compteur3 = 0
        compteur2 = 0
        compteur1 = 0
    } else {
        alert("Vous avez depassé le nombre maximum, on remet les compteurs a 0")
        Reset()
    }
    document.getElementById("compteur2").innerHTML = compteur2;
    document.getElementById("compteur3").innerHTML = compteur3;
    document.getElementById("compteur4").innerHTML = compteur4;
}

function Reset() {
    compteur1 = 0;
    compteur2 = 0;
    compteur3 = 0;
    compteur4 = 0;
    document.getElementById("compteur1").innerHTML = compteur1;
    document.getElementById("compteur2").innerHTML = compteur2;
    document.getElementById("compteur3").innerHTML = compteur3;
    document.getElementById("compteur4").innerHTML = compteur4;
}
