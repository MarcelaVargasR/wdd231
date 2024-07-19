async function getProducts(){
    const response = await fetch("https://raw.githubusercontent.com/MarcelaVargasR/wdd231/main/bold-project/data/products.json");
    const products = await response.json();
    return products;
}

async function renderProducts(){
    const productsContainer = document.getElementById("products");
    const productsData = await getProducts();
    const productsHtml = productsData.map((product)=>{
        return `
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
        `
    }).join("")

    productsContainer.innerHTML= productsHtml
}


renderProducts();