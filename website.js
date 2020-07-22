const aboutNavButton = document.getElementById("nav-button1");
const workNavButton = document.getElementById("nav-button2");
const contactNavButton = document.getElementById("nav-button3");
const slideShow_div = document.getElementById("inner");


var headerTypeText = `console.log("Hello, I am Demetrius.")`;
var textCount = 0;
const headerText = "Hello, I am Demetrius.";
var typingEffect_div = document.getElementById('typingEffect');
const spaceMovement_div = document.getElementById('space');
const boosterPanel_div = document.getElementById('booster-panel');
const discordBot_div = document.getElementById('discord-bot');
const boosterPanelExit = document.getElementById('cross-exit');
const discordBotExit = document.getElementById('cross-exit1');
const boosterBigScreen_div = document.getElementById('work-booster-panel');
const discordBotBigScreen_div = document.getElementById('work-discord-bot-panel');



function animateText(){
    if(textCount < headerTypeText.length){
        typingEffect_div.innerHTML += headerTypeText.charAt(textCount);
        textCount++;
        setTimeout(animateText, 60);
    }

}



function main(){
    aboutNavButton.addEventListener('click', function(){
        slideShow_div.style.margin = "0 0 0 0";
    })
    workNavButton.addEventListener('click', function(){
        slideShow_div.style.margin = "0 0 0 -33%";
    })
    contactNavButton.addEventListener('click', function(){
        slideShow_div.style.margin = "0 0 0 -66%";
    })
    boosterPanel_div.addEventListener('click', function(){
        boosterBigScreen_div.style.visibility = "visible";
        boosterBigScreen_div.style.zIndex = "999";
    })
    boosterPanelExit.addEventListener('click', function(){
        boosterBigScreen_div.style.visibility = "hidden";
        boosterBigScreen_div.style.zIndex = "-3";
    })
    discordBot_div.addEventListener('click', function(){
        discordBotBigScreen_div.style.visibility = "visible";
        discordBotBigScreen_div.style.zIndex = "999";
    })
    discordBotExit.addEventListener('click', function(){
        discordBotBigScreen_div.style.visibility = "hidden";
        discordBotBigScreen_div.style.zIndex = "-3";
    })
}
main ();
animateText();
