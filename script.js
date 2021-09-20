let type = "";
let name = "";
let mood = 100;
let hunger = 100;
let thirst = 100;
let health = 100;
let tiredness = 100;

const submit = document.querySelector("#submit");
const chooseSection = document.querySelector("#choose");
const mainSection = document.querySelector("#main");

const playButton = document.querySelector("#play");
const moodText = document.querySelector("#moodtext");
const feedButton = document.querySelector("#feed");
const hungerText = document.querySelector("#hungertext");
const drinkButton = document.querySelector("#drink");
const thirstText = document.querySelector("#thirsttext");
const sleepbutton = document.querySelector("#sleep");
const tirednessText = document.querySelector("#tirednesstext");
const healthText = document.querySelector("#healthtext");




submit.addEventListener("click", () =>{
    type = document.querySelector('input[name="type"]:checked').value;
    if (document.querySelector('input[value="Dog"]:checked')) {
        document.getElementById("Staffy").style.visibility = "visible";
    };
    
    if (document.querySelector('input[name="type"]:checked') == document.getElementById("cat")) {
        document.getElementById("Tigger").style.visibility = "visible";
    };
    
    if (document.querySelector('input[name="type"]:checked') == document.getElementById("rabbit")) {
        document.getElementById("Bunny").style.visibility = "visible";
    };
    name = document.querySelector('#name').value;
    chooseSection.style.visibility = "hidden";
    chooseSection.style.visibility = "0px";
    mainSection.style.visibility = "visible";
    document.querySelector("#heading").textContent = name;
    window.setInterval(()=> {
        if (hunger > 0) {
            hunger--;
        }
        if (thirst > 0) {
            thirst--;
        }
        if (tiredness > 0) {
            tiredness--;
        }
        if (mood > 0) {
            mood--;
        }
        if (mood > 50) {
            moodText.textContent = "mood: happy";
        }else {
            hungerText.textContent = "mood: bored";
        }
        if((hunger == 0 || thirst == 0 || mood == 0 || tiredness == 0) && health > 0) {
            health--;
        } else if(health < 100 && health > 0) {
            health++;
        }
        healthText.textContent = `health: ${health}`;
        hungerText.textContent = `hunger: ${hunger}`;
        thirstText.textContent = `thirst: ${thirst}`;
        tiredness.textContent = `tiredness: ${tiredness}`;
        if(health == 0) {
            health = 0
            moodText.textContent = "mood: dead";
            hungerText.textContent = "hunger: 0";
            thirstText.textContent = "thirst: 0";
            tirednessText.textContent = "tiredness: 0";
        }
    }, 1000)
});

playButton.addEventListener("click", () => {
    if (health > 0){
        mood = 100;
        tiredness += 10;
        if(tiredness < 0) {
            tiredness = 0
        }
            moodText.textContent = "mood: happy";
        } else {
            moodText.textContent = "mood: bored";
        }
        tirednessText.textContent = `tiredness: ${tiredness}`;
    }
)

feedButton.addEventListener("click", () => {
    if (health > 0) {
        hunger = 100;
        thirst += 10;
        if(thirst < 0) {
            thirst = 0
        }
        hungerText.textContent = `hunger: ${hunger}`;
        thirstText.textContent = `thirst: ${thirst}`;
    }
});

drinkButton.addEventListener("click", ()=> {
    if (health > 0) {
        thirst = 100;
        mood += 10;
        if (mood < 0){
            mood = 0
        }
        thirstText.textContent = `thirst: ${thirst}`;
        if(mood > 50){
            moodText.textContent = "mood: happy";
        } else {
            moodText.textContent = "mood: bored";
        }
}
});

sleepbutton.addEventListener("click", () => {
    if (health > 0){
        tiredness = 100;
        hunger = 30;
        thirst = 30;
        if (hunger < 0){
            hunger = 0
        }
        if (thirst < 0){
            thirst = 0
        }
        tiredness.textContent = `tiredness: ${tiredness}`;
        hungerText.textContent = `hunger: ${hunger}`;
        thirstText.textContent = `thirst: ${thirst}`;
    }
});

