const typingElement = document.querySelector(".typing");
const typingContent = typingElement.textContent;

typingElement.textContent = "";

let i = 0;
const intervalId = setInterval(() => {
    typingElement.textContent += typingContent.charAt(i);
    i++;
    if (i >= typingContent.length) {
        clearInterval(intervalId);
    }
}, 10);