function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  let totalPrice = 0;
  document.querySelectorAll(".price").forEach(function (price) {
    const input = document.querySelector("input");
    let multiply = input.value;
    let number = Number((price.innerText).slice(1));
    totalPrice += (number * multiply);
  })

  document.querySelector('.price-product').innerText = `$ ${totalPrice}`;
}


function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};