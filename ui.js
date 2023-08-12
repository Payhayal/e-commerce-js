const categoryList = document.querySelector(".categories");
const productList = document.querySelector(".products");
const basketList = document.querySelector(".list");

export function renderCategories(categories) {
  categories.slice(0, 5).forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.innerHTML = `
  <img src="${category.image}">
  <span>${category.name}</span>`;
    categoryList.appendChild(categoryDiv);
  });
}

export function renderProducts(products) {
  products.slice(0, 53).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product";
    productCard.innerHTML = `
            <img src="${product.images[0]}">
            <p>${product.title}</p>
            <p>${product.category.name}</p>
            <div class="product-info">
                <p>$ ${product.price}</p>
                <button id="add-btn" data-id=${product.id}>Add to Cart</button>
            </div>
        `;
    productList.appendChild(productCard);
  });
}

export function renderBasketItem(product) {
  const basketItem = document.createElement("div");

  basketItem.classList.add("list-item");

  basketItem.innerHTML = ` 
  <img src="${product.images[0]}">
  <h2>${product.title}</h2>
  <h2>$ ${product.price}</h2>
  <p>Qty:${product.amount}</p>
 <div class="basket-btn">
  <button id="del-button" data-id=${product.id}>delete</button>
  
  `;
  basketList.appendChild(basketItem);
}
