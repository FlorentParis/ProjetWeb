let row = document.getElementsByClassName("row");
let propo = document.getElementsByClassName("propo");
let correc = document.getElementsByClassName("correc");
let ping = document.getElementsByClassName("ping");
let win = false;
const solution = [];
var selection = [];
let choix = ["rouge", "jaune", "vert", "bleu", "orange", "violet"];
let testRow = 0;
let testPropo = 0;
let testCorrec = 0;
let blanc = 0;
let noir = 0;

const red = document.getElementById("btnRouge");
red.addEventListener("click", game)

const yellow = document.getElementById("btnJaune");
yellow.addEventListener("click", game)

const green = document.getElementById("btnVert");
green.addEventListener("click", game)

const blue = document.getElementById("btnBleu");
blue.addEventListener("click", game)

const orange = document.getElementById("btnOrange");
orange.addEventListener("click", game);

const violet = document.getElementById("btnViolet");
violet.addEventListener("click", game);

createSolution();

/* Fonction Creation de la solution / Code à trouver */
function createSolution() {
    for(let i = 0; i < 4; i++){
        const random = Math.floor(Math.random() * choix.length);
        solution.push(choix[random]);
    }
}

/* Fonction comparaison selection / Solution */
function noir_blanc() {
    console.log(testRow)
    for(let i = 0; i < selection.length; i++){
        if(solution.includes(selection[i])){
            if(selection[i] === solution[i]){
                noir++;
                row[testRow]>correc[testCorrec].classList.add("noir");
                testCorrec++;
            }else{
                blanc++;
                row[testRow]>correc[testCorrec].classList.add("blanc");
                testCorrec++;
            }
        }
    }
    console.log("bonne place : ", noir,"mauvaise place", blanc);
    verifWin();

}

/* Fonction verification si Win / Noir = 4 */
function verifWin() {
    if(noir == 4){
        console.log(noir);
        console.log("win");
    }else{
        newTour();
        console.log("pas de win");
    }
}

/* Reinitialisation  de tout pour la nouvelle rangé */
function newTour() {
    console.log(selection);
    noir = 0;
    blanc = 0;
    selection = [];
    testRow += 1;
    document.getElementById("valider").style.display="none";
}

/* Fonction appelé a chaque bouton cliqué, une fois la liste pleine, on verifie */
function game(e) {
    var color = e.target.value;
    if(selection.length <4){
        selection.push(color);
        row[testRow]>propo[testPropo].classList.add(color);
        testPropo += 1;
    }
    if(selection.length>=4){
        document.getElementById("valider").style.display="block";
        var valider = document.getElementById("valider");
        valider.addEventListener("click", noir_blanc)
        /*
        noir_blanc(selection, solution);
        verifWin();
        newTour();*/
    }
}


