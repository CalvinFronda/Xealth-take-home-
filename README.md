# Xealth-take-home
Xealth take home test - JR 

## Developer 
* Calvin Fronda 

## Question 

 * You are given a list of words sorted in alphabetical order. 
 * The only issue is that this alphabet isn’t English. 
 * Can you determine the ordering of the alphabet?
    
Assume that the list of words will have 
enough information to derive the complete order of the alphabet.

Test cases:

[‘bca’, ‘aaa’, ‘acb’] => [‘b’, ‘a’, ‘c’] 

['acbc', 'bcc', 'bcb', 'ba'] => ['c', 'a', 'b']

['aba', 'bac', 'baa', 'bbcb', 'bbbc'] => ['c', 'a', 'b']


## Running the tests

The tests are written with Jest and are located in `./script.test.js`. To run the test, you must have nodeJS installed on your computer. 
1. Create a clone of the repository on your local computer
2. Run `npm install` in the terminal to install jest dependencies 
2. Run `npm test` in the terminal to run all test cases 



