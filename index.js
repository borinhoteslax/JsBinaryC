var colors = require('colors');

function binaryCode(binarydigit , n) {
    console.log('Function started.');
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

binaryCode( 8 , 17);
//value 1 is the digit of binary
//value 2 is the number that you want to translate to binary code
//values are can be just positive and neutral(0) numbers