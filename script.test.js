const determineAlphabet = require('./script');

const cases = [
    {
        input: ['bac', 'aaa', 'acb'],
        expected: ['b', 'a', 'c'],
    },
    {
        input: ['acbc', 'bcc', 'bcb', 'ba'],
        expected: ['c', 'a', 'b'],
    },
    {
        input: ['aba', 'bac', 'baa', 'bbcb', 'bbbc'],
        expected: ['c', 'a', 'b'],
    },
    {
        input: ['ddc', 'dca', 'abb', 'acd', 'bca'],
        expected: ['d', 'a', 'b', 'c'],
    },
    {
        input : ['wia', 'wvx', 'iwx', 'ixa', 'awv', 'add', 'adv', 'axv', 'diw'],
        expected : ['w', 'i', 'a', 'd', 'x', 'v']
    },

];

describe('Running test cases', () => {
    for(let i = 0; i < cases.length; i++){
        it(`Takes array [${cases[i].input}] expects [${cases[i].expected}]`, () => {
            const result = determineAlphabet(cases[i].input)
            expect(result).toStrictEqual(cases[i].expected)
        })
    }
});
