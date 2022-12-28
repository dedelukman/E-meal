class TagsList extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  set tags(tags) {
    // eslint-disable-next-line no-underscore-dangle
    this._tags = tags;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h4 class="fst-italic">Tags</h4>
    `;
    // eslint-disable-next-line no-underscore-dangle
    this._tags.forEach((tag) => {
      this.innerHTML += `
      <a class="btn btn-light btn-sm mb-1" 
      >${tag.strArea}</a>
      `;
    });
  }

  renderError(message) {
    this.innerHTML = `
    <h4 class="fst-italic">Tags</h4>
    `;
    this.innerHTML += `
    <a class="btn btn-light btn-sm mb-1" "
    >${message}</a>
    `;
  }
}

customElements.define('tags-list', TagsList);
