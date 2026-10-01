/* =========================================
   YOUR 56 REASONS
========================================= */

const reasons = [

    "You are innocent",

    "You are cute",

    "You make me happy",

    "You are handsome",

    "You make my everyday more beautiful and worth it",

    "You are way too hot",

    "You respect me a lot",

    "You care for me",

    "You blush a lot",

    "You are funny",

    "You are peace",

    "You feel like home",

    "You feel like a place where I can be myself",

    "You are my baby",

    "You are very kind",

    "You love bhaiya and Payal so much",

    "You make me blush a lot",

    "The way you are sarcastic",

    "Because of your vibe",

    "The vibe you carry",

    "The beautiful eyes jisme koi bhi doob jaaye you have",

    "You are a gift given by God to me",

    "The way you feel things",

    "The way you think",

    "You call me by nicknames",

    "You feel like comfort",

    "You feel like a safe place ki with you I am safe no matter what",

    "You help me bahut saara",

    "Aapki kapdo ki choice acchi hai, vese toh khaane ki bhi",

    "You would never raise your voice near me",

    "The way you check upon me thode thode time mein",

    "Bahut next level gazab bezzati karte ho aap insaano ki",

    "Mujhse darte bhi ho",

    "Meri baat bhi maante ho",

    "Meri chatar patar bhi sunte ho",

    "Romantic but anti romantic ho",

    "Because aapki fantasy hai kiss in the rain",

    "Bahut pyaare se acche se mann karta rehta hai aapko hug karne ka",

    "The way you respect my choices",

    "Vese toh kharab hee yadaash hai aapki par kaafi kuch kuch yaad reh bhi jaata hai aapko",

    "Mere bina bataye mujhe bahut acche se samajh jaana",

    "Always being there for me",

    "Doing the things I love",

    "You look like carved by Greek God",

    "That day Ye Jawaani Hai Deewani ka reference dena",

    "Including me and ask about me in everything",

    "Mere itne saare sawalo ka jawab dena",

    "Mafia jese hona",

    "Kind of possessive bhi hona for me",

    "Understanding me on your own and genuinely making promises",

    "Kyuki main aapko samajhdaar lagti hu",

    "You trust me",

    "Hum dono ki thinking in a way same hona, aap mere jaise lagte ho mujhe in some things",

    "Humara different hona, more of opposite hona, in a way we complete each other",

    "Because you are you, and no one in the whole galaxy can ever be the way you are",

    "Because You Are Mine To Love And Cherish Forever"

];


/* =========================================
   VARIABLES
========================================= */

let currentReason = 0;

const note = document.getElementById("note");
const reasonText = document.getElementById("reasonText");
const currentNumber = document.getElementById("currentNumber");
const reasonButton = document.getElementById("reasonButton");


/* =========================================
   SCREEN CHANGING
========================================= */

function showScreen(number) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    if (number === 2) {
        document.getElementById("screen2").classList.add("active");
    }

    if (number === 3) {
        document.getElementById("screen3").classList.add("active");
    }

}


/* =========================================
   SHOW NEXT REASON
========================================= */

function showReason() {

    if (currentReason >= reasons.length) {
        showFinalScreen();
        return;
    }

    currentReason++;

    reasonText.textContent = reasons[currentReason - 1];

    currentNumber.textContent = currentReason;

    note.classList.remove("change");

    void note.offsetWidth;

    note.classList.add("change");


    /* After reason 56 */

    if (currentReason === reasons.length) {

        reasonButton.textContent = "One last thing... ❤️";

    }

}


/* =========================================
   FINAL SCREEN
========================================= */

function showFinalScreen() {

    document.getElementById("screen3").classList.remove("active");

    document.getElementById("finalScreen").classList.add("active");

}