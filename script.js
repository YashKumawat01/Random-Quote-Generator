const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("btn");

const JSON_FILE = "quotes.json"; // Load quotes from local file

// Function to fetch and display a quote
const fetchQuote = async () => {
    try {
        const response = await fetch(JSON_FILE);
        if (!response.ok) throw new Error("Failed to load quotes");

        const quotes = await response.json();
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        quoteText.innerText = `"${randomQuote.content}"`;
        authorText.innerText = `- ${randomQuote.author}`;
    } catch (error) {
        quoteText.innerText = "Oops! Something went wrong.";
        authorText.innerText = "";
        console.error("Error fetching quote:", error);
    }
};

// Load a quote on page load
window.addEventListener("load", fetchQuote);

// Fetch new quote on button click
button.addEventListener("click", fetchQuote);
