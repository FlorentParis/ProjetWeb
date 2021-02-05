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
let testCorrec = 0;
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
        if(solution.includes(selection[i])){
            if(selection[i] === solution[i]){
                noir++;
                row[testRow]>correc[testCorrec].classList.add("noir");
                testCorrec += 1;
            }else{
                blanc++;
                row[testRow]>correc[testCorrec].classList.add("blanc");
                testCorrec += 1;
            }
        }
    }
    console.log("bonne place : ", noir,"mauvaise place", blanc);
}

/* Fonction verification si Win / Noir = 4 */
function verifWin() {
    if(noir == 4){
        console.log(noir);
        console.log("win");
    }else{
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
}

/* Fonction appelé a chaque bouton cliqué, une fois la liste pleine, on verifie */
function game(couleurPropo) {
    if(selection.length <4){
        selection.push(couleurPropo);
        row[testRow]>propo[testPropo].classList.add(couleurPropo);
        testPropo += 1;
    }else{
        noir_blanc(selection, solution);
        verifWin();
        newTour();
    }
}

createSolution();