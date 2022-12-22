class ArticleList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="blog-post">
    <h2 class="blog-post-title mb-1">Sample blog post</h2>
    <p class="blog-post-meta">
      January 1, 2021 by <a href="#">Mark</a>
    </p>
    <a href="post-image.html">
      <img
        class="card-img"
        src="https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
        alt=""
      />
    </a>
    <p>
      This is some additional paragraph placeholder content. It has been
      written to fill the available space and show how a longer snippet
      of text affects the surrounding content. We'll repeat it often to
      keep the demonstration flowing, so be on the lookout for this
      exact same string of text.
    </p>
  </article>
  <article class="blog-post">
    <h2 class="blog-post-title mb-1">Sample blog post</h2>
    <p class="blog-post-meta">
      January 1, 2021 by <a href="#">Mark</a>
    </p>
    <a href="post-image.html">
      <img
        class="card-img"
        src="https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg"
        alt=""
      />
    </a>
    <p>
      This is some additional paragraph placeholder content. It has been
      written to fill the available space and show how a longer snippet
      of text affects the surrounding content. We'll repeat it often to
      keep the demonstration flowing, so be on the lookout for this
      exact same string of text.
    </p>
  </article>
  <article class="blog-post">
    <h2 class="blog-post-title mb-1">Sample blog post</h2>
    <p class="blog-post-meta">
      January 1, 2021 by <a href="#">Mark</a>
    </p>
    <a href="post-image.html">
      <img
        class="card-img"
        src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg"
        alt=""
      />
    </a>
    <p>
      This is some additional paragraph placeholder content. It has been
      written to fill the available space and show how a longer snippet
      of text affects the surrounding content. We'll repeat it often to
      keep the demonstration flowing, so be on the lookout for this
      exact same string of text.
    </p>
  </article>
        `;
  }
}

customElements.define('article-list', ArticleList);
