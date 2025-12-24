// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x === 23) console.log(x);

const calcAge = birthYear => 2037 - birthYear;

calcAge(1999);

console.log(calcAge(1999));
