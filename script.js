document.getElementById("submit").onclick = function() { // Velger hva som skal skje ved trykk på knappen
    let melding = document.getElementById("bet").value; //Henter ut verdien av tekstfeltet

    document.getElementById("output").innerHTML=melding; //Printer ut melding til paragraf med id "output"

}



// input from the user
const min = 1;
let max = 1000;

document.getElementById("roll").onclick = function() {
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random value between ${min} and ${max} is ${a}`);
    
    max = a;


    document.getElementById("deathRollResultat").innerHTML=a; //Printer ut melding til paragraf med id "deathRollResultat"
    
    if (a == 1) {
        document.getElementById("spiller").innerHTML="You lost";  
    } else {
    } // Console will output 'condition is true'
}



