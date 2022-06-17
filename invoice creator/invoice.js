const removeBtn = document.getElementsByClassName("remove-btn");
const washBtn = document.getElementById("wash-btn");
const mowBtn = document.getElementById("mow-btn");
const pullBtn = document.getElementById("pull-btn");
const sendBtn = document.getElementById("send");

const services = [
  { name: "Wash Car", price: 10 },
  { name: "Mow Lawn", price: 20 },
  { name: "Pull Weeds", price: 30 },
];

for (let i = 0; i < removeBtn.length; i++) {
  let button = removeBtn[i];
  button.addEventListener("click", removeServices);
}

function removeServices(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

function updateTotal() {
  let itemContainer = document.getElementsByClassName("detail")[0];
  let itemLists = itemContainer.getElementsByClassName("item-list");
  let total = 0;
  for (let i = 0; i < itemLists.length; i++) {
    let itemList = itemLists[i];
    let priceElement = itemList.getElementsByClassName("price")[0];
    let price = parseFloat(priceElement.textContent);
    total += price;
  }
  document.getElementsByClassName("total-price")[0].textContent = "$" + total;
}

washBtn.addEventListener("click", () => {
  invoiceList = services.filter((item) => item.name === "Wash Car");
  render(invoiceList);

  updateTotal();
});

mowBtn.addEventListener("click", () => {
  invoiceList = services.filter((item) => item.name === "Mow Lawn");
  render(invoiceList);
  updateTotal();
});

pullBtn.addEventListener("click", () => {
  invoiceList = services.filter((item) => item.name === "Pull Weeds");
  render(invoiceList);
  updateTotal();
});

function render(invoice) {
  invoice.forEach((invoice) => {
    let itemList = document.createElement("div");
    itemList.classList.add("item-list");
    let cartItem = document.getElementsByClassName("detail")[0];

    let itemListContent = `
    <span class="item">${invoice.name}</span>
    <div class="remove-btn">Remove</div>
    <span class="dollar-sign">$</span>
    <span class="price">${invoice.price}</span>
    `;
    itemList.innerHTML = itemListContent;
    cartItem.append(itemList);
    itemList
      .getElementsByClassName("remove-btn")[0]
      .addEventListener("click", removeServices);
    itemList.getElementsByClassName("total-price")[0];
  });
  updateTotal();
}

sendBtn.addEventListener("click", function () {
  alert("Invoice sent, thank you");
  let detailLIst = document.getElementsByClassName("detail")[0];
  while (detailLIst.hasChildNodes()) {
    detailLIst.removeChild(detailLIst.firstChild);
  }
  updateTotal();
});
