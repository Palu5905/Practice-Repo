const date = new Date();

const date2 =date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
const time =date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds();

const  finalDate =date2 + "  "+ time



const batchinfo ={
      Batch:"Lithium",
      Week:"W5",
      Day:"D6",
      Topic:"Lithium, W5D6, the topic for today is Nodejs module "
}

 const finalResult = function (){
    return batchinfo;
}


module.exports.finalResult=finalResult;
module.exports.finalDate=finalDate;