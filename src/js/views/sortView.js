import View from './view.js';

class EditView extends View {
   #sortTagMenu = document.getElementById('sort-tag-menu');
   #parentEl = document.querySelector('.main');
   #tags = [];
   selectedTag;

   sortByTag(previews, persistHandler) {
      const currentTag = localStorage.getItem('currentTag');
      this.#sortTagMenu.value = currentTag;

      if (!this.#sortTagMenu.value) this.#sortTagMenu.value = '#All';

      previews.forEach((item) => this.#tags.push(item.tag));

      if (this.#sortTagMenu.value !== '#All') {
         setTimeout(() => {
            const allPreviewNodes =
               document.querySelectorAll('.article-preview');
            const allPreviews = Array.from(allPreviewNodes);

            const sortedOutPreviews = allPreviews.filter(
               (item) =>
                  item.querySelector('.tag-element').innerText !== currentTag
            );

            sortedOutPreviews.forEach((item) => {
               item.classList.add('hidden');
               item.classList.add('hide');
               item.classList.remove('active');
               item.classList.remove('relative');
               item.classList.add('block');
            });

            // - Check if any articles are visible, if they are, don't display message, otherwise display it
            const check = allPreviews.every((item) =>
               item.classList.contains('hidden')
            );

            if (!check) return;

            this.#renderSortMessage();

            const sortMessage = document.getElementById('sort-message');

            sortMessage?.classList.remove('hide');
            sortMessage?.classList.add('active');

            this.clearMessage();
         }, 1);
      }

      this.#sortTagMenu.addEventListener('change', () =>
         this.#sortArticles(persistHandler)
      );
   }

   #sortArticles(persistHandler) {
      // - Sort articles by selected tag
      this.selectedTag = this.#sortTagMenu.value;

      // - Persist sorting option on storage
      persistHandler();

      const allPreviewNodes = document.querySelectorAll('.article-preview');
      const allPreviews = Array.from(allPreviewNodes);

      // - Reset article markups
      allPreviews.forEach((item) => {
         item.classList.remove('hidden');
         setTimeout(() => {
            item.classList.remove('hide');
            item.classList.add('active');
            item.classList.add('relative');
            item.classList.remove('block');
         }, 1);
      });

      // - Sorting
      const sortedOutPreviews = allPreviews.filter(
         (item) =>
            item.querySelector('.tag-element').innerHTML !== this.selectedTag
      );

      sortedOutPreviews.forEach((item) => {
         item.classList.add('hidden');
         setTimeout(() => {
            item.classList.add('hide');
            item.classList.remove('active');
            item.classList.remove('relative');
            item.classList.add('block');
         }, 1);
      });

      // - When sorting by 'All', show all previews
      if (this.selectedTag === '#All') {
         allPreviews.forEach((item) => {
            item.classList.remove('hidden');
            setTimeout(() => {
               item.classList.remove('hide');
               item.classList.add('active');
               item.classList.add('relative');
               item.classList.remove('block');
            }, 1);
         });
      }

      const sortMessage = document.getElementById('sort-message');

      sortMessage?.classList.add('hide');
      sortMessage?.classList.remove('active');
      setTimeout(() => {
         sortMessage?.classList.add('hidden');
      }, 1);

      sortMessage?.remove();

      // - If any preview is visible, don't display message, otherwise display it
      const check = allPreviews.every((item) =>
         item.classList.contains('hidden')
      );

      if (!check) return;

      this.#renderSortMessage();
      const sortMsg = document.getElementById('sort-message');

      sortMsg.classList.remove('hidden');
      setTimeout(() => {
         sortMsg.classList.remove('hide');
         sortMsg.classList.add('active');
      }, 1);

      this.clearMessage();

      if (this.selectedTag === '#All') {
         sortMsg.classList.add('hidden');
         setTimeout(() => {
            sortMsg.classList.add('hide');
            sortMsg.classList.remove('active');
         }, 1);

         sortMsg.remove();
         this.addMessage();
      }
   }

   #renderSortMessage() {
      this.#parentEl.insertAdjacentHTML(
         'afterend',
         this.#generateSortMessage()
      );
   }

   #generateSortMessage() {
      return `
         <div
         id="sort-message"
         class="flex flex-col items-center gap-4 mx-auto py-20 px-8 mt-24 rounded-xl text-center bg-slate-100 dark:bg-[#8593a6] w-2/5 2xl:w-3/5 lg:w-4/5 md:w-5/6 sm:mt-14 sm:py-10 sm:mb-20 hide duration-300"
         >
            <span class="text-3xl text-slate-500 dark:text-slate-700">No article in this category was found!</span>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96" fill="rgba(100,116,139,1)"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM4.20568 19.0002H19.7941L11.9999 5.50017L4.20568 19.0002ZM10.9999 16.0002H12.9999V18.0002H10.9999V16.0002ZM10.9999 9.00017H12.9999V14.0002H10.9999V9.00017Z"></path></svg>
         </div>
      `;
   }
}

export default new EditView();
