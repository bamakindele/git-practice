"use strict";


// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
function third(x){

    if((typeof x) == "string"){
        return x.substring(2, 3);
    }
    else{
        return x[2];
    }
}

// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
function forth(x){

    if((typeof x) == "string"){
        return x.substring(3, 4);
    }
    else{
        return x[3];
    }
}

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
function last(x){

    if((typeof x) == "string"){
        return x.substring(x.length - 1);
    }
    else{
        return x[x.length - 1];
    }
}









