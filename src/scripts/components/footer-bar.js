class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="py-3 mt-4 bg-light">
   
    <p class="text-center text-muted">
      Dede Lukmanul Hakim © 2022 Lintasarta Cloudeka Digischool
    </p>
  </footer>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
