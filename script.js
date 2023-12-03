document.addEventListener("DOMContentLoaded", function () {
	const lyrics = ["Hii, aninnn", "i miss u...", "ga hoak, asli, ga boong ini"];

	const delay = 100;
	const lyricsElement = document.getElementById("lyrics");

	async function displayLyrics() {
		while (true) {
			for (const line of lyrics) {
				for (const char of line) {
					lyricsElement.textContent += char;
					await new Promise((resolve) => setTimeout(resolve, delay));
				}

				lyricsElement.innerHTML += "<br>";

				await new Promise((resolve) => setTimeout(resolve, delay * 10));

				lyricsElement.innerHTML = "";

				await new Promise((resolve) => setTimeout(resolve, delay * 10));
			}
		}
	}

	displayLyrics();
});
