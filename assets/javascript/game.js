window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z']
}


var categories;         // Array of topics
var chosenCategory;     // Selected catagory
var getHint;          // Word getHint
var word;              // Selected word
var guess;             // Guess
var guesses = [];      // Stored guesses
var lives;             // Lives
var counter;           // Count correct geusses
var space;              // Number of spaces in word 

var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("catagory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");


play = function () {
    categories = [
        ["luffy", "garp", "tony tony chopper", "nico robin", "whitebeard", "franky", "sengoku", "charolette linlin"],
        ["laughtale", "elbaf", "totland", "skypiea", "shabondy archapelago"],
        ["clima-tact", "kabuto", "enma", "wazamono", "devil fruit"]
    ]
};
