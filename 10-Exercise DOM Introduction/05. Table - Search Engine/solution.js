function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      const trElements = document.querySelectorAll('tbody tr');
      const searchElement = document.getElementById('searchField');
      
      const searchField = searchElement.value;
      for (const trElement of trElements) {
         trElement.classList.remove('select');
         for (const tdElement of trElement.children) {
            if (tdElement.textContent.toLowerCase().includes(searchField.toLowerCase())) {
               trElement.classList.add('select');
            }
         }
      }
      
      searchElement.value = '';
   }
}
