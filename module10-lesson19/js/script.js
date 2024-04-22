import { getNews } from "./news-api.js";

let formEl = document.getElementById("form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();

	let form = e.target;
	const topic = form.elements.news.value;

	getNews(topic)
		.then((data) => {
			const { articles } = data;

			if (articles.length === 0) throw new Error("No articles found");

			// return articles.map((article) => createMarkUp(article));
			return articles.map(createMarkUp);
		})
		.then(updateNewsList)
		.catch(onError)
		.finally(() => form.reset());
}

function createMarkUp({ author, title, description, url, urlToImage }) {
	return `
        <div class='article-card'>
            <h2 class="article-title">${title}</h2>
            <h3 class="article-author">${author}</h3>
            <img src='${urlToImage}' class="article-img"/>
            <p class="article-description">${description}</p>
            <a href="${url}" class="article-link" target="_blank">Read more</a>
        </div>
    `;
}

function updateNewsList(markup) {
	document.getElementById("articlesWrapper").innerHTML = markup;
}

function onError() {
	updateNewsList("<p>No articles found</p>");
}
