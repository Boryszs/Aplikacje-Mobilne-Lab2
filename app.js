const _=require('lodash');

function avg(){
    console.log("srednia:",_.mean(arguments));
}

function min(){
    console.log("min:",_.min(arguments));
}

function max(){
    console.log("max:",_.max(arguments));
}
avg(4,4,4);
avg(5,10,5);
avg(2,3,4,5,6);

min(1,3,4,5,0,7,8,9);
max(1,3,4,5,0,7,8,20);