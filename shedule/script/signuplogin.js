let form = document.querySelector("form");
let email = form.email.value;
let btn = document.querySelector("#submit");
let termcheckbox = form.termandcond;

btn.disabled = true;
btn.setAttribute("class", "diabled");

form.email.addEventListener("input", isDataPrensent);
termandcond.addEventListener("click", isDataPrensent);

function isDataPrensent() {
  let form = document.querySelector(".loginsignup");
  let email = form.email.value;
  let termcheckbox = form.termandcond;
  if (email != "" && termcheckbox.checked == true) {
    btn.disabled = false;
    btn.removeAttribute("class", "diabled");
  } else {
    btn.disabled = true;

    btn.setAttribute("class", "diabled");
  }
}

// signup login form
document.querySelector("form").addEventListener("submit", loginsignup);

let otpverifyform = document.querySelector("#otpform");

otpverifyform.setAttribute("class", "hide");

function loginsignup(ev) {
  ev.preventDefault();
  let otpverify = document.querySelector("#otpform");
  let loginsignupbox = document.querySelector(".formContainer");
  let form = document.querySelector(".loginsignup");
  let email = document.querySelector(".otptext");
  loginsignupbox.setAttribute("class", "hide");
  otpverify.removeAttribute("class", "hide");
  otpverify.setAttribute("class", "optverifyform");

  email.innerText = "OTP Send to " + form.email.value;
  localStorage.setItem("cickbuzzuser", form.email.value);
}

// otp verify Process
document.querySelector(".optform").addEventListener("submit", verifyOtp);

function verifyOtp(event) {
  event.preventDefault();
  let cickbuzzuser = localStorage.getItem("cickbuzzuser");
  let digit1 = document.querySelector("#digit1").value;
  let digit2 = document.querySelector("#digit2").value;
  let digit3 = document.querySelector("#digit3").value;
  let digit4 = document.querySelector("#digit4").value;
  let digit5 = document.querySelector("#digit5").value;
  let digit6 = document.querySelector("#digit6").value;

  if (
    digit1 == 1 &&
    digit2 == 2 &&
    digit3 == 3 &&
    digit4 == 4 &&
    digit5 == 5 &&
    digit6 == 6
  ) {
    localStorage.setItem("cickuserlogin", true);
    alert("Logged in successfully");
    window.location.href = "home.html";
  }
}
