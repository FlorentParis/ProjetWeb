let row = document.getElementsByClassName("row");
let propo = document.getElementsByClassName("propo");
let correc = document.getElementsByClassName("correc");
let ping = document.getElementsByClassName("ping");
let win = false;
const solution = [];
let selection = [];
let choix = ["rouge", "jaune", "vert", "bleu", "orange", "violet"];
let testRow = 0;
let testPropo = 0;
let blanc = 0;
let noir = 0;

/* Fonction Creation de la solution / Code à trouver */
function createSolution() {
    for(let i = 0; i < 4; i++){
        const random = Math.floor(Math.random() * choix.length);
        solution.push(choix[random]);
    }
}

/* Fonction comparaison selection / Solution */
function noir_blanc(selection, solution) {
    for(let i = 0; i < selection.length; i++){
        if(selection[i] === solution[i]){
            noir++;
        }else if(solution.includes(selection[i])){
            blanc++;
        }else{
            console.log("Rien.")
        }
    }
    console.log("bonne place : ", noir,"mauvaise place", blanc);
}

function verifWin() {
    if(noir == 4){
        console.log(noir);
        console.log("win");
    }else{
        console.log("pas de win");
    }
}

function newTour() {
    console.log(selection);
    noir = 0;
    blanc = 0;
    selection = [];
}

function game(couleurPropo) {
    if(selection.length <4){
        selection.push(couleurPropo);
        console.log(row[testRow].propo[testPropo]);
        console.log(couleurPropo);
        row[testRow].propo[testPropo].style.backgroundColor = couleurPropo;
    }else{
        noir_blanc(selection, solution);
        verifWin();
        newTour();
    }
}

createSolution();