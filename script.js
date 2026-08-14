const ACCESS_CODE = "3dl-srab";

function isLoggedIn(){
  return localStorage.getItem("court_logged_in") === "true";
}
function openCase(id){
  if(!isLoggedIn()){
    showLogin();
    return;
  }
  location.href = "case.html?id=" + id;
}
function showLogin(){
  document.getElementById("loginModal").classList.add("show");
  setTimeout(()=>document.getElementById("modalCode").focus(),100);
}
function closeLogin(){
  document.getElementById("loginModal").classList.remove("show");
  document.getElementById("loginError").textContent="";
}
function login(){
  const input=document.getElementById("codeInput");
  if(input && input.value===ACCESS_CODE){
    localStorage.setItem("court_logged_in","true");
    alert("تم تسجيل الدخول بنجاح");
    location.reload();
  }else if(input){
    input.style.borderColor="#c55";
    alert("رمز الدخول غير صحيح");
  }
}
function loginFromModal(){
  const input=document.getElementById("modalCode");
  const err=document.getElementById("loginError");
  if(input.value===ACCESS_CODE){
    localStorage.setItem("court_logged_in","true");
    closeLogin();
    alert("تم تسجيل الدخول بنجاح");
    location.reload();
  }else{
    err.textContent="رمز الدخول غير صحيح.";
  }
}
document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeLogin();
});
