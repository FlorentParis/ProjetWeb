var playerHand = 0;
var dealerHand = 0;

var cards = {"AH":"le chiffre chelou", "2H":2, "3H":3, "4H":4, "5H":5, "6H":6, "7H":7, "8H":8, "9H":9, "10H":10, "JH":10, "QH":10, "KH":10, "AS":"le chiffre chelou", "2S":2, "3S":3, "4S":4, "5S":5, "6S":6, "7S":7, "8S":8, "9S":9, "10S":10, "JS":10, "QS":10, "KS":10, "AC":"le chiffre chelou", "2C":2, "3C":3, "4C":4, "5C":5, "6C":6, "7C":7, "8C":8, "9C":9, "10C":10, "JC":10, "QC":10, "KC":10, "AD":"le chiffre chelou", "2D":2, "3D":3, "4D":4, "5D":5, "6D":6, "7D":7, "8D":8, "9D":9, "10D":10, "JD":10, "QD":10, "KD":10};

var pioche = document.getElementById("piocher")
var garder = document.getElementById("garder")


function decks(choix) {
    var randomCards = choix[Math.floor(Math.random()*choix.length)]; 

    console.log(choix);

    return randomCards;
}


function jeu() {

    for(i=0;i<2;i++) {
        playerHand += decks(cards);
        if(playerHand>21) {
            playerHand = 12;
        }
        else if(playerHand==21) {
            win();
        }
    }
    dealerHand += decks(cards);


    var visible = dealerHand;
    dealerHand += decks(cards);

    console.log("Coucou");
    console.log(playerHand);
    console.log(visible);



    pioche.onclick = fnPioche();
    garder.onclick = fnGarder();


}

jeu()

function win() {

}