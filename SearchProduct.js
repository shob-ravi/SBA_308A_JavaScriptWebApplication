export async function filterProduct(searchText) {
    try {
        const productResults = await getProducts();
        console.log('productResults:' + JSON.stringify(productResults));
        const result = productResults.find(a => a.title.includes(searchText) || a.description.includes(searchText));
        console.log("RESULT::" + result);
    } catch (error) {
        console.log("Error in filterProduct:" + error);
    }
}

async function getProducts() {
    try {
        const productList = await fetch('https://fakestoreapi.com/products');
        const productListResult = await productList.json();
        return productListResult;
    } catch (error) {
        console.log("Error in getProducts:" + error);
    }
}