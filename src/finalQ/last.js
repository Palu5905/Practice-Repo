


const Month =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const monthFinal =_.chunk(Month,4);


const array =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const array2=_.tail(array)


const array3 =[["horror","The Shining"],["drama","Titanic"],
            ["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];


const boject=_.fromPairs(array3)




module.exports.monthFinal=monthFinal;
module.exports.array2=array2;
module.exports.boject=boject