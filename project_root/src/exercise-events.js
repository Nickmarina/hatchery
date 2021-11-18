// Fix code below. Prepare event handler using emitter. 
// Input is type of event, there are 3 types and 3 messages for each of them:
// "error" : "Error!"
// "success": "OK.Success!"
// "loading": "It's loading..."
// 
// Example 1
// input: "error"
// output: "Error!"
// 
// Example 2
// input: "success"
// output: "OK.Success!"


const Emitter = require("events");

function main(eventType) {
  let emitter = new Emitter();
  let message = "";

  // First variant
  // emitter.on('error', ()=> message="Error!")
  // emitter.on('success', ()=> message="OK.Success!")
  // emitter.on('loading', ()=> message="It's loading...")

  // Second one
  emitter.on(eventType, ()=>{
    if(eventType==='error') message="Error!";
    if(eventType==='success') message="OK.Success!";
    if(eventType==='loading') message="It's loading...";
  })
  

  emitter.emit(eventType);
  return message;
}

module.exports = main;