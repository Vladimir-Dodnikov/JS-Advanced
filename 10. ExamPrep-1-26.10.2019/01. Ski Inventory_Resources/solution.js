function solve() {
   //step 1
   let inputItems = document.querySelectorAll('#add-new input');
   let addButton = document.querySelector('#add-new button');

   //step 2
   addButton.addEventListener('click', addItemHandler);

   function addItemHandler(e) {
      //step 3
      e.preventDefault();
      let inputName = inputItems[0].value;
      let inputQuantity = inputItems[1].value;
      let inputPrice = inputItems[2].value;

      if (inputName !== '' && Number(inputQuantity) > 0 && Number(inputPrice) > 0) {
         let newItemLine = document.createElement('li');

         let itemName = document.createElement('span');
         itemName.innerText = inputName;

         let itemQuantity = document.createElement('strong')
         itemQuantity.innerText = `Available: ${Number(inputQuantity)}`;

         newItemLine.appendChild(itemName);
         newItemLine.appendChild(itemQuantity);
         //step 4
         let priceContainer = document.createElement('div');
         let priceElement = document.createElement('strong');

         priceElement.innerText = Number(inputPrice).toFixed(2);

         let addButtonToClientsList = document.createElement('button');
         addButtonToClientsList.innerText = "Add to Client's List";

         priceContainer.appendChild(priceElement);
         priceContainer.appendChild(addButtonToClientsList);

         newItemLine.appendChild(priceContainer);
         //step 5.1
         availableProductsList.appendChild(newItemLine);
      }
   }
   //step 5
   let availableProductsList = document.querySelector('#products ul');
   //step 6
   let filterInput = document.querySelector('#filter');
   let filterTrigger = document.querySelector('.filter button');

   //step 7
   filterTrigger.addEventListener('click', filterItems);

   function filterItems() {
      let filterValue = filterInput.value;
      Array.from(availableProductsList.children).forEach(el => {
         console.log(el);
         let productName = el.querySelector('span');
         //step 8
         if (productName.innerText.toLowerCase().includes(filterValue.toLowerCase())) {
            el.style.display = 'block';
         } else {
            el.style.display = 'none';
         }
      });
   }
   //step 9
   let myProductList = document.querySelector('#myProducts ul');
   let totalPrice = document.querySelectorAll('h1');
   let currentSum = 0;
   availableProductsList.addEventListener('click', addProductToBasketHandler);

   function addProductToBasketHandler(e) {
      if (e.target.tagName === 'BUTTON') { //target delegation
         let productPrice = e.target.parentNode.querySelector('strong').textContent;
         let productName = e.target.parentNode.parentNode.querySelector('span').textContent;

         let basketElement = document.createElement('li');
         basketElement.innerText = productName;
         //step 10
         let productPriceInBasketElement = document.createElement('strong');
         productPriceInBasketElement.innerText = productPrice;
         basketElement.appendChild(productPriceInBasketElement);

         myProductList.appendChild(basketElement);
         currentSum += Number(productPrice);
         totalPrice[1].innerHTML = `Total Price: ${currentSum.toFixed(2)}`;
         //step 11
         let productQuantityCounter = e.target.parentNode.parentNode.querySelector('strong');
         let parsedQuantity = Number(productQuantityCounter.innerHTML.split(':')[1].trim());
         productQuantityCounter.innerHTML = `Available: ${parsedQuantity-1}`;

         if (parsedQuantity - 1 === 0) {
            e.target.parentNode.parentNode.remove();
         }
      }
   }
   //step 12
   let buyButton = document.querySelector('#myProducts button');
   buyButton.addEventListener('click', buyButtonHandler);

   function buyButtonHandler(e) {
      myProductList.innerHTML = '';
      totalPrice[1].innerHTML = 'Total Price: 0.00';
      currentSum = 0;
   }
}