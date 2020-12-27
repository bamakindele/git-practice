"use strict";

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