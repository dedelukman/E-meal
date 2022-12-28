class PopularList extends HTMLElement {
  set items(items) {
    // eslint-disable-next-line no-underscore-dangle
    this._items = items;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h4 class="fst-italic">Popular Meals</h4>     
    `;
    // eslint-disable-next-line no-underscore-dangle
    this._items.forEach((item) => {
      this.innerHTML += ` 
      <div class="mb-4">
      <a  class="d-inline-block">
      <h4 class="h6" id=${item.idMeal}>${item.strMeal} </h4>
      <img
        class="card-img"
        src="${item.strMealThumb}"
        alt=""
        id=${item.idMeal}
      />
    </a>
    <time class="timeago" datetime="2021-09-03 20:00" timeago-id="5" id=${item.idMeal}
      >1 year ago</time
    >
    in ${item.strCategory}    
      `;
    });
  }

  renderError(message) {
    this.innerHTML = `
     <h4 class="fst-italic">Popular Stories</h4>
    `;
    this.innerHTML += `
    <a href="post-image.html" class="d-inline-block">
     ${message}
    </a>   
    `;
  }
}

customElements.define('popular-list', PopularList);
