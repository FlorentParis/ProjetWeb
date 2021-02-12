const btnCiseaux = document.getElementById("Ciseaux");
const btnPierre = document.getElementById("Pierre");
const btnFeuille = document.getElementById("Papier");
const choix = ["Ciseaux", "Pierre", "Papier"];

var choiceOrdi="";
var choicePlayer ="";
var sommeJoueur = 0;
document.getElementById("resultJoueur").innerHTML=sommeJoueur;

var sommeOrdi = 0;
document.getElementById("resultOrdi").innerHTML=sommeOrdi;

function main(){
    verifwin();
    btnCiseaux.addEventListener("click", function(){game("Ciseaux")});
    btnPierre.addEventListener("click", function(){game("Pierre")});
    btnFeuille.addEventListener("click", function(){game("Papier")});
}

function game(btnChoice) {
    //verifwin();
    var random = Math.floor(Math.random() * choix.length);
    choiceOrdi = choix[random];
    choicePlayer = btnChoice;
    if (choicePlayer === choiceOrdi){       //egalité
        //console.log("Egalité");
        popUpTimed("popegal");
    }else if(choicePlayer === "Ciseaux" && choiceOrdi === "Papier"){
        //console.log("Le joueur gagne !");
        sommeJoueur += 1;
        document.getElementById("resultJoueur").innerHTML=sommeJoueur;
        popUpTimed("popwin");
    }else if(choicePlayer === "Ciseaux" && choiceOrdi === "Pierre"){
        //console.log("L'ordi gagne !");
        sommeOrdi += 1;
        document.getElementById("resultOrdi").innerHTML=sommeOrdi;
        popUpTimed("poploose");
    }else if(choicePlayer === "Pierre" && choiceOrdi === "Ciseaux"){
        //console.log("Le joueur Gagne !");
        sommeJoueur += 1;
        document.getElementById("resultJoueur").innerHTML=sommeJoueur;
        popUpTimed("popwin");
    }else if(choicePlayer === "Pierre" && choiceOrdi === "Papier"){
        //console.log("L'ordi gagne !");
        sommeOrdi += 1;
        document.getElementById("resultOrdi").innerHTML=sommeOrdi;
        popUpTimed("poploose");
    }else if(choicePlayer === "Papier" && choiceOrdi === "Pierre"){
        //console.log("Le joueur Gagne !");
        sommeJoueur += 1;
        document.getElementById("resultJoueur").innerHTML=sommeJoueur;
        popUpTimed("popwin");
    }else if(choicePlayer === "Papier" && choiceOrdi === "Ciseaux"){
        //console.log("L'ordi gagne !");
        sommeOrdi += 1;
        document.getElementById("resultOrdi").innerHTML=sommeOrdi;
        popUpTimed("poploose");
    }else{
        //console.log("Error.");
    }
    verifwin()
}

function popUpTimed(resultDiv){
    document.getElementById(resultDiv).style.display = "block";
    let results = document.querySelectorAll("p.resultat")
    results.forEach(result => result.innerHTML="L'ordinateur a choisi "+ choiceOrdi);
    setTimeout(() => {
        document.getElementById(resultDiv).style.display = "none";
    }, 2000);
}

// TODO revoir l'affichage de winGlobal et looseGlobal
function verifwin() {
    //console.log(choicePlayer,choiceOrdi);
    //console.log("verif "+sommeJoueur, sommeOrdi);
    if(sommeJoueur > sommeOrdi && sommeJoueur === 10){
        //alert("stop1")
        document.getElementById("winglobal").style.display="block";
        document.getElementById("looseglobal").style.display="none";
    }else if(sommeOrdi > sommeJoueur && sommeOrdi === 10){
        //alert("stop2");
        document.getElementById("looseglobal").style.display="block";
        document.getElementById("winglobal").style.display="none";
    }else{
        document.getElementById("winglobal").style.display="none";
        document.getElementById("looseglobal").style.display="none";
    }
}

main();
//verifwin()