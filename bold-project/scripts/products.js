async function getProducts() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/MarcelaVargasR/wdd231/main/bold-project/data/products.json",
    );
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function renderProducts() {
  const productsContainer = document.getElementById("products");
  const productsData = await getProducts();
  const productsHtml = productsData
    .map((product, index) => {
      return `
            <div class="card-product">
                <div>
                    <img
                    class="img-product"
                    src="${product.image_url}"
                    alt="${product.name}"
                    />
                    <button class="btn-learn-more" id="${index}">Learn More</button>
                </div>
            </div>
        `;
    })
    .join("");

  productsContainer.innerHTML = `
    ${productsHtml}
    <dialog id="product-details"></dialog>
  `;

  productsContainer.addEventListener("click", (event) => {
    const productIndex = event.target.id;

    if (isNaN(productIndex)) {
      return;
    }

    const product = productsData[productIndex];
    displayProductDetails(product);
  });
}

function displayProductDetails(product) {
  const productDetails = document.getElementById("product-details");

  productDetails.innerHTML = `
  <button class="close-bttn" id="closeModal" >X</button>
  <div class="card-product">
      <div>
          <img
          class="img-product"
          src="${product.image_url}"
          alt="${product.name}"
          />
      </div>
      <span class="title-product">${product.name}</span>
      <p class="product-sub">${product.description}</p>
      <p class="price">$${product.price}</p>
  </div>
  `;

  productDetails.showModal();

  const closeModal = document.querySelector("#closeModal");
  closeModal.addEventListener("click", () => {
    productDetails.close();
  });
}

renderProducts();