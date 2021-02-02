const btnCiseaux = document.getElementById("ciseaux");
const btnPierre = document.getElementById("pierre");
const btnFeuille = document.getElementById("feuille");

var sommeJoueur = 0;
document.getElementById("resultJoueur").innerHTML=sommeJoueur;

var sommeOrdi = 0;
document.getElementById("resultOrdi").innerHTML=sommeOrdi;

function main(){
    verifwin();
    btnCiseaux.addEventListener("click", function(){game("scissors")});
    btnPierre.addEventListener("click", function(){game("rock")});
    btnFeuille.addEventListener("click", function(){game("paper")});
}

function game(choicePlayer) {
    const choiceOrdi = ["scissors", "rock", "paper"];
    const random = Math.floor(Math.random() * choiceOrdi.length);
    if (choicePlayer == choiceOrdi[random]){
        console.log("Egalité");
        document.getElementById("popegal").style.display = "block";
        setTimeout(() => {
            document.getElementById("popegal").style.display = "none";
        }, 2000);
    }else if(choicePlayer == "scissors" && choiceOrdi[random] == "paper"){
        console.log("L'ordi gagne !");
        sommeOrdi += 1;
        document.getElementById("resultOrdi").innerHTML=sommeOrdi;
        document.getElementById("poploose").style.display = "block";
        setTimeout(() => {
            document.getElementById("poploose").style.display = "none";
        }, 2000);
    }else if(choicePlayer == "scissors" && choiceOrdi[random] == "rock"){
        console.log("L'ordi gagne !");
        sommeOrdi += 1;
        document.getElementById("resultOrdi").innerHTML=sommeOrdi;
        document.getElementById("poploose").style.display = "block";
        setTimeout(() => {
            document.getElementById("poploose").style.display = "none";
        }, 2000);
    }else if(choicePlayer == "rock" && choiceOrdi[random] == "scissors"){
        console.log("Le joueur Gagne !");
        sommeJoueur += 1;
        document.getElementById("resultJoueur").innerHTML=sommeJoueur;
        document.getElementById("popwin").style.display = "block";
        setTimeout(() => {
            document.getElementById("popwin").style.display = "none";
        }, 2000);
    }else if(choicePlayer == "rock" && choiceOrdi[random] == "paper"){
        console.log("L'ordi gagne !");
        sommeOrdi += 1;
        document.getElementById("resultOrdi").innerHTML=sommeOrdi;
        document.getElementById("poploose").style.display = "block";
        setTimeout(() => {
            document.getElementById("poploose").style.display = "none";
        }, 2000);
    }else if(choicePlayer == "paper" && choiceOrdi[random] == "rock"){
        console.log("Le joueur Gagne !");
        sommeJoueur += 1;
        document.getElementById("resultJoueur").innerHTML=sommeJoueur;
        document.getElementById("popwin").style.display = "block";
        setTimeout(() => {
            document.getElementById("popwin").style.display = "none";
        }, 2000);
    }else if(choicePlayer == "paper" && choiceOrdi[random] == "scissors"){
        console.log("L'ordi gagne !");
        sommeOrdi += 1;
        document.getElementById("resultOrdi").innerHTML=sommeOrdi;
        document.getElementById("poploose").style.display = "block";
        setTimeout(() => {
            document.getElementById("poploose").style.display = "none";
        }, 2000);
    }else{
        console.log("Error.");
    }
}

function verifwin() {
    if(sommeJoueur == 10){
        document.getElementById("winglobal").style.display = "fixed";
    }else if(sommeOrdi == 10){
        document.getElementById("looseglobal").style.display = "fixed";
    }else{
        document.getElementById("winglobal").style.display = "none";
        document.getElementById("looseglobal").style.display = "none";
    }
}

main();