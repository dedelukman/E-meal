class TagsList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="p-4">
    <h4 class="fst-italic">Tags</h4>
    <a class="btn btn-light btn-sm mb-1" href="page-category.html"
      >Journey</a
    >
    <a class="btn btn-light btn-sm mb-1" href="page-category.html"
      >Work</a
    >
    <a class="btn btn-light btn-sm mb-1" href="page-category.html"
      >Lifestype</a
    >
    <a class="btn btn-light btn-sm mb-1" href="page-category.html"
      >Photography</a
    >
    <a class="btn btn-light btn-sm mb-1" href="page-category.html"
      >Food &amp; Drinks</a
    >
  </div>
        `;
  }
}

customElements.define('tags-list', TagsList);
