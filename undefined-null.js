/* 
1. variable value not assigned
2. function didn't return
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object 
6. accessing array out of the range
7. accessing delete array element
8. explicitly set value to undefined

*/
// no : 1
let first;
// console.log(first);
// no : 2
function second(x, y){
    const sum = x + y;
}
const result = second(3,3);
// console.log(result);
// no : 3
function add (a, b) {
    const sum = a + b;
    if (b < 10){
        return;
    }
    const fun = a * b;
    return sum;
} 

const four = add(31, 31);
// console.log(four);

// no : 4
function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(23);

// no : 5

const fifth = {name:'laddu', location:'fdkas', age: 34};
// console.log(fifth.phone);

// no : 6

const sixth = [12, 33, 45];
// console.log(sixth[20]);

// no : 7

const seven = [12, 88, 89];
delete seven[1];
// console.log(seven[1]);

// no : 8

const eight = undefined;
// console.log(eight);

// no: 9

const myObj = {name: 'fkaldfhkd', profession: null}




