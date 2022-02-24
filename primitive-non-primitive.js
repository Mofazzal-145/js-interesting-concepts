/* 
data types
1. number
2. string
3. boolean
4. undefined
5. null
6. object
7. symbol

non-primitive

object

And all other are primitive

*/

// primitive ex

let a = 'mofazzal';
let b = a;
console.log(a ,b);
a = 'mofu';
console.log(a, b);

// non-primitive ex

const x = { job: 'web developer'};
const y = x;
console.log(x, y);
// x.job = 'front end developer';
y.job = 'front end developer';
console.log(x, y);
