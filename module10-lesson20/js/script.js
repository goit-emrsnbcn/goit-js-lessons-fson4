//script.js

import { getNews, resetPage } from "./NewsApi.js";
import { getButton, enable, disable, hide, show } from "./LoadMoreBtn.js";

const formEl = document.getElementById("form");
const articlesWrapperEl = document.getElementById("articlesWrapper");
const loadMoreBtn = getButton("#loadMoreBtn");

hide(loadMoreBtn);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();

	const form = e.target;
	const searchQuery = form.elements.news.value.trim();
	clearNewsList();
	const nextPage = resetPage();
	show(loadMoreBtn);

	fetchNews(searchQuery, nextPage);
}

function fetchNews(searchQuery, queryPage) {
	disable(loadMoreBtn);
	return getNews(searchQuery, queryPage)
		.then(({ data, nextPage }) => {
			const { articles } = data;

			if (articles.length === 0) throw new Error("No articles found");
			let markup = articles.map(createMarkUp);
			updateNewsList(markup);
			enable(loadMoreBtn, nextPage);
		})
		.catch(onError);
}

function createMarkUp({ author, title, description, url, urlToImage }) {
	return `
        <div class="article-card">
            <h2 class="article-title">${title}</h2>
            <h3 class="article-author">${author || "Anonym"}</h3>
            <img src=${urlToImage} class="article-img">
            <p class="article-description">${description}</p>
            <a href=${url} class="article-link" target="_blank">Read more</a>
        </div>
        `;
}

function clearNewsList() {
	articlesWrapperEl.innerHTML = "";
}

function updateNewsList(markup) {
	articlesWrapperEl.insertAdjacentHTML("beforeend", markup);
}

function onError() {
	updateNewsList("<p>Articles not found</p>");
}

function handleLoadMore() {
	const form = document.getElementById("form");
	const searchQuery = form.elements.news.value.trim();
	const nextPage = parseInt(loadMoreBtn.dataset.page, 10);

	fetchNews(searchQuery, nextPage);
}

loadMoreBtn.addEventListener("click", handleLoadMore);
