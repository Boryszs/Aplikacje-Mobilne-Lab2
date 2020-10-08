const _=require('lodash');

function avg(){
    console.log("srednia:",_.mean(arguments));
}

function min(){
    console.log("srednia:",_.min(arguments));
}

function max(){
    console.log("srednia:",_.max(arguments));
}

avg(4,4,4);
avg(5,10,5);
avg(2,3,4,5,6);

min(1,2,3,0,4,5);
max(1,2,3,10,4,5);
