const modal=document.getElementById("modal"),toast=document.getElementById("toast"),caseModal=document.getElementById("caseModal"),witnessModal=document.getElementById("witnessModal");
const cases={
case1:`<div class="section-label">القضية رقم 01</div><h2>قضية بجاد ستارك</h2><div class="decision"><h3>قرار القضية</h3><p>يتم إلغاء ملف القضية المرفوعة على رئيس الجمهورية.</p></div>`,
case2:`<div class="section-label">القضية رقم 02</div><h2>قضية العم جدو ورجال القانون</h2><p>ملف أرشيفي يضم أقوال الأطراف والشهود ومحضر الواقعة أمام محل الملابس، وما تبعها من تقييد واشتباك وإطلاق نار ونقل المصاب إلى المستشفى.</p><div class="grounds"><span>العم جدو</span><span>اللمبي</span><span>جاك هاربر</span><span>الجنرال سيف</span><span>يويو ال منذر</span></div><button class="dark-btn" onclick="closeCase();document.getElementById('testimony').scrollIntoView()">الانتقال إلى الإفادات</button>`
};
function openLogin(){modal.classList.add("show")}function closeLogin(){modal.classList.remove("show")}
function fakeLogin(){closeLogin();showToast("تم فتح النسخة التجريبية من السجل")}
function openCase(id){document.getElementById("caseContent").innerHTML=cases[id];caseModal.classList.add("show")}
function closeCase(){caseModal.classList.remove("show")}
function openWitness(name,text){document.getElementById("witnessName").textContent=name;document.getElementById("witnessText").textContent=text;witnessModal.classList.add("show")}
function closeWitness(){witnessModal.classList.remove("show")}
function showToast(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2600)}
document.querySelectorAll("a[href^='#']").forEach(a=>a.addEventListener("click",e=>{const id=a.getAttribute("href");if(id!=="#"&&document.querySelector(id)){e.preventDefault();document.querySelector(id).scrollIntoView({behavior:"smooth"})}}));
[modal,caseModal,witnessModal].forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("show")}));
