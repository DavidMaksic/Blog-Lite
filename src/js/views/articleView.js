import View from './view.js';
import { MIN, MAX } from '../config.js';

class ArticleView extends View {
   #btnParentEl = document.getElementById('btn-parent');
   article;
   preview = {};

   hideArticlesOnLoad(articleObjects) {
      const allArticlesList = document.querySelectorAll('.article-element');
      const allArticles = Array.from(allArticlesList);

      // - If article was opened and page was reloaded
      const [openedArticle] = articleObjects.filter(
         (item) => item.opened === true
      );
      const allOtherArticleObjects = articleObjects.filter(
         (item) => item.opened === false
      );

      if (openedArticle) {
         const [theArticle] = allArticles.filter(
            (item) =>
               item.querySelector('.article-h2').textContent.trim() ===
               openedArticle?.title
         );

         const articleH2 = theArticle
            .querySelector('.article-h2')
            .textContent.trim();

         // - Show opened article
         theArticle.classList.remove('hidden');
         theArticle.classList.remove('hide');
         theArticle.classList.add('active');
         theArticle.classList.add('relative');
         theArticle.classList.remove('block');

         // - If other articles exist, hide them
         if (allOtherArticleObjects.length > 0) {
            const filteredArticles = allArticles.filter(
               (item) =>
                  item.querySelector('.article-h2').textContent.trim() !==
                  articleH2
            );

            filteredArticles.forEach((item) => {
               item.classList.add('hidden');
               item.classList.add('hide');
               item.classList.remove('active');
               item.classList.remove('relative');
               item.classList.add('block');
            });
         }

         // - Hide all previews
         setTimeout(() => {
            const allPreviewsList =
               document.querySelectorAll('.article-preview');
            const allPreviews = Array.from(allPreviewsList);

            allPreviews.forEach((item) => {
               item.classList.add('hidden');
               item.classList.add('hide');
               item.classList.remove('active');
               item.classList.remove('relative');
               item.classList.add('block');
            });
         }, 1);

         // - Hide elements
         this.#hideElements();

         // - Style text content
         const [theArticleData] = articleObjects.filter(
            (item) =>
               item.title ===
               theArticle.querySelector('.article-h2').textContent.trim()
         );

         this.styleText(theArticleData);

         //
      } else {
         // - If article wasn't open, show all previews
         setTimeout(() => {
            const allPreviewsList =
               document.querySelectorAll('.article-preview');
            const allPreviews = Array.from(allPreviewsList);

            allPreviews.forEach((item) => {
               item.classList.remove('hidden');
               item.classList.remove('hide');
               item.classList.add('active');
               item.classList.add('relative');
               item.classList.remove('block');
            });
         }, 1);

         // - Hide all articles
         setTimeout(() => {
            allArticles.forEach((item) => {
               item.classList.add('hidden');
               item.classList.add('hide');
               item.classList.remove('active');
               item.classList.remove('relative');
               item.classList.add('block');
            });
         }, 1);
      }
   }

   #hideElements() {
      document.getElementById('add-btn').classList.add('hide');
      document.getElementById('add-btn').classList.add('absolute');
      document.getElementById('add-btn').classList.add('sm:active');
      document.querySelector('.sorting').classList.add('hidden');
      document.querySelector('.home').classList.add('hidden');
      document.querySelector('.return').classList.remove('hidden');

      if (window.screen.width < 630) {
         const returnIcon = document.getElementById('return-id');
         returnIcon.style.setProperty('--ionicon-stroke-width', '20px');
      }

      document.querySelector('.footer-div').classList.add('hidden');
      document.querySelector('.footer-div').classList.remove('mt-80');
   }

   #showElements() {
      document.getElementById('add-btn').classList.remove('hide');
      document.getElementById('add-btn').classList.remove('absolute');
      document.querySelector('.sorting').classList.remove('hidden');
      document.querySelector('.home').classList.remove('hidden');
      document.querySelector('.return').classList.add('hidden');
      document.querySelector('.footer-div').classList.remove('hidden');
   }

   upload(articles, addHandler, updateHandler) {
      const thisObject = this;

      // - Generate article and preview data, and render preview markup
      this.form?.addEventListener('submit', function (e) {
         e.preventDefault();
         const dataArr = [...new FormData(this)];
         const data = Object.fromEntries(dataArr);

         // - Close modal and delete starter message
         thisObject.togglePublishModal();
         thisObject.clearMessage();

         // - Get tag
         const tag = document.getElementById('tag');

         // - Create NEW article data
         thisObject.article = data;
         thisObject.article.tag = tag.value;
         thisObject.article.date = thisObject.#date();
         thisObject.article.id = thisObject.#getRandomNumber();
         thisObject.article.opened = false;
         thisObject.#clearInput();

         // - Create NEW preview data
         thisObject.preview = {
            title: thisObject.article.title,
            description: thisObject.article.description,
            tag: thisObject.article.tag,
            imageURL: thisObject.article.imageURL,
            content: thisObject.article.content,
            id: thisObject.#getRandomNumber(),
         };

         thisObject.renderPreview(thisObject.preview);

         // - Upon creating new article sort by 'All'
         const sortTagMenu = document.getElementById('sort-tag-menu');
         sortTagMenu.value = '#All';
         localStorage.setItem('currentTag', sortTagMenu.value);

         const sortMessage = document.getElementById('sort-message');
         sortMessage?.remove();

         // - Hide all articles
         const allArticlesList = document.querySelectorAll('.article-element');
         const allArticles = Array.from(allArticlesList);

         allArticles.forEach((item) => {
            item.classList.add('hidden');
            item.classList.add('hide');
            item.classList.remove('active');
            item.classList.remove('relative');
            item.classList.add('block');
         });

         const allPreviewNodes = document.querySelectorAll('.article-preview');
         const allPreviews = Array.from(allPreviewNodes);

         // - Show all previews
         allPreviews.forEach((item) => {
            item.classList.remove('hidden');
            item.classList.remove('hide');
            item.classList.add('active');
            item.classList.add('relative');
            item.classList.remove('block');
         });

         thisObject.#showElements();

         // - Create preview and article objects in state
         addHandler();
      });

      // - Generate current article markup
      window.addEventListener('click', (e) => {
         if (
            e.target.closest('#preview-btn') ||
            e.target.closest('.dropdown-item')
         ) {
            const previewBtn = e.target.closest('#preview-btn');
            const bookmarkItem = e.target.closest('.dropdown-item');
            let preview;

            // - Find current preview markup
            if (previewBtn?.closest('.article-preview'))
               preview = previewBtn.closest('.article-preview');

            const previewH2 = preview?.querySelector('.preview-h2').innerText;

            const allArticleNodes =
               document.querySelectorAll('.article-element');
            const allArticles = Array.from(allArticleNodes);

            // - Find current article
            const [currentArticle] = allArticles.filter(
               (item) =>
                  item.querySelector('.article-h2').textContent.trim() ===
                  previewH2
            );

            // -- If current article exists, or article is opened by bookmark

            if (currentArticle || e.target.closest('.dropdown-item')) {
               // - Find current preview markup
               if (previewBtn?.closest('.article-preview'))
                  preview = previewBtn.closest('.article-preview');

               // - If article is opened by preview
               const previewH2 =
                  preview?.querySelector('.preview-h2').innerText;

               // - If article is opened by bookmark
               const bookmarkH2 = bookmarkItem
                  ?.querySelector('.bookmark-h2')
                  .textContent.trim();

               // - Hide all article previews
               const allPreviewNodes =
                  document.querySelectorAll('.article-preview');
               const allPreviews = Array.from(allPreviewNodes);

               allPreviews.forEach((item) => {
                  item.classList.add('hidden');
                  setTimeout(() => {
                     item.classList.add('hide');
                     item.classList.remove('active');
                     item.classList.remove('relative');
                     item.classList.add('block');
                  }, 1);
               });

               const allArticlesNodes =
                  document.querySelectorAll('.article-element');
               const allArticles = Array.from(allArticlesNodes);

               // - Find current article
               const [theArticle] = allArticles.filter((item) =>
                  previewH2
                     ? item.querySelector('.article-h2').textContent.trim() ===
                       previewH2
                     : item.querySelector('.article-h2').textContent.trim() ===
                       bookmarkH2
               );

               // - Hide all other articles
               allArticles.forEach((item) => {
                  item.classList.add('hidden');
                  item.classList.add('hide');
                  item.classList.remove('active');
                  item.classList.remove('relative');
                  item.classList.add('block');
               });

               // - Show current article
               theArticle.classList.remove('hidden');
               setTimeout(() => {
                  theArticle.classList.remove('hide');
                  theArticle.classList.add('active');
                  theArticle.classList.add('relative');
                  theArticle.classList.remove('block');
               }, 2);

               // - Update state and storage with new property value
               const articleH2 = theArticle
                  .querySelector('.article-h2')
                  .textContent.trim();

               const [articleData] = articles.filter(
                  (item) => item.title === articleH2
               );

               articleData.opened = true;

               updateHandler(articleData, articleH2);

               thisObject.#hideElements();

               this.styleText(articleData);

               return;
            }

            // --== If current article doesn't exist ==--

            // - Hide all article previews
            const allPreviewNodes =
               document.querySelectorAll('.article-preview');
            const allPreviews = Array.from(allPreviewNodes);

            allPreviews.forEach((item) => {
               item.classList.add('hidden');
               item.classList.add('hide');
               item.classList.remove('active');
               item.classList.remove('relative');
               item.classList.add('block');
            });

            const [theArticleData] = articles.filter(
               (item) => item.title === previewH2
            );

            this.renderArticle(theArticleData);
            this.styleText(theArticleData);

            thisObject.#hideElements();

            const allArticlesList =
               document.querySelectorAll('.article-element');
            const allArticlesArray = Array.from(allArticlesList);

            // - Animate and show new article
            const [newArticle] = allArticlesArray.filter(
               (item) =>
                  item.querySelector('.article-h2').textContent.trim() ===
                  previewH2
            );

            newArticle.classList.remove('hidden');
            setTimeout(() => {
               newArticle.classList.remove('hide');
               newArticle.classList.add('active');
               newArticle.classList.add('relative');
               newArticle.classList.remove('block');
            }, 1);

            // - Update state and storage with new property value
            const articleH2 = newArticle
               .querySelector('.article-h2')
               .textContent.trim();

            const [articleData] = articles.filter(
               (item) => item.title === articleH2
            );

            articleData.opened = true;

            updateHandler(articleData, articleH2);
         }
      });
   }

   returnToPreviews(articleObjects, updateHandler) {
      const returnBtn = document.querySelector('.return');

      returnBtn?.addEventListener('click', () => {
         // - Hide current article
         const allArticlesList = document.querySelectorAll('.article-element');
         const articles = Array.from(allArticlesList);

         const [theArticle] = articles.filter(
            (item) => !item.classList.contains('hide')
         );

         const articleH2 = theArticle
            .querySelector('.article-h2')
            .textContent.trim();

         // - Update state and storage with new property value
         const [articleData] = articleObjects.filter(
            (item) => item.title === articleH2
         );

         articleData.opened = false;

         updateHandler(articleData, articleH2);

         theArticle.classList.add('hidden');
         setTimeout(() => {
            theArticle.classList.add('hide');
            theArticle.classList.remove('active');
            theArticle.classList.remove('relative');
            theArticle.classList.add('block');
         }, 1);

         // - Show all article previews
         const allPreviewNodes = document.querySelectorAll('.article-preview');
         const allPreviews = Array.from(allPreviewNodes);

         allPreviews.forEach((item) => {
            item.classList.remove('hidden');
            setTimeout(() => {
               item.classList.remove('hide');
               item.classList.add('active');
               item.classList.add('relative');
               item.classList.remove('block');
            }, 1);
         });

         this.#showElements();
      });
   }

   renderPreview(data) {
      this.#btnParentEl?.insertAdjacentHTML(
         'afterend',
         this.#generatePreview(data)
      );
   }

   renderArticle(data) {
      this.#btnParentEl?.insertAdjacentHTML(
         'afterend',
         this.#generateArticle(data)
      );
   }

   #generatePreview(data) {
      return `
         <article id="${data.id}" class="article-preview relative mt-14 sm:mt-10 transition duration-300 hide">
            <div class="flex items-center justify-center md:flex-col pb-16 md:pb-8 sm:pb-4">
               <div class="relative px-16 py-6 text-center w-96 bg-slate-200 md:bg-[#ebeff5] md:order-1 md:w-full md:px-20 md:py-12 dark:bg-slate-600 sm:px-2 sm:py-4 sm:pb-6 transition duration-300">
                  <h2 class="preview-h2 mb-1 text-5xl bg-gradient-to-r from-slate-600 to-[#7a75aa] dark:from-slate-200 dark:to-[#d2cfe4] md:text-6xl md:mb-1 sm:text-4xl" style="background-clip: text;
                  -webkit-text-fill-color: transparent;">${data.title}</h2>
                  <h3 class="preview-h3 text-lg leading-6 text-slate-400 dark:text-slate-400 md:text-2xl md:mb-4 md:dark:text-slate-400 sm:text-base sm:mb-1 sm:w-4/5 sm:mx-auto">${data.description}</h3>
                  <a href="#" class="focus:outline-none">
                     <button id="preview-btn" class="relative transition rounded-full shadow-sm pl-4 pr-10 py-1 pb-[7.5px] mt-4 text-white bg-slate-400 hover:bg-white hover:text-slate-500 dark:text-slate-700 dark:bg-slate-400 dark:hover:bg-[#293444] dark:hover:text-slate-200 md:text-2xl md:pl-6 md:pr-12 md:py-3 md:pb-4 sm:text-xl sm:pl-4 sm:pr-10 sm:py-2 sm:pb-[11px] outline-shadow">Read more <span class="absolute pt-[1.2px] pl-2 xl:pt-[0px] sm:mt-[-1.8px]">&rarr;</span></button>
                  </a>

                  <span class="tag-element absolute top-0 left-0 text-sm rounded-full rounded-t-none rounded-l-none bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-[#9facbf] px-2 py-[0.15rem] pb-[0.3rem] pr-[1rem] opacity-75 md:hide">${data.tag}</span>
               </div>
               <img class="preview-img w-2/5 2xl:w-1/2 md:w-full" src="${data.imageURL}" alt="">
               <span class="tag-elements hide md:active absolute sm:opacity-75 top-0 left-0 md:text-xl sm:text-base font-normal rounded-full rounded-t-none rounded-l-none dark:bg-slate-600 dark:text-slate-300 bg-slate-100 text-slate-500 py-1 px-3 pr-6 pb-[0.4rem] sm:py-[0.1rem] sm:px-[0.5rem] sm:pb-[0.2rem] sm:pr-4">${data.tag}</span>
            </div>
            <div class="preview-styling h-[1px] bg-gradient-to-r from-white via-[#c3c0db] to-white dark:from-slate-500 dark:via-[#9895b7] dark:to-slate-500 md:hidden"></div>
         </article>
      `;
   }

   #generateArticle(data) {
      return `
         <article
         id="${data.id}"
         class="article-element relative transition-all duration-300 flex flex-col justify-self-center w-5/12 gap-8 py-10 pb-12 2xl:w-7/12 lg:w-3/4 md:px-6 md:w-5/6 sm:w-full sm:gap-6 sm:px-8 sm:py-8 sm:pb-6 dark:bg-slate-500 sm:dark:bg-slate-600 bg-white sm:mb-14 hide"
         >
            <div id="bookmarks" class="bookmarks mt-28 absolute ml-[-102px] 2xl:ml-[-100px] lg:ml-[-92px] md:ml-[-72px] sm:self-end sm:mr-9 sm:mt-[-38px]">
               <ion-icon class="bookmark-thin absolute cursor-pointer text-5xl hover:scale-90 transition duration-200 text-slate-300 dark:text-slate-400 hover:text-slate-400 dark:hover:text-slate-300 sm:text-slate-400 sm:dark:text-[#828fa1] sm:active" name="bookmark-outline" style="--ionicon-stroke-width: 14px;"></ion-icon>
               <ion-icon class="absolute hover:scale-90 cursor-pointer text-5xl transition duration-200 text-slate-300 dark:text-slate-400 hover:text-slate-400 dark:hover:text-slate-300 bookmark-full sm:text-[#bfc8d4] sm:dark:text-[#828fa1] hidden" name="bookmark"></ion-icon>
            </div>

            <div class="flex flex-col gap-2 sm:gap-2">
               <h2 class="article-h2 text-7xl sm:text-6xl pb-2 sm:pb-0 bg-gradient-to-r from-slate-600 to-[#7a75aa] dark:from-slate-200 dark:to-[#d2cfe4]" style="
               background-clip: text;
               -webkit-text-fill-color: transparent;
               ">${data.title}
               </h2>
               <h3 class="article-h3 text-3xl text-slate-400 dark:text-slate-400 sm:text-2xl">${data.description}
               </h3>
            </div>

            <div
               class="a-div mt-2 sm:mt-0 h-[1px] bg-gradient-to-r from-slate-400 sm:from-[#a9b5c6] to-white dark:from-slate-400 dark:to-slate-500 sm:dark:to-slate-600"
            ></div>

            <div class="tag-parent flex justify-between items-center sm:pt-1">
               <span class="delete-span mt-[-12px] sm:mt-[-20px] text-slate-500 dark:text-slate-300 sm:text-base">Posted on ${data.date}</span>

               <span class="tag-element bg-[#d5dde7] dark:bg-slate-600 sm:dark:bg-slate-700 px-3 py-1 pb-[0.3rem] pr-[0.85rem] sm:py-[0.1rem] sm:pb-[0.13rem] sm:px-[0.6rem] rounded-full mt-[-14px] sm:mt-[-20px] font-medium text-slate-500 dark:text-slate-400 sm:text-base">${data.tag}</span>
            </div>

            <img class="article-img mb-8 sm:mb-2" src="${data.imageURL}" alt="Article Image">

            <p class="article-p text-2xl leading-[1.9rem] text-justify sm:leading-[1.65rem] text-slate-600 dark:text-slate-100 sm:text-xl sm:text-slate-700" style="font-family: 'Cormorant Garamond', serif;">${data.content}</p>

            <div
                  class="h-[1px] 2xl:h-[1px] xl:h-[0.9px] md:h-[1.5px] sm:h-[1px] bg-gradient-to-l sm:bg-gradient-to-r from-slate-400 sm:from-[#a9b5c6] to-white dark:from-slate-400 dark:to-slate-500 sm:dark:to-slate-600 mt-10"
               ></div>

            <div class="flex items-center justify-end sm:justify-start gap-4 sm:gap-3">
               <ion-icon id="edit-btn" class="edit-btn cursor-pointer transition text-5xl text-slate-400 hover:brightness-125 sm:text-4xl" name="create-outline"></ion-icon>
               <span class="options-span text-slate-400 text-3xl">•</span>
               <button id="delete-btn" class="delete-btn-container hover:dark:brightness-125 transition cursor-pointer outline-shadow focus:rounded-md">
                  <?xml version="1.0" encoding="UTF-8"?><svg width="42px" height="42px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgba(226,146,142,1)"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" stroke="rgba(226,146,142,1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6" stroke="rgba(226,146,142,1)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
               </button>
            </div>
            <div class="empty-div"></div>
         </article>
      `;
   }

   #clearInput() {
      const inputElements = document.querySelectorAll('.input-element');
      inputElements.forEach((el) => (el.value = ''));
   }

   #getRandomNumber() {
      return Math.round(Math.random() * (MAX - MIN) + MIN);
   }

   #date() {
      const now = new Date();
      const options = {
         day: 'numeric',
         month: 'long',
         year: 'numeric',
      };
      const locale = navigator.language;
      return new Intl.DateTimeFormat(locale, options).format(now);
   }

   observer() {
      const chevron = document.querySelector('.chevron');
      const header = document.querySelector('.header');
      const footer = document.querySelector('.footer');

      const observeChevron = new IntersectionObserver(
         function (entries) {
            const ent = entries[0];

            !ent.isIntersecting
               ? chevron.classList.add('active')
               : chevron.classList.remove('active');
         },
         {
            root: null,
            threshold: 0,
            rootMargin: '0px',
         }
      );

      observeChevron.observe(header);
      observeChevron.observe(footer);
   }
}

export default new ArticleView();
