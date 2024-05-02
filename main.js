//🚀 Day 50 Challenge: Start Coding! 🚀//
/*Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.*/
// Define a function to be executed after a delay
function delayedExecution() {
    console.log("This message will be logged after a delay.");
}
// Set a timeout of 3 seconds (3000 milliseconds) to execute the delayedExecution funcmtion
var delayInMillis = 3000;
setTimeout(delayedExecution, delayInMillis);
console.log("This message is logged immediately.");
/*Question 149: Explain the concept of the event loop in JavaScript with an example.*/
// Example asynchronous function
function asyncOperation(callback) {
    setTimeout(callback, 0);
}
// Function to log messages
function logMessage(message) {
    console.log(message);
}
// Example usage of asynchronous operation
logMessage("Start"); // Log the start message
// Perform an asynchronous operation
asyncOperation(function () {
    logMessage("Async operation completed"); // Log after the asynchronous operation completes
});
logMessage("End"); // Log the end message
/*Question 150: Describe how asynchronous callbacks differ from synchronous code execution.*/
// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (var i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
