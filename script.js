// Simulate real-time detection from camera feed
const outputDiv = document.getElementById('output');
const animalTypes = [
    { type: "Elephant", category: "Wild" }
];

// Simulating detection at random intervals
setInterval(() => {
    // Randomly select an animal from the list
    const detectedAnimal = animalTypes[Math.floor(Math.random() * animalTypes.length)];
    
    let alertMessage = "";
    let alertClass = "";

    // If the animal is wild
    if (detectedAnimal.category === "Wild") {
        alertMessage = `⚠️ Warning: Wild Animal Detected - ${detectedAnimal.type}! Forest Department has been alerted.`;
        alertClass = "alert alert-wild text-center";
        sendAlert('forest', detectedAnimal.type);
    } else {
        // If the animal is domestic
        alertMessage = `✅ Domestic Animal Detected - ${detectedAnimal.type}. Farmer has been notified.`;
        alertClass = "alert alert-domestic text-center";
        sendAlert('farmer', detectedAnimal.type);
    }

    // Display the detection result with fade-in effect
    outputDiv.innerHTML = alertMessage;
    outputDiv.className = alertClass + " fadeIn";
    outputDiv.style.display = 'block';
}, 10000);  // Detection occurs every 10 seconds

// Function to simulate sending alerts
function sendAlert(recipient, animalType) {
    // Simulating sending an alert via a system like Twilio
    console.log(`Sending alert to ${recipient}: ${animalType} detected.`);
    alert(`Alert sent to ${recipient}: ${animalType} detected.`);
}
