# MAIT Heritage Quiz Application

A functional and responsive web application designed to present the history of Maharaja Agrasen Institute of Technology (MAIT). This project includes a dynamic quiz system and a separate Admin Portal for content management.

## Features

* HTML5 Semantic Elements: Organized using a clear structure with header, main, and section tags.
* Dynamic Quiz Logic: Questions are loaded from a JavaScript array or browser localStorage.
* Admin Portal: A password-protected area (admin.html) that allows administrators to add custom questions.
* Modern UI Design: Implements a glassmorphism aesthetic with responsive layouts using the CSS Box Model.
* CSS Animations: Smooth transitions between questions and feedback sections using keyframes.
* Timed Challenges: Each question includes a 15-second countdown to increase engagement.
* Instant Feedback: Provides immediate correct or incorrect status along with educational facts for each answer.

## Technical Specifications

* HTML5: Structure and Accessibility (including ARIA roles).
* CSS3: Utilizes Flexbox, Grid, CSS Variables, and Animations.
* JavaScript: Handles DOM manipulation, timers, and data persistence via localStorage.

## File Structure

* index.html: The primary interface for users taking the quiz.
* admin.html: The restricted portal for managing quiz content.
* style.css: Shared stylesheet for the entire application.
* quiz.js: Core logic for the quiz interface and scoring.
* README.md: Documentation for the project.

## Installation and Setup

1.  File Preparation: Ensure all project files are located in the same directory.
2.  Visual Studio Code: Open the project folder in VS Code.
3.  Live Server Extension: Install the Live Server extension by Ritwick Dey if it is not already installed.
4.  Execution: Right-click index.html and select "Open with Live Server" to view the application in your browser.
5.  Administrative Access: 
    * Navigate to the Admin Portal via the link in the header.
    * Enter the administrative password: admin123.

## Data Management Logic

The application prioritizes data managed by the administrator. On load, the quiz script checks the browser's localStorage for custom questions. If no custom data is found, the system defaults to the 10 pre-defined history questions included in the source code
