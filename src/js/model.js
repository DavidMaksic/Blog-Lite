export const state = {
   articles: [],
   bookmarks: [],
   previews: [],
};

// -- Article logic

export const addArticle = function (article, preview) {
   state.articles?.push(article);
   state.previews?.push(preview);
   persistArticle(article, article?.id);
   persistPreview(preview, preview?.id);
};

export const deleteArticle = function (articleH2text) {
   const [theArticle] = state.articles.filter(
      (item) => item.title === articleH2text
   );

   const [thePreview] = state.previews.filter(
      (item) => item.title === articleH2text
   );
   removeArticleFromStorage(theArticle.id);
   removePreviewFromStorage(thePreview.id);

   const articleIndex = state.articles.indexOf(theArticle);
   const previewIndex = state.previews.indexOf(thePreview);
   state.articles.splice(articleIndex, 1);
   state.previews.splice(previewIndex, 1);
};

export const updateArticle = function (data, articleH2) {
   // - Fetch current article, bookmark and preview
   const [theArticle] = state.articles.filter(
      (item) => item.title === articleH2
   );
   const [theBookmark] = state.bookmarks?.filter(
      (item) => item.title === articleH2
   );

   const [thePreview] = state.previews?.filter(
      (item) => item.title === articleH2
   );

   // - Update article in state
   const articleIndex = state.articles.indexOf(theArticle);
   state.articles[articleIndex].title = data.title;
   state.articles[articleIndex].description = data.description;
   state.articles[articleIndex].imageURL = data.imageURL;
   state.articles[articleIndex].content = data.content;
   state.articles[articleIndex].tag = data.tag;
   state.articles[articleIndex].opened = data.opened;

   // - Update article in storage
   const currentArticle = state.articles[articleIndex];
   persistArticle(currentArticle, currentArticle.id);

   // - Update preview in state
   if (thePreview) {
      const previewIndex = state.previews.indexOf(thePreview);
      state.previews[previewIndex].title = data.title;
      state.previews[previewIndex].description = data.description;
      state.previews[previewIndex].imageURL = data.imageURL;
      state.previews[previewIndex].tag = data.tag;

      persistPreview(
         state.previews[previewIndex],
         state.previews[previewIndex].id
      );
   }

   // - Update bookmark in state

   if (theBookmark) {
      const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
      state.bookmarks[bookmarkIndex].title = data.title;
      state.bookmarks[bookmarkIndex].description = data.description;
      state.bookmarks[bookmarkIndex].imageURL = data.imageURL;
      state.bookmarks[bookmarkIndex].content = data.content;

      persistBookmark(
         state.bookmarks[bookmarkIndex],
         state.bookmarks[bookmarkIndex].bookmarkID
      );
   }
};

const persistArticle = function (article, id) {
   localStorage.setItem('article-' + id, JSON.stringify(article));
};

const persistPreview = function (preview, id) {
   localStorage.setItem('preview-' + id, JSON.stringify(preview));
};

const removeArticleFromStorage = function (id) {
   localStorage.removeItem('article-' + id);
};

const removePreviewFromStorage = function (id) {
   localStorage.removeItem('preview-' + id);
};

// -- Bookmark logic

export const addBookmark = function (h2content) {
   // - Mark current article as bookmarked
   const [theArticle] = state.articles.filter(
      (item) => item.title === h2content
   );
   const articleIndex = state.articles.indexOf(theArticle);
   const currentArticle = state.articles[articleIndex];
   currentArticle.isBookmarked = true;

   // - Update new property in storage
   const currentArticleID = currentArticle.id.toString();
   persistArticle(currentArticle, currentArticleID);

   // - Create current bookmark object
   const bookmark = {
      title: theArticle.title,
      description: theArticle.description,
      imageURL: theArticle.imageURL,
      rendered: false,
      bookmarkID: theArticle.id,
   };

   state.bookmarks.push(bookmark);
   persistBookmark(bookmark, bookmark?.bookmarkID);
};

// - Remove bookmark from state and storage, when bookmark is removed

export const removeBookmark = function (articleH2) {
   const [theBookmark] = state.bookmarks.filter(
      (item) => item.title === articleH2
   );
   removeBookmarkFromStorage(theBookmark.bookmarkID);
   const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
   state.bookmarks.splice(bookmarkIndex, 1);

   // - Mark current article as not bookmarked
   const [theArticle] = state.articles.filter(
      (item) => item.title === articleH2
   );
   const articleIndex = state.articles.indexOf(theArticle);
   const currentArticle = state.articles[articleIndex];
   currentArticle.isBookmarked = false;

   // - Update isBookmarked property in storage
   const currentArticleID = currentArticle.id.toString();
   persistArticle(currentArticle, currentArticleID);
};

// - Remove bookmark data from state and storage, when article is deleted

export const removeBookmarkOnDelete = function (articleh2) {
   // - Remove bookmark
   if (state.bookmarks.length > 0) {
      const [theBookmark] = state.bookmarks.filter(
         (item) => item.title === articleh2
      );

      removeBookmarkFromStorage(theBookmark.bookmarkID);
      const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
      state.bookmarks.splice(bookmarkIndex, 1);
   }
};

const persistBookmark = function (bookmark, bookmarkID) {
   localStorage.setItem('bookmark-' + bookmarkID, JSON.stringify(bookmark));
};

const removeBookmarkFromStorage = function (bookmarkID) {
   localStorage.removeItem('bookmark-' + bookmarkID);
};

// -- Sorting logic

export const persistSorting = function (tag) {
   localStorage.setItem('currentTag', tag);
};

// -- Storage logic

const allStorage = function () {
   let archive = [],
      keys = Object.keys(localStorage),
      i = 0,
      key;

   for (; (key = keys[i]); i++) {
      archive.push(key + '=' + localStorage.getItem(key));
   }

   return archive;
};

const init = function () {
   const allItems = allStorage();

   // Exclude all except article IDs

   const storageArticles = allItems.filter(
      (item) => !item.includes('selectedTheme=light')
   );
   const storageArticles2 = storageArticles.filter(
      (item) => !item.includes('selectedTheme=dark')
   );

   const storageArticles3 = storageArticles2.filter(
      (item) => !item.includes('bookmark-')
   );

   const storageArticles4 = storageArticles3.filter(
      (item) => !item.includes('currentTag')
   );

   const storageArticles5 = storageArticles4.filter(
      (item) => !item.includes('preview-')
   );

   const articleIDs = storageArticles5?.map((item) => item.slice(0, 18));

   articleIDs?.forEach((item) =>
      state.articles.push(JSON.parse(localStorage.getItem(item)))
   );

   // Exclude all except bookmark IDs

   const storageBookmarks = allItems.filter(
      (item) => !item.includes('selectedTheme=light')
   );
   const storageBookmarks2 = storageBookmarks.filter(
      (item) => !item.includes('selectedTheme=dark')
   );

   const storageBookmarks3 = storageBookmarks2.filter(
      (item) => !item.includes('article-')
   );

   const storageBookmarks4 = storageBookmarks3.filter(
      (item) => !item.includes('currentTag')
   );

   const storageBookmarks5 = storageBookmarks4.filter(
      (item) => !item.includes('preview-')
   );

   const bookmarkIDs = storageBookmarks5?.map((item) => item.slice(0, 19));

   bookmarkIDs?.forEach((item) =>
      state.bookmarks.push(JSON.parse(localStorage.getItem(item)))
   );

   // Exclude all except article previews

   const articlePreviews1 = allItems.filter(
      (item) => !item.includes('selectedTheme=light')
   );
   const articlePreviews2 = articlePreviews1.filter(
      (item) => !item.includes('selectedTheme=dark')
   );

   const articlePreviews3 = articlePreviews2.filter(
      (item) => !item.includes('bookmark-')
   );

   const articlePreviews4 = articlePreviews3.filter(
      (item) => !item.includes('currentTag')
   );

   const articlePreviews5 = articlePreviews4.filter(
      (item) => !item.includes('article-')
   );

   const articlePreviews = articlePreviews5?.map((item) => item.slice(0, 18));

   articlePreviews?.forEach((item) =>
      state.previews.push(JSON.parse(localStorage.getItem(item)))
   );
};
init();

// localStorage.clear();
