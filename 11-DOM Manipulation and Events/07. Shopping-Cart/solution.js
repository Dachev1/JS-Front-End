function solve() {
   const buttonElements = document.querySelectorAll('div.product button.add-product');
   const textareaElement = document.querySelector('textarea');
   const checkoutButton = document.querySelector('button.checkout');

   let totalPrice = 0;
   let boughtItems = {};

   buttonElements.forEach(button => {
      button.addEventListener('click', (e) => {
         const product = e.target.parentNode.parentNode;
         const name = product.querySelector('div.product-title').textContent;
         const price = product.querySelector('div.product-line-price').textContent;

         boughtItems[name] = true;

         totalPrice += Number(price);
         textareaElement.value += `Added ${name} for ${price} to the cart.\n`
      })
   })

   checkoutButton.addEventListener('click', (e) => {
      buttonElements.forEach(button => button.setAttribute('disabled', 'disabled'));
      textareaElement.value += `You bought ${Object.keys(boughtItems).join(', ')} for ${totalPrice.toFixed(2)}.`;
      checkoutButton.setAttribute('disabled', 'disabled');
   })
}
