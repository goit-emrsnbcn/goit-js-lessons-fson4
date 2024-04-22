const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "6751ad3df7d343859c1afe420864ea35";

export function getNews(query) {
	return fetch(`${BASE_URL}?q=${query}&apiKey=${API_KEY}`).then((res) => {
		if (!res.ok) {
			throw new Error(res.status);
		} else {
			return res.json();
		}
	});
}
