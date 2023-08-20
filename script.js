function addItemsList(itemId){
  const itemName = document.getElementById(itemId).innerText;
  const itemListContainer = document.getElementById('item-list');
  const li = document.createElement('li');
  li.innerText = itemName;
  itemListContainer.appendChild(li);

}

function addMainCost(itemCost){
  const itemPrice = parseFloat(document.getElementById(itemCost).innerText);

  const mainPriceElement = document.getElementById('price');
  const mainPrice = parseFloat(mainPriceElement.innerText);

  const discountPriceElement = document.getElementById('discount-price');
  const discountPrice = parseFloat(discountPriceElement.innerText);

  const lastPriceElement = document.getElementById('total-price');
  const lastPrice = parseFloat(lastPriceElement.innerText);

  const newPrice = mainPrice + itemPrice;
  const newPriceFloat = parseFloat(newPrice.toFixed(2));

  mainPriceElement.innerText = newPriceFloat;
  lastPriceElement.innerText = newPriceFloat;

  const inputElement = document.getElementById('code');
  inputElement.addEventListener('keyup', function(event){
    const code = event.target.value;
    
    if(newPriceFloat >= 200 && code === 'SELL200'){
      const couponBtn = document.getElementById('coupon-btn');
      couponBtn.style.backgroundColor = '#E527B2';
      couponBtn.removeAttribute('disabled');
  
      couponBtn.addEventListener('click', function(){
        event.target.value = '';
        const newDiscountPrice = ((20 / 100) * newPriceFloat).toFixed(2);
        discountPriceElement.innerText = newDiscountPrice;
        const totalPrice = (newPriceFloat - newDiscountPrice).toFixed(2);
        lastPriceElement.innerText = totalPrice;
        couponBtn.style.backgroundColor = 'gray';
      })

    }

  })

}

function onClick(name, price){
  addItemsList(name);
  addMainCost(price);
  const purchaseBtn = document.getElementById('purchase-btn');
  purchaseBtn.removeAttribute('disabled');
}