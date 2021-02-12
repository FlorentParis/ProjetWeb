let button = document.getElementById("Resultat");
let compteur1 = document.getElementById('compteur1').innerHTML = 0;
let compteur2 = document.getElementById('compteur2').innerHTML = 0;
let compteur3 = document.getElementById('compteur3').innerHTML = 0;
let compteur4 = document.getElementById('compteur4').innerHTML = 0;

function Reset() {
    compteur1 = 0;
    compteur2 = 0;
    compteur3 = 0;
    compteur4 = 0;
    document.getElementById("compteur1").innerHTML = compteur1;
    document.getElementById("compteur2").innerHTML = compteur2;
    document.getElementById("compteur3").innerHTML = compteur3;
    document.getElementById("compteur4").innerHTML = compteur4;
}

function comp1(){
    if(compteur1 < 9){
        document.getElementById("compteur1").classList.add("message_animated");
        setTimeout(function(){
            document.getElementById("compteur1").classList.add("message_animatedEnBas");
            document.getElementById("compteur1").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur1++;
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur1").classList.remove("message_animatedEnBas");
            document.getElementById("compteur1").classList.add("message");
        }, 1000)
    }else{
        document.getElementById("compteur1").classList.add("message_animated");
        comp2();
        setTimeout(function(){
            document.getElementById("compteur1").classList.add("message_animatedEnBas");
            document.getElementById("compteur1").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur1 = 0;
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur1").classList.remove("message_animatedEnBas");
            document.getElementById("compteur1").classList.add("message");
        }, 1000)
    }
}

function comp2() {
    if(compteur2 < 9){
        document.getElementById("compteur2").classList.add("message_animated");
        setTimeout(function(){
            document.getElementById("compteur2").classList.add("message_animatedEnBas");
            document.getElementById("compteur2").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur2++
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur2").innerHTML = compteur2;
            document.getElementById("compteur2").classList.remove("message_animatedEnBas");
            document.getElementById("compteur2").classList.add("message");
        }, 1000)
    }else{
        document.getElementById("compteur2").classList.add("message_animated");
        comp3;
        setTimeout(function(){
            document.getElementById("compteur2").classList.add("message_animatedEnBas");
            document.getElementById("compteur2").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur2 = 0;
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur2").innerHTML = compteur2;
            document.getElementById("compteur2").classList.remove("message_animatedEnBas");
            document.getElementById("compteur2").classList.add("message");
        }, 1000)
    }
}

function comp3() {
    if(compteur3 < 9){
        document.getElementById("compteur3").classList.add("message_animated");
        setTimeout(function(){
            document.getElementById("compteur3").classList.add("message_animatedEnBas");
            document.getElementById("compteur3").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur3++
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur2").innerHTML = compteur2;
            document.getElementById("compteur3").innerHTML = compteur3;
            document.getElementById("compteur3").classList.remove("message_animatedEnBas");
            document.getElementById("compteur3").classList.add("message");
        }, 1000)
    }else{
        document.getElementById("compteur3").classList.add("message_animated");
        setTimeout(function(){
            document.getElementById("compteur3").classList.add("message_animatedEnBas");
            document.getElementById("compteur3").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur3 = 0;
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur2").innerHTML = compteur2;
            document.getElementById("compteur3").innerHTML = compteur3;
            document.getElementById("compteur3").classList.remove("message_animatedEnBas");
            document.getElementById("compteur3").classList.add("message");
        }, 1000)
    }
    
}

function comp4() {
    if(compteur4 < 9){
        document.getElementById("compteur4").classList.add("message_animated");
        setTimeout(function(){
            document.getElementById("compteur4").classList.add("message_animatedEnBas");
            document.getElementById("compteur4").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur4++
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur2").innerHTML = compteur2;
            document.getElementById("compteur3").innerHTML = compteur3;
            document.getElementById("compteur3").innerHTML = compteur4;
            document.getElementById("compteur4").classList.remove("message_animatedEnBas");
            document.getElementById("compteur4").classList.add("message");
        }, 1000)
    }else{
        document.getElementById("compteur4").classList.add("message_animated");
        setTimeout(function(){
            document.getElementById("compteur4").classList.add("message_animatedEnBas");
            document.getElementById("compteur4").classList.remove("message_animated");
        }, 500)
        setTimeout(function(){
            compteur4 = 0
            document.getElementById("compteur1").innerHTML = compteur1;
            document.getElementById("compteur2").innerHTML = compteur2;
            document.getElementById("compteur3").innerHTML = compteur3;
            document.getElementById("compteur3").innerHTML = compteur4;
            document.getElementById("compteur4").classList.remove("message_animatedEnBas");
            document.getElementById("compteur4").classList.add("message");
        }, 1000)
        alert("WTF tu as prit combien de temps pour arriver là ?")
    }
}