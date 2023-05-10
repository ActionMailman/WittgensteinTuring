"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
let div = document.getElementById("textGen");
function clearScreen() {
    div.innerHTML = "";
}
let i = 0;
function generateText(text) {
    if (i < text.length) {
        div.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => generateText(text), 25);
    }
    else {
        i = 0;
    }
}
function markovGeneration() {
    return __awaiter(this, void 0, void 0, function* () {
        let numbers = Array.from(Array(500).keys());
        let starting_word = randomChoice(numbers) + ".";
        const res = yield fetch('./static/scripts/investigations.json');
        let markov_data = yield res.json();
        let word = randomChoice(markov_data[starting_word]);
        while (!(word.includes('.'))) {
            try {
                word = randomChoice(markov_data[word]);
            }
            catch (err) {
                break;
            }
            starting_word += " " + word;
        }
        generateText(starting_word);
    });
}
//# sourceMappingURL=markov.js.map