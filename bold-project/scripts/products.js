async function getProducts(){
    const response = await fetch("#");
    const products = await response.json();
    return products;
}

async function renderProducts(){
    const productsContainer = document.getElementById("products");
    const productsData = await getProducts();
}