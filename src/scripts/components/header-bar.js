class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="p-3 mb-3 border-bottom">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            ><h2>TEST</h2></a
          >
          <ul
            class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
          >
            <li>
              <a href="/" data-navigo class="nav-link px-2 link-secondary"
                >Home</a
              >
            </li>
            <li>
              <a href="/categories" data-navigo class="nav-link px-2 link-dark"
                >Categories</a
              >
            </li>
            <li>
              <a href="/about" data-navigo class="nav-link px-2 link-dark"
                >About</a
              >
            </li>
            <li>
              <a href="/contact" data-navigo class="nav-link px-2 link-dark"
                >Contact</a
              >
            </li>
          </ul>
          <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </header>
    `;
  }
}

customElements.define('header-bar', HeaderBar);
