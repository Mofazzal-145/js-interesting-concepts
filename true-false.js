/* 

Falsy:
false
0
empty string
undefined
null
NaN

--------

Truthy:
true
any kind of number without 0
any kind of string include white space
array..[]
object..{}

anything else that is not falsy will be truthy
*/
let x = {} ; // true
console.log('value of x',x);
if(x) {
    console.log('variable is truthy');
}
else{
    console.log('variable is falsy');
}






