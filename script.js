function switchImage() {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");

    let tempSrc = img1.src; 
    img1.src = img2.src;    
    img2.src = tempSrc;     
}

function getName() {
    let name = document.getElementById("UserName").value;
    let contactSection = document.querySelector("#contact");

    document.getElementById("UserName").style.display = "none";
    document.querySelector("#contact button").style.display = "none";
    document.querySelector("#contact p").style.display = "none";

    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Nice to meet you " + name + " 👋! Thanks for introducing yourself.";

    contactSection.appendChild(newParagraph); 
}


function article(title, dateLocation, text) {
    let overlay = document.getElementById("articleOverlay");
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");

    let closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.innerText = "Chiudi";
    closeButton.onclick = closeOverlay;

    let articleBox = document.createElement("div");
    articleBox.id = "articleBox";
    articleBox.innerHTML = `
    <p>Alignement</p>
    <p onclick="setAlignment('center')">Center</p>
    <p onclick="setAlignment('left')">Left</p>
    <h2 id="title">${title}</h2>
    <h3 id="date">${dateLocation}</h3>
    <p id="text">${text}</p>
`;

    overlay.innerHTML = ""; 
    overlay.appendChild(closeButton); 
    overlay.appendChild(articleBox); 
}


function closeOverlay() {
    document.getElementById("articleOverlay").style.display = "none";
    document.body.classList.remove("no-scroll"); 
}


function setAlignment(alignment) {
    document.getElementById("title").style.textAlign = alignment;
    document.getElementById("date").style.textAlign = alignment;
    document.getElementById("text").style.textAlign = alignment;
}

setInterval(() => { location.reload(); }, 10000)

const quotes = ["Che confusione, sarà perché ti amo è un emozione, che cresce piano piano stringimi forte e stammi più vicino se ci sto bene sarà perché ti amo io canto al ritmo del dolce tuo respiro è primavera, sarà perché ti amo cade una stella...", "E vola vola si sa, sempre più in alto si va e vola vola con me, il mondo è matto perché e se l'amore non c'è basta una sola canzone, per far confusione fuori e dentro di te. E vola vola si va, sempre più in alto si va e vola vola con me...", "E se l'amore non c'è basta una sola canzone, per far confusione fuori e dentro di te. Ma dopo tutto, che cosa c'è di strano è una canzone, sarà perché ti amo se cade il mondo, allora ci spostiamo se cade il mondo... ", "Stringimi forte e stammi più vicino e così bello che non mi sembra vero se il mondo è matto che cosa c'è di strano matto per matto, almeno noi ci amiamo. E vola vola si sa, sempre più in alto si va e vola vola con me... ", "se l'amore non c'è basta una sola canzone, per far confusione fuori e dentro di te. E vola vola si sa, sarà perché ti amo e vola vola con me e stammi più vicino e se l'amore non c'è ma dimmi dove siamo che confusione... "];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteRandom").innerText = quotes[randomIndex];
}

window.onload = displayRandomQuote;

