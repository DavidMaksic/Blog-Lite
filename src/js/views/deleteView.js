import View from './view.js';

class DeleteView extends View {
   #dropdownParent = document.querySelector('.bookmark-parent');
   dropdownBtn = document.querySelector('.dropdown-btn');
   #header = document.querySelector('.header');
   articleH2text;
   articles;

   deleteMessageOnLoad(articleObjects) {
      if (articleObjects.length > 0) this.clearMessage();
      this.articles = articleObjects;
   }

   deleteArticleMarkup(previews, handleArticle, handleBookmark) {
      window.addEventListener('click', (e) => {
         if (e.target.closest('#delete-btn')) {
            this.#renderWarningMessage();

            // - Show and animate warning message
            const warningMessage = document.querySelector('.warning-message');

            warningMessage.classList.add('active');
            setTimeout(() => {
               warningMessage.classList.remove('hide');
            }, 1);

            // - Delete current article
            const deleteBtn = e.target.closest('#delete-btn');
            const article = deleteBtn.closest('.article-element');

            this.#deleteArticle(
               deleteBtn,
               article,
               previews,
               handleArticle,
               handleBookmark
            );
         }

         // - When ESC is pressed, exit message
         window.onkeydown = (e) => {
            const warningMessage = document.querySelector('.warning-message');

            if (e.key === 'Escape' && warningMessage) {
               warningMessage.classList.add('hide');

               setTimeout(() => {
                  warningMessage.remove();
               }, 400);
            }
         };

         // - Exit message by clicking outside
         const warningMessage = document.querySelector('.warning-message');

         warningMessage?.addEventListener('click', function () {
            warningMessage.classList.add('hide');

            setTimeout(() => {
               warningMessage.remove();
            }, 400);
         });

         const warningDiv = document.querySelector('.warning-div');

         warningDiv?.addEventListener('click', function (e) {
            e.stopPropagation();
         });
      });
   }

   #deleteArticle(deleteBtn, article, previews, handleArticle, handleBookmark) {
      const deleteBtnWarning = document.querySelector('.delete-warning');
      const closeButton = document.querySelector('.close-warning');
      const thisObject = this;

      // - If close option is clicked
      closeButton.addEventListener('click', function () {
         const warningMessage = closeButton.closest('.warning-message');
         warningMessage.classList.add('hide');

         setTimeout(() => {
            warningMessage.remove();
         }, 400);
      });

      // - If delete option is clicked
      deleteBtnWarning.addEventListener('click', function () {
         thisObject.articleH2text =
            article.querySelector('.article-h2').innerText;

         const h2 = article.querySelector('.article-h2');
         const h3 = article.querySelector('.article-h3');
         const p = article.querySelector('.article-p');
         const span = article.querySelector('.delete-span');

         article.querySelector('.options-span').classList.add('hidden');

         // - Remove article markup
         article.classList.add('hide');
         article.classList.remove('active');
         article.classList.remove('relative');
         article.classList.add('block');

         // - Hide elements on delete
         article.querySelector('.article-img').classList.add('opacity-0');
         article.querySelector('.edit-btn').classList.add('hidden');
         article.querySelector('.options-span').classList.add('opacity-0');
         article.querySelector('.tag-element').classList.add('hidden');

         const bookmark = article.querySelector('.bookmarks');
         const bookmarkChecked = bookmark.querySelector('.bookmark-full');
         bookmark.classList.add('opacity-0');

         const allElements = [];
         allElements.push(h2, h3, p, span, deleteBtn);
         allElements.map((el) => (el.textContent = ''));

         // - For other devices
         article.classList.add('max-h-0');
         if (article.classList.contains('py-10'))
            article.classList.remove('py-10');
         if (article.classList.contains('pb-12'))
            article.classList.remove('pb-12');

         // - For phones and tablets
         if (article.classList.contains('sm:py-8'))
            article.classList.remove('sm:py-8');
         if (article.classList.contains('sm:pb-6'))
            article.classList.remove('sm:pb-6');
         if (article.classList.contains('sm:mb-14'))
            article.classList.remove('sm:mb-14');

         setTimeout(() => {
            article.remove();
         }, 400);

         // - Remove article and preview from state and storage
         handleArticle();

         // - Show all articles previews
         const allArticleNodes = document.querySelectorAll('.article-preview');
         const allArticles = Array.from(allArticleNodes);

         allArticles.forEach((item) => {
            item.classList.remove('hidden');
            setTimeout(() => {
               item.classList.remove('hide');
               item.classList.add('active');
               item.classList.add('relative');
               item.classList.remove('block');
            }, 1);
         });

         const allPreviewNodes = document.querySelectorAll('.article-preview');
         const allPreviews = Array.from(allPreviewNodes);

         // - Remove current preview
         const [currentPreview] = allPreviews.filter(
            (item) =>
               item.querySelector('.preview-h2').textContent ===
               thisObject.articleH2text
         );

         currentPreview.remove();

         document.getElementById('add-btn').classList.remove('hide');
         document.getElementById('add-btn').classList.remove('absolute');
         document.querySelector('.sorting').classList.remove('hidden');
         document.querySelector('.home').classList.remove('hidden');
         document.querySelector('.return').classList.add('hidden');
         document.querySelector('.footer-div').classList.remove('hidden');
         document.querySelector('.footer-div').classList.add('mt-80');

         // - Adapt dropdown btn icon
         const iconThin =
            thisObject.dropdownBtn.querySelector('.bookmark-outline');
         const iconFull =
            thisObject.dropdownBtn.querySelector('.bookmark-filled');

         const allBookmarkFullNodes =
            document.querySelectorAll('.bookmark-full');
         const allBookmarkFullBtnsArray = Array.from(allBookmarkFullNodes);

         bookmarkChecked.classList.add('hidden');

         const check = allBookmarkFullBtnsArray.every((item) =>
            item.classList.contains('hidden')
         );

         if (check) {
            iconFull.classList.add('hide');
            iconFull.classList.remove('active');
            iconThin.classList.remove('hide');
            iconThin.classList.add('active');
         }

         if (previews.length === 0) thisObject.addMessage();

         // - If current article is bookmarked, delete the bookmark too

         if (bookmarkChecked.classList.contains('hidden')) {
            // - Get bookmark data
            const allBookmarks = [
               ...document.querySelectorAll('.dropdown-item'),
            ];

            const bookmarkHeaders = allBookmarks.map((item) =>
               item?.querySelector('.bookmark-h2').textContent.trim()
            );

            const [filteredString] = bookmarkHeaders.filter(
               (bookmarkH2) => bookmarkH2 === thisObject.articleH2text
            );

            const [theItem] = allBookmarks.filter(
               (item) =>
                  item?.querySelector('.bookmark-h2').textContent.trim() ===
                  filteredString
            );

            // - Remove bookmark from state and storage
            handleBookmark();

            // - Remove bookmark markup
            theItem?.remove();

            // - Delete currently clicked item's markup from this array
            const [theBookmarkMarkup] = allBookmarks.filter(
               (bookmark) =>
                  bookmark.querySelector('.bookmark-h2').textContent.trim() ===
                  thisObject.articleH2text
            );

            const theBookmarkMarkupIndex =
               allBookmarks.indexOf(theBookmarkMarkup);
            allBookmarks.splice(theBookmarkMarkupIndex, 1);

            // - Delete clicked bookmark from bookmarkHeaders array
            const [theBookmark] = bookmarkHeaders.filter(
               (bookmark) => bookmark === thisObject.articleH2text
            );
            const theBookmarkIndex = bookmarkHeaders.indexOf(theBookmark);
            bookmarkHeaders.splice(theBookmarkIndex, 1);

            const bookmarkMsg = document.querySelector('.bookmark-message');
            bookmarkMsg?.remove();

            if (allBookmarks.length === 0) {
               thisObject.renderBookmarkMessage();
            }
         }

         const warningMessage = deleteBtnWarning.closest('.warning-message');
         warningMessage.classList.add('hide');

         setTimeout(() => {
            warningMessage.remove();
         }, 400);
      });
   }

   #renderWarningMessage() {
      this.#header.insertAdjacentHTML('afterend', this.#generateWarningMSG());
   }

   #generateWarningMSG() {
      return `
         <div class="warning-message h-full w-full fixed z-20 backdrop-blur-xl transition-all duration-300 hide">
            <div class="warning-div fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-70%] flex flex-col gap-8 border-2 border-slate-300 dark:border-transparent bg-white dark:bg-slate-800 py-14 pb-9 px-12 w-2/6 shadow-lg rounded-xl md:w-3/4 md:text-5xl md:py-12 md:px-16 md:mx-auto md:shadow-none sm:py-10 sm:pb-8 sm:px-8 sm:text-3xl sm:w-11/12">
               <span class="text-4xl text-slate-600 dark:text-[#a9b5c6] text-center">Are you sure you want to delete this article?</span>
               <div
                  class="h-[1px] bg-gradient-to-r from-white via-violet to-white dark:from-slate-800 dark:via-violet dark:to-slate-800">
               </div>
               <div class="self-center flex gap-10 sm:gap-8 items-center">
                  <a href="#" class="delete-warning transition text-4xl text-red2 hover:text-redhover dark:text-redhover dark:hover:text-red text-center">Yes</a>
                  <span class="text-3xl text-slate-400 hover:text-[#a9b5c6] dark:text-slate-500 dark:hover:text-slate-300 text-center">/</span>
                  <button class="close-warning transition text-4xl text-slate-500 hover:text-[#a9b5c6] dark:text-[#a9b5c6] dark:hover:text-slate-300 text-center">No</button>
               </div>
            </div>
         </div>
      `;
   }

   renderBookmarkMessage() {
      this.#dropdownParent?.insertAdjacentHTML(
         'afterend',
         this.#generateBookmarkMessage()
      );
   }

   #generateBookmarkMessage() {
      return `
         <span class="bookmark-message select-none border-2 border-slate-300 dark:border-transparent text-3xl text-slate-600 dark:text-slate-300 text-center bg-white dark:bg-slate-800 py-6 px-12 w-1/2 shadow-lg rounded-xl md:w-3/4 md:text-5xl md:py-12 md:px-16 md:mx-auto md:mt-40 md:shadow-none sm:py-6 sm:px-12 sm:text-3xl sm:w-11/12">You haven't saved any articles yet!</span>
      `;
   }
}

export default new DeleteView();
