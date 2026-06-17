let xp = localStorage.getItem("xp");
let userName = localStorage.getItem("userName")
let achievementFirstLevel = false;
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
    checkBorder();
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
    checkBorder();
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
    checkBorder();
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
    checkBorder();
}
function checkXp() {
    const levelEl = document.getElementById("level");
    const xpBar = document.getElementById("xpBar");
    const xpText = document.getElementById("xpText");

    let level = Math.floor(xp / 50);

    levelEl.textContent = level;

    const currentXP = xp % 50;
    const percentage = (currentXP / 50) * 100;

    xpBar.style.width = percentage + "%";

    xpText.textContent = `${currentXP} / 50 XP`;
    if (xp>=50){
        if(xp<=60){
            // First achievement : first level
            achievementFirstLevel = true;
            document.getElementById("achievementIcon").classList.remove("firstAchievementHidden")
            document.getElementById("achievementTxt").classList.remove("achievementTxtHidden")
            document.getElementById("achievementIcon").classList.add("firstAchievement")
            document.getElementById("achievementTxt").classList.add("achievementTxt")
        let toast = document.getElementById("achievementUnlocked");

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 1500);
            }
        
    }
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
        achievementFirstLevel = false;
        checkAchievement();
        checkBorder();
    }
    
}
function checkAchievement(){
    if(xp>=50){
        document.getElementById("achievementIcon").classList.remove("firstAchievementHidden")
        document.getElementById("achievementTxt").classList.remove("achievementTxtHidden")
        document.getElementById("achievementIcon").classList.add("firstAchievement")
        document.getElementById("achievementTxt").classList.add("achievementTxt")
    }
    else{
        document.getElementById("achievementIcon").classList.add("firstAchievementHidden")
        document.getElementById("achievementTxt").classList.add("achievementTxtHidden")
        document.getElementById("achievementIcon").classList.remove("firstAchievement")
        document.getElementById("achievementTxt").classList.remove("achievementTxt")
    }

}
function checkBorder(){
    if(xp>=5000){
        document.getElementById("avatar").classList.remove("avatarGold")
        document.getElementById("avatar").classList.add("avatarLegendary")
        if(xp<5100){
            
            let toast = document.getElementById("legendaryBorderUnlocked");

            toast.classList.add("show");

            setTimeout(() => {
             toast.classList.remove("show");
            }, 3000);
            }
    }
    if(xp>=2500){
        document.getElementById("avatar").classList.remove("avatarSilver")
        document.getElementById("avatar").classList.add("avatarGold")
        if(xp<2400){
            
            let toast = document.getElementById("goldBorderUnlocked");

            toast.classList.add("show");

            setTimeout(() => {
             toast.classList.remove("show");
            }, 3000);
            }
    }
    if(xp>=1250){
        document.getElementById("avatar").classList.remove("avatarBronze")
        document.getElementById("avatar").classList.add("avatarSilver")
        if(xp<1350){
            
            let toast = document.getElementById("silverBorderUnlocked");

            toast.classList.add("show");

            setTimeout(() => {
             toast.classList.remove("show");
            }, 3000);
            }
    }
    if(xp>=500){
        document.getElementById("avatar").classList.remove("avatar")
        document.getElementById("avatar").classList.add("avatarBronze")
        if(xp<600){
            
            let toast = document.getElementById("bronzeBorderUnlocked");

            toast.classList.add("show");

            setTimeout(() => {
             toast.classList.remove("show");
            }, 3000);
            }

    
    }
    
    
    
    else{
        document.getElementById("avatar").classList.add("avatar")
        document.getElementById("avatar").classList.remove("avatarBronze","avatarSilver","avatarGold","avatarLegendary")
    }


}
checkBorder();
checkAchievement();
loadUserName();
checkXp();
