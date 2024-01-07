function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const clockDisplay = `${hours}:${minutes}:${seconds}`;
    console.clear(); // Clear the console to update the time
    console.log(clockDisplay);
}

// Update the clock every second
setInterval(updateClock, 1000);//update each s

// Initial call to display the clock immediately
updateClock();//only console first time no running