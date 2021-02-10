var ligne0 = [0,0,0,0,0,0,0];
    ligne1 = [0,0,0,0,0,0,0];
    ligne2 = [0,0,0,0,0,0,0];
    ligne3 = [0,0,0,0,0,0,0];
    ligne4 = [0,0,0,0,0,0,0];
    ligne5 = [0,0,0,0,0,0,0];
var table = [ligne0,ligne1,ligne2,ligne3,ligne4,ligne5];
/* table est une liste bidimensionnelle qui sera modifié lors du jeu par des 1 et des 2 ( joueur 1 et joueur 2)
C est cette liste bidimensionnelle qui permet de pouvoir determiner l allignement de 4 pions */

var X = 0 ;
var Y = 0 ;
var CaseResultat = 0 ;
var compteurcolonne1 = 0 ;
var compteurcolonne2 = 0 ;
var compteurcolonne3 = 0 ;
var compteurcolonne4 = 0 ;
var compteurcolonne5 = 0 ;
var compteurcolonne6 = 0 ; 
var compteurcolonne7 = 0 ;
var compteurjoueur = 1 ;

/* Fonction colonne1 a colonne7 : 
Elle permette d ajouter de la couleurs dans chaque td du tableau qui on chacun un id determiné. 
En fonction du compteurcolonne leur correspondant, a chaque fois on prendra le td du tableau representant la ligne du dessus ( compteurcolonne1 = 3 => td colonne1 ligne4)
Ensuite on determine la couleur du joueur1 ou 2 grace au compteurjoueur qui est modifie a chaque fois que le joueur1 et le joueur2 joue pour avoir un tour chacun
C est aussi dans cette fonction qu on va modifier table par des 1 et des 2. */

function colonne1 () {
    if (compteurcolonne1 == 0){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n10" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[5][0] = 1 ;
            X = 5
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n10" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[5][0] = 2 ;
            X = 5
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne1 == 1){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n20" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[4][0] = 1 ;
            X = 4
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n20" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[4][0] = 2 ;
            X = 4
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne1 == 2){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n30" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[3][0] = 1 ;
            X = 3
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n30" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            t[3][0] = 2 ;
            X = 3
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne1 == 3){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n40" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[2][0] = 1 ;
            X = 2
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n40" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[2][0] = 2 ;
            X = 2
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne1 == 4){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n50" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[1][0] = 1 ;
            X = 1
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n50" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[1][0] = 2 ;
            X = 1
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne1 == 5){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n60" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[0][0] = 1 ;
            X = 0
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n60" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne1 = compteurcolonne1 + 1 ;
            table[0][0] = 2 ;
            X = 0
            Y = 0
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } 
    } else {
        alert("La colonne 1 est deja pleine")
    }
}
function colonne2 () {
    if (compteurcolonne2 == 0){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n11" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[5][1] = 1 ;
            X = 5
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n11" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[5][1] = 2 ;
            X = 5
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne2 == 1){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n21" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[4][1] = 1 ;
            X = 4
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n21" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[4][1] = 2 ;
            X = 4
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne2 == 2){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n31" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[3][1] = 1 ;
            X = 3
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n31" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[3][1] = 2 ;
            X = 3
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne2 == 3){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n41" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[2][1] = 1 ;
            X = 2
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n41" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[2][1] = 2 ;
            X = 2
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne2 == 4){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n51" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[1][1] = 1 ;
            X = 1
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n51" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[1][1] = 2 ;
            X = 1
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne2 == 5){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n61" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[0][1] = 1 ;
            X = 0
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n61" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne2 = compteurcolonne2 + 1 ;
            table[0][1] = 2 ;
            X = 0
            Y = 1
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } 
    } else {
        alert("La colonne 2 est deja pleine")
    }
}
function colonne3 () {
    if (compteurcolonne3 == 0){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n12" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[5][2] = 1 ;
            X = 5
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n12" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[5][2] = 2 ;
            X = 5
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne3 == 1){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n22" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[4][2] = 1 ;
            X = 4
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n22" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[4][2] = 2 ;
            X = 4
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne3 == 2){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n32" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[3][2] = 1 ;
            X = 3
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n32" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[3][2] = 2 ;
            X = 3
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne3 == 3){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n42" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[2][2] = 1 ;
            X = 2
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n42" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[2][2] = 2 ;
            X = 2
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne3 == 4){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n52" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[1][2] = 1 ;
            X = 1
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n52" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[1][2] = 2 ;
            X = 1
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne3 == 5){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n62" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[0][2] = 1 ;
            X = 0
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n62" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne3 = compteurcolonne3 + 1 ;
            table[0][2] = 2 ;
            X = 0
            Y = 2
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } 
    } else {
        alert("La colonne 3 est deja pleine")
    }
}
function colonne4 () {
    if (compteurcolonne4 == 0){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n13" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[5][3] = 1 ;
            X = 5
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n13" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[5][3] = 2 ;
            X = 5
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne4 == 1){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n23" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[4][3] = 1 ;
            X = 4
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n23" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[4][3] = 2 ;
            X = 4
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne4 == 2){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n33" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[3][3] = 1 ;
            X = 3
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n33" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[3][3] = 2 ;
            X = 3
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne4 == 3){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n43" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[2][3] = 1 ;
            X = 2
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n43" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[2][3] = 2 ;
            X = 2
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne4 == 4){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n53" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[1][3] = 1 ;
            X = 1
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n53" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[1][3] = 2 ;
            X = 1
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne4 == 5){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n63" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[0][3] = 1 ;
            X = 0
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n63" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne4 = compteurcolonne4 + 1 ;
            table[0][3] = 2 ;
            X = 0
            Y = 3
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } 
    } else {
        alert("La colonne 4 est deja pleine")
    }
}
function colonne5 () {
    if (compteurcolonne5 == 0){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n14" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[5][4] = 1 ;
            X = 5
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n14" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[5][4] = 2 ;
            X = 5
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne5 == 1){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n24" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[4][4] = 1 ;
            X = 4
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n24" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[4][4] = 2 ;
            X = 4
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne5 == 2){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n34" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[3][4] = 1 ;
            X = 3
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n34" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[3][4] = 2 ;
            X = 3
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne5 == 3){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n44" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[2][4] = 1 ;
            X = 2
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n44" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[2][4] = 2 ;
            X = 2
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne5 == 4){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n54" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[1][4] = 1 ;
            X = 1
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n54" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[1][4] = 2 ;
            X = 1
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne5 == 5){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n64" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[0][4] = 1 ;
            X = 0
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n64" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne5 = compteurcolonne5 + 1 ;
            table[0][4] = 2 ;
            X = 0
            Y = 4
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } 
    } else {
        alert("La colonne 5 est deja pleine")
    }
}
function colonne6 () {
    if (compteurcolonne6 == 0){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n15" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[5][5] = 1 ;
            X = 5
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n15" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[5][5] = 2 ;
            X = 5
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne6 == 1){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n25" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[4][5] = 1 ;
            X = 4
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n25" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[4][5] = 2 ;
            X = 4
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne6 == 2){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n35" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[3][5] = 1 ;
            X = 3
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n35" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[3][5] = 2 ;
            X = 3
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne6 == 3){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n45" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[2][5] = 1 ;
            X = 2
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n45" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[2][5] = 2 ;
            X = 2
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne6 == 4){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n55" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[1][5] = 1 ;
            X = 1
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n55" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[1][5] = 2 ;
            X = 1
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        }
    }
    else if (compteurcolonne6 == 5){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n65" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[0][5] = 1 ;
            X = 0
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } else {
            let monElement = document.querySelector( "#n65" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne6 = compteurcolonne6 + 1 ;
            table[0][5] = 2 ;
            X = 0
            Y = 5
            Refresh = Win (table, X, Y)
            Restart(Refresh)
        } 
    } else {
        alert("La colonne 6 est deja pleine")
    }
}
function colonne7 () {
    if (compteurcolonne7 == 0){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n16" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[5][6] = 1 
            X = 5
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        } else {
            let monElement = document.querySelector( "#n16" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[5][6] = 2 ;
            X = 5
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        }
    }
    else if (compteurcolonne7 == 1){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n26" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[4][6] = 1 ;
            X = 4
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        } else {
            let monElement = document.querySelector( "#n26" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[4][6] = 2 ;
            X = 4
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        }
    }
    else if (compteurcolonne7 == 2){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n36" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[3][6] = 1 ;
            X = 3
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        } else {
            let monElement = document.querySelector( "#n36" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[3][6] = 2 ;
            X = 3
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        }
    }
    else if (compteurcolonne7 == 3){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n46" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[2][6] = 1 ;
            X = 2
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        } else {
            let monElement = document.querySelector( "#n46" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[2][6] = 2 ;
            X = 2
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        }
    }
    else if (compteurcolonne7 == 4){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n56" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[1][6] = 1 ;
            X = 1
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        } else {
            let monElement = document.querySelector( "#n56" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[1][6] = 2 ;
            X = 1
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        }
    }
    else if (compteurcolonne7 == 5){
        if (compteurjoueur == 1) {
            let monElement = document.querySelector( "#n66" );
            monElement.classList.add( "joueur1" );
            compteurjoueur = compteurjoueur + 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[0][6] = 1 ;
            X = 0
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        } else {
            let monElement = document.querySelector( "#n66" );
            monElement.classList.add( "joueur2" )
            compteurjoueur = compteurjoueur - 1 ;
            compteurcolonne7 = compteurcolonne7 + 1 ;
            table[0][6] = 2 ;
            X = 0
            Y = 6
            Refresh = Win (table, X, Y)
            Restart(Refresh);
        } 
    } else {
        alert("La colonne 7 est deja pleine")
    }
}

/* Les fonctions win+direction permettent de verifier a chaque tour si le joueur a bien aligné 4 pions ou pas , tout est stocké dans une seule fonction la fonction Win
On utilise a chaque fois le X et Y correspondant a la position du dernier pion jouer et on verifie  */
function WinHorizontal (CaseResultat, X, Y) {   
    if (Y+3 < 7){
        if (CaseResultat == table[X][Y+1] && CaseResultat == table[X][Y+2] && CaseResultat == table[X][Y+3]){
                return true
        }   
    }
    if (Y+2 < 7 && Y-1 > -1){
        if (CaseResultat == table[X][Y-1] && CaseResultat == table[X][Y+1] && CaseResultat == table[X][Y+2]){
                return true
        }   
    }
    if (Y+1 < 7 && Y-2 > -1){
        if (CaseResultat == table[X][Y-2] && CaseResultat == table[X][Y-1] && CaseResultat == table[X][Y+1]){
                return true
        }   
    }
    if (Y-3 > -1){
        if (CaseResultat == table[X][Y-1] && CaseResultat == table[X][Y-2] && CaseResultat == table[X][Y-3]){
            return true
        }   
    }
}

function WinVerticale (CaseResultat, X, Y) {
    if (X-3 > -1){
        if (CaseResultat == table[X-1][Y] && CaseResultat == table[X-2][Y] && CaseResultat == table[X-3][Y]){
            return true
        }   
    }
    if (X-2 > -1 && X+1 < 6){
        if (CaseResultat == table[X-2][Y] && CaseResultat == table[X-1][Y] && CaseResultat == table[X+1][Y]){
            return true
        }   
    }
    if (X-1 > -1 && X+2 < 6){
        if (CaseResultat == table[X-1][Y] && CaseResultat == table[X+1][Y] && CaseResultat == table[X+2][Y]){
            return true
        }   
    }
    if (X+3 < 6){
        if (CaseResultat == table[X+1][Y] && CaseResultat == table[X+2][Y] && CaseResultat == table[X+3][Y]){
            return true
        }   
    }
}

function WinDiagoHautGaucheBasDroite (CaseResultat, X, Y) {
    if (Y-3 > -1 && X-3>-1 ){
        if (CaseResultat == table[X-1][Y-1] && CaseResultat == table[X-2][Y-2] && CaseResultat == table[X-3][Y-3]){
            return true
        }   
    }
    if (Y-2 > -1 && Y+1 < 7 && X-2 > -1 && X+1 < 6){
        if (CaseResultat == table[X+1][Y+1] && CaseResultat == table[X-1][Y-1] && CaseResultat == table[X-2][Y-2]){
            return true
        }   
    }
    if (Y-1 > -1 && Y+2 < 7 && X-1 > -1 && X+2 < 6){
        if (CaseResultat == table[X+1][Y+1] && CaseResultat == table[X+2][Y+2] && CaseResultat == table[X-1][Y-1]){
            return true
        }   
    }
    if (Y+3 < 7 && X+3 < 6 ){
        if (CaseResultat == table[X+1][Y+1] && CaseResultat == table[X+2][Y+2] && CaseResultat == table[X+3][Y+3]){
            if (CaseResultat == 1) {
                return true
            }   
        }
    }
}


function WinDiagoBasGaucheHautDroite (CaseResultat, X, Y) {
    if (Y+3 < 7 && X-3 > -1 ){
        if (CaseResultat == table[X-1][Y+1] && CaseResultat == table[X-2][Y+2] && CaseResultat == table[X-3][Y+3]){
            return true
        }   
    }
    if (Y+2 < 7 && Y-1 > -1 && X-2 > -1 && X+1 < 6 ){
        if (CaseResultat == table[X+1][Y-1] && CaseResultat == table[X-1][Y+1] && CaseResultat == table[X-2][Y+2]){
            return true
        }   
    }
    if (Y+1 < 7 && Y-2 > -1 && X-1 > -1 && X+2 < 6){
        if (CaseResultat == table[X+1][Y-1] && CaseResultat == table[X+2][Y-2] && CaseResultat == table[X-1][Y+1]){
            return true
        }   
    }
    if (Y-3 > -1 && X+3< 6 ){
        if (CaseResultat == table[X+1][Y-1] && CaseResultat == table[X+2][Y-2] && CaseResultat == table[X+3][Y-3]){
            return true
        }   
    }
}


function Win (table, X, Y) {
    var CaseResultat = table[X][Y]
    var a = WinHorizontal (CaseResultat, X, Y)
        b = WinVerticale(CaseResultat, X, Y)
        c = WinDiagoHautGaucheBasDroite (CaseResultat, X, Y)
        d = WinDiagoBasGaucheHautDroite (CaseResultat, X, Y)
        if (a == true || b == true || c == true || d == true) {
            if (CaseResultat == 1) {
                setTimeout(function() {
                    alert("Le joueur 1 a gagné");
                  }, 10);
            } else{
                setTimeout(function() {
                    alert("Le joueur 2 a gagné");
                  }, 10);
            }
            return true 
        }
}

/* La fonction restart recharge la page, mais j aurais aimé reinitialiser les cases du tableau, toutes les constantes et table, pour recommencer sans devoir recharger la page. 
Malheureusement j ai un bug mais je n arrive pas a regler cela */
function Restart(Refresh){
    if (Refresh == true){
        setTimeout(function() {
            let rejouer = prompt( "Voulez-vous rejouer ? Y/N")
          }, 20);
        if (rejouer == "Y"){
            window.location.reload();
        /* let rejouer = prompt( "Voulez-vous rejouer ? Y/N")
        if (rejouer == "Y"){
            var table = document.getElementById("ElTablo");
            var cells = table.getElementsByTagName("td");
            cells.classList.remove( "joueur1" ); Probleme au niveau du removeeeeeeeeeeeeeeeeeeeeeeeeeeee
            cells.classList.remove( "joueur2" );
            ligne0 = [0,0,0,0,0,0,0];
            ligne1 = [0,0,0,0,0,0,0];
            ligne2 = [0,0,0,0,0,0,0];
            ligne3 = [0,0,0,0,0,0,0];
            ligne4 = [0,0,0,0,0,0,0];
            ligne5 = [0,0,0,0,0,0,0];
            compteurcolonne1 = 0 ;
            compteurcolonne2 = 0 ;
            compteurcolonne3 = 0 ;
            compteurcolonne4 = 0 ;
            compteurcolonne5 = 0 ;
            compteurcolonne6 = 0 ; 
            compteurcolonne7 = 0 ;
            compteurjoueur = 1 ; */
    } else {
            return false
        }
    }
}
