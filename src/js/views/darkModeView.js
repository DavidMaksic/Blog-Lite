class darkModeView {
   #root = document.querySelector(':root');
   #darkBtn = document.getElementById('dark-mode');
   #dot = document.getElementById('dot');
   #sun = document.querySelector('.sun');
   #moon = document.querySelector('.moon');

   loadTheme() {
      document.addEventListener('DOMContentLoaded', () => {
         const theme = localStorage.getItem('selectedTheme');

         // - When loading document select theme from localStorage
         theme === 'dark' ? this.#loadDarkTheme() : this.#loadLightTheme();
      });
   }

   #loadDarkTheme() {
      this.#root.classList.add('dark');
      this.#dot.classList.toggle('translate-x-6');
      this.#sun.classList.add('sm:hide');
      this.#sun.classList.remove('sm:active');
      this.#moon.classList.add('sm:active');
      this.#moon.classList.remove('sm:hide');
   }

   #loadLightTheme() {
      this.#root.classList.remove('dark');
      this.#sun.classList.add('sm:active');
      this.#sun.classList.remove('sm:hide');
      this.#moon.classList.add('sm:hide');
      this.#moon.classList.remove('sm:active');
   }

   toggleTheme() {
      this.#darkBtn.addEventListener('click', () => {
         this.#root.classList.toggle('dark');
         this.#dot.classList.toggle('translate-x-6');

         // - If user changes theme, save it to localStorage
         this.#root.classList.contains('dark')
            ? localStorage.setItem('selectedTheme', 'dark')
            : localStorage.setItem('selectedTheme', 'light');

         // - Enable changing of icons on phones
         const property = window
            .getComputedStyle(this.#darkBtn)
            .getPropertyValue('gap');

         if (property === '12.16px') {
            if (this.#root.classList.contains('dark')) {
               this.#sun.classList.add('sm:hide');
               this.#sun.classList.remove('sm:active');
               this.#moon.classList.add('sm:active');
               this.#moon.classList.remove('sm:hide');
            } else {
               this.#sun.classList.add('sm:active');
               this.#sun.classList.remove('sm:hide');
               this.#moon.classList.add('sm:hide');
               this.#moon.classList.remove('sm:active');
            }
         }
      });
   }
}

export default new darkModeView();
