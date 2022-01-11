let redScore = 0;
let greenScore = 0;
let blueScore = 0;
let blackScore = 0;
let yellowScore = 0;

let ownerDictionary = {
    track1: "none",
    track2: "none",
    track3: "none"
};

let valueDictionary = {
    track1: 4,
    track2: 7,
    track3: 4
};
showScores();

function onSelect(track){
    let value = document.getElementById(track).value;
    setSelectorBackgroundColor(document.getElementById(track),value)
    ownerDictionary[track] = value;
    calculateScores();
    showScores();
}


function calculateScores(){
    resetScores();
    let keys = Object.keys(ownerDictionary);
    keys.forEach(key => {
        let owner = ownerDictionary[key];
        let value = valueDictionary[key];
        
        editScore(owner,value)
    });
}

function editScore(color, value){
    switch(color){
        case "red":
            redScore += value;
            break;
        case "green":
            greenScore += value;
            break;
        case "blue":
            blueScore += value;
            break;
        case "black":
            blackScore += value;
            break;
        case "yellow":
            yellowScore += value;
            break;
    }
}

function resetScores(){
    redScore = 0;
    greenScore = 0;
    blueScore = 0;
    blackScore = 0;
    yellowScore = 0;
}

function showScores(){
    let newElement = document.getElementById("scores");
    newElement.innerHTML = `|| red: ${redScore} || `;     
    newElement.innerHTML += `green: ${greenScore} || `;     
    newElement.innerHTML += `blue: ${blueScore} || `;     
    newElement.innerHTML += `black: ${blackScore} || `;     
    newElement.innerHTML += `yellow: ${yellowScore} ||`;     
    document.body.appendChild(newElement);    
}

function setSelectorBackgroundColor(element, color){
    switch(color){
        case "red":
            element.style.backgroundColor = "#e72d28";
            break;
        case "green":
            element.style.backgroundColor = "#17b026";
            break;
        case "blue":
            element.style.backgroundColor = "#18b8d8";
            break;
        case "black":
            element.style.backgroundColor = "#000000";
            break;
        case "yellow":
            element.style.backgroundColor = "#e6e615";
            break;
        case "none":
            element.style.backgroundColor = "";
            break;
    }
}
