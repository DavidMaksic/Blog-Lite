import View from './view.js';

class BookmarkView extends View {
   #dropdownParent = document.querySelector('.bookmark-parent');
   #dropdownBtn = document.querySelector('.dropdown-btn');
   #bookmarkContainer = document.querySelector('.bookmark-container');
   #dropdownItems = [];
   #bookmarkH2s = [];
   articleH2;

   renderBookmarks(bookmarkObjects) {
      bookmarkObjects.forEach((item) => {
         if (!item.rendered) {
            this.#renderBookmark(item);
            item.rendered = true;
         }
      });
   }

   toggleDropdown(bookmarks) {
      const thisObject = this;
      thisObject.#renderBookmarkMessage();

      this.#dropdownBtn?.addEventListener('click', function () {
         // - If no bookmark exist
         if (bookmarks.length === 0) {
            thisObject.#bookmarkContainer.classList.toggle('dropdown-active');
            thisObject.#dropdownBtn.classList.add('focus:dark:brightness-125');
            thisObject.#dropdownBtn.classList.add('focus:brightness-125');
            document
               .querySelector('.backdrop-div')
               .classList.add('backdrop-blur-xl');

            thisObject.#exitDropdown();
            return;
         }

         // - If any bookmark exists
         const bookmarkMsg = document.querySelector('.bookmark-message');
         bookmarkMsg?.remove();

         thisObject.#bookmarkContainer.classList.toggle('dropdown-active');
         document
            .querySelector('.backdrop-div')
            .classList.add('backdrop-blur-xl');

         thisObject.#dropdownBtn.classList.add('focus:dark:brightness-125');
         thisObject.#dropdownBtn.classList.add('focus:brightness-125');
         thisObject.#exitDropdown();
      });
   }

   #renderBookmarkMessage() {
      this.#dropdownParent?.insertAdjacentHTML(
         'afterend',
         this.#generateBookmarkMessage()
      );
   }

   #generateBookmarkMessage() {
      return `
         <span class="bookmark-message select-none border-2 border-slate-300 dark:border-transparent text-3xl text-slate-600 dark:text-slate-300 text-center bg-white dark:bg-slate-800 py-6 px-12 w-1/2 shadow-lg rounded-xl md:w-3/4 md:text-5xl md:py-12 md:px-16 md:mx-auto md:mt-40 md:shadow-none sm:mt-48 sm:py-6 sm:px-12 sm:text-3xl sm:w-11/12">You haven't saved any articles yet!</span>
      `;
   }

   #exitDropdown() {
      const thisObject = this;

      // - Remove focus on container on click or mouseleave
      if (window.matchMedia('(pointer: coarse)').matches) {
         //
         this.#bookmarkContainer.addEventListener('click', function () {
            thisObject.#bookmarkContainer.classList.remove('dropdown-active');
            thisObject.#dropdownBtn.classList.remove(
               'focus:dark:brightness-125'
            );
            thisObject.#dropdownBtn.classList.remove('focus:brightness-125');
            document
               .querySelector('.backdrop-div')
               .classList.remove('backdrop-blur-xl');
         });
      } else {
         //
         this.#bookmarkContainer.addEventListener('mouseleave', function () {
            thisObject.#bookmarkContainer.classList.remove('dropdown-active');
            thisObject.#dropdownBtn.classList.remove(
               'focus:dark:brightness-125'
            );
            thisObject.#dropdownBtn.classList.remove('focus:brightness-125');
            document
               .querySelector('.backdrop-div')
               .classList.remove('backdrop-blur-xl');
         });
      }
   }

   persistBookmarkIcon(articles) {
      // - Fetch all bookmarked articles
      const theArticles = articles.filter(
         (article) => article.isBookmarked === true
      );

      const ids = theArticles.map((article) => article.id);

      // - Fetch all article markups
      const allArticles = [...document.getElementsByTagName('article')];

      // - Filter out all previews
      const filteredArticles = allArticles.filter(
         (item) => !item.classList.contains('article-preview')
      );

      const articleIDs = filteredArticles.map((article) => +article.id);

      // - Filter out only bookmarked articles
      const bookmarkedArticles = articleIDs.filter((articleID) =>
         ids.includes(articleID)
      );

      const articleStringsID = bookmarkedArticles.map((article) =>
         article.toString()
      );

      // - Based on article ID, style all bookmarked articles
      articleStringsID.forEach((currentStringID) => {
         const currentMarkup = document.getElementById(`${currentStringID}`);

         // - Change icon
         const bookmarkBtnThin = currentMarkup.querySelector('.bookmark-thin');
         const bookmarkBtnFull = currentMarkup.querySelector('.bookmark-full');
         bookmarkBtnThin?.classList.add('hidden');
         bookmarkBtnFull?.classList.remove('hidden');

         // - Adapt dropdown btn icon
         const iconThin = this.#dropdownBtn.querySelector('.bookmark-outline');
         const iconFull = this.#dropdownBtn.querySelector('.bookmark-filled');

         if (iconThin.classList.contains('hide')) {
            iconThin.classList.remove('hide');
            iconThin.classList.add('active');
            iconFull.classList.add('hide');
            iconFull.classList.remove('active');
         }

         if (iconFull.classList.contains('hide')) {
            iconFull.classList.remove('hide');
            iconFull.classList.add('active');
            iconThin.classList.add('hide');
            iconThin.classList.remove('active');
         }
      });
   }

   createBookmark(handleAdd, handleDelete) {
      window.addEventListener('click', (e) => {
         if (e.target.closest('#bookmarks')) {
            const bookmarks = e.target.closest('#bookmarks');
            const bookmarkBtnThin = bookmarks.querySelector('.bookmark-thin');
            const bookmarkBtnFull = bookmarks.querySelector('.bookmark-full');
            const articleMarkup = bookmarks.closest('.article-element');

            // - If article is not bookmarked
            if (bookmarkBtnFull.classList.contains('hidden')) {
               // - Change icon
               bookmarkBtnThin.classList.add('hidden');
               bookmarkBtnFull.classList.remove('hidden');

               // - Adapt dropdown btn icon
               const iconThin =
                  this.#dropdownBtn.querySelector('.bookmark-outline');
               const iconFull =
                  this.#dropdownBtn.querySelector('.bookmark-filled');

               iconThin.classList.add('hide');
               iconFull.classList.remove('hide');
               iconFull.classList.add('active');

               if (iconThin.classList.contains('active'))
                  iconThin.classList.remove('active');

               // - Get header content
               this.articleH2 =
                  articleMarkup.querySelector('.article-h2').innerText;

               // - Create bookmark object in state
               handleAdd();

               //
            } else {
               // - If article is bookmarked

               // - Change icon
               bookmarkBtnFull.classList.add('hidden');
               bookmarkBtnThin.classList.remove('hidden');

               // - Adapt dropdown btn icon
               const iconThin =
                  this.#dropdownBtn.querySelector('.bookmark-outline');
               const iconFull =
                  this.#dropdownBtn.querySelector('.bookmark-filled');

               const allBookmarkFullNodes =
                  document.querySelectorAll('.bookmark-full');
               const allBookmarkFullBtnsArray =
                  Array.from(allBookmarkFullNodes);

               bookmarkBtnFull.classList.add('hidden');

               const check = allBookmarkFullBtnsArray.every((fullBtn) =>
                  fullBtn.classList.contains('hidden')
               );

               if (check) {
                  iconFull.classList.add('hide');
                  iconFull.classList.remove('active');
                  iconThin.classList.remove('hide');
                  iconThin.classList.add('active');
               }

               // - Fetch all bookmark markups
               const allDropdownItemsNodes =
                  document.querySelectorAll('.dropdown-item');
               this.#dropdownItems = Array.from(allDropdownItemsNodes);

               // - Get header content
               this.articleH2 =
                  articleMarkup.querySelector('.article-h2').innerText;

               // - Get bookmark headers
               this.#bookmarkH2s = this.#dropdownItems.map((item) =>
                  item?.querySelector('.bookmark-h2').textContent.trim()
               );

               const [filteredString] = this.#bookmarkH2s.filter(
                  (bookmarkH2) => bookmarkH2 === this.articleH2
               );

               const [theItem] = this.#dropdownItems.filter(
                  (item) =>
                     item?.querySelector('.bookmark-h2').textContent.trim() ===
                     filteredString
               );

               // - Delete currently clicked item's markup from this array
               const [theBookmarkMarkup] = this.#dropdownItems.filter(
                  (bookmark) =>
                     bookmark
                        .querySelector('.bookmark-h2')
                        .textContent.trim() === this.articleH2
               );

               const theBookmarkMarkupIndex =
                  this.#dropdownItems.indexOf(theBookmarkMarkup);
               this.#dropdownItems.splice(theBookmarkMarkupIndex, 1);

               // - Delete clicked bookmark from bookmarkh2s array
               const [theBookmark] = this.#bookmarkH2s.filter(
                  (bookmark) => bookmark === this.articleH2
               );
               const theBookmarkIndex = this.#bookmarkH2s.indexOf(theBookmark);
               this.#bookmarkH2s.splice(theBookmarkIndex, 1);

               // - Delete bookmark data from state
               handleDelete();
               // - Delete bookmark markup
               theItem?.remove();

               const bookmarkMsg = document.querySelector('.bookmark-message');
               if (!bookmarkMsg) this.#renderBookmarkMessage();
            }
         }
      });
   }

   #renderBookmark(data) {
      this.#dropdownParent?.insertAdjacentHTML(
         'afterend',
         this.#generateMarkup(data)
      );
   }

   #generateMarkup(data) {
      return `
         <a href="#${data.bookmarkID}" class="dropdown-item text-2xl text-slate-300 " style="filter: drop-shadow(0 1.5rem 2rem rgba(0, 0, 0, 0.342))">
                  <div class="grid items-center grid-cols-2 transition-all sm:grid-cols-1 hover:brightness-110">
                     <img class="bookmark-image object-cover w-full h-48 sm:h-28" src="${data.imageURL}" alt="Bookmark Image">
                     <div class="p-8 bg-slate-50 dark:bg-slate-800 sm:flex sm:flex-col sm:gap-1 sm:px-12 sm:pt-5 sm:pb-7  sm:bg-white">
                        <h2 class="bookmark-h2 text-3xl transition text-slate-500 dark:text-slate-200 sm:text-2xl sm:text-slate-600">${data.title}
                        </h2>
                        <h3 class="bookmark-h3 text-lg sm:text-base text-slate-400 dark:text-[#a9b5c6]">${data.description}
                        </h3>
                     </div>
                  </div>
               </a>
      `;
   }
}

export default new BookmarkView();
