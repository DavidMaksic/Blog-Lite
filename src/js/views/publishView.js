import View from './view.js';

class PublishView extends View {
   #addPostBtn = document.getElementById('add-btn');
   #exitModalBtn = document.getElementById('exit-modal-btn');

   showPublishModal() {
      this.#addPostBtn?.addEventListener(
         'click',
         this.togglePublishModal.bind(this)
      );

      const infoIcon = document.querySelector('.info-icon');
      infoIcon.addEventListener('mouseover', function () {
         const mdInfo = document.querySelector('.md-info');
         mdInfo.classList.remove('hide');
         mdInfo.classList.add('active');
      });

      infoIcon.addEventListener('mouseout', function () {
         const mdInfo = document.querySelector('.md-info');
         mdInfo.classList.add('hide');
         mdInfo.classList.remove('active');
      });
   }

   exitPublishModal() {
      const thisObject = this;

      // - When ESC is pressed
      window.onkeydown = (e) => {
         if (
            e.key === 'Escape' &&
            this.publishModal.classList.contains('active')
         ) {
            this.togglePublishModal();
         }
      };

      // - By clicking outside
      this.publishModal?.addEventListener(
         'click',
         this.togglePublishModal.bind(this)
      );

      this.form?.addEventListener('click', (e) => e.stopPropagation());

      this.#exitModalBtn?.addEventListener('click', function () {
         thisObject.togglePublishModal();
      });
   }
}

export default new PublishView();
