let xp = localStorage.getItem("xp");
let userName = localStorage.getItem("userName")
if (xp === null) {
    xp = 0;
} else {
    xp = Number(xp);
}
document.addEventListener("wheel", function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "0")) {
        e.preventDefault();
    }
});








function sportComplete(){
    let toast = document.getElementById("sportCompleted");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
    xp = xp+20;
    console.log(xp)
    checkXp();
    saveData();
}
function readComplete(){
    let toast = document.getElementById("readCompleted");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
    xp = xp+10;
    console.log(xp)
    checkXp();
    saveData();
}
function cleanComplete(){
    let toast = document.getElementById("cleanCompleted");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
    xp = xp+15;
    console.log(xp)
    checkXp();
    saveData();
}
function projectComplete(){
    let toast = document.getElementById("projectCompleted");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
    xp = xp+30;
    console.log(xp)
    checkXp();
    saveData();
}
function checkXp(){
    const levelEl = document.getElementById("level");

    if (!levelEl) return; // sécurité

    let level = Math.floor(xp / 50);
    levelEl.textContent = level;
}
function saveData(){
    localStorage.setItem("xp", xp);
}

function setUserName(){
    let userName = document.getElementById("usernameInput").value;
    document.getElementById("userName").textContent = userName;
    localStorage.setItem("userName", userName)
    document.getElementById("usernameInput").value="";
    document.getElementById("newUserName").textContent = userName;
    let toast = document.getElementById("usernameChanged");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
    

    
}
function loadUserName(){
    let storedName = localStorage.getItem("userName");
    if (storedName) {
        document.getElementById("userName").textContent = storedName;
    }
}
function resetXP(){
    if (confirm("Are you sure ? This action cannot be undone")){
        xp = 0;
        document.getElementById("level").textContent = "0";
        let toast = document.getElementById("xpReset");

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
        saveData();

    }
    
}
loadUserName();
checkXp();