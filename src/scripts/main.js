/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import './components/search-bar';
import './components/footer-bar';
import './components/about-item';
import './components/tags-list';
import './components/popular-list';
import './components/article-list';
import './components/category-list';
import DataSource from './data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const tagListElement = document.querySelector('tags-list');
  const popularListElement = document.querySelector('popular-list');
  const articleListElement = document.querySelector('article-list');
  const categoryListElement = document.querySelector('category-list');

  const getTagsList = async () => {
    tagListElement.tags = await DataSource.tagsList();
  };

  const getPopularList = async () => {
    popularListElement.items = await DataSource.popularList();
  };

  const getDefaultList = async () => {
    articleListElement.items = await DataSource.defaultList();
  };

  const getCategoryList = async () => {
    categoryListElement.items = await DataSource.categoryList();
  };

  const onButtonSearchClicked = async () => {
    articleListElement.items = await DataSource.searchMeal(searchElement.value);
  };

  const onfilterByCategoryClicked = async (category) => {
    articleListElement.items = await DataSource.filterByCategory(category);
  };

  const onfilterByTagClicked = async (tag) => {
    articleListElement.items = await DataSource.filterByTag(tag);
  };

  const onPopularClicked = async (popular) => {
    articleListElement.items = await DataSource.getPopular(popular);
  };

  getTagsList();
  getPopularList();
  getDefaultList();
  getCategoryList();

  searchElement.clickEvent = onButtonSearchClicked;

  categoryListElement.addEventListener('click', (event) => {
    onfilterByCategoryClicked(event.target.text);
  });

  tagListElement.addEventListener('click', (event) => {
    onfilterByTagClicked(event.target.text);
  });

  popularListElement.addEventListener('click', (event) => {
    onPopularClicked(event.target.id);
  });
};

export default main;
