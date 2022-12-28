class ArticleList extends HTMLElement {
  set items(items) {
    // eslint-disable-next-line no-underscore-dangle
    this._items = items;
    this.render();
  }

  render() {
    this.innerHTML = `
        `;
    // eslint-disable-next-line no-underscore-dangle
    this._items.forEach((item) => {
      this.innerHTML += ` 
      <article class="blog-post">
    <h2 class="blog-post-title mb-1">${item.strMeal}</h2>
    <p class="blog-post-meta">
      Category - ${item.strCategory} , Origin - ${item.strArea} 
    </p>
    <a >
      <img
        class="card-img"
        src="${item.strMealThumb}"
        alt=""
      />
    </a>
    <p>
     ${item.strInstructions}
    </p>
  </article>
      `;
    });
  }

  renderError(message) {
    this.innerHTML = `
    <a >
     ${message}
    </a>   
    `;
  }
}

customElements.define('article-list', ArticleList);
