// Function to fetch a random quote
function fetchQuote() {
	fetch("https://api.quotable.io/random")
		.then((response) => response.json())
		.then((data) => {
			const quoteText = document.getElementById("quoteText");
			const author = document.getElementById("author");

			quoteText.textContent = `"${data.content}"`;
			author.textContent = `- ${data.author}`;
		})
		.catch((error) => console.error("Error fetching quote:", error));
}

// Initial quote fetch
fetchQuote();

// Event listener for the "New Quote" button
document.getElementById("newQuoteBtn").addEventListener("click", fetchQuote);
