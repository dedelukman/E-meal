class PopularList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="p-4">
    <h4 class="fst-italic">Popular Stories</h4>

    <a href="post-image.html" class="d-inline-block">
      <h4 class="h6">The blind man</h4>
      <img
        class="card-img"
        src="https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg"
        alt=""
      />
    </a>
    <time class="timeago" datetime="2021-09-03 20:00" timeago-id="5"
      >1 year ago</time
    >
    in Lifestyle

    <a href="post-image.html" class="d-inline-block mt-3">
      <h4 class="h6">Crying on the news</h4>
      <img
        class="card-img"
        src="https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg"
        alt=""
      />
    </a>
    <time class="timeago" datetime="2021-07-16 20:00" timeago-id="6"
      >1 year ago</time
    >
    in Work
  </div>
          `;
  }
}

customElements.define('popular-list', PopularList);
