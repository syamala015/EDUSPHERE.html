// Function to switch between login and signup tabs
function openTab(event, tabName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Show upload field if tutor is selected
function showUpload() {
    var roleDropdown = document.getElementById("role");
    var uploadSection = document.getElementById("tutor-upload");

    if (roleDropdown.value === "tutor") {
        uploadSection.style.display = "block";
    } else {
        uploadSection.style.display = "none";
    }
}

// Handle login submission and redirect
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#login form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Get user input values
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Basic validation
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }

        // Simulating authentication (Replace with real authentication API)
        if (email === "test@example.com" && password === "password123") {
            alert("Login Successful!");
            
            // Store user data in local storage (optional)
            localStorage.setItem("loggedInUser", email);

            // Redirect to username page or dashboard
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password. Try again!");
        }
    });
});


// Handle signup submission and redirect
function handleSignup(event) {
    event.preventDefault();  // Prevent form from submitting normally

    var firstName = document.getElementById("signup-firstname").value.trim();
    var lastName = document.getElementById("signup-lastname").value.trim();
    var email = document.getElementById("signup-email").value.trim();
    var password = document.getElementById("signup-password").value.trim();
    var role = document.getElementById("role").value;

    if (!firstName || !lastName || !email || !password) {
        alert("Please fill in all required fields.");
        return;
    }

    // Store signup details in localStorage (for testing)
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);

    alert("Signup Successful! Redirecting to username page...");
    window.location.href = "choose-username.html";
}

// Ensure default tab is visible on load and attach event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login").style.display = "block";

    // Attach event listener correctly to the form
    document.getElementById("signup-form").addEventListener("submit", handleSignup);
    document.getElementById("role").addEventListener("change", showUpload);
});
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    // Decode the token (optional)
    var jwt = response.credential;
    var user = parseJwt(jwt);

    // Store user details
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to dashboard or username selection page
    window.location.href = "choose-username.html";
}

// Function to decode JWT token (optional)
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
function togglePassword() {
    let passwordField = document.getElementById("password");
    let showPasswordCheckbox = document.getElementById("show-password");

    // Toggle the input type between 'password' and 'text'
    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
