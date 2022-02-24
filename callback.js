function welcome(name, greetHandler){
   // console.log(eventHandler);
    greetHandler(name);
}
/* const names =['mofu', 'mofazzal'];
welcome(names); */
/* const nameObj = { name:  'mofazzal', age: 22 };
welcome(nameObj); */

function goodMorning(name) {
    console.log('good morning',name);
}
function goodAfternoon(name) {
    console.log('good afternoon',name);
}
function goodEvening(name) {
    console.log('good evening',name);
}
welcome('Mofazzal', goodMorning);
welcome('Mofazzal', goodAfternoon);
welcome('Mofazzal', goodEvening);


//  

function handleClick(){
    console.log('btn clicked');
}
document.getElementById('my-btn').addEventListener('click',handleClick);

//
document.getElementById('btn').addEventListener('click',function(){
    console.log('button is clicked');
})
