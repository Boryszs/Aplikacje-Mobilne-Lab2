const _=require('lodash');

function avg(){
    console.log("srednia:",_.mean(arguments));
}

avg(4,4,4);
avg(5,10,5);
avg(2,3,4,5,6);