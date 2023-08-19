document.getElementById('item-1').addEventListener('click', function(){
  addItemsList('item-1-name');
  addMainCost('item-1-price');
  
})

function addItemsList(itemId){
  const itemName = document.getElementById(itemId).innerText;
  const itemListContainer = document.getElementById('item-list');
  const li = document.createElement('li');
  li.innerText = itemName;
  itemListContainer.appendChild(li);
}

function addMainCost(itemCost){
  const itemPrice = parseFloat(document.getElementById(itemCost).innerText);
  const mainPriceElement = document.getElementById('main-price');
  const mainPrice = parseFloat(mainPriceElement.innerText);
  const newPrice = mainPrice + itemPrice;
  const newPriceFloat = newPrice.toFixed(2);
  mainPriceElement.innerText = newPriceFloat;
}