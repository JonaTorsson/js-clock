console.log(1);
console.log(2);
console.log(3);

/*
setTimeout(() => {
    console.log("Yohoooo!");
}, 5000)
*/

console.log(4);
console.log(5);

let tick = 0;
setInterval( () => {
    tick++;
    console.log("Tick:", tick);
}, 1000)


console.log("Tick started");