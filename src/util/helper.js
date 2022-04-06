

let a1= function printDate() {
    const date = new Date(); 
    console.log(date); }

let a2= function printMonth(){

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

 const d = new Date();
 let name = month[d.getMonth()];
 console.log(name);


}




let a3= function  getBatchInfo() {

    console.log(' Uranium, W3D3 the topic for today is Nodejs module system');


}


a1();
a2();
a3();

module.exports.a1 = a1;
module.exports.a2= a2;
module.exports.a3 = a3;

