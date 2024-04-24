const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "6751ad3df7d343859c1afe420864ea35";

export function getNews(searchQuery, queryPage) {
	const url = `${BASE_URL}?q=${searchQuery}&pageSize=5&page=${queryPage}`;

	return fetch(url, {
		headers: {
			"X-Api-Key": API_KEY,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			return { data, nextPage: queryPage + 1 };
		});
}

export function resetPage() {
	return 1;
}
