// დავალება 1

// let number = prompt('Enter number');

// '57103'

// let result = 0;
// for(let i = 0; i < number.length; i++) {
  //result += Number(number[i]);
// }
// number[0] // 5
// result = 5

// number[1] // 7
// result = 5 + 7 // 12

// number[2] // 1
// result = 12 + 1 // 13

// number[3] // 0
// result = 13 + 0 // 13

// number[4] // 3
// result = 13 + 3 // 16

// alert(result);


// დავალება 2


// let min = Number(prompt('enter min number'));
// let max = Number(prompt('enter max number'));
// let result = '';

// min = 5
// max = 14

// for (let i = min; i<= max; i++) {
   // if(i % 2 === 0) {
     //   result += `${i},`;
    //}
//}

// 1) '6,' 
// 2) '6,' + '8,' 
// 3) '8,' + '10,'
// 4) '10, + '12,'
// 5) '12, + '14,'

// alert(result);


// დავალება 3

let number = number(prompt('Enter number'));
let result = '';

for (let i=0; i< number; i++) {
    for(let j = 0; j < number; j++ ){
        result += '*';
    }
    result += '/n';
}
alert(result);

// i = 0,   j =0, result = '*'
//          j = 1, result = '**'
//          j = 2, result = '***'
//          j = 3, result = '****'
//          j = 4, result = '*****'
//          j = 5, result = '******'
//          j = 6, result = '*******'
//          j = 7, result = '********'
//          j = 8, result = '*********'
//          j = 9, result = '**********'
//          j = 10, result = '***********'
//          j = 11, result = '************'
//          j = 12, result = '*************'
//          j = 13, result = '**************'
//          j = 14, result = '***************'

// i = 1,   j =0, result = '*'
//          j = 1, result = '**'
//          j = 2, result = '***'
//          j = 3, result = '****'
//          j = 4, result = '*****'
//          j = 5, result = '******'
//          j = 6, result = '*******'
//          j = 7, result = '********'
//          j = 8, result = '*********'
//          j = 9, result = '**********'
//          j = 10, result = '***********'
//          j = 11, result = '************'
//          j = 12, result = '*************'
//          j = 13, result = '**************'
//          j = 14, result = '***************'


