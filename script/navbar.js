let usernav = document.querySelector("#signup>a+div")
let signuppagelink = document.querySelector("#signup>a");



let userstatus = JSON.parse(localStorage.getItem("cickuserlogin"));

if(userstatus!==true){
    signuppagelink.setAttribute("href", "signup.html")
}else{
    signuppagelink.setAttribute("href", "reguser.html");
    let div = document.createElement("div");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    
    let accountlink = document.createElement("a");
    accountlink.setAttribute("href", "reguser.html")
    accountlink.innerText = "My Account";
    p.append(accountlink);

    let signoutlink = document.createElement("a");
    signoutlink.addEventListener("click", signout);
    signoutlink.innerText="Sign out";
    p2.append(signoutlink);

    div.append(p, p2);
    div.setAttribute("class", "regusernav")
    usernav.append(div);
}

function signout(){
    localStorage.removeItem("cickuserlogin");
    localStorage.removeItem("cickbuzzuser");
    window.location.href = "signup.html";
}
