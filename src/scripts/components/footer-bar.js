class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="py-3 mt-4 bg-light">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Categories</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Contact</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">About</a>
      </li>
    </ul>
    <p class="text-center text-muted">
      Dede Lukmanul Hakim © 2022 Lintasarta Cloudeka Digischool
    </p>
  </footer>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
