class AboutItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="p-4 mb-3 bg-light rounded">
    <h4 class="fst-italic">About</h4>
    <p class="mb-0">
      Customize this section to tell your visitors a little bit about
      your publication, writers, content, or something else entirely.
      Totally up to you.
    </p>
  </div>
      `;
  }
}

customElements.define('about-item', AboutItem);
