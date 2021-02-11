var button = document.getElementById("Resultat");
let compteur1 = document.getElementById('compteur1').innerHTML = 0;
let compteur2 = document.getElementById('compteur2').innerHTML = 0;
let compteur3 = document.getElementById('compteur3').innerHTML = 0;
let compteur4 = document.getElementById('compteur4').innerHTML = 0;


function Somme() {
    if (compteur1 < 9){
        compteur1 = compteur1 + 1
        console.log(compteur1)
        compteur1.innerHTML;
    } else if (compteur2 < 9) {
        compteur2 = compteur2 + 1
        compteur1 = 0
    } else if ( compteur3 < 9) {
        compteur3 = compteur3 + 1
        compteur2 = 0
        compteur1 = 0
    } else if ( compteur4 < 9) {
        compteur4 = compteur4 + 1
        compteur3 = 0
        compteur2 = 0
        compteur1 = 0
    } else {
        alert("Vous avez depassé le nombre maximum, on remet les compteurs a 0")
        Reset()
    }
};

function Reset() {
    compteur1 = 0;
    compteur2 = 0;
    compteur3 = 0;
    compteur4 = 0;
    button.value = compteur4 + " : " + compteur3 + " : " + compteur2 + " : " + compteur1
}
