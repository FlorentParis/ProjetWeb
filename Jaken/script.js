const btnCiseaux = document.getElementById("ciseaux");
const btnPierre = document.getElementById("pierre");
const btnFeuille = document.getElementById("feuille");

var sommeJoueur = 1 + 2;
document.getElementById("resultJoueur").innerHTML=sommeJoueur;

var sommeOrdi = 1 + 1;
document.getElementById("resultOrdi").innerHTML=sommeOrdi;

function main(){
    btnCiseaux.addEventListener("click", function(){game("scissors")});
    btnPierre.addEventListener("click", function(){game("rock")});
    btnFeuille.addEventListener("click", function(){game("paper")});
}

function game(choicePlayer) {
    const choiceOrdi = ["scissors", "rock", "paper"];
    const random = Math.floor(Math.random() * choiceOrdi.length);
    console.log(random, choiceOrdi[random]);    
}

main();