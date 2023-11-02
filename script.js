document.getElementById("close-button").addEventListener("click", function() {
    window.close();
});

document.getElementById("minimize-button").addEventListener("click", function() {
    // Implement minimize behavior
});

document.getElementById("fullscreen-button").addEventListener("click", function() {
    // Implement fullscreen behavior
});

document.getElementById("go-home-button").addEventListener("click", function() {
    const terminalBody = document.getElementById("terminal-body");
    terminalBody.innerHTML = "<p>Connecting to server...</p>";

    setTimeout(function() {
        terminalBody.innerHTML += "<p>Connected to server! Continuing...</p>";
        addCommandInput();
    }, 2000); // Simulated delay
});

// Handle user input
document.getElementById("terminal-body").addEventListener("click", function() {
    if (document.getElementById("terminal-input") === null) {
        addCommandInput();
    }
});

document.getElementById("terminal-body").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const input = document.getElementById("terminal-input");
        const command = input.value.trim();
        const terminalBody = document.getElementById("terminal-body");

        handleCommand(command);
        addCommandInput();

        input.value = "";
        input.blur();
    }
});

function addCommandInput() {
    const terminalBody = document.getElementById("terminal-body");
    const input = document.createElement("input");
    input.id = "terminal-input";
    input.placeholder = "Type your command...";
    terminalBody.appendChild(input);
    input.focus();
}

function handleCommand(command) {
    const terminalBody = document.getElementById("terminal-body");

    switch (command.toLowerCase()) {
        case "help":
            terminalBody.innerHTML += "<p>Available commands:</p>";
            terminalBody.innerHTML += "<p>1. help - Display available commands</p>";
            terminalBody.innerHTML += "<p>2. whoami - Display information about yourself</p>";
            terminalBody.innerHTML += "<p>3. social -a - Display social media links</p>";
            terminalBody.innerHTML += "<p>4. projects - Display your projects</p>";
            terminalBody.innerHTML += "<p>5. clear - Clear the terminal</p>";
            break;
        case "whoami":
            terminalBody.innerHTML += "<p>Hi, it's Amr! This is a test description. Hi!</p>";
            break;
        case "social -a":
            terminalBody.innerHTML += "<p>Social media links:</p>";
            terminalBody.innerHTML += "<p><a href='https://www.facebook.com'>Facebook</a></p>";
            terminalBody.innerHTML += "<p><a href='https://www.instagram.com'>Instagram</a></p>";
            terminalBody.innerHTML += "<p><a href='https://www.snapchat.com'>Snapchat</a></p>";
            terminalBody.innerHTML += "<p><a href='https://www.twitter.com'>Twitter</a></p>";
            terminalBody.innerHTML += "<p><a href='https://www.tiktok.com'>TikTok</a></p>";
            break;
        case "projects":
            terminalBody.innerHTML += "<p>GitHub projects:</p>";
            terminalBody.innerHTML += "<p><a href='https://www.github.com/user/project1'>Project 1</a></p>";
            terminalBody.innerHTML += "<p><a href='https://www.github.com/user/project2'>Project 2</a></p>";
            // Add more project links as needed
            break;
        case "clear":
            terminalBody.innerHTML = "<p>Type 'help' for available commands</p>";
            break;
        default:
            terminalBody.innerHTML += `<p>Command not found: ${command}</p>`;
    }
}