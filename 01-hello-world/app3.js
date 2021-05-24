console.log('Start program');

setTimeout( () => {
    console.log('first timeout');
}, 3000);

setTimeout( () => {
    console.log('Second timeout');
}, 0);

setTimeout( () => {
    console.log('thrid timeout');
}, 0);

console.log('Finish program');
