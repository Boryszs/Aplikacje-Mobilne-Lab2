const _=require('lodash');
const { sum, find } = require('lodash');

function avg(){
    console.log("srednia:",_.mean(arguments));
}

function min(){
    console.log("min:",_.min(arguments));
}

function max(){
    console.log("max:",_.max(arguments));
}



function userInfo(User){
        var suma=0;
        var count=0;
    
        User.allGrades.forEach(element => {
            count=count+element.weight;
            suma=suma+_.reduce(element.grades,function(sum,m){
               return sum+m;
            },0)
        });
        suma=suma/count;
        console.log("Imie:",User.name,"Nazwisko:",User.surname,"Srednia wazona:",suma);
}


function search(User){
    _.find(User.allGrades,function(U){if(U.weight==1){console.log("Przedmiot z waga 1 to:",U.subjectName);}});
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

function chaeckMail(Mail){
    arr=_.toArray(_.filter(Mail,function(mail){ return isValidEmail(mail) }));
    arr=_.sortBy(arr);
    arr.forEach(element => {
        console.log(element);
    });
}

const user={
    name:'Imie',
    surname:'Nazwisko',
    allGrades:[
        {
            subjectName:'Name1',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName:'Name2',
            grades: [3,3.5,2],
            weight: 1
        },
        {
            subjectName:'Name3',
            grades: [4,3,3.5],
            weight: 5
        },
    
    ]
};

const collection=[
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa','bbb',5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
]

avg(4,4,4);
avg(5,10,5);
avg(2,3,4,5,6);

min(1,2,3,0,4,5);
max(1,2,3,10,4,5);

userInfo(user);
search(user);
chaeckMail(collection);
