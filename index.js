var colors = require('colors');
var readline = require('readline');

function binaryCode(binarydigit , n) {
    console.log('Function started.'.rainbow);
    if (!isNaN(binarydigit) && !isNaN(n) && binarydigit > 0 && n >= 0) {
        console.log('Data approved'.green);
        while(binarydigit>0){
            function digitvalue(result) {
                result = n - 2**(binarydigit - 1)
                let ValueDigit = [0 , 1]
                if (result >= 0) {
                    console.log(('Digit '+(binarydigit)+'('+(2**(binarydigit-1))+')'+' = '+ValueDigit[1]).yellow);
                    n = result
                } else {
                    console.log('Digit '+(binarydigit)+'('+(2**(binarydigit-1))+')'+' = '+ValueDigit[0]);
                }
            }
            digitvalue();
            binarydigit=binarydigit-1;
        }
    } else {
        console.log('Invalid data type.'.red)
    }
}
 
   let answer1 = undefined;
   let answer2 = undefined;

//value 1 is the digit of binary
//value 2 is the number that you want to translate to binary code
//values are can be just positive and neutral(0) numbers


function control() {

    let answer1 = undefined;
   let answer2 = undefined;
   console.log(answer1 , answer2);
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      console.warn('Values cannot be negative number or word.'.inverse);
    rl.question("The binary digit number you want?. ".cyan, function(answer1) {
        if (answer1 != isNaN) {
            console.log("Selected digit of binary:".green, answer1);
            rl.question("The number you want to convert? ".cyan, function(answer2) {
                if (answer2 != isNaN) {
                    console.log("Selected number to convert:".green, answer2);
                    binaryCode(answer1 , answer2);
                    rl.close(); 
                }
            });  
        }
    });
}
control();


//value 1 is the digit of binary
//value 2 is the number that you want to translate to binary code
//values are can be just positive and neutral(0) numbers
