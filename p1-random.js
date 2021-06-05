/*
    CIT 281 Project 1
    Name: Brad Walther
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" ,"l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
function randomAlphabet() {
    let length = getRandomInteger(5,25), result = "";
    for(i=0; i < length; i++) {
        result = result + alphabet[getRandomInteger(0, 26)];
    } 
    return result; 
}
console.log(randomAlphabet());