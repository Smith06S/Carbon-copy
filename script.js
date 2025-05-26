/* Change the order of the pictures when clicking on the pictures */
function switchImage() {
    // gets the first and last image
    var img1 = document.getElementById("img1"); 
    var img2 = document.getElementById("img2");

    // swithches the first and last image
    var tempSrc = img1.src; 
    img1.src = img2.src;    
    img2.src = tempSrc;     
}

/* When clicking on the "Introduce yourself" button, get the text typed in the input and display it in the middle 
of the following sentence: "Nice to meet you [put here the input data] 👋! Thanks for introducing yourself." */
function getName() {
    var name = document.getElementById("UserName").value; // gets the name given by the user
    var contactSection = document.querySelector("#contact");

    // makes the <input> and <button> elements disappear 
    document.getElementById("UserName").style.display = "none"; 
    document.querySelector("#contact button").style.display = "none";

    // chnge the content of the <p>
    document.querySelector("#contact p").innerText = "Nice to meet you " + name + " 👋! Thanks for introducing yourself.";
}

/* It opens a modal window that will show the whole article */
function article(title, dateLocation, text) {
    // gets the elements to display
    var overlay = document.getElementById("articleOverlay");

    // makes the modal show
    overlay.style.display = "block";

    // prevents the scrolling on the back
    document.body.classList.add("no-scroll");

    // creates the button close with an id and the closeOverlay event
    var closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.innerText = "close";
    closeButton.onclick = closeOverlay;

    // creates the main content for the article
    var articleBox = document.createElement("div");
    articleBox.id = "articleBox";
    articleBox.innerHTML = `
    <section class="alignment-controls">
        <p>Alignement</p>
        <p onclick="setAlignment('center')">Center</p>
        <p onclick="setAlignment('left')">Left</p>
    </section>
    <h2 id="title">${title}</h2>
    <h3 id="date">${dateLocation}</h3>
    <p id="text">${text}</p>
`;

    overlay.innerHTML = "";  // clears any previous content inside the overlay to prevent duplication

    // appends the close button and article box to the overlay
    overlay.appendChild(closeButton); 
    overlay.appendChild(articleBox); 
}

/* Closed the modal */
function closeOverlay() {
    document.getElementById("articleOverlay").style.display = "none"; // hide the overlay
    document.body.classList.remove("no-scroll"); // re-enable scrolling on the main page
}

// Listen for Escape key to close the overlay
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeOverlay();
    }
});

/* Change the text alignment */
function setAlignment(alignment) {
    // gives the right alignement to the title, date and text elements
    document.getElementById("title").style.textAlign = alignment;
    document.getElementById("date").style.textAlign = alignment;
    document.getElementById("text").style.textAlign = alignment;
}

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteRandom").innerText = quotes[randomIndex];
}

setInterval(() => { location.reload(); }, 10000) // reloads the window every 10 seconds 

// list of all the quotes of the header
const quotes = ["Che confusione, sarà perché ti amo è un emozione, che cresce piano piano stringimi forte e stammi più vicino se ci sto bene sarà perché ti amo io canto al ritmo del dolce tuo respiro è primavera, sarà perché ti amo cade una stella...", "E vola vola si sa, sempre più in alto si va e vola vola con me, il mondo è matto perché e se l'amore non c'è basta una sola canzone, per far confusione fuori e dentro di te. E vola vola si va, sempre più in alto si va e vola vola con me...", "E se l'amore non c'è basta una sola canzone, per far confusione fuori e dentro di te. Ma dopo tutto, che cosa c'è di strano è una canzone, sarà perché ti amo se cade il mondo, allora ci spostiamo se cade il mondo... ", "Stringimi forte e stammi più vicino e così bello che non mi sembra vero se il mondo è matto che cosa c'è di strano matto per matto, almeno noi ci amiamo. E vola vola si sa, sempre più in alto si va e vola vola con me... ", "se l'amore non c'è basta una sola canzone, per far confusione fuori e dentro di te. E vola vola si sa, sarà perché ti amo e vola vola con me e stammi più vicino e se l'amore non c'è ma dimmi dove siamo che confusione... "];
window.onload = displayRandomQuote;  // gives a random quote from the list to the header


