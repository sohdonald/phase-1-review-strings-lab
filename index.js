// Write your code in this file!
const currentUser = 'Bob';


//this doesn't work
//const welcomeMessage = "Welcome to Flatbook, currentUser";

//const welcomeMessage = currentUser;

//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

//const excitedWelcomeMessage = "WELCOME TO FLATBOOK, ";

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

const sliceGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;


