/**
 * You are given a list of words sorted in alphabetical order. 
 * The only issue is that this alphabet isn’t English. 
 * Can you determine the ordering of the alphabet?
    
Assume that the list of words will have 
enough information to derive the complete order of the alphabet.

Test cases: 
[‘bca’, ‘aaa’, ‘acb’] => [‘b’, ‘a’, ‘c’]
['acbc', 'bcc', 'bcb', 'ba'] => ['c', 'a', 'b']
['aba', 'bac', 'baa', 'bbcb', 'bbbc'] => ['c', 'a', 'b']

 */

/**
 * @name determineAlphabet
 * @param {Array} words - list of words sorted alphabetically
 * @returns {Array} result - order of the alphabet
 */
module.exports = determineAlphabet = (words) => {
    let adjacencyObject = {};

    for (let word of words) {
        for (let char of word) {
            if (!adjacencyObject[char]) {
                adjacencyObject[char] = new Set();
            }
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];

        let minLen = Math.min(word1.length, word2.length);

        for (let j = 0; j < minLen; j++) {
            if (word1[j] !== word2[j]) {
                adjacencyObject[word1[j]].add(word2[j]);
                break;
            }
        }
    }

    let visit = {};

    let result = [];

    const dfs = (char) => {
        if (visit.hasOwnProperty(char)) {
            return visit[char];
        }

        visit[char] = true;

        for (let neighbor of adjacencyObject[char]) {
            if (dfs(neighbor)) {
                return true;
            }
        }

        visit[char] = false;

        result.push(char);
    };

    for (let char in adjacencyObject) {
        dfs(char);
    }

    result.reverse();
    return result;
};
