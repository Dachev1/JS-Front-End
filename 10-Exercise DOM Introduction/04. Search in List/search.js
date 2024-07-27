function search() {
   const townListElements = document.getElementById('towns');
   const searchText = document.getElementById('searchText').value;

   let matchCount = 0;
   for (let townElement of townListElements.children) {
      if (townElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townElement.style.fontWeight = 'bold';
         townElement.style.textDecoration = 'underline';
         matchCount++;
      } else {
         townElement.style.textDecoration = 'none';
         townElement.style.fontWeight = 'normal';
     }
   }

     document.getElementById('result').textContent = `${matchCount} matches found`
}
