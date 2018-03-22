var database = [
    {
        username: "sam",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    },
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


function isUserValid(user, pass) {

    for (var i=0; i < database.length; i++){
        if (database[i].username === user &&
            database[i].password === pass) {
                return true
            } 
        }
        return false;

}

function signIn(user, pass) {
 
        if (isUserValid(user, pass)) {
            console.log(newsFeed)
        } else {
            console.log("invalid user")
        }
    };





signIn(userNamePrompt,passwordPrompt);