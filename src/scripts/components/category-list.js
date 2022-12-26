class CategoryList extends HTMLElement {
  set items(items) {
    // eslint-disable-next-line no-underscore-dangle
    this._items = items;
    this.render();
  }

  render() {
    // eslint-disable-next-line no-underscore-dangle
    this._items.forEach((item) => {
      this.innerHTML += ` 
      <li><a class="dropdown-item" href="#">${item.strCategory}</a></li>
      `;
    });
  }

  renderError(message) {
    this.innerHTML = `
    <li><a class="dropdown-item" href="#">${message}</a></li>
    `;
  }
}

customElements.define('category-list', CategoryList);
