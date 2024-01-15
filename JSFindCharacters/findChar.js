"use strict"


let words = ["leet", "code"];
let x = 'e';
// expected output: which is pos of the array [0, 1]; 
// [0,1] because e is present in first and second words. 

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
function findWordsContaining(words, x) {
    // defining array of numbers.
    let number = [];

    // need to search through array of words to compare each char in each word with char x.
    for (let i = 0; i < words.length; i++) {
        // grab a word.
        let word = words[i];
        // console.log(word);

        // grab a char.
        for (let j = 0; j < word.length; j++) {
            let letter = word[j];
            // console.log(letter);

            // after we grabbed individual letter from each word we compare it with our x.
            if (letter === x) {
                number.push(i);
                // break from inner loop if comparison found t oavoid repetition.
                break;
            }
        } // end of inner for loop.
    } //end of outer for loop.
    return number;


};

// calling function
console.log(findWordsContaining(words, x));

