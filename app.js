const _=require('lodash');

function avg(){
    console.log("srednia:",_.mean(arguments));
}

avg(4,4,4);