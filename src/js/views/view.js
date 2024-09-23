export default class View {
   publishModal = document.getElementById('modal');
   #message = document.getElementById('message');
   form = document.getElementById('modal-content');

   clearMessage() {
      this.#message?.classList.add('hidden');
      setTimeout(() => {
         this.#message?.classList.add('hide');
         this.#message?.classList.remove('active');
      }, 1);
   }

   addMessage() {
      this.#message?.classList.remove('hidden');
      setTimeout(() => {
         this.#message?.classList.remove('hide');
         this.#message?.classList.add('active');
      }, 1);
   }

   togglePublishModal() {
      this.publishModal.classList.toggle('active');
   }

   styleText(data) {
      const articleNodeList = document.querySelectorAll('.article-element');
      const allArticles = Array.from(articleNodeList);

      // - Fetch current article
      const [theArticle] = allArticles.filter(
         (item) =>
            item.querySelector('.article-h2').textContent.trim() === data.title
      );

      const paragraph = theArticle.querySelector('.article-p');
      const articleText = data.content;
      const firstLetter = articleText.slice(0, 1);
      const allOtherLetters = articleText.substring(1);

      // - Implement markdown functionality
      const md = markdownit();
      const allOtherLettersMD = md.render(allOtherLetters);

      // - Style first letter and the rest of the text
      paragraph.innerHTML = `<span class="text-[11rem] pr-5 text-[#768293] dark:text-slate-400 leading-[0.7] mt-4 float-left font-medium sm:text-[5.5rem] sm:leading-[0.63] sm:pr-3" style="font-family: 'Bodoni Moda', 'Viaoda Libre', serif">${firstLetter}</span><span class="paragraph-span prose prose-headings:text-left prose-headings:font-normal prose-h1:font-normal prose-headings:mt-12 prose-h1:pt-6 sm:prose-h1:mt-4 prose-h1:mb-4 prose-headings:mb-5 prose-h1:text-[#9895b7] prose-headings:text-[#a9a5cb] dark:prose-headings:text-[#c3c0db] sm:prose-h3:leading-[2.2rem] text-2xl leading-[1.9rem] text-justify sm:leading-[1.65rem] text-slate-600 dark:text-slate-100 sm:text-xl sm:text-slate-700 m-0 prose-strong:text-slate-600 dark:prose-strong:text-white prose-strong:font-black prose-a:text-[#a9a5cb] dark:prose-a:text-[#b4bfcd] prose-a:underline-offset-4 prose-hr:border-slate-300 dark:prose-hr:border-slate-400 sm:dark:prose-hr:border-[#8593a6] prose-blockquote:text-slate-500 dark:prose-blockquote:text-[#d0d9e4] prose-blockquote:border-s-slate-300 dark:prose-blockquote:border-s-[#8593a6] sm:dark:prose-blockquote:border-s-slate-500 prose-blockquote:border-s-2 prose-li:marker:text-slate-400 dark:prose-li:marker:text-[#a9b5c6] prose-li:text-start prose-blockquote:text-start prose-code:text-slate-500 dark:prose-code:text-slate-300 prose-pre:bg-slate-200 dark:prose-pre:bg-slate-700 prose-tr:border-b-slate-200 sm:dark:prose-tr:border-b-slate-500 dark:prose-tr:border-b-slate-400">${allOtherLettersMD}</span>`;

      // - To open links in another tab
      const allEls = document.querySelector('.paragraph-span');
      const anchors = Array.from(allEls.getElementsByTagName('a'));
      anchors.forEach((item) => item.setAttribute('target', '_blank'));

      // - Style trash can for mobile
      const trash = theArticle.querySelector('.delete-btn-container')
         .children[0];
      trash.classList.add('sm:h-8');
   }
}
