let delayInMilliseconds = 2000; //1 second
let bar = document.getElementById("bar");
let cursor = 10;
let loader = document.getElementById("loader");
let test = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(){
  while(test<11){
    var time = Math.floor(Math.random(2) * Math.floor(5));
    cursor = 10*test;
    console.log(cursor); 
    sleep(100);
    bar.innerHTML = cursor + "%";
    test++;
    await sleep(100 * time);
  }
  await sleep(1000);
  loader.style.display = "none";
}

demo();

function ajout(game) {
  if(game == "justeprix"){
    document.getElementById("link1").href="JustePrix/justePrix.html";
  }else if(game == "puissance4"){
    document.getElementById("link2").href="Puissance4/firstPuissance4.html";
  }else{
    alert("bug");
  }
}