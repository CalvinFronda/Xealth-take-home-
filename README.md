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

1. Run `npm install` to intall jest dependencys 
2. Run `npm test` to run all test cases 



