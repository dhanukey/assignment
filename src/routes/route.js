




const express = require('express');
const a = require('../logger/logger.js')

const router = express.Router();
const b = require('../util/helper.js')
const c = require('../validator/formater.js')

const d = require('lodash');



router.get('/test-me', function (req, res) {
    res.send('My first ever api!');
    a.u();
    b.a1();
    b.a2();
    b.a3();
    c.a1();
    c.a2();
    c.a3();

       
    
    
    
    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //  = __.chunk(month, 3);
    // console.log(chunks);
     
});

router.get( '/hello', function(req,res) {
  
    const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('en', { month: 'long' }))




    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    res.send(d.chunk(months, 3));

    const number= [];
       lim =0;
      for (i=1;lim<10;i++){

        if (i%2 !== 0){
            number.push(i);
            lim++;
        }
        
      }
      
      let newArray = d.tail(number);

      console.log(newArray);



      let arr1 = d.union([3,4,5], [3,7,9], [14,10,7,13], [6,7,8],[9,10,11,12]);
      console.log(arr1);


      let pairs = [['horror', 'the shining'],['drama', 'a few good men'], ['comedy', 'ted']]

      let obj = d.fromPairs(pairs);
  
      console.log(obj);


      

//    console.log(chunks);

   })     

module.exports = router;
// adding this comment for no reason







