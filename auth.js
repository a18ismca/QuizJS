

function isPasswordCorrect(){
    var getUsername = document.getElementById("login").value;
    var getPassword = document.getElementById("pwd").value;

    if(getUsername === "a18ismca" && getPassword === "Syp9393"){
        document.getElementById("statement").innerHTML = "Redirecting you to quiz menu in a few seconds..."
        location.replace("menu.html")
    } else {
        document.getElementById("statement").innerHTML = "The username or the password is incorrect. Try again."
    }
}


