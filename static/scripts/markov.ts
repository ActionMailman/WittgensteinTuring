//./static/scripts/investigations.json

function randomChoice(arr: Array<any>) {
    return arr[Math.floor(arr.length * Math.random())];
}

let div: any = document.getElementById("textGen");

function clearScreen() {
    div.innerHTML = "";
}

let i: number = 0; 

function generateText(text: string) {
    
    if (i < text.length) {
        div.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => generateText(text), 25);
    }
    else {
        i = 0;
    }
}

async function markovGeneration() {
    let numbers: number[] = Array.from(Array(500).keys());
    let starting_word: string = randomChoice(numbers) + "."
    const res: Response = await fetch('./static/scripts/investigations.json')
  

    let markov_data: {[key: string]: Array<string>} = await res.json();
    let word: string = randomChoice(markov_data[starting_word]);

    while (!(word.includes('.'))) {
                try {
                    word = randomChoice(markov_data[word]);
                }
                catch(err) {
                    break;
                }
                starting_word += " " + word;
            }
    
    generateText(starting_word);
    
  }