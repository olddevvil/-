const modal=document.getElementById("modal"),toast=document.getElementById("toast");
function openLogin(){modal.classList.add("show")}
function closeLogin(){modal.classList.remove("show")}
function fakeLogin(){closeLogin();showToast("تم فتح النسخة التجريبية من السجل")}
function showToast(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2600)}
modal.addEventListener("click",e=>{if(e.target===modal)closeLogin()});
document.querySelectorAll("a[href^='#']").forEach(a=>a.addEventListener("click",e=>{const id=a.getAttribute("href");if(id!=="#"&&document.querySelector(id)){e.preventDefault();document.querySelector(id).scrollIntoView({behavior:"smooth"})}}));
