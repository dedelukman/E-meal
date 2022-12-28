class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    // eslint-disable-next-line no-underscore-dangle
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
    <div class="d-flex" role="search">
    <input
      class="form-control me-2"
      type="search"
      id="searchElement"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" type="submit" id="searchButtonElement">
      Search
    </button>
  </div>
        `;

    this.querySelector('#searchButtonElement')
      // eslint-disable-next-line no-underscore-dangle
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
