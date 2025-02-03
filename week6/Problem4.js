function registerUser(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.2; 
        if (success) {
            console.log("User registered successfully");
            callback(null); 
        } else {
            callback("Registration failed: User already exists");
        }
    }, 1000);
}


function sendVerification(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.2; 
        if (success) {
            console.log("Verification email sent successfully");
            callback(null); 
        } else {
            callback("Verification failed: Email service unavailable");
        }
    }, 1000);
}

function loginUser(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.2; 
        if (success) {
            console.log("User logged in successfully");
            callback(null); 
        } else {
            callback("Login failed: Invalid credentials");
        }
    }, 1000);
}


function displayWelcomeMessage() {
    console.log("Welcome! Your account is ready to use.");
}


registerUser((error) => {
    if (error) {
        console.error(error); 
        return; 
    }

    sendVerification((error) => {
        if (error) {
            console.error(error); 
            return; 
        }

        loginUser((error) => {
            if (error) {
                console.error(error);
                return; 
            }

            displayWelcomeMessage(); 
        });
    });
});