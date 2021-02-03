let row = document.getElementsByClassName("row");
let propo = document.getElementsByClassName("propo");
let correc = document.getElementsByClassName("correc");
let ping = document.getElementsByClassName("ping");
let win = false;
const solution = [];
let selection = ["rouge", "jaune", "vert", "bleu"];
let choix = ["rouge", "jaune", "vert", "bleu", "orange", "violet"];
let test = 0;
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
            }else{
                blanc++;
            }
        }
    }
    console.log("bonne place : ", noir,"mauvaise place", blanc);
}

function game() {
    createSolution();
    noir_blanc(selection, solution);

    for (var i = 0; i < ping.length; i++){
        ping[i].addEventListener('click', );
    }
}

game();