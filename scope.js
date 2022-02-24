// local scope
 /*
function add(first, second){
    const result = first + second;
   // console.log(result);
    return result;
}

const sum = add(12, 33);
 console.log(sum);

*/

// with global scope

/* const favNum = 22;
function add(first, second){
    const result = first + second;
    //  console.log(result);
    // console.log(favNum); 
    return result;
}

const sum = add(12, 33);
// console.log(sum);
 */

// block scope

function add3(first, second){
   // console.log(mood); // hoisting
    const result = first + second;
    if(result > 9){
        var mood = 'happy';
        mood = 'good';
    }
  //  console.log(mood);
    return result;
}

const sum = add3(12, 33);
// console.log(sum);


// another example 

for (let i=0; i< 10; i++){ // var

}
console.log(i);
