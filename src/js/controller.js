import * as model from './model.js';
import darkModeView from './views/darkModeView.js';
import publishView from './views/publishView.js';
import deleteView from './views/deleteView.js';
import articleView from './views/articleView.js';
import bookmarkView from './views/bookmarkView.js';
import editView from './views/editView.js';
import sortView from './views/sortView.js';

// -- Article logic
const controlArticles = function () {
   articleView.upload(
      model.state.articles,
      controlAddArticle,
      controlArticleHandler
   );
   articleView.returnToPreviews(model.state.articles, controlArticleHandler);
   articleView.observer();
};
const controlArticleHandler = function (articleData, articleH2) {
   model.updateArticle(articleData, articleH2);
};

const controlAddArticle = function () {
   model.addArticle(articleView.article, articleView.preview);
};

const controlDeleteArticle = function () {
   model.deleteArticle(deleteView.articleH2text);
};

const renderArticlesOnLoad = function () {
   // - Render article previews
   model.state.previews?.map((item) => articleView.renderPreview(item));

   // - Render articles
   model.state.articles?.map((item) => articleView.renderArticle(item));
   articleView.hideArticlesOnLoad(model.state.articles);
};

// -- Bookmark logic
const controlBookmarks = function () {
   bookmarkView.createBookmark(controlAddBookmark, controlRemoveBookmark);
   bookmarkView.toggleDropdown(model.state.bookmarks);
};

const controlAddBookmark = function () {
   model.addBookmark(bookmarkView.articleH2);
   bookmarkView.renderBookmarks(model.state.bookmarks);
};

const controlRemoveBookmark = function () {
   model.removeBookmark(bookmarkView.articleH2);
};

const controlRemoveBookmarkOnDelete = function () {
   model.removeBookmarkOnDelete(deleteView.articleH2text);
};

const renderBookmarksOnLoad = function () {
   bookmarkView.renderBookmarks(model.state.bookmarks);
   bookmarkView.persistBookmarkIcon(model.state.articles);
};

// -- Edit logic
const controlEdit = function () {
   editView.showEditModal(controlEditHandler, model.state.articles);
};

const controlEditHandler = function () {
   model.updateArticle(editView.data, editView.articleH2);
};

// -- Sorting logic
const controlSort = function () {
   sortView.sortByTag(model.state.previews, controlSortHandler);
};

const controlSortHandler = function () {
   model.persistSorting(sortView.selectedTag);
};

// -- Dark mode logic
const controlDarkMode = function () {
   darkModeView.loadTheme();
   darkModeView.toggleTheme();
};

// -- Publish modal logic
const controlPublish = function () {
   publishView.showPublishModal();
   publishView.exitPublishModal();
};

// -- Delete data from state
const controlDelete = function () {
   deleteView.deleteArticleMarkup(
      model.state.previews,
      controlDeleteArticle,
      controlRemoveBookmarkOnDelete
   );
   deleteView.deleteMessageOnLoad(model.state.articles);
};

const init = function () {
   renderArticlesOnLoad();
   renderBookmarksOnLoad();
   controlArticles();
   controlBookmarks();
   controlEdit();
   controlSort();
   controlPublish();
   controlDelete();
   controlDarkMode();
};
init();
