
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
    } else if (getUsername === null & getPassword === null){
        document.getElementById("infotext").innerHTML = "Enter username and password before attempting to log in!"
    }
    
    else {

        if(loginAttempts == 1){
         return noAttemptsLeft();
        }
        else{
            loginAttempts=loginAttempts-1;
        }
        document.getElementById("statement").innerHTML = "Wrong username or password. Login attempts left: " + loginAttempts;
        document.getElementById("statement").style.color = "red";

    }
}
}

// Used when we want more than one attempt. This time three attempts. For one use only.
function loginAttemptHardcode(){
    var getUsername = document.getElementById("username").value;
    var getPassword = document.getElementById("pwd").value;
    if(getUsername === "a18ismca" && getPassword === "Syp9393"){
      return enterMenu();
    } 
    // If password AND username are empty, make a statement.
    else if (getUsername === "" && getPassword === ""){
        document.getElementById("infotext").innerHTML = "Enter username and password before attempting to log in!"
    } 
    // If password is empty, make a statement.
    else if (getUsername.length > 0 && getPassword === ""){
        document.getElementById("infotext").innerHTML = "Enter password before attempting to log in!"
    } 
    // If username is empty, make a statement.
    else if (getUsername === "" && getPassword.length !== ""){
        document.getElementById("infotext").innerHTML = "Enter username before attempting to log in!"
    }  else{

        if(loginAttempts == 1){
         return noAttemptsLeft();
        }

        loginAttempts=loginAttempts-1;
        document.getElementById("statement").innerHTML = "Wrong username or password! Login attempts: " + loginAttempts;
        document.getElementById("statement").style.color = "#8b0000";
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
    document.getElementById("logintable").remove();
    document.getElementById("logininfo").remove();
    document.getElementById("header").remove();
}


// Make it possible to press ENTER button when attempting to log in
var usernameInput = document.getElementById("username");

usernameInput.addEventListener("keydown", function(event) {

    if (event.key === 13) {
      document.getElementById("loginBtn").click;
    }
  });

var pwdInput = document.getElementById("pwd");

pwdInput.addEventListener("keydown", function(event) {

    if (event.key === 13) {
      document.getElementById("loginBtn").click();
    }
  });