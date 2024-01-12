/**
 LeetCode link: https://leetcode.com/problems/find-words-containing-character/submissions/
 
 You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

 
Example 1:

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
Example 2:

Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
Example 3:

Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
Explanation: "z" does not occur in any of the words. Hence, we return an empty array.
 

Constraints:

1 <= words.length <= 50
1 <= words[i].length <= 50
x is a lowercase English letter.
words[i] consists only of lowercase English letters.
 */

function findCharacters(words,x){

     // create the array to be returned
    let output = [];

     //iterate through the incoming array of 'words'
    for(let i = 0; i < words.length; i++){

        //capture the word from the array for easier reference
        const word = words[i];

        //once you access a word from the 'words' array
        //iterate through the word itself to get access to each character
        for(let j = 0; j < word.length; j++ ){ 

            //capture the character from the word for easier reference
            let char = word[j];
        
            // compare 'char' it to 'x' and see if they are equal
            if(char === x){
            
                //if the characters are equal
                //add the current index of the 'words' array to the output array
                 output.push(i)

                 //in case of a word having multiples of a letter in a word
                    //break out of this for loop to continue onto the next word in the 'words' array
                 break;
                
            }
        } // end of inner loop.
       
    } //end of outer loop
    return output;
}


console.log(findCharacters(["abc","bcd","aaa","cbc"], "a"))

// to run javascript you must first be in the correct folder
 //then you will type  " node 'nameOfFile.js' " in the console
 // node FindCharacters.js