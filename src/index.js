const express=require('express')
const result=require('./dummy');
const currentDate =require('./util/helper');
const treamUpper =require('./validater/formatter');
const Jaunary =require('./finalQ/last')

const _=require("lodash")
const app =express();
app.get('/', (req,res)=>{
    res.send('My name is Prahlad Kumar and i am create a my first Api');
})

app.listen(6001 ,()=>{
    console.log('listening on port 6001')
})

console.log(result.personOne());
console.log(currentDate.finalDate);
console.log(currentDate.finalResult());
console.log(treamUpper.trime);
console.log(Jaunary.monthFinal);
console.log(Jaunary.array2);
console.log(Jaunary.boject);


