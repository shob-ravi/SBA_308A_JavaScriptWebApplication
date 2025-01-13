export async function filterProduct(searchText) {
    try {
        const productResults = await getProducts();
        const result = productResults.filter(a => 
            a.title.toLowerCase().includes(searchText) || 
            a.description.toLowerCase().includes(searchText)
        );
        console.log("RESULT::" + result);
        return result;
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