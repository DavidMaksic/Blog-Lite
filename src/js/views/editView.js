import View from './view.js';

class EditView extends View {
   data;
   articleH2;

   showEditModal(updateHandler, articleObjects) {
      window.addEventListener('click', (e) => {
         const thisObject = this;

         if (e.target.closest('#edit-btn')) {
            const editBtn = e.target.closest('#edit-btn');
            const article = editBtn.closest('.article-element');

            const [articleObject] = articleObjects.filter(
               (item) =>
                  item.title === article.querySelector('.article-h2').innerText
            );

            const articleData = {
               title: articleObject.title,
               description: articleObject.description,
               tag: articleObject.tag,
               imageURL: articleObject.imageURL,
               content: articleObject.content,
            };

            thisObject.articleH2 = articleData.title;
            this.#showModal(articleData);

            // - Show and animate edit modal
            const editModal = document.getElementById('edit-modal');
            editModal.classList.add('active');
            setTimeout(() => {
               editModal.classList.remove('hide');
            }, 1);

            // - Fetch current preview
            const allPreviewNodes =
               document.querySelectorAll('.article-preview');
            const allPreviews = Array.from(allPreviewNodes);

            const [preview] = allPreviews.filter(
               (item) =>
                  item.querySelector('.preview-h2').textContent ===
                  thisObject.articleH2
            );

            // - Show current tag
            const selectEl = document.getElementById('tag');
            const optionsHTML = selectEl.getElementsByTagName('option');
            const options = Array.from(optionsHTML);

            const [filteredOption] = options.filter(
               (item) => item.value === articleData.tag
            );

            const sortTagMenu = document.getElementById('edit-tag');
            sortTagMenu.value = filteredOption?.value;
            articleData.tag = sortTagMenu.value;

            // - Submit form and exit modal
            this.#submitForm(article, preview, updateHandler);
            this.#exitEditModal();
         }

         this.#showInfo();
      });
   }

   #showInfo() {
      const infoIcon = document.querySelector('.info-icon-edit');

      infoIcon?.addEventListener('mouseover', function () {
         const mdInfo = document.querySelector('.md-info-edit');
         mdInfo.classList.remove('hide');
         mdInfo.classList.add('active');
      });

      infoIcon?.addEventListener('mouseout', function () {
         const mdInfo = document.querySelector('.md-info-edit');
         mdInfo.classList.add('hide');
         mdInfo.classList.remove('active');
      });
   }

   #submitForm(article, preview, updateHandler) {
      const thisObject = this;
      const form = document.getElementById('edit-content');

      form?.addEventListener('submit', function (e) {
         e.preventDefault();
         const dataArr = [...new FormData(this)];
         const data = Object.fromEntries(dataArr);

         const sortTagMenu = document.getElementById('edit-tag');
         data.tag = sortTagMenu.value;
         data.opened = true;

         // - Update article markup
         article.querySelector('.article-h2').innerText = data.title;
         article.querySelector('.article-h3').innerText = data.description;
         article.querySelector('.article-img').src = data.imageURL;
         article.querySelector('.article-p').textContent = data.content;
         article.querySelector('.tag-element').innerText = data.tag;

         // - Update preview markup
         preview.querySelector('.preview-h2').innerText = data.title;
         preview.querySelector('.preview-h3').innerText = data.description;
         preview.querySelector('.preview-img').src = data.imageURL;
         preview.querySelector('.tag-element').innerText = data.tag;

         // - Update bookmark markup
         const bookmarkMarkups = [];
         const bookmarkNodes = document.querySelectorAll('.dropdown-item');
         bookmarkNodes.forEach((item) => bookmarkMarkups.push(item));

         let theBookmark;
         if (bookmarkMarkups.length > 0) {
            [theBookmark] = bookmarkMarkups.filter(
               (item) =>
                  item.querySelector('.bookmark-h2').textContent.trim() ===
                  thisObject.articleH2
            );

            if (theBookmark) {
               theBookmark.querySelector('.bookmark-h2').textContent =
                  data.title;
               theBookmark.querySelector('.bookmark-h3').textContent =
                  data.description;
               theBookmark.querySelector('.bookmark-image').src = data.imageURL;
            }
         }

         thisObject.data = data;
         thisObject.styleText(thisObject.data);
         updateHandler();

         // - Close modal
         const editModal = document.getElementById('edit-modal');
         editModal.classList.add('hide');
         thisObject.#timeoutExit();
      });
   }

   #showModal(data) {
      document.body.insertAdjacentHTML(
         'afterbegin',
         this.#generateEditModal(data)
      );
   }

   #generateEditModal(data) {
      return `
         <section
            id="edit-modal"
            class="fixed z-40 top-0 left-0 flex justify-center w-full h-full pt-6 2xl:pt-8 xl:pt-20 lg:pt-8 md:pt-20 sm:pt-0 backdrop-blur-xl bg-[#6d768560] dark:bg-[#d4dae360] hide"
            style="transition: 0.4s"
         >
            <form
               id="edit-content"
               class="relative flex flex-col gap-4 w-1/2 p-8 pb-10 sm:gap-4 2xl:w-2/3 2xl:p-6 xl:w-3/4 xl:p-10 lg:p-6 md:w-5/6 md:py-10 sm:px-4 sm:py-8 sm:pb-8 h-min sm:h-screen bg-slate-100 dark:bg-slate-600 sm:w-full"
            >

               <span id="exit-edit-btn" class="absolute h-20 text-5xl transition opacity-75 cursor-pointer top-4 right-5 text-slate-400 hover:text-slate-500 hover:dark:text-slate-200 2xl:top-2 2xl:right-3 sm:text-4xl sm:top-2 sm:right-2"><ion-icon name="close-outline"></ion-icon></span>

               <!-- Heading -->

               <div class="flex flex-col gap-[0.35rem] sm:gap-[0.2rem] pb-2">
                  <h2
                     class="text-5xl 2xl:text-6xl lg:text-5xl sm:text-3xl  font-bold text-center dark:text-slate-100 bg-gradient-to-r from-slate-500 to-[#7a75aa] dark:from-white dark:to-[#bdbad5]"
                     style="
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                     "
                  >
                     Edit article
                  </h2>

                  <div
                     class="w-1/2 md:w-3/4 sm:w-5/6 h-[2px] sm:h-[1.1px] mx-auto bg-gradient-to-r from-slate-100 via-violet to-slate-100 dark:from-slate-600 dark:via-violet dark:to-slate-600"
                  ></div>
               </div>

               <!-- Input fields -->

               <div
                  class="flex flex-col gap-8 mb-2 text-xl font-medium text-slate-400 xl:gap-6 md:gap-8 sm:text-base sm:gap-4 sm:mb-[-1px] pt-8 2xl:pt-0 xl:pt-4 sm:pt-0"
               >
                  <div class="flex flex-col gap-2 sm:gap-[0.1rem]">
                     <span>title</span>
                     <input 
                     id="title" 
                     class="text-[1.6rem] sm:text-xl text-slate-500 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 input-element outline-shadow focus:rounded-md" 
                     type="text" 
                     name="title"
                     value="${data.title}"
                     style="font-family: 'Cormorant Garamond', serif;"
                     required />

                     <div
                     class="w-full mt-[-5px] h-[1px] sm:h-[0.5px] sm:mt-[-0.8px] bg-slate-300 dark:bg-slate-500"
                  ></div>
                  </div>

                  <div class="flex flex-col gap-2 sm:gap-[0.1rem]">
                     <span>description</span>
                     <input
                        id="description"
                        class="text-[1.6rem] sm:text-xl text-slate-500 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 input-element outline-shadow focus:rounded-md"
                        type="text" 
                        name="description"
                        value="${data.description}"
                        style="font-family: 'Cormorant Garamond', serif;"
                        required
                     ></input>

                     <div
                     class="w-full mt-[-5px] h-[1px] sm:h-[0.5px] sm:mt-[-0.8px] bg-slate-300 dark:bg-slate-500"
                  ></div>
                  </div>

                  <div class="grid items-center gap-20 two-columns sm:grid-cols-2 sm:gap-4">                   
                     <div class="flex flex-col gap-2 sm:gap-[0.1rem]">
                        <span>image (insert URL)</span>
                        <input
                        id="image"
                        class="text-[1.6rem] sm:text-xl text-slate-500 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 input-element outline-shadow focus:rounded-md"
                        name="imageURL"
                        style="font-family: 'Cormorant Garamond', serif;"
                        value="${data.imageURL}"
                        required
                        ></input>

                        <div
                        class="w-full mt-[-5px] h-[1px] sm:h-[0.5px] sm:mt-[-0.8px] bg-slate-300 dark:bg-slate-500"
                        ></div>
                     </div>

                     <!-- SORTING -->
             
                     <div class="flex flex-col gap-1 py-2 pl-4 pr-3 rounded-full bg-slate-100 dark:bg-slate-600">
                        <label class="text-xl text-slate-400 dark:text-slate-400 sm:text-base" for="tag">category</label>
                        <select class="cursor-pointer pb-[0.2rem] pl-3 rounded-full rounded-tl-none text-2xl text-slate-500 dark:text-slate-300 bg-[#dbe2ea] dark:bg-slate-500 w-3/4 sm:w-full sm:text-xl outline-shadow" id="edit-tag"">
                           <option value="#History">history</option>
                           <option value="#Politics">politics</option>
                           <option value="#Religion">religion</option>
                           <option value="#Cooking">cooking</option>
                           <option value="#Health">health</option>
                           <option value="#IT">it</option>
                           <option value="#Sports">sports</option>
                           <option value="#Gaming">gaming</option>
                           <option value="#Movies">movies</option>
                           <option value="#Other">other</option>
                        </select>
                     </div>
                  </div>

                  <div class="flex flex-col gap-2 sm:gap-[0.4rem]">
                     <div class="relative flex gap-3">
                        <span>content</span>
                        <div class="info-icon-edit absolute left-[5.2rem] top-[0.2rem] sm:left-[4.2rem] sm:top-[0rem] h-6 mb-[-10px] pl-[0.52rem] lg:pl-[0.56rem] rounded-full cursor-pointer w-6 bg-[#dbe2ea] dark:bg-[#404d5f]">
                        <span class="absolute bottom-[0.001rem]" style="font-family: serif; font-style: italic">i</span>
                        </div>

                        <div class="md-info-edit w-[26rem] absolute px-4 py-2 rounded-3xl left-[7.5rem] sm:w-[25rem] sm:left-[-10px] sm:top-[1.8rem] text-slate-500 dark:text-slate-300 bg-white dark:bg-slate-500 shadow-xl transition-all duration-200 sm:pb-4 sm:pt-3 hide">
                           <ul class="pl-6 list-disc">
                              <div class="flex flex-col gap-[0.08rem] items-center pr-6">
                                 <span class="text-[1.25rem]">Markdown conventions</span>
                                 <div
                                 class="w-full md:w-3/4 sm:w-5/6 h-[1px] sm:h-[1.1px] mx-auto bg-gradient-to-r from-white via-violet to-white dark:from-slate-500 dark:via-violet dark:to-slate-500 mb-2"
                                 ></div>
                              </div>
                              <li>#, ##, ### &nbsp; &nbsp; <span class="text-[#9facbf]">-h1, h2, h3</span></li>
                              <li>___ , ---, *** &nbsp; &nbsp; <span class="text-[#9facbf]">-Horizontal Rules</span></li>
                              <li>>, >>, >>> &nbsp; &nbsp; <span class="text-[#9facbf]">-Blockquotes</span></li>
                              <li>1., 2., 3. &nbsp; &nbsp; <span class="text-[#9facbf]">-Ordered list</span></li>
                              <li>+, -, * &nbsp; &nbsp; <span class="text-[#9facbf]">-Unordered list</span></li>
                              <li>![Image name](Insert URL) &nbsp; <span class="text-[#9facbf]">-Add image</span></li>
                              <li>*<em>italic</em>*, <em>_italic_</em></li>
                              <li>**<strong>bold</strong>**, __<strong>bold</strong>__</li>
                           </ul>
                        </div>
                     </div>

                     <textarea
                        id="content"
                        class="h-48 text-[1.6rem] sm:text-xl leading-8 text-slate-500 bg-slate-100 dark:text-slate-300 dark:bg-slate-600 sm:h-[25.2vh] input-element outline-shadow focus:rounded-md"
                        name="content"
                        style="font-family: 'Cormorant Garamond', serif;"
                        required
                     >${data.content}</textarea>

                     <div
                     class="w-full mt-[-5px] h-[1px] sm:h-[0.5px] sm:mt-[-0.8px] bg-slate-300 dark:bg-slate-500"
                     ></div>
                  </div>
               </div>

               <!-- Buttons -->

               <div
                  class="flex items-center justify-center gap-4 my-3 text-3xl 2xl:mb-2 xl:mt-0 lg:mt-0 md:mt-4 sm:mb-2 sm:mt-2""
               >
                  <div
                     class="rounded-full text-slate-500 bg-gradient-to-r from-slate-400 to-violet"
                  >
                     <button
                        class="px-10 py-4 pb-[23px] box-shadow dark:shadow-none text-5xl xl:text-4xl xl:px-8 xl:py-2 xl:pb-3 md:px-10 md:py-4 md:pb-[23px] sm:text-4xl rounded-full text-white bg-gradient-to-r from-slate-400 to-violet hover:from-white hover:to-white hover:text-slate-600 sm:px-8 sm:py-3 sm:pb-[18px] outline-shadow"
                     >
                        Update
                     </button>
                  </div>
               </div>
            </div>
         </section>
      `;
   }

   #exitEditModal() {
      const thisObject = this;
      const exitModalBtn = document.getElementById('exit-edit-btn');
      const form = document.getElementById('edit-content');
      const editModal = document.getElementById('edit-modal');

      // - When ESC is pressed
      window.onkeydown = (e) => {
         if (e.key === 'Escape') {
            editModal.classList.add('hide');
            this.#timeoutExit();
         }
      };

      // - By clicking outside
      editModal?.addEventListener('click', function () {
         editModal.classList.add('hide');
         thisObject.#timeoutExit();
      });

      form?.addEventListener('click', (e) => e.stopPropagation());

      exitModalBtn?.addEventListener('click', function () {
         const editModal = document.getElementById('edit-modal');
         editModal.classList.add('hide');
         thisObject.#timeoutExit();
      });
   }

   #timeoutExit() {
      setTimeout(() => {
         const editModal = document.getElementById('edit-modal');
         editModal?.remove();
      }, 400);
   }
}

export default new EditView();
