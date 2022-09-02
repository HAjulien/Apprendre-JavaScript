const typingText = document.querySelector(".typing-text p"),
inputField = document.querySelector(".wrapper .input-field"),
mistakesTag = document.querySelector(".mistake span"),
timetag = document.querySelector(".time span b"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span"),
tryAgainBtn = document.querySelector("button");

let timer,
maxTime = 20,
timeLeft = maxTime,
charIndex = mistakes = 0,
isTyping = false;

function SetChrono(){
    maxTime = maxTime,
    timeLeft = maxTime,
    charIndex = mistakes = 0,
    isTyping = false;
    timetag.innerText = maxTime;
}

function randomParagraphs(){
    typingText.innerHTML = "";
    let randomIndex =  Math.floor(Math.random() * paragraphs.length);
    paragraphs[randomIndex].split("").forEach( span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    //focusing input field on keydown
    document.addEventListener("keydown", () => inputField.focus());
    typingText.addEventListener("click", () => inputField.focus());
}

function iniTimer(){
    if (timeLeft >0 ){
        timeLeft --;
        timetag.innerText = timeLeft;
    } else{
        clearInterval(timer);
    }
}

function iniTyping (){
    const characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];
    if(timeLeft <= 0) {
        inputField.value = "";
        return
    }
    if (!isTyping){
        timer = setInterval(iniTimer, 1000);
        isTyping = true;
    }
    //console.log(characters[charIndex].innerText);
    //console.log(typedChar);

    if (typedChar === undefined){
        charIndex--;
        if(characters[charIndex].classList.contains("incorrect")) mistakes--;
        characters[charIndex].classList.remove("correct", "incorrect");
    } else {
        if(characters[charIndex].innerText === typedChar){
            characters[charIndex].classList.add("correct");
        }else{
            mistakes++;
            characters[charIndex].classList.add("incorrect");
        }
        charIndex++;
    }
    //characters[charIndex].classList.remove("active");
    characters.forEach( span => span.classList.remove('active'));
    characters[charIndex].classList.add("active");

    let wpm = Math.round( (((charIndex - mistakes) / 5) / (maxTime - timeLeft)) * 60 );
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    mistakesTag.innerText = mistakes;
    wpmTag.innerText = wpm;
    cpmTag.innerText = charIndex - mistakes; //mistakes doesn't count
}

function resetGame(){
    randomParagraphs();
    inputField.value = "";
    clearInterval(timer);
    SetChrono();
    mistakesTag.innerText = 0;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
}


randomParagraphs();
SetChrono();

inputField.addEventListener("input", iniTyping);
tryAgainBtn.addEventListener("click", resetGame);