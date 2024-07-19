let startTime;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    startTime = new Date().getTime();
    isRunning = true;
    updateStopwatch();
  }
}

function stopStopwatch() {
  isRunning = false;
}

function resetStopwatch() {
  stopStopwatch();
  console.clear();
  console.log("Stopwatch reset.");
}

function updateStopwatch() {
  if (isRunning) {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = elapsedTime.getUTCHours().toString().padStart(2, "0");
    const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, "0");
    const stopwatchDisplay = `${hours}:${minutes}:${seconds}`;
    console.clear();
    console.log(stopwatchDisplay);
    setTimeout(updateStopwatch, 1000);
    
  }
}

// Example of usage:
startStopwatch(); // Start the stopwatch
// Wait for some time (e.g., 10 seconds)
//stopStopwatch(); // Stop the stopwatch
//resetStopwatch(); // Reset the stopwatch
