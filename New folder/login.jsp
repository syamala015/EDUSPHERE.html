<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>EDUSPHERE - Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="head">
        <h2>Welcome to EDUSPHERE</h2>
        <div class="tab">
            <button class="tablink" onclick="openTab(event, 'login')">Login</button>
            <button class="tablink" onclick="openTab(event, 'signup')">Sign Up</button>
        </div>
        
        <!-- Login Form -->
        <div id="login" class="tabcontent">
            <form action="loginController.jsp" method="POST">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" required>

                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" required>
                <button type="submit">Login</button>

                <p>Or login with:</p>
                <div id="google-login"></div>
            </form>
        </div>
        
        <!-- Sign-Up Form -->
        <div id="signup" class="tabcontent">
            <form action="signupController.jsp" method="POST">
                <label for="role">I am a:</label>
                <select name="role" id="role" onchange="showUpload()" required>
                    <option value="parent">Parent</option>
                    <option value="tutor">Tutor</option>
                </select>
                
                <label for="signup-firstname">First Name:</label>
                <input type="text" name="firstname" id="signup-firstname" placeholder="Enter your first name" required>
                
                <label for="signup-lastname">Last Name:</label>
                <input type="text" name="lastname" id="signup-lastname" placeholder="Enter your last name" required>
                
                <label for="signup-email">Email:</label>
                <input type="email" name="email" id="signup-email" placeholder="Enter your email" required>
                
                <label for="signup-password">Password:</label>
                <input type="password" name="password" id="signup-password" placeholder="Create a password" required>
                
                <div id="tutor-upload" style="display:none;">
                    <label for="document">Upload Verification Document:</label>
                    <input type="file" name="document" id="document">
                </div>

                <button type="submit">Sign Up Now</button>

                <p>Or sign up with:</p>
                <div id="google-signup"></div>
            </form>
        </div>
    </div>
</body>
</html>