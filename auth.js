
var loginAttempts = 3;

var accounts = [
    {
        username: "a18ismca",
        password: "Syp9393",
    },
    {
        username: "root",
        password: "root",
    },
    {
        username: "iscat",
        password: "iscat",
    },
    {
        username: "admin",
        password: "password",
    },
    {
        username: "windows",
        password: "xp2001",
    }
];


// Method when logging in with multiple accounts, but only with one attempt.
function loginAttemptWithAccounts(){

    var getUsername = document.getElementById("username").value;
    var getPassword = document.getElementById("pwd").value;
    var i;
    for(i = 0; i < accounts.length; i++){
    if(getUsername === accounts[i].username && getPassword === accounts[i].password){
      return enterMenu();
    } else {

        if(loginAttempts == 1){
         return noAttemptsLeft();
        }
        else{
            loginAttempts=loginAttempts-1;
        }
        document.getElementById("statement").innerHTML = "Wrong username or password! Login attempts: " + loginAttempts;
        document.getElementById("statement").style.color = "red";

    }
}
}

// Used when we want more than one attempt. This time three attempts.
function loginAttemptHardcode(){
    var getUsername = document.getElementById("username").value;
    var getPassword = document.getElementById("pwd").value;
    if(getUsername === "a18ismca" && getPassword === "Syp9393"){
      return enterMenu();
    } else {

        if(loginAttempts == 1){
         return noAttemptsLeft();
        }
        loginAttempts=loginAttempts-1;
        document.getElementById("statement").innerHTML = "Wrong username or password! Login attempts: " + loginAttempts;
        document.getElementById("statement").style.color = "red";
    
}
}

function enterMenu(){
    document.getElementById("statement").innerHTML = "Redirecting you to the quiz menu..."
    document.getElementById("statement").style.color = "green";
    location.replace("menu.html");
}

function noAttemptsLeft(){
    document.getElementById("statement").innerHTML = "No more attempts left to login!";
    removeObjectsOnScreen();
    var count = 59;
    var timer = setInterval(function(){
        if(count <= 0){
            clearInterval(timer);
            location.replace("login.html");
        }
        document.getElementById("statement").innerHTML = "No more attempts left to login! Retry in " + count + " seconds... ";
        count -=1;
    }, 1000);
    removeObjectsOnScreen();

}



function removeObjectsOnScreen(){
    document.getElementById("not").remove();
    document.getElementById("header").remove();
}
