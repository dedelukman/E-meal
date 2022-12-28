/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
class DataSource {
  static tagsList() {
    return fetch('https://themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject('tags is not found');
        }
      });
  }

  static popularList() {
    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=o')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject('item is not found');
        }
      });
  }

  static defaultList() {
    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject('item is not found');
        }
      });
  }

  static categoryList() {
    return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject('item is not found');
        }
      });
  }

  static searchMeal(keyword) {
    return fetch(
      // eslint-disable-next-line comma-dangle
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static filterByCategory(keyword) {
    return fetch(
      // eslint-disable-next-line comma-dangle
      `www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
