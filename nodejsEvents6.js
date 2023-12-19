const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('teaboil', () => {
  console.log('an event occurred! please turn off the gas');
  setTimeout(()=>{
    console.log("note : setTimeout run at last, please turn off gas,gentle remainder");
  },3000);//run at last after 3 sec
});

console.log("The script is running");
myEmitter.emit('teaboil');
console.log("The sccipt is still running ");
myEmitter.emit('teaboil');

