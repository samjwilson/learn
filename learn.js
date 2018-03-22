var database = [
    {
        username: "sam",
        password: "supersecret"
    }
]

var newsFeed = [
    {
        username: "Bobby",
        timeline: "Pumped for Javascript!",  
    },
    {
        username: "Sally",
        timeline: "Javascript rocks!",
    }
]

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password.")
    }
}

signIn(userNamePrompt,passwordPrompt);