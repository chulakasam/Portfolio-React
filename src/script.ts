const words = document.querySelectorAll<HTMLElement>(".word");

words.forEach((word) => {
    const textContent = word.textContent || "";
    const letters = textContent.split("");
    word.textContent = "";

    letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
const maxWordIndex = words.length - 1;

if (words[currentWordIndex]) {
    words[currentWordIndex].style.opacity = "1";
}

const changeText = (): void => {
    const currentWord = words[currentWordIndex];
    const nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    if (currentWord && nextWord) {
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                (letter as HTMLElement).classList.add("out");
            }, i * 80);
        });

        nextWord.style.opacity = "1";

        Array.from(nextWord.children).forEach((letter, i) => {
            (letter as HTMLElement).classList.add("behind");
            setTimeout(() => {
                (letter as HTMLElement).classList.add("in");
            }, 340 + i * 80);
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    }
};

changeText();
setInterval(changeText, 3000);
