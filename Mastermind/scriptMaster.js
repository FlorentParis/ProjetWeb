let row = document.getElementsByClassName("row");
let propo = document.getElementsByClassName("propo");
let correc = document.getElementsByClassName("correc");
let ping = document.getElementsByClassName("ping");
let win = false;
const solution = [];
let choix = ["rouge", "jaune", "vert", "bleu", "orange", "violet"];
let test = 0;

/* Bouche Principal */
function main(){
    while(win != true){
        if(test != 13){
            for(let i = 0; i < row.length; i++){
                essai();
            }
        }else{
            console.log("Vous avez épuisé tout vos tests, voici la solution", solution);
        }
    }
}

/* Fonction qui se lance a chaque essai */
function essai() {
    for(let i = 0; i < propo.length; i++){
        if(btnRed.onclick){
            console.log(propo[i], red)
            colorisation(propo[i], red);
        }
        ping.addEventListener('click', () => {
            colorisation(propo[i]);
        });
    }
    test++;
}

/* Fonction Creation de la solution / Code à trouver */
function createSolution() {
    for(let i = 0; i < 4; i++){
        const random = Math.floor(Math.random() * choix.length);
        solution.push(choix[random]);
    }
    console.log(solution);
}

/* Fonction qui colorise la case sur laquel on se trouve */
function colorisation(uneCase, color) {
    uneCase.classList.add(color);
}

function restart() {
    solution = [];
    createSolution();
    test = 0;
    
}

main();