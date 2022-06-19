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



// Shedule Page navbar



let submenus = [
    {
        name:"Current Matches",
        url:"currentmath"
    },
    {
        name:"Current & Future Series",
        url:"currentandfuture"
    },
    {
        name:"Matches By Day",
        url:"matchdaybyday"
    },{
        name:"Teams",
        url:"teams"
    },
    {
        name:"Series Archive",
        url:"series"
    }
];

let submenu =document.getElementById("submenu");
submenus.forEach(function(el, i){
    let a = document.createElement("a");
    let display = document.getElementById(el.url);
    a.innerText = el.name;
    if(el.name=="Matches By Day"){
        a.setAttribute("class","selected");
        
        display.setAttribute("class", "show");
    }else{
        display.setAttribute("class", "hide");
    }
    a.addEventListener("click", function(){
        loadPage(el);
    })
    submenu.append(a);

})

function loadPage(el){
    let load = document.getElementById("pageLoadSection");
    let selectedMune = document.querySelectorAll("#submenu>a");
    let display = document.getElementById(el.url);
    let  hide = document.querySelector(".show");

    selectedMune.forEach(function(el1){

        if(el1.innerText==el.name){
            el1.setAttribute("class", "selected");
        }else{

            el1.removeAttribute("class", "selected");

        }
    })
    
    display.removeAttribute("class", "hide");
    display.setAttribute("class", "show");
    hide.removeAttribute("class", "show");
    hide.setAttribute("class", "hide");

    
}